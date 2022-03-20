let screen = document.querySelector(".screen");
let gridVisible = false;

let size = 15;

drawScreen()

function drawScreen(){
    clearScreen();
    drawPixels();
    checkGridVisibility();
    addPixelsListener();
}

function clearScreen(){
    while(screen.hasChildNodes()){
        screen.removeChild(screen.firstChild)
    }
}

function drawPixels(){
    for(let i = 0; i < size; i++){
        let column = document.createElement("div");
        column.className = `column`;
        column.id = `column${i+1}`;
        column.style.flexDirection = "column";
        screen.appendChild(column);
        
        for(let j = 0; j < size; j++){
            let pixel = document.createElement("div");
            pixel.className = "pixel";
            pixel.id = `x${i+1}y${j+1}`;
            let column = document.querySelector(`#column${i+1}`)
            column.appendChild(pixel);
        }
    }
}

function addPixelsListener(){
    let pixel = document.querySelectorAll(".pixel");
    pixel.forEach(px => {
        px.addEventListener("mousedown", () => {
        px.classList.add("active");
        })
    });
}

function checkGridVisibility(){
    if(gridVisible){
        let drawnPixels = document.querySelectorAll(".pixel");
    drawnPixels.forEach(pixel => {
        pixel.classList.add("noBorder");
    });
    } else {
        let drawnPixels = document.querySelectorAll(".pixel");
        drawnPixels.forEach(pixel => {
            pixel.classList.remove("noBorder");
        });
    }
}

//redraw the screen, deleting anything drawn
let btnReset = document.querySelector(".reset");
btnReset.addEventListener("click", () => drawScreen());

//change grid size and redraws it
let btnGridSize = document.querySelector(".grid-size");
btnGridSize.valueAsNumber = size; //sets a default value
btnGridSize.addEventListener("click", () => {
    size = btnGridSize.valueAsNumber;
    drawScreen()
});

//toggle grid visibility
let btnGrid = document.querySelector(".grid");
btnGrid.addEventListener("click", () => {
    if(gridVisible){
        let drawnPixels = document.querySelectorAll(".pixel");
    drawnPixels.forEach(pixel => {
        pixel.classList.remove("noBorder");
        gridVisible = false;
    });
    } else {
        let drawnPixels = document.querySelectorAll(".pixel");
        drawnPixels.forEach(pixel => {
            pixel.classList.add("noBorder");
            gridVisible = true;
        });
    }
});






//total failure of "small" code, may save for later

/*function test(tag, action, tool){
    let element = document.querySelector(tag);
    element.addEventListener(action, () => {
        if(tool == "screenSize"){
            size = element.valueAsNumber;
            drawScreen()
        } else if(tool == "reset"){
            drawScreen()
        }
    });
}

test(".grid-size", "click", "screenSize");
test(".reset", "click", "reset");*/