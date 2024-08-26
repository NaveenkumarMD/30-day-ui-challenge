const elem= document.getElementById("main");


Object.prototype.css=function(){
    //Get Method
    if(arguments.length===1 && typeof  arguments[0] ==="string"){
        return this.style[arguments[0]]
    }
    // set method
    if(arguments.length===2 && typeof  arguments[0] ==="string"){
        this.style[arguments[0]]=arguments[1];
    }
    if(arguments.length===1 && typeof  arguments[0]==="object"){
        for (let key in arguments[0]) {
            this.style[key] = arguments[0][key];
        }
    }
}

elem.css("display");
elem.css("display","none")
elem.css({
    "display":"block",
    "background-color":"red",
    "font-size":"200px"
})
