const rows = [
    {"user_id": 1, "data": ["a", "b"]},
    {"user_id": 2, "data": ["c"]},
    {"user_id": 1, "data": ["d"]},
    {"user_id": 2, "data": ["e", "f"]},
]

Array.prototype.merge=function (){
    const obj={}
    this.forEach(elem=>{
        const user=elem["user_id"]
        const data=elem["data"]
        if(obj.hasOwnProperty(user)){
            console.log(obj)
            obj[user]=[...obj[user],...data]
        }
        else{
            obj[user]=data
        }
    } )
    const res=[]
    Object.keys(obj).forEach(key=>{
        res.push(
            {
                "user_id":key,
                "data":obj[key]
            }
        )
    })
    return res
}

const c=rows.merge();
console.log(c)
