

function promisify(cb){
    function callee(...args){
        return new Promise(async (res,rej)=>{
            try{
                res(await cb(...args))
            }catch(e){
                rej(e)
            }
        })
    }
    return callee;
}


function add(a,b){
    return a+b;
}

const promisifiedadd=promisify(add);

promisifiedadd(3,4).then(res=>{
    console.log(res)
})

