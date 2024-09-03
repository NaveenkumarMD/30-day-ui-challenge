let array1 = [1.1, 2.6, 4, 3.2, 1, 2]
let array2 = [1, 2, 3, 5, 6]


const callBack=Math.ceil

array2=array2.map(elem=>callBack(elem))
const res=[]
array1.forEach(elem=>{
    const elemValue=callBack(elem)
    const index=array2.indexOf(elemValue)
    if(index===-1){
    }
    else{
        array2.splice(index,1);
        res.push(elem)
    }
})

console.log(res)
