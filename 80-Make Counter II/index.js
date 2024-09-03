

function getCounter(){
    let count=0;
    return {
        getCount:()=>count,
        addCount:()=>{count++}
    }
}

const counter=getCounter();

console.log(counter.getCount())
counter.addCount()
console.log(counter.getCount())
