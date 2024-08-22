const containerDOM=document.getElementById("container")

const header=containerDOM.getElementsByTagName("header")[0]
header.addEventListener("click",()=>{
    const content=containerDOM.getElementsByTagName("div")[0]
    content.classList.toggle("hidden")
})


