function  findLastIndex(arr,elem){
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i]===elem){
            return i;
        }
    }
    return -1;
}
let x=findLastIndex([1,2,3,4,3,4,4,4,4,4,4,45,6],4)
console.log(x)
