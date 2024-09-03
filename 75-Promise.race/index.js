const promise1 = () =>
  new Promise((res, rej) => {
    setTimeout(() => res("Success"), 1000);
  });

const promise2 = () =>
  new Promise((res, rej) => {
    setTimeout(() => rej("rejected"), 1001);
  });

function  promiseRace(promises){
    return new Promise((res,rej)=>{
        promises.forEach(promise=>{
            Promise.resolve(promise).then(res,rej)
        })
    })
}


promiseRace([promise1(), promise2()])
  .then((result) => console.log(result))
  .catch((error) => console.error(error));


