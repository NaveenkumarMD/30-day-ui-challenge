function callOnce(method){
    let called=false;
    return function (...args){
        if(called){
            return false;
        }
        else{
            called=true
            method.apply(this,args)
        }
    }
}

const log=function (){
    console.log("Main")
}

const method=callOnce(log)
console.log(method())
method();
method();
method();
method();
