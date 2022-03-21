let screen = document.querySelector(".screen");
let gridVisible = true;
let size = 15;
let brushColor = "rgb(0, 0, 0)";
let activeTool = "pencil";



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

function addPixelsListener(){ //listener and click actions
    let pixel = document.querySelectorAll(".pixel");
    pixel.forEach(px => {
        px.addEventListener("mousedown", () => {
            if(activeTool == "pencil"){
                px.style.backgroundColor = brushColor;
                px.style.border = `1px solid ${brushColor}`;
            }else if(activeTool == "eraser"){
                px.style = null;
            }
        })
    });
}

function checkGridVisibility(){
    if(gridVisible){
        let drawnPixels = document.querySelectorAll(".pixel");
    drawnPixels.forEach(pixel => {
        pixel.classList.add("border");
    });
    } else {
        let drawnPixels = document.querySelectorAll(".pixel");
        drawnPixels.forEach(pixel => {
            pixel.classList.remove("border");
        });
    }
}

/*-----menu left-----*/
//pencil, adds colors
let btnPencil = document.querySelector(".pencil");


btnPencil.addEventListener("click", () => {
    activeTool = "pencil"
    btnPencil.style.backgroundColor = "rgb(100, 0 , 0)";
    btnPencil.style.color = "white";
    btnEraser.style.backgroundColor = null;
    btnEraser.style.color = null;
});

//eraser, style added by pencil
let btnEraser = document.querySelector(".eraser");
btnEraser.addEventListener("click", () => {
    activeTool = "eraser";
    btnEraser.style.backgroundColor = "rgb(100, 0 , 0)";
    btnEraser.style.color = "white";
    btnPencil.style.backgroundColor = null;
    btnPencil.style.color = null;
});

//color picker
let preview = document.querySelector(".preview");

let rgb = document.querySelector(".rgb");
let colorR = document.querySelector("#r");
let colorG = document.querySelector("#g");
let colorB = document.querySelector("#b");

rgb.addEventListener("click", () => {
    brushColor = "rgb("+colorR.valueAsNumber
    +", "+colorG.valueAsNumber+", "
    +colorB.valueAsNumber+")";
    preview.style.backgroundColor = brushColor;
});

let btnRainbow;


/*-----menu right-----*/
//redraw the screen, deleting anything drawn
let btnReset = document.querySelector(".reset");
btnReset.addEventListener("click", () => drawScreen());

//change grid size and redraws it
let btnScreenRes = document.querySelector(".grid-size");
btnScreenRes.valueAsNumber = size; //sets a default value
btnScreenRes.addEventListener("click", () => {
    size = btnScreenRes.valueAsNumber;
    drawScreen()
});

//toggle grid visibility
let btnGrid = document.querySelector(".grid");
btnGrid.addEventListener("click", () => {
    if(gridVisible){
        let drawnPixels = document.querySelectorAll(".pixel");
    drawnPixels.forEach(pixel => {
        pixel.classList.remove("border");
        gridVisible = false;
    });
    } else {
        let drawnPixels = document.querySelectorAll(".pixel");
        drawnPixels.forEach(pixel => {
            pixel.classList.add("border");
            gridVisible = true;
        });
    }
});


/*-----settings to default-----*/

//default color preview and keep color selection
brushColor = "rgb("+colorR.valueAsNumber
    +", "+colorG.valueAsNumber+", "
    +colorB.valueAsNumber+")";
    preview.style.backgroundColor = brushColor;

//default active color for pencil
btnPencil.style.backgroundColor = "rgb(100, 0 , 0)";
btnPencil.style.color = "white";