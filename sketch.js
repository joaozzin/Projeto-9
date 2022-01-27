var caixa,bordas;
 
function setup() {
  createCanvas(1365,620);
caixa = createSprite(200,200,20,20);
bordas = createEdgeSprites();
}
function draw() {
  caixa.shapeColor = "purple";
  background("white");
  if (keyIsDown(UP_ARROW)){
caixa.position.y -=5;
background("red");
caixa.shapeColor = "yellow";   
}if (keyIsDown(DOWN_ARROW)){
  caixa.position.y +=5;   
background("green");
caixa.shapeColor = "blue";
}if (keyIsDown(LEFT_ARROW)){
    caixa.position.x -=5;   
background("yellow");
caixa.shapeColor = "green";
  }if (keyIsDown(RIGHT_ARROW)){
      caixa.position.x +=5;
background("blue");      
caixa.shapeColor = "red";
}          
       
      

drawSprites();
caixa.bounceOff(bordas);
}