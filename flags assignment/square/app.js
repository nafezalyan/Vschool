const myBox = document.getElementsByClassName("square")[0]

function mouseDown () {  
    myBox.style.backgroundColor = "red";
}       
function mouseUp() {
    myBox.style.backgroundColor = "yellow";
}
function dblclick() {
    myBox.style.backgroundColor = "green";
}
function mousewheel() { 
   myBox.style.backgroundColor = "orange";
}

myBox.addEventListener("mousedown", mouseDown)

myBox.addEventListener("mouseup", mouseUp)

myBox.addEventListener("dblclick", dblclick)

myBox.addEventListener("mousewheel", mousewheel)

// const card = document.querySelector('aside');

// card.addEventListener('dblclick', function (e) {
//   card.classList.toggle('large');
// });