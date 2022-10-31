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
  cellHeight = height/cols;
  cellWidth = width/height;
}

function draw() {
  background(220);
}

function displayGrid(grid) {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0){
        fill(255);
      }
      else if (grid[y][x] === 1) {
        fill(0);
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}
