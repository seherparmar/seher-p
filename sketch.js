

var PLAY = 1;
var END = 0;
var gamestate = PLAY;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup,line;
var score;



function preload(){
  
monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");           
 bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
 
}

function setup() {
  createCanvas(700 ,500);
  background("green")
  line = createSprite(0,450,10000,20);
  line.visible = false;
  
  
  
  
  
  obstacleGroup = createGroup();
  FoodGroup = createGroup();
  
  
  
  
  monkey = createSprite( 90,300,300,300);
  monkey.addAnimation( "monkey",monkey_running);
  monkey.scale = 0.15
  
}


function draw() {
   background("green");
  
  if(gamestate === PLAY){
    

    
    if(keyDown("space")&& monkey.y>=300){ 
       
    monkey.velocityY = -19;
     
    }
    monkey.velocityY =monkey.velocityY +0.8;
    monkey.collide(line);
    
   
    
    obstacle_spawn();
    
    }
   spawn();
  if(monkey.isTouching(obstacleGroup)){
      
    gameover1();
    gamestate = END;  
       
  }
  
  if(gamestate === END){
    obstacleGroup.setVelocityEach(0);
    FoodGroup.setVelocityEach(0);
    monkey.velocityY = 0;
     
     }
  
drawSprites();
  
  function obstacle_spawn(){
    
      if(frameCount %120 === 0){
      obstacle = createSprite(400,400,20,20);
      obstacle.addImage(obstaceImage);
      obstacle.velocityX = -5;  
      obstacle.scale = 0.2;
      obstacle.lifetime = 130;  
      obstacleGroup.add(obstacle);
        
      
      
      }
      
      
      
}

  function spawn(){
    
      if(frameCount %120 === 0){
       banana = createSprite(400,250,20,20);
       banana.addImage(bananaImage);
       banana.velocityX = -5;
       banana.scale = 0.1; 
       banana.lifetime = 130;
       banana.y = Math.round(random(20,200)); 
       FoodGroup.add(banana);
       }
       
       
       
      }
  
  }












