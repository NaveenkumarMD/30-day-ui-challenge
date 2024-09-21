const arr=[1,2,3,"gregr",{a:"b"}]

function format(arr){
    const res=[]
    for(let elem of arr){
        if(typeof  elem==="object"){
            res.push(JSON.stringify(elem))
        }
        else{
            res.push(elem)
        }

    }
    return res.join("")
}
console.log(format(arr))
