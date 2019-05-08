// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Particles are generated each cycle through draw(),
// fall with gravity and fade out over time
// A ParticleSystem object manages a variable size
// list of particles.

// 참고가 되는 책 내용은 아래와 같습니다.
// https://natureofcode.com/book/chapter-4-particle-systems/


let particleSystem;
let bColor;

function setup() {
  createCanvas(640, 360);
  particleSystem = new ParticleSystem(createVector(width / 2, 50));
}

function mouseDragged(e) {
  particleSystem.origin = createVector(mouseX, mouseY);
  particleSystem.addParticle();
  particleSystem.addParticle();
  // bColor = random(mouseX,mouseY);
  // background(bColor,bColor,bColor);
  //console.log(e);
  
