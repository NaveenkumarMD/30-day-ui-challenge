Array.prototype.compact = function () {
  const res = [];
  this.forEach((elem) => {
    if (!!elem) {
      res.push(elem);
    }
  });
  return res;
};

let arr = [false, 0, 1, 2, -1, 4, "naveen"];
console.log(arr.compact());
