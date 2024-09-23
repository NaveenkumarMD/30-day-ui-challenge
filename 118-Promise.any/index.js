const promise1 = () =>
    new Promise((res, rej) => {
        setTimeout(() => res("Success"), 1003);
    });

const promise2 = () =>
    new Promise((res, rej) => {
        setTimeout(() => rej("rejected"), 1001);
    });

function  promiseAny(promises){
    return new Promise((res,rej)=>{
        const errors=[]
        let count=promises.length;
        promises.forEach((promise,idx)=>{
            Promise.resolve(promise).then(res).catch(err=>{
                errors[idx]=err;
                count--
                if(count==0){
                    return new AggregateError(errors,"rejected")
                }
            })
        })
    })
}


promiseAny([promise1(), promise2()])
    .then((result) => console.log(result))
    .catch((error) => console.error(error));


