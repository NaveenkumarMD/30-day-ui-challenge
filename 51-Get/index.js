Object.prototype.get=function(){
    const keysarr=arguments[0].split(".")
    const func=(obj,index)=>{
        if(index===keysarr.length){
            return obj;
        }
        if(obj[keysarr[index]]==="undefined"){
            console.log("Mot present")
        }
        else if(typeof obj[keysarr[index]]==="object" && !Array.isArray(obj[keysarr[index]])){
            return func(obj[keysarr[index]],index+1);
        }
        else{
            return obj[keysarr[index]]
        }
    }
    return func(this,0);
}

const obj={
    1:{
        2:{
            3:4,
            4:{
                5:"0"
            }
        }
    }
}

console.log(obj.get("1.2"))
