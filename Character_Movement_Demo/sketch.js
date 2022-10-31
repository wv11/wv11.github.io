// Character Movement Demo
// Willa Simard

// This is a small demo of character movement. I'd like to continue working on it in the future and possibly make something bigger out of it. 
// I made the character and animations myself and made the background with help from the perlin noise demo in class. 

// Extra For Experts:
// Multiple layers and movement using perlin noise terrain.
// Using different animations to represent different movements. 
// (I feel like I focused more on the aesthetic quality rather than code quality so I don't think I extended my knowledge as much as I could have).

let theHeightsFloor = [];
let theHeightsBG = [];
let startingLocationFloor = 0;
let startingLocationBG = 0;
let floorMoveSpeed = 5;
let bgMoveSpeed = 1;
let barrierStart = 35;
let speedMultiplyer = 2;
let characterSize = 400;
let mouseInButton = false;
let characterIdleRight;
let characterIdleLeft;
let characterWalkRight;
let characterWalkLeft;
let characterRunRight;
let characterRunLeft;
let directionState = "right";
let gameState = "start";

function preload() {
  characterIdleRight = loadImage("idle_right.gif");
  characterIdleLeft = loadImage("idle_left.gif");
  characterWalkRight = loadImage("walk_right.gif");
  characterWalkLeft = loadImage("walk_left.gif");
  characterRunRight = loadImage("run_right.gif");
  characterRunLeft = loadImage("run_left.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  theHeightsFloor = generateHeightsFloor(10000);
  theHeightsBG = generateHeightsBG(10000);
  imageMode(CENTER);
}

function draw() { 
  background(77, 136, 255);
  if (gameState === "play") {
    play();
  }
  if (gameState === "start") {
    startingScreen();
  }

}

function mouseInsideButton(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}

function mousePressed() {
  if(gameState === "start" && mouseInButton === true) {
    gameState = "play";
  }

}

function play() {  
  let barrierEnd = 10000 - width - 35;
  for (let i = startingLocationBG; i < startingLocationBG + width; i++) {  
    displayRectangleBG(i-startingLocationBG, theHeightsBG[i], 1);
  }
  for (let i = startingLocationFloor; i < startingLocationFloor + width; i++) { 
    displayRectangleFloor(i-startingLocationFloor, theHeightsFloor[i], 1);  
  }

  let x = Math.floor(width/2);

  // walking right
  if (keyIsDown(68) && !keyIsDown(16) && startingLocationFloor <= barrierEnd) {
    image(characterWalkRight, width/2, height - theHeightsFloor[startingLocationFloor+x] - 165, characterSize, characterSize);
    startingLocationFloor+=  floorMoveSpeed;
    startingLocationBG += bgMoveSpeed;
    directionState = "right";
  }

  // running right
  else if (keyIsDown(16) && keyIsDown(68) && startingLocationFloor <= barrierEnd) {
    image(characterRunRight, width/2, height - theHeightsFloor[startingLocationFloor+x] - 165, characterSize, characterSize);
    startingLocationFloor+= floorMoveSpeed*speedMultiplyer;
    startingLocationBG += bgMoveSpeed*speedMultiplyer;
    directionState = "right";
  }

  // walking left
  else if (keyIsDown(65) && !keyIsDown(16) && startingLocationFloor >= 35) {
    image(characterWalkLeft, width/2, height - theHeightsFloor[startingLocationFloor+x] - 165, characterSize, characterSize);
    startingLocationFloor -= floorMoveSpeed;
    startingLocationBG -= bgMoveSpeed;
    directionState = "left";
  }

  // running left
  else if (keyIsDown(16) && keyIsDown(65) && startingLocationFloor >= 35) {
    image(characterRunLeft, width/2, height - theHeightsFloor[startingLocationFloor+x] - 165, characterSize, characterSize);
    startingLocationFloor -= floorMoveSpeed*speedMultiplyer;
    startingLocationBG -= bgMoveSpeed*speedMultiplyer;
    directionState = "left";
  }
  
  else {
    // idle right
    if (directionState === "right") {
      image(characterIdleRight, width/2, height - theHeightsFloor[startingLocationFloor+x] - 165, characterSize, characterSize);
    }

    // idle left
    if (directionState === "left") {
      image(characterIdleLeft, width/2, height - theHeightsFloor[startingLocationFloor+x] - 165, characterSize, characterSize);
    }
  }
}

function startingScreen() {
  let buttonWidth = 400;
  let buttonHeight = 200;
  let buttonX = width/2 - buttonWidth/2;
  let buttonY = height/2 - buttonHeight/2;
  background(0, 60, 179);
  textSize(90);
  fill(255);
  stroke(0, 26, 77);
  strokeWeight(10);
  rect(buttonX, buttonY, buttonWidth, buttonHeight);
  fill(77, 136, 255);
  text("PLAY", width/2- 110, height/2 + 35);
  
  if (mouseInsideButton(buttonX, buttonX + buttonWidth, buttonY, buttonY + buttonHeight)) {
    mouseInButton = true;
    strokeWeight(10);
    stroke(0, 26, 77);
    fill(77, 136, 255);
    rect(buttonX, buttonY, buttonWidth, buttonHeight);
    fill(255);
    text("PLAY", width/2- 110, height/2 + 35);
  }

  // instructions
  textSize(30);
  fill(255);
  stroke(0);
  text("Use A and D to move left and right", width/2 - 230, height - 250);
  text("Hold Shift to sprint", width/2 - 130, height- 200);


  // title
  textSize(100); 
  fill(255);
  stroke(0, 26, 77);
  text("Character Movement Demo", width/2- 570, height/2 - 170);


}

function displayRectangleFloor(x, rectHeight, rectWidth) {
  fill(0, 26, 77);
  stroke(0, 26, 77);
  let y = height - rectHeight;
  rect(x, y, rectWidth, rectHeight);   
}

function displayRectangleBG(x, rectHeight, rectWidth) {
  fill(0, 60, 179);
  stroke(0, 60, 179);
  let y = height - rectHeight;
  rect(x, y, rectWidth, rectHeight);
}

function generateHeightsFloor(howMany) {
  let tempArray = [];
  let time1 = random(10000);
  for (let i = 0; i < howMany; i++) {
    tempArray.push(noise(time1) * height/3);
    time1 += 0.0007;

  }
  return tempArray;
}

function generateHeightsBG(howMany) {
  let newArray = [];
  let time2 = random(10000);
  for (let i = 0; i < howMany; i++) {
    newArray.push(noise(time2) * height*1.1);
    time2 += 0.001;
  }
  return newArray;
}


