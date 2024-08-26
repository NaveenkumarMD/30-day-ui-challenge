

const promise1=()=> new Promise((res,rej)=>{
    setTimeout(()=>res("Success"),1000)
})

const promise2=()=> new Promise((res,rej)=>{
    setTimeout(()=>rej("rejected"),1001)
})


Promise.racex=function(){
    const args=arguments;
    return new Promise((res,rej)=>{
        for (let promise of args) {
            // Resolve or reject the outer promise as soon as one of the input promises resolves or rejects
            Promise.resolve(promise).then(res, rej);
        }
    })
}


Promise.racex([promise2(),promise1()]).then(res=>{
    // console.log(res)
    console.log("Success")
}).catch(err=>console.log("Failure",err))

