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
let floorMoveSpeed = 15;
let bgMoveSpeed = 5;
let barrierStart = 35;
let speedMultiplyer = 2;



function setup() {
  createCanvas(windowWidth, windowHeight);
  theHeightsFloor = generateHeightsFloor(10000);
  theHeightsBG = generateHeightsBG(10000);
}

function draw() {
  let barrierEnd = 10000 - width - 35;
  background(255);
  //fill(0);
  for (let i = startingLocationBG; i < startingLocationBG + width; i++) {
    
    displayRectangleBG(i-startingLocationBG, theHeightsBG[i], 1);
  }

  for (let i = startingLocationFloor; i < startingLocationFloor + width; i++) {
    displayRectangleFloor(i-startingLocationFloor, theHeightsFloor[i], 1);
  }
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
  fill(0);
  stroke(0);
  let y = height - rectHeight;
  rect(x, y, rectWidth, rectHeight);   
}

function displayRectangleBG(x, rectHeight, rectWidth) {
  fill(150);
  stroke(150);
  let y = height - rectHeight;
  rect(x, y, rectWidth, rectHeight);
}


function generateHeightsFloor(howMany) {
  let tempArray = [];
  let time1 = random(10000);
  for (let i = 0; i < howMany; i++) {
    tempArray.push(noise(time1) * height/2.4);
    time1 += 0.0009;

  }
  return tempArray;
}


function generateHeightsBG(howMany) {
  let newArray = [];
  let time2 = random(10000);
  for (let i = 0; i < howMany; i++) {
    newArray.push(noise(time2) * height);
    time2 += 0.001;
  }
  return newArray;
}

