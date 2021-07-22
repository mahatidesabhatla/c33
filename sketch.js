var snow1, snow2, snow3, snow4, snow5, 

function preload(){

  snow1 = loadImage("snow1.jpg");

}

function setup() {

  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {

  background("snow1");  
  drawSprites();
}