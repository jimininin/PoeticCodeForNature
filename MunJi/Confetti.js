// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Child class constructor
class Confetti extends Particle {

  // Override the display method
  display() {
    this.c= color(random(0,255),random(0,255),random(0,255));
    rectMode(CENTER);
    fill(this.c);
    stroke(255, this.lifespan);
    strokeWeight(2);
    push();
    translate(this.position.x, this.position.y);
    var theta = map(this.position.x, 0, width, 0, TWO_PI * 2);
    rotate(theta);
    rect(0, 0, this.randomSize, this.randomSize);
    pop();
  }

}
