let screen = document.querySelector(".screen");

let size = 10;

drawScreen()

function drawScreen(){
    for(let i = 0; i < size; i++){
        let column = document.createElement("div");
        column.className = `column`;
        column.id = `column${i}`;
        column.style.flexDirection = "column";
        screen.appendChild(column);
        
        for(let j = 0; j < size; j++){
            let pixel = document.createElement("div");
            pixel.className = "pixel";
            pixel.id = `x${i+1}y${j+1}`;
            document.querySelector(`#column${i}`).appendChild(pixel);
        }
    }
}