

sketchPad = document.querySelector(".sketch-container");
// Create divs
var squareAmt = 4;
const gridWidth = 700;
const gridHeight = 700;
sketchPad.style.height = gridHeight+"px";
sketchPad.style.width = gridWidth+"px";

var divWidth = gridWidth / squareAmt;
var divHeight = gridHeight / squareAmt;
for (var i = 0; i < squareAmt*squareAmt; i++){
    const newDiv = document.createElement("div");
    newDiv.classList.add("squares");
    newDiv.style.width = divWidth-1+"px";
    newDiv.style.height = divHeight-1+"px";
    sketchPad.appendChild(newDiv);
}


const squares = document.querySelectorAll("div");

squares.forEach(square => {
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "orange";
    })
    
});