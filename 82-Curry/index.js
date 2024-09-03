function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(1,2,3))

function curry(method){
    return function curried(...args){
        if(method.length<=args.length){
          return  method(...args)
        }
        else{
            return function (arg){
                return curried(...args,arg)
            }
        }
    }
}

const curriedSum=curry(sum)

const res=curriedSum(2)(3)(0)
console.log(res)
