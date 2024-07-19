function fill(arr,start,end,value){
    for(let i=start;i<end;i++){
        arr[i]=value
    }
}

arr=[1,2,2,3,3,4,4,5,4,4,3,2]
fill(arr,1,4,0)
console.log(arr)
