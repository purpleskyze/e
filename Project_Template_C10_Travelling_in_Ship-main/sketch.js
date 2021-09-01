
function preload(){
seaImg = loadImage("sea.png");
  shipImg = loadAnimation('ship-1.png','ship-2.png','ship-3.png','ship-4.png');
}

function setup(){
  createCanvas(400,400);
  ship = createSprite(200,350)
ship.setAnimation(shipImg)

}

function draw() {
  background("sea.png");
 














drawSprites();
}