
function debounce(cb,interval){
    let timeOut;
    return {
        debouncedMethod:function(...args){
            clearTimeout(timeOut);
            timeOut=setTimeout(()=> {
                    cb.apply(...args)
                }
                ,interval);
        },
        flush:function (){
            clearTimeout(timeOut);
            cb.apply()
        },
        cancel:function (){
            clearTimeout(timeOut)
        }
    }
}


function log(){
    console.log("Working")
}

const {debouncedMethod,flush,cancel}=debounce(log,1000)

debouncedMethod();
debouncedMethod();
debouncedMethod();
debouncedMethod();
debouncedMethod();
debouncedMethod();
cancel();


