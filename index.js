const container = document.querySelector(".container");
const sizeOutput = document.querySelector(".size");

let row_size, col_size;

const color = ["red", "blue", "green", "orange", "yellow", "pink"];

function getSize() {
  const slider = document.querySelector(".slider");

  sizeOutput.innerText = `${slider.value} * ${slider.value}`; // Updates size value in document

  const s = slider.value; // Gets size for row and columns

  row_size = s;
  col_size = s;
  createGrid(row_size, col_size);
}

function createGrid(row_size, col_size) {
  container.innerHTML = "";

  /* Gives size of each cell dynamically based on parent container*/
  const cellSize = 512 / col_size;

  for (let i = 1; i <= row_size; i++) {
    for (let j = 1; j <= col_size; j++) {
      const cell = document.createElement("div");
      cell.style.width = cellSize + "px";
      cell.style.height = cellSize + "px";

      cell.classList.add("cell");

      cell.addEventListener("mouseover", cellChange);

      function cellChange() {
        cell.classList.add("default");
      }

      container.appendChild(cell);
    }
  }
}

function randomColor() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((e) => {
    const rand = Math.floor(Math.random() * color.length);
    console.log(rand);
    e.addEventListener("mouseover", () => {
      e.classList.remove("default");
      e.classList.add(color[rand]);
    });
  });
}
function defaultColor() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((e) => {
    
    
    e.addEventListener("mouseover", () => {
      e.classList.add("default");
     
    });
  });
}
function eraseColor() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((e) => {
    
    
    e.addEventListener("mouseover", () => {
      
      e.classList.remove(...e.classList);
      e.classList.add("cell");
     
    });
  });
}

/*      To create the initial grid      */
createGrid(16, 16);
