// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = 20;
    this.diameter = 7;
    this.color = color(0);
  }

  move() {
    this.x += this.dx;
  }

  display() {
    fill(this.color);
    stroke(this.color);
    circle(this.x, this.y, this.diameter);
  }

  isDead() {
    return this.x >= windowWidth;
  }
}

let theBullets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  for (let i = 0; i < theBullets.length; i ++) {
    theBullets[i].move();
    if (theBullets[i].isDead()) {
      theBullets.splice(i, 1);
    }
    else {
      theBullets[i].display();
    }      
  }
}


function mousePressed() {
  let someBullet = new Bullet(150, windowHeight/2);
  theBullets.push(someBullet);

}