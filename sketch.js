
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rocket
var bombs=[]

function setup() {
  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  rocket = new Rocket(10,100,100,100)
}


function draw() 
{
  background("blue");
  Engine.update(engine);
  rocket.display();
  for (var i=0; i<bombs.length; i++){
  showBombs(bombs[i],i)}
}

function keyPressed(){
  if (keyIsDown (RIGHT_ARROW)) {
    var bomb = new Bomb(rocket.x, rocket.y,1, 1);
    bomb.scale=0.01
    bombs.push(bomb);
  }
}

function keyReleased(){
  if (keyCode === RIGHT_ARROW){
    bombs[bombs.length-1].shoot()
  }
}

function showBombs(bomb, index){
  if(bomb){
    bomb.display()
  }
}

