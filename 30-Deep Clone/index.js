function deepClone(obj) {
  const newObj = {};
  Object.entries(obj).map(([key, value]) => {
    if (typeof value === "object") {
      if (Array.isArray(value)) {
        newObj[key] = [...value];
      } else {
        newObj[key] = deepClone(value);
      }
    } else {
      newObj[key] = value;
    }
  });
  return newObj;
}

const obj = {
  a: 1,
  b: 2,
  c: [1, 2, 3, 4],
  d: {
    a: 2,
    b: 2,
    c: {
      a: 2,
    },
  },
};

const res = deepClone(obj);
console.log(res);
res.d.a = 4;
obj.c.push(3);
console.log(obj);
