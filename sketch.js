var dog;
var happyDog;
var Database1;
var foodS;
var foodStock;
var dogImage,happyDogImage

function preload()
{
  dogImage = loadImage("images/dogImg.png")
  happyDogImage = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(250,250,40,40)
  dog.addImage("images/dogImg.png",dogImage)
  Database1 = firebase.database();
  console.log(Database1)
  foodStock = Database1.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
  background(46, 139, 87)
  drawSprites();
  
  text(foodStock)
  if(keyWentDown(UP_ARROW)){
   writeStock(foodS)
   happyDog.addImage("images/dogImg1.png",happyDogImage)
  }


  //add styles here

}

function readStock(data){
  foodS.data = val();
}

function writeStock(x){

  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}



