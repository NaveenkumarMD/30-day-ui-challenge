function dropWhileRight(arr,cb){
    for(let i=arr.length-1;i>=0;i--){
        if(cb(arr[i])){
            break;
        }
        arr.pop();
    }
}

const arr=[1,2,3,4,5]
dropWhileRight(arr,x=>x<3)

console.log(arr)

