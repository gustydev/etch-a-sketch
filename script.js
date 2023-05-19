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

const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = 'black';
    })
})