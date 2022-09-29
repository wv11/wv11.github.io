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
  fill(0);
  noStroke();
  if (startScreen === false) {
    drawFloor();
  }
}






function drawFloor() {
  let floorHeight = windowHeight/4;
  rect(0, windowHeight - floorHeight, windowWidth, floorHeight); 
}


