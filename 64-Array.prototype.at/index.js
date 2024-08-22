Array.prototype.myAt=function (index){
    console.log(this)
    return this[index]
}

const arr=[1,2,3,4]
console.log(arr.myAt(2))
