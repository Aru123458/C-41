const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine

var world

var FBI

var cop

var theif

var room

var bg

function preload(){
room = loadImage("images/Room.png")




}

function setup(){
    var canvas = createCanvas(1280,1024);
    engine = Engine.create();
    world = engine.world;

FBI=new Agent(605,360,200,200)

cop=new Cop(1000,800,200,200)

theif=new Theif(40,780,200,200)

bg=new Room(displayWidth/2,displayHeight/2,1280,1024)
console.log(displayWidth)
console.log(displayHeight)

}




function draw(){

Engine.update(engine)

bg.display();
FBI.display();
cop.display();
theif.display();    
}

function keyPressed(){

if(keyCode === UP_ARROW){
console.log(theif)





}




}