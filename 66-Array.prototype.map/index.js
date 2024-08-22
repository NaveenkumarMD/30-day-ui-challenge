Array.prototype.map1=function(cb){
    const result=[]
    cb.forEach(elem=>{
        const res=cb(elem);
        result.push(res)
    })
    return result;
}

const result=[1,2,3,4,5].map(x=>{
    return x*x;
})

console.log(result)
