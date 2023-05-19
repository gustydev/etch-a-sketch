const container = document.querySelector('.container');

let gridSize = 16;

for (let x = 0; x < gridSize; x++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let y = 0; y < gridSize; y++) {
        const square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
    }
    container.appendChild(row);
}

let currentMode = 'normal' // Default mode is normal, other modes are rainbow, gray scale etc

const rainbowPicker = document.querySelector('#rainbow-pick');

function randomRGB() {
    return 0 + Math.floor(Math.random() * (255 - 0 + 1));
}

const grayScale = document.querySelector('#gray-scale');
const eraser = document.querySelector('#eraser');

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == 'rainbow-pick') {
            currentMode = 'rainbow'
        } else if (button.id == 'gray-scale') {
            currentMode = 'gray'
        } else if (button.id == 'eraser') {
            currentMode = 'eraser'
        }
    })
})

const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('mouseenter', () => {
        if (currentMode == 'normal') {
            square.style.backgroundColor = 'black'
        } else if (currentMode == 'rainbow') {
            square.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`
        }
    })
})