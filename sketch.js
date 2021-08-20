var gymnast, gymnastImages;
var bgimage, bg;
var bars, barsImage;

function preload(){

  bgimage = loadImage("barsimages/gymbackground.jpg");
  barsImage = loadImage("barsimages/bars.PNG");
}

function setup() {
  createCanvas(1450,850);
 //bg = createSprite(200,200);
 //bg.addImage(bgimage);
 
  gymnast = createSprite();
}

function draw() {
  background(bgimage);  
  image(barsImage,725,425);
  drawSprites();
}