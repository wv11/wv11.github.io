// Image Demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let fishImg;
let imageSize = 1;

function preload() {
  fishImg = loadImage("fish.png");
  
}




function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  image(fishImg, mouseX, mouseY, fishImg.width/imageSize, fishImg.height/imageSize);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    imageSize = imageSize * 1.5;
  }
  else if (keyCode === DOWN_ARROW) {
    imageSize = imageSize * 0.5;
  }

}


// if (keyIsDown(UP_ARROW)) {
//   imageSize += 1;
// }
// else if (keyIsDown(DOWN_ARROW)) {
//   imageSize -= 1;
// }