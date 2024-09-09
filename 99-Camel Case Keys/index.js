
function toCamelCase(str){
    const arr=str.split(" ");
    for(let i=1;i<arr.length;i++){
        arr[i]=arr[i][0].toUpperCase()+arr[i].substring(1,arr[i].length)
    }
    return arr.join("")
}

Object.prototype.convertKeysToCamelCase=function (){
    Object.keys(this).forEach(elem=>{
        const value=this[elem]
        const newKey=toCamelCase(elem)
        this[newKey]=value
        delete this[elem]
    })
}

const obj={
    "naveen kumar":"b",
    "kumar few fewge few":"kumar"
}

obj.convertKeysToCamelCase()
console.log(obj)
