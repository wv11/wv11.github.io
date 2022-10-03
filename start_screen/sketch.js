// Start Screen Demo
// Willa Simard
// 10/03/2022

let state = "start";



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if (state === "start") {
    startScreen();
  }
}


function mousePressed() {
  if (state === "start" && mouseInsideButton(400, 700, 400, 550)) {
    state = "main";
  }
}
 


function startScreen() {
  if(mouseInsideButton(400, 700, 400, 550)) {
    fill("gray");
  }
  else { 
    fill("black");
  }
  rect(400, 400, 300, 150);

}

function mouseInsideButton(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}