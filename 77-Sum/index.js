

function getSumFunc(){
    let value = 0;

    function add (newValue){
        if(newValue===undefined){
            return value
        }
        value+=newValue;
        return add
    }
    return add
}
const sum=getSumFunc();
let x=sum(2)(3)(3)()
console.log(x)
