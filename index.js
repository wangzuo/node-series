function run(fns) {
  var fn = fns.shift();
  if (typeof fn === 'function') {
    fn(function () {
      if (fns.length) run(fns);
    });
  }
}

function series() {
  var fns = arguments.length > 1 ?
    Array.prototype.slice.call(arguments, 0) :
    (typeof arguments[0] === 'function' ? [arguments[0]] : arguments[0]);

  run(fns);
}

module.exports = series;
