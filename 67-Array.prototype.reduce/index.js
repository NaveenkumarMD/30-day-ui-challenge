

const arr=[1,2,3,4,5]

const sum=arr.reduce((acc,curr)=>acc+curr,0)

console.log(sum)


//

Array.prototype.reduceX=function(cb,initialValue){
    let accumulatedValue=initialValue;
    let res=initialValue;
    this.forEach((currValue,currIndex)=>{
        res=cb(accumulatedValue,currValue,currIndex,this)
        accumulatedValue=res;
    })
    return res;
}

const sum1=arr.reduceX((acc,curr)=>acc+curr,0)
console.log(sum1)
