console.log("script initialized");
var playground = getElementById("playground");
var pctx = playground.getContext("2d");

var circle = function(x,y,radius){
    ctx.arc(x,y,radius,0,3.14);
    ctx.fill();
}
var draw = function(e){
    e.preventDefault();
    console.log("clicked");
    var mousex = e.offsetX;
    var mousey = e.offsetY;
    
    pctx.lineTo(mousex,mousey);
    pctx.stroke();
}

playground.addEventListener("click", draw);
ctx.strokeStyle = "#F0F0F0";
ctx.fillStyle = "#F0F0F0";
ctx.strokeRect(0,0,538,538);
ctx.beginPath();
ctx.moveTo(538/2,538/2);