
function setPosition(className,time){
    const elem=document.getElementsByClassName(className)[0]
    elem.style.transform=`translateY(-50%) rotate(${time*6}deg)`
}

function setTime(){
    const time=new Date(Date.now())
    const hour=time.getHours();
    const minute=time.getMinutes();
    const seconds=time.getSeconds();
    setPosition("hour",hour);
    setPosition("minute",minute);
    setPosition("second",seconds);

}
setInterval(setTime,1000)


