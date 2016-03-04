//get the canvas element and store it in c
var c = document.getElementById("ftb2maga");
//greate a context variable (some weird canvas thing)
var ctx = c.getContext("2d");
//sets the color for the "fill" functions
ctx.fillStyle = "#FF0000";
//Fills in a rectangle defined by corners fillRect(x1,y1,x2,y2)
ctx.fillRect(0,0,538,538);
//Sets color for "stroke" functions
ctx.strokeStyle="#FFFF00";
//creates a rectangle perimeter (not filled in) defined by corners (x1,y1,x2,y2)
ctx.strokeRect(0,0,250,250);
//creates a new pointer type thing that can draw lines
ctx.beginPath();
//moves pointer to location moveTo(x,y)
ctx.moveTo(10,10);
//moves pointer to lineTo(x,y), leaving a line in it's trail
ctx.lineTo(500,500);
//creates another line to (400,500)
ctx.lineTo(400,500);
//creates lines from the lineTo functions, before this is executed, lines will not be visible
ctx.stroke();
//Changes stroke color
ctx.strokeStyle="#F0F0F0";
//changes fill color
ctx.fillStyle="#000000";
//begins path again
ctx.beginPath();
//moves cursor to (400,500)
ctx.moveTo(400,500);
//creates line to (10,10)
ctx.lineTo(10,10);
//displays line from previous 3 lines
ctx.stroke();
//beigns path(again)
ctx.beginPath();
//moves cursor to 20,300)
ctx.moveTo(20,300);
//next four lines create a rectangle manually by using lineTo
ctx.lineTo(70,300);
ctx.lineTo(70,350);
ctx.lineTo(20,350);
ctx.lineTo(20,300);
//fills in the rectangle
ctx.fill();
//fills in an arc
//arc(centerx, centery, radius, startangle, endangle)
//THE ANGLES ARE MEASURE CLOCKWISE FROM POSITIVE X (WHYYYYYYY)
//THE ANGLES ARE IN RADIANS (MORE WHYYYYYYYY)
//THE ARC IS DRAW BY CONNECTING THE TWO ANGLES COUNTERCLOCKWISE (WHAT IS CONSISTANCY?)
ctx.arc(20,300,50,3.14/6,-3.14/6);
//displays circle
ctx.stroke();
//ends the weird cursor instance thing
ctx.closepath();