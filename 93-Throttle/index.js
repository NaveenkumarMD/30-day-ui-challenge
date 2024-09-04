

function throttle(cb,time,count){
    let c=0
    setInterval(()=>{
        c=0;
        console.log("Set")
    },[time])
    return function(...args){
        if(c>=count){
            console.log("Couldn't call now")
            return
        }
        c++;
        return cb(...args)
    }
}

function main(){
    console.log("Working")
}

const throttledFunc=throttle(main,3000,2);

setInterval(()=>{
    throttledFunc()
},1000)
