//Create variables here
var dog,happyDog;
var database;
var foodS,foodStock;

function preload()
{
  //load images here
  happyDogImg = loadImage("images/dogImg.png");
  dogImg = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
	createCanvas(500,500);
  dog = createSprite(250,250,30,30);
  dog.addImage(dogImg);
  dog.scale = 0.1;
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
}


function draw() {  

  background(46,139,87)
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg)
  }
  
  
  drawSprites();
  //add styles here

  textSize(15);
  fill("white");
  stroke("green");
  text("Note: Press UP_ARROW to feed drago milk",10,30);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  
  if(x<=0){
    x=0
  }else{
    x = x - 1;
  }
 database.ref('/').update({
     Food:x
   })

}

