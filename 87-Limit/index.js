

function limit(cb,count){
    let c=0;
    const func=(...args)=>{
        c++;
        if(c>count){
            console.log("Maximum count reached");
            return
        }
        cb(...args)

    }
    return func
}


function main(param){
    if(param){
        console.log("called with params",param)
    }
    console.log("Dummty")
}

const limitedFunc=limit(main,4);

limitedFunc("naveen")
limitedFunc()
limitedFunc()
limitedFunc("kumar")
limitedFunc()
