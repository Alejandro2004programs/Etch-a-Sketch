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
            // gridSquares.style.width = "60px";
            // gridSquares.style.height = "40px";
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

function CalculateSizeFromInput(input) {
    input = Number(input);
    if(typeof input != "number") {
        return "ERROR";
    }
    input = Math.floor(input);
    if(input > 100) {
        return "ERROR";
    }
    return GridSize;
}

fillGrid(16);

const newGridContainer = document.querySelectorAll(".container");
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
            e.target.setAttribute
        }
    });
});

const resetButton = document.querySelector(".top-button");
resetButton.addEventListener("click", () => {
    removeGrid(gridSize);
    let newGridSize = prompt("Choose a new number of squares for columns and rows. Max size is 100: ");

    fillGrid(newGridSize);
    gridSize = newGridSize;
});


