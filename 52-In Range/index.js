
Number.prototype.inRange=function(start,end){
    return this<end && this>start;
}
let x=9
console.log(x.inRange(2,10))
