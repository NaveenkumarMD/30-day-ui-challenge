function intersection(){
    const obj={}
    Object.values(arguments).forEach(arg=>{
        console.log(arg)
        arg.forEach(elem=>{
            if(obj.hasOwnProperty(elem)){
                obj[elem]+=1;
            }
            else{
                obj[elem]=1
            }
        })
    })
    const result=[]
    Object.entries(obj).forEach(([key,value])=>{
        if(value===1){
            result.push(key)
        }
    })
    console.log(result)
    return result
}
intersection([1,2,3,4,5],[5,6,7,8,4,5],[3,2,3,9,0])
