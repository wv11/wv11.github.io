// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let numOfClicks = 0;
let highestEver = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  if (getItem("highscore") !== null){
    highestEver = getItem("highscore");
  }
  else {
    storeItem("highscore", 0);
  }
}

function draw() {
  background(220);
  textSize(100);
  fill(0);
  text(numOfClicks, width/2, height/2);
  fill("red");

  text(highestEver, 100, height-100);
}

function mousePressed() {
  numOfClicks++;
  if (numOfClicks > getItem("highscore")) {
    storeItem("highscore", numOfClicks);
    highestEver = numOfClicks;
  }
}