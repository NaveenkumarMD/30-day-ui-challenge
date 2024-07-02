const resArray = [];
function flatten(arr) {
  for (var i of arr) {
    if (Array.isArray(i)) {
      flatten(i);
    } else {
      resArray.push(i);
    }
  }
}

const arr = [
  1,
  2,
  3,
  [1, 2, 3, 4, [1, 2, 3, 4, 5, [1, 2, 3, 4, 5, 6, [1, 2, 3, 4]]]],
  [2, 3, 4],
  5,
  6,
  [7, 8, 9, [10, 11]],
];
flatten(arr);
console.log(resArray);
