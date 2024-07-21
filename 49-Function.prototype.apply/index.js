// Math.min.apply(this,[arg1,arg2])

Function.prototype.apply1=function(thisArg,args){
    if(typeof this !=="function"){
        return "Not a function"
    }
    const context=thisArg || globalThis;
    const symbol=Symbol()
    context[symbol]=this;
    const returnValue= context[symbol](...args)
    return returnValue

}

function log(name,area){
    console.log(this)
    console.log("Logging from:", area);
    console.log("Logger :",name);
    console.log("Address is ",this.address)
}

// log.apply({address:"address"},["name","ares"])

log.apply1({address: "addresss"},["name","ares"])

// log("naveen","kumar")
