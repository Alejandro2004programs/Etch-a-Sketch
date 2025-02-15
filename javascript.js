const GridContainer = document.querySelector(".container");
let gridSize = 16;


function fillGrid(gridSize) {
    let i, j;
    for(i = 0; i < gridSize; i++) {
        const gridRow = document.createElement("div");
        gridRow.setAttribute("class", "row");
        GridContainer.appendChild(gridRow);
        for(j = 0; j < gridSize; j++) {
            const gridSquares = document.createElement("div");
            gridSquares.setAttribute("class", "square");
            gridRow.appendChild(gridSquares);
        }
    }
    return;
}

function removeGrid(currentGridSize) {
    let i, j = 0;
    for(i = 0; i < currentGridSize ** 2 - 1; i++) {
        const square = document.querySelector(".square");
        square.remove();
    }
    for(j = 0; j < currentGridSize; j++) {
        const row = document.querySelector(".row");
        row.remove();
    }
}

function calculateGridSizeFromInput(input) {
    input = Number(input);
    if(typeof input != "number") {
        return "ERROR";
    }
    input = Math.floor(input);
    if(input > 100) {
        return "ERROR";
    }
    return input;
}

function assignColors() {
    const arrayOfColors = ["red", "blue", "green", "yellow", "pink", "purple", "brown", "black"];
    arrayOfColors.forEach((color) => {
        const currentColor = document.querySelector("." + color);
        currentColor.style.backgroundColor = color;
    });
}

assignColors()
fillGrid(16);

const newGridContainer = document.querySelectorAll(".container");
const resetButton = document.querySelector(".top-button");
const colors = document.querySelectorAll(".colorContainer");

newGridContainer.forEach((gridSquare) => {
    gridSquare.addEventListener("mouseover", function(e) {
        if(e.target.classList == "square") {
            e.target.setAttribute("id", "hoverEffect");     
        }
    });
    gridSquare.addEventListener("mouseout", function(e) {
        e.target.removeAttribute("id", "hoverEffect");
    });
});

newGridContainer.forEach((gridSquare) => {
    gridSquare.addEventListener("click", function(e) {
        if(e.target.classList == "square") {
           if(e.target.style.opacity == 0) {
                e.target.style.opacity = ".10";
           }
           else if(parseFloat(e.target.style.opacity) < 1){
                e.target.style.opacity = (parseFloat(e.target.style.opacity) + 0.10).toString();
           }
        }
});
});

resetButton.addEventListener("click", () => {
    removeGrid(gridSize);
    let newGridSize = prompt("Select a new size for a board. Maximum size is 100: ");
    while(calculateGridSizeFromInput(newGridSize) == "ERROR") {
        newGridSize = prompt("Select a new size for a board. Maximum size is 100: ");
    }
    fillGrid(newGridSize);
    gridSize = newGridSize;
});

function changeSquareColor(color) {
    document.documentElement.style.setProperty("--squareColor", color);

}

colors.forEach((color) => {
    color.addEventListener("click", function(e) {
        switch(e.target.classList[1]) {
            case "red":
                changeSquareColor("red");
                break;
            case "blue":
                changeSquareColor("blue");
                break;
            case "green":
                changeSquareColor("green");
                break;
            case "yellow":
                changeSquareColor("yellow");
                break;
            case "pink":
                changeSquareColor("pink");
                break;
            case "purple":
                changeSquareColor("purple");
                break;
            case "brown":
                changeSquareColor("brown");
                break;
            case "black":
                changeSquareColor("black");
                break;
        }
    });
});



