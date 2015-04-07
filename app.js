#!/usr/bin/env node

// --- Settings ---
var RED = 33; // RED
var GREEN = 31; // GREEN
var BLUE = 32; // BLUE
// ----------------

var async = require("async");
var gpio = require('rpi-gpio');
var exec = require('child_process').exec,
	child;

function in_array(needle, haystack) {
    var length = haystack.length;
    for (var i = 0; i < length; i++) {
        if (haystack[i] == needle) return true;
    } // for
    return false;
} // in_array

function mylog(str) {
	if (in_array('-q', process.argv)) return;
	console.log(str);
} // mylog

function get_cpu_usage(callback) {
	child = exec("sar -u 2 -t 1 | tail -n 1 | awk '{print 100 - $8}'", function(error, stdout, stderr) {
		percent = stdout.replace(/\n$/, '');
		mylog('CPU usage: ' + percent + ' %');
		if (stderr) mylog("stderr: " + stderr);
		if (error !== null) {
			mylog('Error: ' + error);
		}
		if (callback) callback(percent);
	});
} // get_cpu_usage

function setleds(red_val, green_val, blue_val, cb) {
	mylog('RED: ' + red_val + ' GREEN: ' + green_val + ' BLUE: ' + blue_val);
	async.parallel([
		function(callback) {
			gpio.write(RED, red_val, function(err) {
				if (err) {
					console.log(err);
				}
				callback();
			});
		},
		function(callback) {
			gpio.write(GREEN, green_val, function(err) {
				if (err) {
					console.log(err);
				}
				callback();
			});
		},
		function(callback) {
			gpio.write(BLUE, blue_val, function(err) {
				if (err) {
					console.log(err);
				}
				callback();
			});
		},
	], function() {
		mylog("LEDs are sets");
		if (cb) cb();
	});
}

function calccolor(cb) {
	get_cpu_usage(function(percent) {
		/*
			0 - 50% green
			51 - 90% yellow
			91 - 100% red
		*/
		if (percent <= 50) {
			setleds(false, true, false, cb);
		} else if ((percent > 50) && (percent <= 90)) {
			setleds(false, true, true, cb);
		} else {
			setleds(true, false, false, cb);
		}
	});
}

function indicator() {
	calccolor(function() {
		setTimeout(indicator, 500);
	});
} // indicator

function init(cb) {
	async.series([
		function(callback) {
			gpio.setup(RED, gpio.DIR_OUT, function() {
				callback();
			});
		},
		function(callback) {
			gpio.setup(GREEN, gpio.DIR_OUT, function() {
				callback();
			});
		},
		function(callback) {
			gpio.setup(BLUE, gpio.DIR_OUT, function() {
				callback();
			});
		}
		],
		function() {
			mylog("Init ok");
			if (cb) cb();
		}
	);
} // init

try {
	var param = process.argv[2];
	if (param == '--test') {
		init(function() {
			setleds(true, false, false, function() {
				setTimeout(function() {
					setleds(false, true, false, function() {
						setTimeout(function() {
							setleds(false, false, true, function() {
								setTimeout(function() {
									setleds(false, false, false, function() {
										process.exit();
									});
								}, 2000);
							});
						}, 2000);
					});
				}, 2000);
			});
		});
	} else if (param == '--on') {
		init(function() {
			setleds(true, true, true, function() {
				mylog('LEDs on, bye');
				process.exit();
			});
		});
	} else if (param == '--off') {
		init(function() {
			setleds(false, false, false, function() {
				mylog('LEDs off, bye');
				process.exit();
			});
		});
	} else if (param == '-v') {
		var fs = require('fs');
		fs.readFile(__dirname + '/package.json', 'utf8', function(err, data) {
			if (err) console.log(err);
			var package_data = JSON.parse(data);
			console.log(package_data.version);
			process.exit();
		});
	} else if (param == '-h') {
		// Show help
		console.log('Usage: rpi_cpu_usage_monitor [command] [-q]');
		console.log('Option:');
		console.log('  -q: quiet mode');
		console.log('');
		console.log('Commands:');
		console.log('  --test: Test mode, sequentially power on LEDs, and exit');
		console.log('');
		console.log(' --on: Power on all LEDs, and exit.');
		console.log('');
		console.log(' --off: Power off all LEDs, and exit.');
		console.log('');
		console.log(' -v: Print version, and exit.');
		console.log('');
		console.log('If no command, show the cpu usage on the RGB LED.');
		process.exit();		
	} else {
		init(indicator);
	}
} catch(err) {
	console.log(err.message);
	console.log(err);
}
