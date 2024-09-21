function serialize(domObj){
    let template=`<{{tag}} {{attributes}}>{{innerHTML}}<{{tag}}/>`
    for (const key in domObj) {
        let value=domObj[key];
        if(typeof value ==="object" && key==="attributes"){
            let res=[]
            for(const attrKey in value){
                res.push(`${attrKey}=${value[attrKey]}`)
            }
            value=res.join(" ")
        }
        template=template.replaceAll(`{{${key}}}`,value)
    }
    return template;
}

const domObj={
    tag:"h1",
    innerHTML:`<div>Naveenkumar</div>`,
    attributes:{
        data_test_id:"h1tag"
    }
}

const htmlElement= serialize(domObj)
console.log(htmlElement)
