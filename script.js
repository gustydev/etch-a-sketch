function randomRGB() {
    return Math.floor(Math.random() * (255 + 1));
}

const container = document.querySelector('.container');

const gridDisplay = document.querySelector('.grid-display');
const gridPicker = document.querySelector('#grid-picker');

let gridLines = 'on';

function generateGrid(gridSize) {
    for (let x = 0; x < gridSize; x++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let y = 0; y < gridSize; y++) {
            const square = document.createElement('div');
            square.classList.add('square');
            if (gridLines == 'on') {
                square.classList.add('line');
            }
            row.appendChild(square);
        }
        container.appendChild(row);
    }    
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        function addColor() {
            if (currentMode === 'normal') {
                square.style.backgroundColor = colorPicker.value;
            } else if (currentMode === 'rainbow') {
                 square.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
            } else if (currentMode === 'eraser') {
                 square.style.backgroundColor = 'white';
           }
        }
        square.addEventListener('mouseover', (e) => {
            if (e.buttons === 1) { // If mouse button is held down
                addColor();
            }
        square.addEventListener('mousedown', () => {
            addColor();
        })
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

let pickedColor = colorPicker.value; // Default
colorMode.style['border-color'] = pickedColor; // Default color
gridPicker.style['accent-color'] = pickedColor;

colorPicker.addEventListener('input', () => {
    pickedColor = colorPicker.value;
    gridPicker.style['accent-color'] = pickedColor;
    if (currentMode == 'normal') { // If mode is active
        colorMode.style = `border-color: ${pickedColor}`
    }
})

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (!(button.id == 'delete' || button.id == 'line-check')) {
            buttons.forEach((button) => {
                button.style = 'all: revert;'
            })
            if (button.id == 'rainbow-pick') {
                button.style = 'border-color: black; border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%); border-image-slice: 1;'
            } else if (button.id == 'color-mode') {
                button.style = `border-color: ${pickedColor};`;
            } else {
                button.style = 'border-color: black;'
            }
        } 
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
        } else if (button.id == 'line-check') {
            const squares = document.querySelectorAll('.square');
            squares.forEach((square) => {
                if (!(square.classList.contains('line'))) {
                    square.classList.add('line');
                    gridLines = 'on'
                } else {
                    square.classList.remove('line');
                    gridLines = 'off';
                }
            })
        }
    })
})
