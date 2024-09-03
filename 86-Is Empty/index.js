
const map=new Map([
    ["name",23],
    ["color","red"]
])
const set =new Set([1,2,3,2,3])

function isEmpty(arg){
    const type=typeof  arg;
    if(!arg){
        return true
    }
    if(type==="string" ){
        return arg===""
    }
    else if(type==="object"){
        if(arg.length===0){
            return true
        }
    }
    return false
    
}
