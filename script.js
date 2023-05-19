function randomRGB() {
    return Math.floor(Math.random() * (255 + 1));
}

const container = document.querySelector('.container');

const gridDisplay = document.querySelector('.grid-display');
const gridPicker = document.querySelector('#grid-picker');

function generateGrid(gridSize) {
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
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
           if (currentMode == 'normal') {
              square.style.backgroundColor = colorPicker.value;
          } else if (currentMode == 'rainbow') {
               square.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
          } else if (currentMode = 'eraser') {
               square.style.backgroundColor = 'white';
         }
     })
})
}

generateGrid(16) // Original grid
gridDisplay.textContent = `${gridPicker.value} x ${gridPicker.value}` // Original value

function gridDisplayValue(value) {
    gridDisplay.textContent = `${gridPicker.value} x ${gridPicker.value}`
    gridSize = Number(gridPicker.value);
    const rows = document.querySelectorAll('.row')
    rows.forEach((row) => {
        row.remove()
    })
    generateGrid(gridSize);
}

let currentMode = 'normal' // Default mode

const rainbowPicker = document.querySelector('#rainbow-pick');
const eraser = document.querySelector('#eraser');
const colorPicker = document.querySelector('#color-picker');
const colorMode = document.querySelector('#color-mode')

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == 'rainbow-pick') {
            currentMode = 'rainbow';
        } else if (button.id == 'eraser') {
            currentMode = 'eraser';
        } else if (button.id == 'delete') {
            const squares = document.querySelectorAll('.square');
            squares.forEach((square) => {
                square.style.backgroundColor = 'white';
            })
        } else if (button.id == 'color-mode') {
            currentMode = 'normal';
        }
    })
})