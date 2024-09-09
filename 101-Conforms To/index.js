Object.prototype.conformsTo=function (obj){
   return  Object.keys(obj).every(key=>obj[key]===this[key])
}

const object1 = { name: "John", age: 25, active: true };

var source1 = { age: 25 };
var res=object1.conformsTo(source1)
console.log(res)
