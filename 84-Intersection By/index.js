

let array1 = [1.1, 2.6, 4, 3.2, 1, 2]
let array2 = [1, 2, 3, 5, 6]

const callback=Math.ceil

Array.prototype.intersection=function(arr,cb){
    const res=[]
    this.forEach(elem=>{
        const value=cb(elem)
        if(array2.includes(value)){
            array2.splice(arr.indexOf(value),1)
            res.push(elem)
        }
    })
    return res
}

const res=array1.intersection(array2,callback)
console.log(res)
