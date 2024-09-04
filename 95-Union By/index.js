const arr1=[1,2,3,4]
const arr2=[2,3,4,5]
const arr3=[5,6,7]

function join(...args){

    const res=[].concat(...args)
    return new Set(res)
}

const res=join(arr1,arr2,arr3)
console.log(res)
