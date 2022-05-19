const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;

var motor, mundo;
var fan1, fan2, fan3, fan4;
var angle = 60;

function setup() 
{
    createCanvas(400,400);
    motor = Engine.create();
    mundo = motor.world;

    fan1 = new Ground(50,370,50,30);
    fan2 = new Ground(150,370,50,30);
    fan3 = new Ground(250,370,50,30);
    fan4 = new Ground(350,370,50,30);


    rectMode(CENTER);
    ellipseMode(RADIUS);
}

function draw() 
{
    background("black");
    Engine.update(motor);

    fan1.show();
    fan2.show();
    fan3.show();
    fan4.show();
}
