
# Repo Tracker

> Simple utility to execute code on git repo change.


## Usage


```javascript
var Tracker = require('repo-tracker');

var tracker = new Tracker('https://github.com/gabrielaandb/repo-tracker', 10000, () => {
  console.log("CHANGES WERE MADE");
});

```


## Docker example

```javascript
var Tracker = require('repo-tracker');
var execute = require('repo-tracker').execute;

var tracker = new Tracker('https://github.com/mauricioaandb/bankbot', 10000, () => {
  console.log('starting restart process');
  execute('git pull').then(() => {
    console.log('pulled changes');
    execute('docker-compose down').then(() => {
      console.log('down');
      execute('docker-compose build').then(() => {
        console.log('build');
        execute('docker-compose up -d').then(() => {
          console.log('up');
        });
      });
    });
  });
});

```
