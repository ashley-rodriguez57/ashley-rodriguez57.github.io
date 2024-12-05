let eyeSpacing = 47;
let lookAmount;
let newBg = 0;

function setup() {
  createCanvas(400, 400);
  noCursor();
}

function draw() {
  
  noStroke();
  background(248, 207, 247);
  
  newBg = map(mouseY, 200, 300, 0, 255, 1);
  background(248, 223, 129,newBg);
  
  newBg = map(mouseX, 200, 300, 0, 255, 1);
  background(161, 221, 245,newBg);
  
  //ear left
  fill(188, 176, 171);
  ellipse(125, 130, 140, 140);
  
  //ear right
  fill(188, 176, 171);
  ellipse(279, 130, 140, 140); 
  
  //inner ear left
  fill(221, 199, 206);
  ellipse(125, 140, 90, 96);
  
  //inner ear right
  fill(221, 199, 206);
  ellipse(275, 140, 90, 96);
  
  //head
  fill(188, 176, 171);
  ellipse(200, 200, 193, 180);
  
  //snout
  fill(188, 176, 171);
  ellipse(200, 225, 164, 180);
  
  //nose
  fill(236, 201, 212);
  ellipse(200, 308, 40, 50);
  
  //eye left
  fill(118, 79, 91)
  ellipse(153, 223, 34, 45); 
  
  //eye right
  fill(118, 79, 91)
  ellipse(247, 223, 34, 45);
 
  //whiskers
  noFill(); 
  stroke(153, 141, 145);
  strokeWeight(3);
  
  //left
  arc(142,253,60,60, PI/2, 6*PI/7);
  arc(148,263,100,60, PI/2, 6*PI/7);
  
  //right
  arc(258,253,60,60, PI/7, PI/2);
  arc(252,263,100,60, PI/7, PI/2);

  
  lookAmount = map(mouseX, 0, 400, -5, 2, 1);
  
  //moving small eye shines
  noStroke();
  fill(237, 229, 231)
  ellipse(205 - eyeSpacing + lookAmount,210,5,5);
  ellipse(205 + eyeSpacing + lookAmount,210,5,5);
  
  fill(188, 160, 173)
  ellipse(200 - eyeSpacing + lookAmount,218,5,5);
  ellipse(200 + eyeSpacing + lookAmount,218,5,5);
  
  fill(237, 229, 231)
  ellipse(213 - eyeSpacing + lookAmount,220,7,7);
  ellipse(213 + eyeSpacing + lookAmount,220,7,7);
  
  //big eye shine left
  fill(237, 229, 231)
  ellipse(108 + eyeSpacing - lookAmount,233, 20, 15);
  
  //big eye shine right
  fill(237, 229, 231)
  ellipse (202 + eyeSpacing - lookAmount,233, 20, 15);
  
  
  console.log(mouseX + ', ' + mouseY);
  
  console.log(mouseX + "," + mouseY);
  
}