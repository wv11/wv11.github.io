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
let walls;
let layout;


function preload() {
  floorTex = loadImage("floor_texture.png");
  layout = loadJSON("layout.json");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellHeight = height/rows;
  cellWidth = width/2/cols;
  base = createArray(rows, cols);
  //startingPoint = base[base.length][0];
  
}

function draw() {
  background(0);
  displayGame(layout);
}

function displayGame(base) {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (base [y][x] === 0) {
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        image(floorTex, x*cellWidth, y*cellHeight, cellWidth, cellHeight );
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
