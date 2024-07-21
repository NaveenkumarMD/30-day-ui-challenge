Function.prototype.mycall=function(){
    if(typeof  this!=="function"){
        return "provide a function"
    }

    const context=arguments[0] || globalThis;
    const symbol=Symbol();
    context[symbol]=this;
    const result=context[symbol](...Object.values(arguments).slice(1));
    return result
}

function log(name,area){
    console.log(this)
    console.log("Logging from:", area);
    console.log("Logger :",name);
    console.log("Address is ",this.address)
}

log.mycall({address:"address"},"naveen","kumar")
