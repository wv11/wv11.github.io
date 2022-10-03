// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = "startScreen";
let startButtonSize = 200;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

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
}

function mousePressed() {
  if (state === "startScreen" && mouseInsideButton(windowWidth/2- startButtonSize, windowHeight/2 - startButtonSize + startButtonSize*2, windowHeight/2 - startButtonSize/2, (windowHeight/2 - startButtonSize/2) + startButtonSize)) {
    state = "gameStart";  
  }
}


function startingScreen() {
  let buttonX = windowWidth/2- startButtonSize;
  let buttonY = windowHeight/2 - startButtonSize/2;
  let buttonWidth = startButtonSize*2;
  let buttonHeight = startButtonSize;
  noStroke();  
  if(mouseInsideButton(buttonX, buttonX + buttonWidth, buttonY, buttonY + buttonHeight)) {
    fill(50);
    buttonHeight = buttonHeight*1.05;
    buttonWidth = buttonWidth*1.05;
    buttonX = buttonX/1.05;
    buttonY = buttonY/1.05;
  }
  else {
    fill(0);
  }
  rect(buttonX, buttonY, buttonWidth, buttonHeight);
  textSize(70);
  fill(255);
  text("START", );
}

function drawFloor() {
  fill(0);
  noStroke();
  let floorHeight = windowHeight/4;
  rect(0, windowHeight - floorHeight, windowWidth, floorHeight); 

}


function losingScreen() {

}


function mouseInsideButton(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}