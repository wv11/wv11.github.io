// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theHeightsFloor = [];
let theHeightsBG = [];
let startingLocationFloor = 0;
let startingLocationBG = 0;
let floorMoveSpeed = 10;
let bgMoveSpeed = 2;
let barrierStart = 35;
let speedMultiplyer = 2;
let characterSprite;
let state;

function preload() {
  characterSprite = loadImage("oie_270221522L2b3vO.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  theHeightsFloor = generateHeightsFloor(10000);
  theHeightsBG = generateHeightsBG(10000);
  imageMode(CENTER);
}

function draw() {

  let barrierEnd = 10000 - width - 35;
  background(77, 136, 255);

  
  //fill(0);
  for (let i = startingLocationBG; i < startingLocationBG + width; i++) {
    
    displayRectangleBG(i-startingLocationBG, theHeightsBG[i], 1);
  }
  for (let i = startingLocationFloor; i < startingLocationFloor + width; i++) { 
    displayRectangleFloor(i-startingLocationFloor, theHeightsFloor[i], 1);
    
  }
  // for (let i = startingLocationFloor; i < startingLocationFloor + width; i++) {
    let x = Math.floor(width/2);
    image(characterSprite, width/2, height - theHeightsFloor[startingLocationFloor+x] - 150, 400, 400);
  // }
  if (keyIsDown(68) && startingLocationFloor <= barrierEnd) {
    startingLocationFloor+=  floorMoveSpeed;
    startingLocationBG += bgMoveSpeed;
    if (keyIsDown(16) && keyIsDown(68)) {
      startingLocationFloor+= floorMoveSpeed*speedMultiplyer;
      startingLocationBG += bgMoveSpeed*speedMultiplyer;
    }
  }
  if (keyIsDown(65) && startingLocationFloor >= 35) {
    startingLocationFloor -= floorMoveSpeed;
    startingLocationBG -= bgMoveSpeed;
    if (keyIsDown(16) && keyIsDown(65)) {
      startingLocationFloor -= floorMoveSpeed*speedMultiplyer;
      startingLocationBG -= bgMoveSpeed*speedMultiplyer;
    }
  }
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


