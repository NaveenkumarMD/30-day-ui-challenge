function minBy(arr, cb) {
  let maxValue = Number.MAX_VALUE;
  let ans;
  arr.forEach((element) => {
    const value = cb(element);
    if (value < maxValue) {
      maxValue = value;
      ans = element;
    }
  });
  return ans;
}

console.log(
  minBy([1, 2, 3, 4, -9], function (x) {
    return x;
  })
);
console.log(
  minBy(
    [
      { m: 1, n: 3 },
      { m: -1, n: 3 },
    ],
    function (x) {
      return x.m;
    }
  )
);
console.log(
  minBy(
    [
      { m: 1, n: 3 },
      { m: -1, n: 3 },
    ],
    function (x) {
      return x.d;
    }
  )
);
