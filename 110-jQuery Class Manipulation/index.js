HTMLElement.prototype.toggleClass=function (className){
    const currentClassList=[... this.classList]
    console.log(currentClassList)
    if(currentClassList.includes(className)){
        this.classList.remove(className)
    }
    else{
      this.classList.add(className)
    }
}
function toggle(){
    document.getElementById("main").toggleClass()
}


