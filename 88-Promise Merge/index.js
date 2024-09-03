const promise1 = () => new Promise((resolve) => setTimeout(() => resolve("Hello"), 4000));
const promise2 = () => new Promise((resolve) => setTimeout(() => resolve("World"), 4000));


// can use Promise.all to execute all promises concurrent


function  mergePromises(...promises){
    return new Promise(async (res,rej)=>{
        try {

            const result = [];
            for (let i = 0; i < promises.length; i++) {
                result.push(promises[i]())
            }
            res(result)
        }
        catch(e){
            rej(e)
        }
    })
}
mergePromises(promise1, promise2).then(result => console.log(result));

Promise.all([promise1(),promise2()]).then(res=>{
    console.log(res)
})
