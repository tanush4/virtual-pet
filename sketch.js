
var database;
var dog,happyDog,foodS,foodStock;
var dog_image, happy_dog_image;
var add_food_button, feed_button;
var name_input;
var milk;
var feedTime;
var lastFed;
var gameState, readState;

function preload()
{
  dog_image = loadImage("dogImg.png");
  happy_dog_image = loadImage("dogImg1.png");	
}

function setup() {
  database = firebase.database();

  createCanvas(750,500);

  dog = createSprite(550, 400, 20, 20);
  dog.addImage(  dog_image);
  dog.scale = 0.2;
  
  foodStock = database.ref('food');
  foodStock.on("value", readStock);

}


function draw() {  
 background(46, 139, 87) 

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(  happy_dog_image );
}
  drawSprites();

  fill(255,255,254);
stroke("black"); 
text("Food remaining : "+foodS,170,200);
 textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}

  function readStock(data) {
    foodS = data.val();
  }
  
  function writeStock(x) {
    if (x <= 0) {
      x = 0;
    } else {
      x = x - 1;
    }
  
    database.ref('/').update({
      food: x
    })
  }
  




