# Raspberry Pi CPU usage monitor

[![NPM version](https://img.shields.io/npm/v/rpi_cpu_usage_monitor.svg)](http://npmjs.com/package/rpi_cpu_usage_monitor) 
[![Downloads](http://img.shields.io/npm/dm/rpi_cpu_usage_monitor.svg)](http://npmjs.com/package/rpi_cpu_usage_monitor)

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

## Tips
- Bitcoin: bc1qx4q5epl7nsyu9mum8edrvp2my8tut0enrz7kcn
- EVM compatible (Ethereum, Fantom, Polygon, etc.): 0x9F0a70A7306DF3fc072446cAF540F6766a4CC4E8
- Litecoin: ltc1qk2gf43u3lw6vzhvah03wns0nkgetg2c7ea0w5r
- Solana: 14SHwk3jTNYdMkEvpbq1j7Eu9iUJ3GySnaBF4kqBR8Ah
- Flux: t1T3x4HExm4nWD7gN68px9zCF3ZFQyneFSK
