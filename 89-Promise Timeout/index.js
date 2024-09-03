
const promise1 = () => new Promise((resolve) => setTimeout(() => resolve("Hello"), 5000));

function timedPromise(cb,time){
    return new Promise(async (res,rej)=>{
        setInterval(()=>{
            rej("Timed out")
        },time)
        try{
           res(await cb())
        }
        catch(e){
            rej(e)
        }
    })
}

async function main(){
    try{
        const timed=await timedPromise(promise1,20);
        console.log(timed)
    }
    catch(e){
        console.log(e)
    }
}main()
console.log("Done")

