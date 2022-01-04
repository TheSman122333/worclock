function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);




}

function draw() {
  background(255,255,255);  
  translate(200,200)
  rotate(-90)

  hr = hour();
  mn = minute();
  sc = second();
  angleMode(DEGREES);
  


  scAngle = map(sc, 0, 60, 0, 360)
  mnAngle = map(mn,0,60,0,360)
  hrAngle = map(hr % 12,0,12,0,360)
  noFill()
  stroke(255, 0, 0)
  strokeWeight(3);
  arc(0, 0, 300, 300, 0,scAngle);


  stroke(0, 255, 0)
  strokeWeight(9);
  arc(0, 0, 280, 280, 0,mnAngle);


  stroke(0, 0, 255)
  strokeWeight(16);
  arc(0, 0, 245, 245, 0,hrAngle);


  //seconds
  push()
  rotate(scAngle)
  stroke(255, 0, 0)
  strokeWeight(7);
  line(0,0,100,0)
  pop()

  push()
  rotate(hrAngle)
  stroke(0, 0, 255)
  strokeWeight(7);
  line(0,0,50,0)
  pop()

  push()
  rotate(mnAngle)
  stroke(0, 255, 0)
  strokeWeight(7);
  line(0,0,75,0)
  pop()

  drawSprites();
}