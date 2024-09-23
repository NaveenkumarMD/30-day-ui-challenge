function memoize(func){
    const cache=new Map();
    return function (){
        const stringifiedArgs=JSON.stringify(arguments);
        if(cache.has(stringifiedArgs)){
            return cache.get(stringifiedArgs)
        }
        const res=func(...arguments)
        cache.set(stringifiedArgs,res)
        return res;
    }
}

function add(a,b){
    console.log("Called add Function")
    return a+b;
}

const memoizedFunc=memoize(add)
console.log(memoizedFunc(2,3))
console.log(memoizedFunc(2,3))
console.log(memoizedFunc(2,5))
console.log(memoizedFunc(2,3))
console.log(memoizedFunc(2,5))
