function squash (obj,parentKey=""){
    const res={};
    for (const key in obj ) {
        const value=obj[key]
        const newKey=parentKey ?`${parentKey}.${key}`:key;
        if(typeof value !== "object"){
            res[newKey]=value
        }
        else{
           Object.assign(res,squash(value,newKey))
        }
    }
    return res;
}

const obj={
    1:2,
    2:{
        3:4,
        5:{
            6:7
        }
    }
}
console.log(squash(obj))

