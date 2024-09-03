
const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
];


Array.prototype.groupby=function (cb){
    const obj={}
    this.forEach(elem=>{
        const value=cb(elem)
        if(obj.hasOwnProperty(value)){
            obj[value]=[...obj[value],elem]
        }
        else{
            obj[value]=[elem]
        }

    })
    return obj
}
const res=inventory.groupby(({type})=>type)
console.log(res)

function myCallback({ quantity }) {
    return quantity > 5 ? "ok" : "restock";
}

const result2 = inventory.groupby(myCallback);
console.log(result2)
