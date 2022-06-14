const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let motor;
let mundo;
var torre;
var canhao;
var chao;
var barco;

var backgroundImg;
var bolas = [];


function preload() {
  backgroundImg = loadImage("./assets/background.gif")
}

function setup() {
  createCanvas(1200,600);

  motor = Engine.create();
  mundo = motor.world;

  torre = new Tower(150,350,160,310);
  canhao = new Cannon(175,120,130,100);
  barco = new Boat(width, height-150,200,200,-100);
  
  chao = Bodies.rectangle(600,595,width*2,4,{isStatic: true});
  World.add(mundo, chao);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  angleMode(DEGREES);
}

function draw() {
  background(51);
  Engine.update(motor);

  image(backgroundImg,0,0,width, height);
  
  // Desenhar várias bolas de canhão
  for(var i=0; i<bolas.length;i++){
    displayBolasCanhao(bolas[i],i);
  }

  // velocidade para o barco
  Body.setVelocity(barco.body, {
    x:-0.9,
    y:0
  });

  


  
  canhao.display();
  torre.display();
  barco.display();
  // rect(chao.position.x,chao.position.y, width*2, 4);
  
  


}

function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    bolas[bolas.length-1].shoot();
  }
}

function keyPressed() {
  if(keyCode === DOWN_ARROW) {
    var bolaCanhao = new CannonBall(canhao.x, canhao.y+4);
    bolas.push(bolaCanhao);
  }
}

function displayBolasCanhao(bola, index) {
  bola.display();
  if (bola.body.position.x >= width || bola.body.position.y >= height-50) {
    World.remove(mundo,bola.body);
    bolas.splice(index,1);
  }
}

