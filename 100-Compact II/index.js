Object.prototype.removeFalsyValues=function(){
    Object.keys(this).forEach(elem=>{
        if(!this[elem]){
            delete this[elem]
        }
    })
}

const obj={
    a:false,
    v:null
}

obj.removeFalsyValues()
console.log(obj)
