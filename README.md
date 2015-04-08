# Raspberry Pi CPU usage monitor

[![Support us](http://img.shields.io/gittip/gyengus.svg)](https://www.gittip.com/gyengus/)

Shows the Rapsberry Pi CPU usage on RGB LED

## Install
```bash
$ npm install -g rpi_cpu_usage_monitor
```

## Usage
```bash
$ rpi_cpu_usage_monitor [command] [-q]
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
</ul>
If no command, show the cpu usage on the RGB LED.

Please note: You must run this in root account.
