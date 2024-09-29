const arr=[
    [
        1,2,[3,4,[5,[6,7]]]
    ]
]

Array.prototype.mapx=function(cb){
    const result=[];
    this.forEach(elem=>{
        let res;
        if(Array.isArray(elem)){
            res=elem.mapx(cb);
        }
        else{
            res=cb(elem)
        }
        result.push(res)
    })
    return result
}

const x=arr.mapx(elem=>elem**2)
console.log(x)
