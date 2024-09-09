function curry(func){
    let args=[]
    return function curried(...funcArgs){
        args=args.concat(funcArgs);
        if(args.length>=func.length){
            return func(...args)
        }
        else{
            return function(...args1){
                return curried(...args1)
            }
        }
    }
}

function add(a,b,c,d,e,f){
    return a+b+c+d+e+f;
}

const curriedFunc=curry(add);
const x=curriedFunc(2)(2,2)(2)(2)(2)
console.log(x)
