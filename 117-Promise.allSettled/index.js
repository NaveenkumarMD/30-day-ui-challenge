const allSettle=function (cbArray){
    return new Promise(async (res,rej)=>{
        const results=[];
        for (let cb of cbArray){
            try{
                results.push(await cb(2))
            }catch (e) {
                results.push(e)
            }

        }
        res(results)
    })
}

const cb=(value)=>new Promise((res,rej)=>{
    setTimeout(()=>{
        res(value*2)
    },2000)
})

const cb1=(value)=>new Promise((res,rej)=>{
    setTimeout(()=>{
        rej(value*2)
    },6000)
})

async function main(){
    const res=await allSettle([cb,cb1])

    console.log(res)
}
main()

