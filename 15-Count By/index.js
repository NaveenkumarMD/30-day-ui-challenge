function count(arr, cb) {
  const obj = {};
  arr.forEach((element) => {
    let elem;
    if (typeof cb === "function") {
      elem = cb?.(element) ?? element;
    } else {
      elem = element?.[cb] ?? element;
    }

    if (obj.hasOwnProperty(elem)) {
      obj[elem] += 1;
    } else {
      obj[elem] = 1;
    }
  });
  console.log(obj);
}

const arr = [1, 2, 2, 3, 3, 4, 3, 3, 3, 2];
const arr1 = [
  {
    x: 1,
    y: 1,
  },
  {
    x: 2,
    y: 2,
  },
  {
    x: 1,
    y: 1,
  },
];
count(arr);
count(arr1, (elem) => elem.x);
count(arr1, "x");
