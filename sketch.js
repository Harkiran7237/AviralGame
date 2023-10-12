var car1,car2,car3,truck,road;
var car1img,car2img,car3img,roadimg,truckimg,roadimg;


function preload(){

    car1img= loadImage("car1.png");
    car2img=loadImage("car2.png");
    car3img=loadImage("car3.png");
    truckimg=loadImage("truck.png");
    roadimg=loadImage("road.png");
}

function setup() {
    createCanvas(1200,785);
    car1=createSprite(600,600,40,40);
    car1.addImage("car",car1img)
   car1.scale=0.4;
}

function draw() {
 drawSprites();

 
}