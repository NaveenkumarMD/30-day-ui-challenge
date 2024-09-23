const resumableInterval=function(cb,timeout){
    var interval=setInterval(()=>{
        cb()
    },1000)
    function stop(){
        clearInterval(interval)
    }
    function resume(){
        interval=setInterval(()=>{
            cb()
        },500)
    }
    return {
        stop,resume
    }
}

const {stop,resume}= resumableInterval(()=>{
    console.log("Hello")
})
setTimeout(()=>{
    stop()
    console.log("Stopped")
},3000)
setTimeout(()=>{
    console.log("Started")
    resume()
},6000)


