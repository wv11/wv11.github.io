// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let startScreen = true;



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  if (startScreen === true) {
    startingScreen();
  }
  else if (startScreen === false) {
    gameStart();
  }
}

function gameStart() {
  drawFloor();
}


function startingScreen() {
  let startButtonSize = 200;
  noStroke();
  fill(73, 204, 223);
  rect(windowWidth/2- startButtonSize, windowHeight/2 - startButtonSize/2, startButtonSize*2, startButtonSize);

}



function drawFloor() {
  fill(0);
  noStroke();
  let floorHeight = windowHeight/4;
  rect(0, windowHeight - floorHeight, windowWidth, floorHeight); 
}


