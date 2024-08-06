

sketchPad = document.querySelector(".sketch-container");
// Create divs
var squareAmt = 4;
const gridWidth = 700;
const gridHeight = 700;

// Ability to customize height/width of container
sketchPad.style.height = gridHeight+"px";
sketchPad.style.width = gridWidth+"px";


function getRandomNumUpTo(num) {
    return Math.floor(Math.random() * num);
}

// makeSquares (Int squareAmt) --> Makes the squares for the etch-a-sketch grid
function makeSquares (size){
    // Sets the amount of pixels dedicated to each square to grow depending on the size of the grid nxn
    var divWidth = gridWidth / size;
    var divHeight = gridHeight / size;

    // Loops through the size of the grid and creates the squares for the etch-a-sketcdh
    for (var i = 0; i < size*size; i++){
        // Create div
        const newDiv = document.createElement("div");
        newDiv.classList.add("squares");
        
        // Set height and width to nxn pixel size that fits the default height and width perfectly, -1 to adjust for border
        newDiv.style.width = divWidth-1+"px";
        newDiv.style.height = divHeight-1+"px";
        sketchPad.appendChild(newDiv);
    }

    // Functionality for button hovering
    const squares = document.querySelectorAll(".squares");
    squares.forEach(square => {
    square.addEventListener("mouseenter", () => {
        if (square.style.backgroundColor == ""){
            square.style.opacity = "0.10";
            square.style.backgroundColor = "rgb(" + (getRandomNumUpTo(255)) + "," + (getRandomNumUpTo(255)) + "," + (getRandomNumUpTo(255)) + ")";
        } else if (square.style.opacity < 1){
            square.style.opacity = "" + (Number(square.style.opacity) + 0.10);
        }
        //square.style.backgroundColor = "#FF7F0D";
    })
    
});
}


// Resets the board
function resetBoard (size) {
    for (var i = 0; i < size*size; i++){
        sketchPad.removeChild(sketchPad.firstChild);
    }
}

const setSquares = document.querySelector("#set");
setSquares.addEventListener("click", () => {
    var newSize = prompt("Enter how many tiles you would like on each side", 4);
    resetBoard(squareAmt);
    squareAmt = newSize;
    makeSquares(newSize);
})


makeSquares(squareAmt);