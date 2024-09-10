function getByTagName(tag){
    return Array.from(document.all).filter(elem=>elem.localName===tag)
}

const x=getByTagName("div")
console.log(x)
