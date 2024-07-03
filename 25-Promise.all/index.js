const promise1 = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(promise2);
    }, 3000);
  });
const promise2 = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res("success");
    }, 4000);
  });
const promise3 = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      rej("rejected");
    }, 2000);
  });

async function handlePromises(arr) {
  return new Promise(async (res, rej) => {
    const result = [];
    try {
      for (const prom of arr) {
        const res = await prom();
        result.push(res);
      }
    } catch (error) {
      rej(error);
    }
    res(result);
  });
}
handlePromises([promise1, promise2])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("Error", err);
  });

Promise.all([promise1(), promise2()]).then((res) => {
  console.log(res);
});
