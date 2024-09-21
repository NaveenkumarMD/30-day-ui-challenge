const dom1= document.getElementById("one")
const dom2= document.getElementById("two")


function areSame(dom1,dom2){
    if(dom1.tagName !== dom2.tagName){
        return false;
    }
    else if (dom1.children.length!==dom2.children.length){
        return false
    }
    for(let i=0;i<dom1.children.length;i++){
        if(!areSame(dom1.children[i],dom2.children[i])){
            return false
        }
    }
    return true
}

const res=areSame(dom1,dom2)
console.log(res)
