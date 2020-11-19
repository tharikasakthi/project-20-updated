
var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);

  speed=random(50,90)
  weight=random(400,1500);
  car=createSprite(400, 200, 50, 50);
  car.velocityX=speed;

  wall=createSprite(1500,200,60,height/2);

  
}

function draw() {
  background(255,255,255);  

  if(wall . x <(car.width+wall.width)/2){

    car.velocityX=0;
    var deformation=0.5 * weight * speed *speed/22509;
    if(deformation>180){
      car.shapeColour=colour(125,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColour=colour(230,230,0);
    }
    if(deformation<100){
      car.shapeColour=colour(0,252,0);
    }
    }

  drawSprites();
}

