// Square Around Edge
// Willa Simard
// Sept 26th
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let squareSize = 50;
let x = 0;
let y= 0;
let squareSpeed =8;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("white");
  fill("black");
  noStroke;
  drawSquare();
}

function drawSquare() {
  square(x, y, squareSize);
  if ( x < windowWidth - squareSize && y === 0) {
    x += squareSpeed;
  }
  else if( y <= windowHeight - squareSize && x !== 0) {
    y += squareSpeed;
  }
  else if ( x > 0) {
    x -= squareSpeed;
  }
  else if ( y > 0) {
    y -= squareSpeed;
  }
  

}
