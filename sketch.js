
var trex ,trex_running;
var ground,groundImage
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImage=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,160,10,10);
  trex.addAnimation("running",trex_running)
  trex.scale=0.4;

  ground=createSprite(300,180,600,1);
  ground.addImage("ground",groundImage)
  ground.velocityX=-2;
 
}

function draw(){
  background("pink");
 edges=createEdgeSprites()
  if(keyDown("space")){
    trex.velocityY=-13
  }
  trex.velocityY+=0.8
  
  if(ground.x>0){
    ground.width=ground.width/2
  }
  trex.collide(ground)
drawSprites();
}
