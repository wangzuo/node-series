var test = require('tape');
var series = require('./');

var a = [];

var f1 = function (next) {
  setTimeout(function () {
    a.push(1);
    next();
  }, 300);
};

var f2 = function (next) {
  setTimeout(function () {
    a.push(2);
    next();
  }, 200);
};

var f3 = function (next) {
  setTimeout(function () {
    a.push(3);
    next();
  }, 100);
}

test('multiple arguments', function (t) {
  t.plan(1);

  a = [];
  series(f1, f2, f3, function () {
    t.deepEqual(a, [1, 2, 3]);
  });
});

test('array argument', function (t) {
  t.plan(1);

  a = [];
  series([f1, f2, f3].concat([function () {
    t.deepEqual(a, [1, 2, 3]);
  }]))
});

test('function argument', function (t) {
  t.plan(1);

  a = [];
  series(f1, function () {
    t.deepEqual(a, [1]);
  });
});
