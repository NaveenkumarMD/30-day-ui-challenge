Object.prototype.stringify=function(){
    const res=[]
    for(const key in this){
        const value=this[key]
        if((typeof value ==='string' || typeof value==="number") ){
            res.push(`${key}:${value}`)
        }
        if(typeof value==="object"){
            res.push( `${key}:${value.stringify()}`)
        }
    }

    return res.join(",")
}
const obj={
    1:2,
    2:{
        2:3,
        4:{
            4:5
        }
    },
    a:3
}
const res=obj.stringify()
console.log(res)
