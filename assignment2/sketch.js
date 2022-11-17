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
let verDoor = false;
let horDoor = false;
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

function mousePressed() {
  if (gameState === "start" && mouseInsideButton(windowWidth/2 - 300/2, windowWidth/2 + 300/2, windowHeight/2 - 130/2, windowHeight/2 + 90/2) ) {
    gameState = "play";
  }
}

function mouseInsideButton(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}

function keyPressed() {

  if (keyCode === 68) { //right
    if (layout[playerY][playerX + 1] === 0) {
      layout[playerY][playerX] = 0;
      playerX++;
      layout[playerY][playerX] = 8;
    }
  }

  if (keyCode === 65) { //left
    if (layout[playerY][playerX - 1] === 0){
      layout[playerY][playerX] = 0;
      playerX--;
      layout[playerY][playerX] = 8;
    }
  }

  if (keyCode === 87) { //up
    if (layout[playerY - 1][playerX] === 0) {
      layout[playerY][playerX] = 0;
      playerY--;
      layout[playerY][playerX] = 8;
    }

  }

  if (keyCode === 83) { //down
    if (layout[playerY + 1][playerX] === 0) {
      layout[playerY][playerX] = 0;
      playerY++;
      layout[playerY][playerX] = 8;
    }

  }

  if (layout[playerY][playerX + 1] === 11) {
    if (keyCode === 69) {
      doorState = "doorOneOpen";
    }
    if (doorState === "doorOneOpen" && keyCode === 68) {
      playerX = playerX + 2;
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
      else if (base [y][x] === 3) {
        image(chestTexDown, x*cellWidth, y*cellHeight, cellWidth, cellHeight );
      }
      else if (base [y][x] === 4) {        
        image(chestTexUp, x*cellWidth, y*cellHeight, cellWidth, cellHeight );
      }      
      else if (base[y][x] === 8) {
        image(playerFront, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if (base[y][x] === 11) { // first door
        image(doorTexLeft, x*cellWidth, y*cellHeight, cellWidth, cellHeight );
        if (doorState === "doorOneOpen") {
          image(doorTexDown, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        }
      }
      else if (base [y][x] === 12) {       // second door  
        image(doorTexDown, x*cellWidth, y*cellHeight, cellWidth, cellHeight );
        if (doorState === "doorTwoOpen") {
          image(doorTexLeft, x*cellWidth, y*cellHeight, cellWidth, cellHeight );
        }
      }
      else if (base [y][x] === 13) {        // third door 
        image(doorTexRight, x*cellWidth, y*cellHeight, cellWidth, cellHeight );
        if (doorState === "doorThreeOpen") {
          image(doorTexUp, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        }
      }
      else if (base [y][x] === 14) {         // forth door
        image(doorTexUp, x*cellWidth, y*cellHeight, cellWidth, cellHeight );
        if (doorState === "doorFourOpen") {
          image(doorTexRight, x*cellWidth, y*cellHeight, cellWidth, cellHeight );
        }
      }   
      else if (base[y][x] ===15) { // fifth door
        image(doorTexLeft, x*cellWidth, y*cellHeight, cellWidth, cellHeight );
        if (doorState === "doorFiveOpen") {
          image(doorTexDown, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        }
      } 
      else if (base[y][x] ===16) { // sixth door
        image(doorTexLeft, x*cellWidth, y*cellHeight, cellWidth, cellHeight );
        if (doorState === "doorSixOpen") {
          image(doorTexDown, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        }
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
  if (mouseInsideButton(windowWidth/2 - 300/2, windowWidth/2 + 300/2, windowHeight/2 - 130/2, windowHeight/2 + 90/2)) {
    buttonWidth += 50;
    buttonHeight += 25;
    image(startButton, windowWidth/2 - buttonWidth/2, windowHeight/2 - buttonHeight/2, buttonWidth, buttonHeight);
  }
}

function displayInv() {

}

