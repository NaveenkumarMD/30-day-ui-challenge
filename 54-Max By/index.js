Array.prototype.maxBy=function(cb){
    let min=-Infinity;
    this.forEach(elem=>{
        const element=cb(elem);
        if(element>min){
            min=element
        }
    })
    return min
}

let arr=[1,2,3,4,5,6,7]
const res=arr.maxBy((val)=>val)
console.log(res)
