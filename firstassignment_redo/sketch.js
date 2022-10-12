
//Project Title
// // Your Name
// // Date
// //
// // Extra for Experts:
// // - describe what you did to take this project "above and beyond"

let state = "startScreen";
let startButtonSize = 200;
let i;






//let hit;



let jumpV = 1;


function setup() {
  createCanvas(windowWidth, windowHeight);
  squareYpos = windowHeight - windowHeight/4 - squareSize;
}

let squareSize = 35;
let squareYpos;




function draw() { 
  background(255);
  //hit = collideRectRect();
  game();


}



function game() {
  console.log(state);
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






function drawFloor() {
  let floorHeight = windowHeight/4;  
  fill(0);  
  noStroke(); 
  rect(0, windowHeight - floorHeight, windowWidth, floorHeight);
  

}

function drawSquare()  {
  let squareY = squareYpos;
  console.log(squareYpos);
  let squarePosition = windowWidth/6;
  strokeWeight(3);
  stroke(0);
  fill(80, 212, 170);
  rect(squarePosition, squareYpos, squareSize, squareSize);
  // if (i === true) {
  //   jump();
  // }
}


function gameStart() {
  drawFloor(); 
  drawSquare();
  if (keyIsPressed && keyCode === 32) {
    jump();
  }
  

}

function mousePressed() {
  if (state === "startScreen" && mouseInsideButton(windowWidth/2- startButtonSize, windowHeight/2 - startButtonSize + startButtonSize*2, windowHeight/2 - startButtonSize/2, windowHeight/2 - startButtonSize/2 + startButtonSize)){
    state = "playGame";  
  }
}


function startingScreen() {
  //hit = false;
  textSize(90);
  let buttonX = windowWidth/2- startButtonSize;
  let buttonY = windowHeight/2 - startButtonSize/2;
  let buttonWidth = startButtonSize*2;
  let buttonHeight = startButtonSize;
  let startX = windowWidth/2 - buttonWidth/2; 
  let startY = windowHeight/2 + buttonHeight/4;
  noStroke();  
  if(mouseInsideButton(buttonX, buttonX + buttonWidth, buttonY, buttonY + buttonHeight)) {
    fill(50);
    buttonHeight = buttonHeight + 20;
    buttonWidth = buttonWidth+20;
    buttonX = buttonX/1.05;
    buttonY = buttonY/1.05;
    textSize(100);
    startX = startX - 10; 
  }
  else {
    fill(0);
  }
  rect(buttonX, buttonY, buttonWidth, buttonHeight);
  
  fill(255);
  text("START", startX, startY);
  
}




function losingScreen() {

}


function mouseInsideButton(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}



// function keyPressed() {
//   if (keyCode === 32) {
//     i = true;
//     jump();
    
       
//   }
   






function jump() {
  squareYpos -= 10;
  // while (squareYpos < windowHeight/2) {
  //   squareYpos += 1;
  console.log("jumpWorking");
    
  
}
