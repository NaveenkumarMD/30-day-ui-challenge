function generate(row,col){
    const res=[]
    let count=0
    for (let i = 0; i <row ; i++) {
        let dummy=[]
        for (let j = 0; j <col ; j++) {
            dummy.push(count);
            count++;
        }
        res.push(dummy)
    }
   return res
}


function log(arr){
    for (let i = 0; i <arr.length ; i++) {
        let str=""
        for (let j = 0; j <arr[0].length ; j++) {
            str+=arr[i][j]
        }
        console.log(str)
      console.log("\n")
    }
}

log(generate(2,3))

