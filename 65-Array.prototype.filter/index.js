Array.prototype.myFilter=function(cb){
    const res=[];
    this.forEach(elem=>{
        const result=cb(elem)
        if(result)res.push(elem)
    })
    return res
}

const arr=[1,2,3,4,5,6]

console.log(arr.myFilter(elem=>elem%2===0))
COISOLEaLOe！
console. log
