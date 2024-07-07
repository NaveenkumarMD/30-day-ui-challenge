function paramCount(fn) {
  return fn.length;
}

function func1(val1, val2) {
  return;
}
function func2(val1) {}

console.log(paramCount(func1));
console.log(paramCount(func2));
