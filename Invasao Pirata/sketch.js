const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let motor;
let mundo;
var torre;

var backgroundImg;

function preload() {
  backgroundImg = loadImage("/assets/background.gif")
}

function setup() {
  createCanvas(1200,600);

  motor = Engine.create();
  mundo = motor.world;

  torre = new Tower(150,350,160,310);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background(51);
  Engine.update(motor);

  image(backgroundImg,0,0,width, height);
  torre.display();

}

