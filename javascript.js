const GridContainer = document.querySelector(".container");

function fillGrid() {
    let i, j;
    for(i = 0; i < 16; i++) {
        const gridSquaresFirstCol = document.createElement("div");
        GridContainer.appendChild(gridSquaresFirstCol);
        for(j = 0; j < 16; j++) {
            const gridSquares = document.createElement("div");
            gridSquaresFirstCol.appendChild(gridSquares);

        }
    }
    return;

}

const newGridContainer = document.querySelectorAll(".container");

fillGrid();

newGridContainer.forEach((gridSquare) => {
    gridSquare.addEventListener("mouseover", () => {
        gridSquare.setAttribute("class", "hoverEffect");
    });
    gridSquare.addEventListener("mouseleave", () => {
        gridSquare.removeAttribute("class", ".hoverEffect");
    });
});

