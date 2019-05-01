let x, y;
x = 0;
y = 0;

let w = 25;
let p1 = 0.25;
let p2 = 0.5;
let p3 = 0.75;
let g = 150;
let b = 50;

function setup() {
  title = createElement('h2', "<a href='/PoeticCodeForNature'> HOME : </a> 바코드");
  title.position(20, 0);

  canvas = createCanvas(400, 400);
  canvas.position(20, 60);
  canvas.class("artwork");

  description = "\
  작품에 대한 설명이 들어갑니다. <br/> \
  HTML이 직접 들어가서 줄넘김을 할 수 있습니다. \
  ";
  text = createDiv(description);
  text.position(20, 400);
  text.style("font-family", "monospace");
  text.style("font-size", "12pt");

  background(0);
  stroke(200);

}

function draw() {
  rectMode(CENTER);
  strokeWeight(3);
  fill('black');
  rect(width/2,height/2,100,60,5);
  strokeWeight(1);

  if (random() <= p1) {
    stroke(color(0,g,b));

  	line(x, y+w, x+w, y+w);
  } else if(p1 < random() <= p2){
  	line(x+w, y, x+w, y+w);
  } else if (p2 < random() <=p3){
    line(x, y, x+w, y+w);
  }
    else if (p3 < random()){
    line(x+w, y, x, y+w);
  }

  x = x + w;

  if (x > width) {
    y = y + w;
    x = 0;
  }

  if (y > height) {
    background(0,0.5);
    x = 0;
    y = 0;
    w = random(20, 30);
    p = random(0.25,0.75);
    console.log(p);
    g = random(0,255);
    b = random(0,200);

  }
}
