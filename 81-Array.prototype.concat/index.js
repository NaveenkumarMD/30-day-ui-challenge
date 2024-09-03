const arr1=[1,2,3]
const arr2=[4,5,6]
console.log(arr1.concat(arr2,arr1))

Array.prototype.concatx=function (...args){
    console.log(args)
    var result=[...this]
    args.forEach(x=>{
        if(Array.isArray(x)){
            result=[...result,...x]
        }
        else{
            result.push(x)
        }
    })

    return result
}

console.log(arr1.concatx(arr2,arr1,3))
