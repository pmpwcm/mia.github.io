var circles = [];
var rectangles = [];
function setup(){
  createCanvas(windowWidth, windowHeight);
  noCursor();
  ellipseMode(CENTER);
  cursorDiameter = 10;
}
function draw(){
  background(255);
  for (var i = 0; i < circles.length; i++){
    circles[i].draw();
    if (circles[i].x> 700){
      circles.splice(i,1);
    }
  }

  if (mouseIsPressed){
    if(mouseButton == LEFT){
      circles.push(new Circle(mouseX,mouseY, 255,255,255));
    }

  }
  stroke(0);
  fill(255);
  ellipse(mouseX, mouseY, 10, 10);
}
function Circle(x, y, r, g , b){
  this.x= x;
  this.y = y;
  this.r = r;
  this.g = g;
  this.b = b;
  this.size = 10;
  this.draw = function(){
    this.x++;
    this.size = this.size - random(.5, 1);
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.size, this.size);
  }
}