const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let motor;
let mundo;
var torre;
var canhao;
var bolaCanhao;

var backgroundImg;



function preload() {
  backgroundImg = loadImage("./assets/background.gif")
}

function setup() {
  createCanvas(1200,600);

  motor = Engine.create();
  mundo = motor.world;

  torre = new Tower(150,350,160,310);
  canhao = new Cannon(175,120,130,100);
  bolaCanhao = new CannonBall(canhao.x, canhao.y);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  angleMode(DEGREES);
}

function draw() {
  background(51);
  Engine.update(motor);

  image(backgroundImg,0,0,width, height);
  
  canhao.display();
  torre.display();
  bolaCanhao.display();
}

function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    bolaCanhao.shoot();
  }
}

