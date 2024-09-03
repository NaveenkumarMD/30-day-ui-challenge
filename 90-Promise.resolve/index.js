

function returnAsPromise(value){
    return new Promise(async(res,rej)=>{
        try{
            await res(value)
        }
        catch (e){
            rej(e)
        }
    })
}

returnAsPromise([1,2,3]).then(res=>{
    console.log(res)
})

