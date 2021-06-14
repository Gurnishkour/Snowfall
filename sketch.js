const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myengine, myworld;

var bgimg;
var bg = "snow1.png";
var girl ,girlimg;
var snow1,snow2,snow3,snow4;


function preload(){
  getBackgroundImg ();
  
 girlimg=loadImage("s.png")
 
}



function setup() {
  createCanvas(800,400);
 
  myengine = Engine.create();
  myworld = myengine.world;

  girl = createSprite(250,350,10,10);
  girl.addImage("standing",girlimg);

  snow1 = new Snow(150,150);
  snow2 = new Snow(300,200);
  snow3 = new Snow(450,150);
  snow4 = new Snow(550,200);
 }


function draw() {
 // background(255,255,255);  

 if(bgimg){
  background (bgimg)
 }

 Engine.update(myengine);

 girl.scale=0.5;
 girl.velocityX=4;
 girl.display();

 
snow1.display();
snow2.display();
snow3.display();
snow4.display();


}


async function getBackgroundImg(){

  
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  //console.log(responseJSON); 
  var dateTime= responseJSON.datetime;
  hour = dateTime.slice(11,13);
if(hour>= 06 && hour<= 18){
  bg = "snow1.jpg"
}
 else if(hour>= 18 && hour<= 20){
  bg = "snow2.jpg"
   }
  else {(hour>= 18 && hour<= 05)
      bg = "snow3.jpg"
    }

    bgimg = loadImage(bg);
} 

