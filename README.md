# Raspberry Pi CPU usage monitor

[![Support us](http://img.shields.io/gittip/gyengus.svg)](https://www.gittip.com/gyengus/)

Shows the Rapsberry Pi CPU usage on RGB LED

## Install
```bash
$ npm install rpi_cpu_usage_monitor
```

## Usage
```bash
$ rpi_cpu_usage_monitor [command] [-q]
```
Option:
  -q: quiet mode
Commands:
  --test: Test mode, sequentially power on LEDs, and exit
  --on: Power on all LEDs, and exit.
  --off: Power off all LEDs, and exit.
  -v: Print version, and exit.
If no command, show the cpu usage on the RGB LED.

Please note: You must run this in root account.
