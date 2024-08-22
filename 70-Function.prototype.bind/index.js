function sayName(){
    console.log("My name is "+this.firstName+ this.lastName)
}

const res={
    firstName:"Naveen",
    lastName:"kumar"
}
const func=sayName.bind(res)
func("nmaveen")


Function.prototype.bindX=function (context,...boundargs){
    const func=this;
    function result(...args){
        return func.apply(context,boundargs.concat(args))
    }
    return result;
}

const funca=sayName.bindX(res)
funca("nmaveen")

