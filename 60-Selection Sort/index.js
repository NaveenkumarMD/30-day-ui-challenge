function sort(arr){
    for(let i=0;i<arr.length;i++){
        let min_index=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min_index]){
                min_index=j
            }
        }
        let temp=arr[min_index];
        arr[min_index]=arr[i];
        arr[i]=temp
    }
}

let arr=[4,5,6,7,3,2,1]
sort(arr)
console.log(arr)
