function createObj(arr){
    const obj={}
    arr.forEach(([key,value])=>obj[key]=value)
    return obj;
}

let arr=[[1,2],[3,4]]
console.log(createObj(arr))
