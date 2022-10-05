
//Project Title
// // Your Name
// // Date
// //
// // Extra for Experts:
// // - describe what you did to take this project "above and beyond"

let state = "startScreen";
let startButtonSize = 200;
let floorHeight = windowHeight/4;
let hit;
let squarePosition = windowWidth/6;
let squareSize = 25;
let squareY = floorHeight - squareSize;
let jumpV = 1;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  //hit = collideRectRect();

  if (state === "startScreen") {
    startingScreen();
  }
  else if (state === "playGame") {
    gameStart();
  }
  else if (state === "losingScreen") {
    losingScreen();
  }
}

function gameStart() {
  drawFloor();
  drawSquare();

}

function mousePressed() {
  if (state === "startScreen" && mouseInsideButton(windowWidth/2- startButtonSize, windowHeight/2 - startButtonSize + startButtonSize*2, windowHeight/2 - startButtonSize/2, windowHeight/2 - startButtonSize/2 + startButtonSize)){
    state = "playGame";  
  }
}


function startingScreen() {
  hit = false;
  textSize(90);
  let buttonX = windowWidth/2- startButtonSize;
  let buttonY = windowHeight/2 - startButtonSize/2;
  let buttonWidth = startButtonSize*2;
  let buttonHeight = startButtonSize;
  let startX = windowWidth/2 - buttonWidth/2; 
  let startY = windowHeight/2 + buttonHeight/4;
  noStroke();  
  if(mouseInsideButton(buttonX, buttonX + buttonWidth, buttonY, buttonY + buttonHeight)) {
    fill(50);
    buttonHeight = buttonHeight + 20;
    buttonWidth = buttonWidth+20;
    buttonX = buttonX/1.05;
    buttonY = buttonY/1.05;
    textSize(100);
    startX = startX - 10; 
  }
  else {
    fill(0);
  }
  rect(buttonX, buttonY, buttonWidth, buttonHeight);
  
  fill(255);
  text("START", startX, startY);
  
}

function drawFloor() {
  fill(0);
  noStroke();
  
  rect(0, windowHeight - floorHeight, windowWidth, floorHeight); 

}


function losingScreen() {

}


function mouseInsideButton(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}

function keyPressed() {
  if (keyCode === 32) {
    jump();   
  }
}


function drawSquare() {
  stroke(100);
  fill(255);
  rect(squarePosition, squareY, squareSize, squareSize);
}



function jump() {
  while (squareY < windowHeight/2) {
    jumpV --;
    squareY - jumpV;
  }
  
}