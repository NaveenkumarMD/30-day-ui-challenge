function unique(arr){
    const obj={}
    for(let i=0;i<arr.length;i++){
        if(!(arr[i] in obj)){
            obj[arr[i]]=arr[i];
        }
    }
    console.log(obj)
    return Object.values(obj)
}
const x=[1,2,3,4,4,5,3,2,3,2,3]
console.log(unique(x))

