# node-series [![Build Status](https://travis-ci.org/wangzuo/node-series.svg?branch=master)](https://travis-ci.org/wangzuo/node-series)
Lightweight series function for node and browser

## Installation
``` sh
npm install node-series --save
```

## Usage
``` javascript
var series = require('node-series');

series(function(next) {
  setTimeout(function() {
    console.log(1);
    next();
  }, 1000);
}, function(next) {
  setTimeout(function() {
    console.log(2);
    next();
  }, 1000);
}, function(next) {
  setTimeout(function() {
    console.log(3);
    next();
  }, 1000);
});
```

## Supported browsers
IE8+
