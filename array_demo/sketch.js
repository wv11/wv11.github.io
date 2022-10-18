// Array Demo
// Willa Simard

let theCircles = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  noStroke();
  displayCircles();
}



function mouseDragged() {
  spawnCircle();
}

function mousePressed() {
  spawnCircle();
}



function spawnCircle() {
  let thisCircle = {
    x: mouseX,
    y: mouseY,
    radius: 50,
  };
  theCircles.push(thisCircle);
}

function displayCircles() {
  for (let i = 0; i < theCircles.length; i++) {
    circle(theCircles[i].x, theCircles[i].y, theCircles[i].radius);
  }
}