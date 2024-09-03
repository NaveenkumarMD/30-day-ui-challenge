

function promisify(cb){
    return new Promise(async (res,rej)=>{
        try{
            res(await cb())
        }
        catch (e) {
            rej(e)
        }
    })
}

function logmain(){
    console.log("Main")
}
promisify(logmain).then(res=>{
    console.log(res)
})
