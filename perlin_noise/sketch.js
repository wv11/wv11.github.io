// Perlin Noise Demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let allCircles = [];

function keyPressed() {
  let theBall = {
    x: random(width),
    y: random(height),
    diameter: (100, 200),
    time: random(5000),
  };
  allCircles.push(theBall);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  for(let i=0; i < allCircles.length; i++) {
    allCircles[i].x = noise(allCircles[i].time) * width;
    allCircles[i].y = noise(allCircles[i].time + 5000) * height;
  
    // increase time along noise
    allCircles[i].time+= 0.01;
    fill("black");
    circle(allCircles[i].x, allCircles[i].y, allCircles[i].diameter);

  }






}
