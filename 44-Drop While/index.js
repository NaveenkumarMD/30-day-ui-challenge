function dropWhile(arr,cb){
    for(let i=0;i<arr.length;i++){
        if(cb(arr[i])){
            break;
        }
        arr.shift();
    }
}

const arr=[1,2,3,4,5]
dropWhile(arr,x=>x>3)

console.log(arr)

