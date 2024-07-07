Array.prototype.square = function () {
  const result = Array.prototype.map.call(this, (elem) => {
    return elem * elem;
  });
  return result;
};

let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let c = x.square();
console.log(c);
