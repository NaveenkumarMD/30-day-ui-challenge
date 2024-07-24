const range=(start,end)=>{
    const res=[]
    for(let i=end;i>start;i--){
        res.push(i)
    }
    return res;
}

console.log(range(2,900))
