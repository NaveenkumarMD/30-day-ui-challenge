

function compose(){
    const arr=Array.from(arguments)
    arr.reverse().forEach(func=>func())
}

function  x(){
    console.log("x")
}
function  y(){
    console.log("y")
}
function  z(){
    console.log("z")
}
compose(z,y,x)
