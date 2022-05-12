const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;

var motor, mundo;
var bola;
var chao;

function setup() 
{
    createCanvas(400,400);
    motor = Engine.create();
    mundo = motor.world;

    var bola_options = {
        restitution: 0.9,
        frictionAir: 0.01
    };

    bola = Bodies.circle(50,50,20,bola_options);
    World.add(mundo,bola);

    var chao_options = {
        isStatic: true
    };

    chao = Bodies.rectangle(200,390,400,20,chao_options);
    World.add(mundo,chao);


    rectMode(CENTER);
    ellipseMode(RADIUS);
}

function draw() 
{
    background("black");
    Engine.update(motor);

    ellipse(bola.position.x, bola.position.y,20);
    rect(chao.position.x, chao.position.y, 400,20);
}

