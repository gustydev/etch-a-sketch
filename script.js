const container = document.querySelector('.container');

for (let y = 0; y < 16; y++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let i = 0; i < 16; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
    }
    container.appendChild(row);
}
