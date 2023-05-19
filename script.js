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

let pickedColor = 'black' // Default color if nothing is picked

const rainbowPicker = document.querySelector('#rainbow-pick');

function randomRGB() {
    return 0 + Math.floor(Math.random() * (255 - 0 + 1));
}

const grayScale = document.querySelector('#gray-scale');
const eraser = document.querySelector('#eraser');

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    if (button.id == 'rainbow-pick') {
        button.addEventListener('click', () => {
            pickedColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
        })
    }
})

const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = pickedColor;
    })
})