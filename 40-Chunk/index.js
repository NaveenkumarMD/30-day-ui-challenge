Array.prototype.chunk = function (size) {
  let res = [];
  let arr = [];
  this.forEach((elem) => {
    if (arr.length < size) {
      arr.push(elem);
    } else {
      res.push(arr);
      arr = [];
      arr.push(elem);
    }
  });
  res.push(arr);
  return res;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const res = arr.chunk(2);
console.log(res);
