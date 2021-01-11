
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var survivalTime;

function preload(){
   
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,400,900,150);
  ground.velocityX=-4;
  ground.x=ground.width/2;   
  console.log(ground.x);
  

  
  
}


function draw() {
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY=-17;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);

  
  
  if(World.frameCount%150===0){
  obstacle=createSprite(350,300,900,10);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;
  obstacle.velocityX=-6;
  obstacle.lifetime=300;
  
  
  }
  
  if(World.frameCount%80===0){
    banana=createSprite(200,100,20,20);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.lifetime=300;
  }
  

background("lightBlue");
drawSprites();
stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival time: "+survivalTime,100,50);
}






