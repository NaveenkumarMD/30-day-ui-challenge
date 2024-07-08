function difference(arr1, arr2) {
  const res = [];
  const arr1Count = getCount(arr1);
  const arr2Count = getCount(arr2);

  arr1.forEach((elem) => {
    if (!arr2Count.hasOwnProperty(elem) || arr2Count[elem] === 0) {
      res.push(elem);
    } else {
      arr2Count[elem] -= 1;
    }
  });

  return res;
}

function getCount(arr) {
  let obj = {};
  arr.forEach((elem) => {
    if (obj.hasOwnProperty(elem)) {
      obj[elem] += 1;
    } else {
      obj[elem] = 1;
    }
  });
  return obj;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5, 5, 6];
console.log(difference(arr1, arr2));
