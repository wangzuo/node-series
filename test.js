var test = require('tape');
var series = require('./');

test('timeout callback', function(t) {
  t.plan(1);

  var a = [];
  series(function(next) {
    setTimeout(function() {
      a.push(1);
      next();
    }, 300);
  }, function(next) {
    setTimeout(function() {
      a.push(2);
      next();
    }, 200);
  }, function(next) {
    setTimeout(function() {
      a.push(3);
      next();
    }, 100);
  }, function() {
    t.deepEqual(a, [1, 2, 3]);
  });
});