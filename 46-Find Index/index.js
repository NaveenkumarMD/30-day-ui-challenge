function findIndex(arr,elem){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===elem){
            return i;
        }
    }
}
let arr=[1,2,3,4,5,6,8]
console.log(findIndex(arr,4))
