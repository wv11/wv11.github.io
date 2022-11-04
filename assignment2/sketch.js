// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rows = 17;
let cols = 17;
let base;
let cellHeight;
let cellWidth;
let playerX= 0;
let playerY = 0;
let startingPoint = 3;
let floorTex;
let chestTexDown;
let chestTexUp;
let wallTex;
let doorTexLeft;
let doorTexRight;
let doorTexDown;
let doorTexUp;
let layout;


function preload() {
  floorTex = loadImage("floor_texture.png");
  chestTexDown = loadImage("chestTexDown.png");
  chestTexUp = loadImage("chestTexUp.png");
  wallTex = loadImage("wall_texture.png");
  doorTexLeft = loadImage("door_left.png");
  doorTexRight = loadImage("door_right.png");
  doorTexUp = loadImage("door_up.png");
  doorTexDown = loadImage("door_down.png");
  layout = loadJSON("layout.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellHeight = height/rows;
  cellWidth = width/2/cols;
  base = createArray(rows, cols);
  // startingPoint = base[base.length][0];
  
}

function draw() {
  background(0);
  displayGame(layout);
}

function displayGame(base) {
  noStroke();
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (base [y][x] === 0) {
        
        image(floorTex, x*cellWidth, y*cellHeight, cellWidth, cellHeight );
      }
      else if (base[y][x] === 1) {
        image(wallTex, x*cellWidth, y*cellHeight, cellWidth, cellHeight );
      }
      else if (base[y][x] === 2) {
        image(doorTexLeft, x*cellWidth, y*cellHeight, cellWidth, cellHeight );
      }
      else if (base [y][x] === 3) {
        
        image(chestTexDown, x*cellWidth, y*cellHeight, cellWidth, cellHeight );
      }
      else if (base [y][x] === 4) {
        
        image(chestTexUp, x*cellWidth, y*cellHeight, cellWidth, cellHeight );
      }
      else if (base [y][x] === 5) {
        
        image(doorTexRight, x*cellWidth, y*cellHeight, cellWidth, cellHeight );
      }
      else if (base [y][x] === 7) {
        
        image(doorTexDown, x*cellWidth, y*cellHeight, cellWidth, cellHeight );
      }

    }
  }
}

function createArray(cols, rows) {
  let emptyArray = [];
  for (let y = 0; y < rows; y++) {
    emptyArray.push([]);
    for (let x = 0; x < cols; x++) {     
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}
