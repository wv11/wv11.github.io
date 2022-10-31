// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rows = 10;
let cols = 10;
let base;
let cellHeight;
let cellWidth;


function setup() {
  createCanvas(windowWidth, windowHeight);
  cellHeight = height/rows;
  cellWidth = width/cols;
  base = create2dArray(rows, cols);
}

function draw() {
  background(255);
  displayGrid(base);
}

function displayGrid(base) {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (base[y][x] === 0){
        fill(255);
      }
      else if (base[y][x] === 1) {
        fill(0);
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function create2dArray(cols, rows) {
  let emptyArray = [];
  for (let y = 0; y < rows; y++) {
    emptyArray.push([]);
    for (let x = 0; x < cols; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}
