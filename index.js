var square = document.getElementById("square");
square.addEventListener("mouseover", mouseover);
square.addEventListener("mouseout", mouseout);
square.addEventListener("mousedown", mousedown);
square.addEventListener("mouseup", mouseup);
square.addEventListener("dblclick", dblclick);
addEventListener("wheel", wheel);

function mouseover() {
    square.style.background = "blue"
}
function mouseout() {
    square.style.background = "grey"
}
function mousedown() {
    square.style.backgroundColor = "red"
}
function mouseup() {
    square.style.backgroundColor = "yellow"
}
function dblclick() {
    square.style.backgroundColor = "green"
}
function wheel() {
    square.style.backgroundColor = "orange"
}

document.addEventListener("keydown", function(event) {
var colorkey = event.key
	if(colorkey === "b"){square.style.backgroundColor = "blue"}
	else if(colorkey === "r"){square.style.backgroundColor = "red"}
	else if(colorkey === "y"){square.style.backgroundColor = "yellow"}
	else if(colorkey === "g"){square.style.backgroundColor = "green"}
	else if(colorkey === "o"){square.style.backgroundColor = "orange"}
	else{square.style.backgroundColor = "black"} 
	})