console.log("code initialized");
var circle = document.getElementById("circle")
var expanding = true;
var sizenow = 1;
var growshrink = function(){
    console.log("size adjusting");
    if(expanding){
	sizenow++;
	circle.setAttribute("r",sizenow);
	if(sizenow >= 250){
	    expanding = false;
	}
    }else{
	sizenow--;
	circle.setAttribute("r",sizenow);
	if(sizenow <= 1){
	    expanding = true;
	}	
    }
//    window.requestAnimationFrame(animate());
}
var animate = function(){
    console.log("button pressed");
    window.setInterval(growshrink,10);
}
var animateButton = document.getElementById("animate");
animateButton.addEventListener("click",animate);
console.log("code resolved");