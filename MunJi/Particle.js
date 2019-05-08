// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Simple Particle System

// A simple Particle class

class Particle {

  constructor(position) {
    this.acceleration = createVector(random(-0.05,0.05), random(-0.05,0.05));
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.position = position.copy();
    this.lifespan = 255;
    this.randomSize = random(1,12);

  }

  run() {
    this.update();
    this.display();
  }

  // Method to update position
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 3;
  }

  // Method to display
  display() {
    this.c= color(random(0,255),random(0,255),random(0,255));
    fill(this.c);
    stroke(255, this.lifespan);
    ellipse(this.position.x, this.position.y, this.randomSize, this.randomSize);
  }

  // Is the particle still useful?
  isDead() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}
