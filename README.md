# node-series
Dead simple series function

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