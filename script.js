function getGridSize() {
  let gridSize = prompt("Enter a grid size from 1-100: ") || 32;
  while (gridSize < 1 || gridSize > 100) {
    gridSize = prompt("Enter a grid size from 1-100: ") || 32;
  }
  return gridSize;
}

function reset() {
  console.log("reset!!!")
  const gridBoxes = document.querySelectorAll('.grid-box');
  gridBoxes.forEach((box) => {
    box.remove();
  });
  createGrid(getGridSize());
}

function createGrid(gridSize) {
  container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, auto)`;
  for (let i = 1; i <= (gridSize * gridSize); i++) {
    const newDiv = document.createElement('div');
    newDiv.id = `div-${i}`;
    newDiv.className = 'grid-box';
    newDiv.value = 0;
    container.appendChild(newDiv);

    newDiv.addEventListener('mouseenter', (e) => {
      e.target.value += 0.1;
      e.target.style.backgroundColor = `rgba(0,0,0, ${e.target.value})`;
    })
  }
}

const container = document.querySelector('#grid-container');

createGrid(getGridSize());

