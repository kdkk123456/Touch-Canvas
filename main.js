canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d");
color="white";
var lastX,lastY;

var width=screen.width;
var newwidth=screen.width-100;
var newhight=screen.height-300;
if (width<992){
    document.getElementById("myCanvas").width=newwidth;
    document.getElementById("myCanvas").height=newhight;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",ts);
function ts(e){
lastX=e.touches[0].clientX-canvas.offsetLeft;
lastY=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",tm);
function tm(e){
    currentX=e.touches[0].clientX-canvas.offsetLeft;
    currentY=e.touches[0].clientY-canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=5;
        ctx.moveTo(lastX,lastY);
        ctx.lineTo(currentX,currentY);
        ctx.stroke();
    lastX=currentX;
    lastY=currentY;
}
