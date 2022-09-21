// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let w = 4;
let h = 8;




function setup() {
  createCanvas(windowWidth*2, windowHeight*2);
}

function draw() {
  background(255);
  drawCrosshair();
  //randomTargets();
}


function drawCrosshair() {
  fill(0, 255, 0);
  noStroke();
  let x = windowWidth/2;
  let y = windowHeight/2;
  rect(x, y - h , w, h);
  rect(x, y + w, w, h);
  rect(x - h, y, h, w);
  rect(x + w, y, h, w);
}

function randomTargets() {
  let randomX = random(0, windowWidth);
  let randomY = random(0, windowHeight);
  fill("red");
  circle(randomX, randomY, 100);
}