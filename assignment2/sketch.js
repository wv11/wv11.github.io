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
let startingPoint;
let floorTex;
let chestTexDown;
let chestTexUp;
let wallTex;
let doorTexLeft;
let doorTexRight;
let doorTexDown;
let doorTexUp;
let playerFront;
let startButton;
let layout;
let playerX = 0;
let playerY = 16;
let doorState;
let gameState = "start";
let inventory = [];



function preload() {
  floorTex = loadImage("floor_texture.png");
  chestTexDown = loadImage("chestTexDown.png");
  chestTexUp = loadImage("chestTexUp.png");
  wallTex = loadImage("wall_texture.png");
  doorTexLeft = loadImage("door_left.png");
  doorTexRight = loadImage("door_right.png");
  doorTexUp = loadImage("door_up.png");
  doorTexDown = loadImage("door_down.png");
  playerFront = loadImage("player_front.png");
  layout = loadJSON("layout.json");
  startButton = loadImage("startButton.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellHeight = height/rows;
  cellWidth = width/2/cols;
  base = createArray(rows, cols);
  layout[playerY][playerX] = 8;
}

function draw() {
  background(0);
  if (gameState === "play") {
    displayGame(layout);
    displayInv();
  }
  else if (gameState === "start") {
    startScreen();

  }

}

function keyPressed() {
  if (keyCode === 68) {
    if (layout[playerY][playerX + 1] === 0) {
      layout[playerY][playerX] = 0;
      playerX++;
      layout[playerY][playerX] = 8;
    }
  }
  if (keyCode === 65) {
    if (layout[playerY][playerX - 1] === 0){
      layout[playerY][playerX] = 0;
      playerX--;
      layout[playerY][playerX] = 8;
    }
  }
  if (keyCode === 87) {
    if (layout[playerY - 1][playerX] === 0) {
      layout[playerY][playerX] = 0;
      playerY--;
      layout[playerY][playerX] = 8;
    }
  }
  if (keyCode === 83) {
    if (layout[playerY + 1][playerX] === 0) {
      layout[playerY][playerX] = 0;
      playerY++;
      layout[playerY][playerX] = 8;
    }
  }
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
      else if (base [y][x] === 6) {        
        image(doorTexUp, x*cellWidth, y*cellHeight, cellWidth, cellHeight );
      }     
      else if (base [y][x] === 7) {        
        image(doorTexDown, x*cellWidth, y*cellHeight, cellWidth, cellHeight );
        if (doorState === "doorTwoOpen") {
          image(doorTexLeft, x*cellWidth, y*cellHeight, cellWidth, cellHeight );
        }
      }
      else if (base[y][x] === 8) {
        image(playerFront, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
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

function startScreen() {
  background("black");
  let buttonWidth = 300;
  let buttonHeight = 200;
  image(startButton, windowWidth/2 - buttonWidth/2, windowHeight/2 - buttonHeight/2, buttonWidth, buttonHeight);

}

function displayInv() {

}
