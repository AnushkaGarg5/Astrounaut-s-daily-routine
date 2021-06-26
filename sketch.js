function preload(){
  bg       = loadImage("iss.png")
  bath     = loadAnimation("bath1.png" , "bath2.png")
  brush    = loadAnimation("brush.png")
  drink    = loadAnimation("drink1.png" , "drink2.png")
  eat      = loadAnimation("eat1.png" , "eat2.png")
  gym      = loadAnimation("gym1.png" , "gym2.png")
  move    = loadAnimation("move1.png" , "move2.png")
  sleep    = loadAnimation("sleep.png")
  

}

function setup() {
  createCanvas(windowWidth,windowHeight);
 interior =  createSprite(width/2, height/2, 50, 50);
 astronaut = createSprite(width/2,height-200)
}

function draw() {
  background(0);  

  edges = createEdgeSprites()
  
  interior.addImage(bg)
  interior.scale = 0.25

  astronaut.scale = 0.1

  if(keyWentDown("m")){
    astronaut.addAnimation("move1" , move) ;
    astronaut.changeAnimation("move1")    ;
    astronaut.setVelocity(2,-2)
  }

  if(keyWentDown("s")){
    astronaut.addAnimation("sleep1" , sleep) ;
    astronaut.changeAnimation("sleep1") 
    astronaut.x = width/2
    astronaut.y = height-200
    astronaut.setVelocity(0,0)
     }   ;


  if(keyWentDown(UP_ARROW)){
  astronaut.addAnimation("brushing" ,brush)
  astronaut.changeAnimation("brushing" , brush)
  astronaut.x = width/2
  astronaut.y = height-200
  astronaut.setVelocity(0,0)}
  
  if(keyWentDown(DOWN_ARROW)){
    astronaut.addAnimation("gyming" , gym)
    astronaut.changeAnimation("gyming" , gym) 
    astronaut.x = width/2
    astronaut.y = height-200
    astronaut.setVelocity(0,0)}

  if(keyWentDown(RIGHT_ARROW)){
        astronaut.addAnimation("bathing" , bath)
        astronaut.changeAnimation("bathing" , bath) 
        astronaut.x = width/2
        astronaut.y = height-200
        astronaut.setVelocity(0,0)}
  
if(keyWentDown(LEFT_ARROW)){
          astronaut.addAnimation("eating" , eat)
          astronaut.changeAnimation("eating" , eat)
          astronaut.x = width-800
          astronaut.y = height-220 }
     astronaut.bounceOff(edges)
    drawSprites();
}