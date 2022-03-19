let screen = document.querySelector(".screen");

let size = 15;

drawScreen()

function drawScreen(){
    clearScreen();
    drawPixels();
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