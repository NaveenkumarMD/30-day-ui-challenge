const transform=function(obj,cb){
    const res={};
    for(let key in obj){
        res[key]=cb(obj[key]);
    }
    return res;
}

let obj={
    1:1,
    2:2
}

const res=transform(obj,elem=>elem*elem)
console.log(res)
