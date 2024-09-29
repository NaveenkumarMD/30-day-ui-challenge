function isEqual(val1,val2){
    if(["string","number","bigint","symbol"].includes(typeof  val1)){
        return val1===val2;
    }
    return JSON.stringify(val1)===JSON.stringify(val2)
}
