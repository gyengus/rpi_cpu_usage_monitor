# Raspberry Pi CPU usage monitor

[![NPM version](https://img.shields.io/npm/v/rpi_cpu_usage_monitor.svg)](http://npmjs.com/package/rpi_cpu_usage_monitor) [![Downloads](http://img.shields.io/npm/dm/rpi_cpu_usage_monitor.svg)](http://npmjs.com/package/rpi_cpu_usage_monitor) [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=K5PAV5V7WGWFL)

Shows the Raspberry Pi CPU usage on RGB LED<br />
Colors:
* 0 - 50% green
* 51 - 90% yellow
* 91 - 100% red
			
## Requirements
sysstat packages, to install type
```bach
$ sudo apt-get update
$ sudo apt-get install sysstat
```
An RGB LED attached to Rapsberry Pi. See the schematic.

## Install
```bash
$ npm install -g rpi_cpu_usage_monitor
```

## Usage
```bash
$ sudo rpi_cpu_usage_monitor [command] [-q]
```
Option:
<ul>
<li>-q: quiet mode, only errors will be print</li>
</ul>
Commands:
<ul>
<li>--test: Test mode, sequentially power on LEDs, and exit</li>
<li>--on: Power on all LEDs, and exit.</li>
<li>--off: Power off all LEDs, and exit.</li>
<li>-v: Print version, and exit.</li>
<li>-h: Print help.</li>
</ul>
If no command, show the cpu usage on the RGB LED.

Please note: You must run this in root account.

For more information <a href="https://gyengus.hu/2015/04/raspberry-pi-cpu-hasznalat-jelzo/">click here</a>.

## Donations
- PayPal: https://paypal.me/gyengus
- Bitcoin: 1QJzLBK9uQP4RthmKJRQwy3v5sd4XS4S7P
- Ethereum: 0x2bD68120A56acBf6Dbd11da2060228b8912C1e3C
