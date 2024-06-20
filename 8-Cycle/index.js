function getCycle(...values) {
  var count = -1;
  return function counter() {
    count += 1;
    const len = values.length;
    return values[count % len];
  };
}

const cycle = getCycle("on", "off");

console.log(cycle());
console.log(cycle());
console.log(cycle());
console.log(cycle());
console.log(cycle());
console.log(cycle());
console.log(cycle());
console.log(cycle());
