const method=function(){
    return new Promise((res,rej)=>rej("Reason mmmm"))


}

const res=method().catch(res=>console.log(res))
