var balloon,backgroundimg,balloonimg,database,position;


function preload(){
backgroundimg=loadImage("background.png")
balloonimg=loadImage("balloon.png")
balloonimg2=loadImage("balloon.png")
}


function setup() {
  createCanvas(1000,950);
  database=firebase.database()
  createSprite(400, 200, 50, 50);
balloon=createSprite(500,500,50,50)
balloon.addImage(balloonimg)
balloon.scale=0.9
var ballloonPosition=database.ref('balloon/position');
ballloonPosition.on("value",readPosition,showError);

}

function draw() {
  background(backgroundimg)
 
if(keyDown(LEFT_ARROW)){

  updateHeight(-10,0)


}
if(keyDown(RIGHT_ARROW)){

  updateHeight(+10,0)
  
  
  }

  if(keyDown(DOWN_ARROW)){
    updateHeight(0,+10)
    balloon.position.y=balloon.position.y+10
    balloon.addImage(balloonimg2)
  balloon.scale=balloon.scale+0.01 
  
   
    
    }
    if(keyDown(UP_ARROW)){
      updateHeight(0,-10)
      balloon.position.y=balloon.position.y-10
      balloon.addImage(balloonimg2)
    balloon.scale=balloon.scale-0.01 
    }
    

drawSprites();
}

function updateHeight(x,y){

database.ref('balloon/position').set({

'x':height.x+x,
'y':height.y+y



})

}

function readPosition(data){
height=data.val();
balloon.x=height.x
balloon.y=height.y



}

function showError(){


console.log("Error in writing to the database")

}





