Array.prototype.mean = function () {
  const sum = this.reduce((prev, curr) => prev + curr, 0);
  return sum / this.length;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
arr.mean();
