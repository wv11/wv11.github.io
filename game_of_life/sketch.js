// Game of Life
// Willa Simard
// 10/27/2022

let rows = 40;
let cols = 40;
let grid;
let cellWidth;
let cellHeight;
let autoplay = false;
let gosperGun;

function preload() {
  gosperGun = loadJSON("gosperglider.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/cols;
  cellHeight = height/rows;
  grid = createRandom2dArray(cols, rows);
}

function draw() {
  background(220);
  if (autoplay && frameCount % 3 === 0) {
    grid = takeTurn(grid);
  }
  displayGrid(grid);
}

function mousePressed() {
  let xPos = Math.floor(mouseX/cellWidth);
  let yPos = Math.floor(mouseY/cellHeight);
  if ( grid[yPos][xPos] === 0) {
    grid[yPos][xPos] = 1;
  }
  else if (grid[yPos][xPos] === 1) {
    grid[yPos][xPos] = 0;
  }


}

function keyPressed() {
  if (key === "e") {
    grid = create2dArray(cols, rows);
  }
  if (key === " ") {
    grid = takeTurn(grid);
  }
  if (key === "a") {
    autoplay = !autoplay;
  }
  if (key === "g") {
    grid = gosperGun;
  }
}

function takeTurn(grid) {
  let nextTurn = create2dArray(cols, rows);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++){
      let neighbors = 0;
      // check all cells around this one

      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j<=1; j++) {
          // edge case check
          if (y+i >= 0 && y+i < rows && x+j >= 0 && x+j < cols) {
            neighbors += grid[y+i][x+j];
          }
        }
      }
      // dont count self
      neighbors -= grid[y][x];

      // apply rules
      if (grid[y][x] ===1) { // alive
        if (neighbors === 2 || neighbors === 3) {
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }
      if (grid[y][x] === 0) { // dead
        if (neighbors === 3) {
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x]  = 0;
        }
      }
    }
  }

  return nextTurn;

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

function createRandom2dArray(cols, rows) {
  let emptyArray = [];
  for (let y = 0; y < rows; y++) {
    emptyArray.push([]);
    for (let x = 0; x < cols; x++) {
      if(random(100) < 50) {
        emptyArray[y].push(0);
      }
      else {
        emptyArray[y].push(1);
      }
    }
  }
  return emptyArray;
}

