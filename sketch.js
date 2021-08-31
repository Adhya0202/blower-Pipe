const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

   blowerMouth = createSprite(400, 200, 90, 90);
 blower =  createSprite(310,235,100,20);

  button = createButton("click to blow")
  button.position(width/2,height-100)
  button.class("blowButton")
  button.mousePressed(blow) 

  ball = Bodies.circle(450,100,20);
}

function draw() {
  background("black");  
  drawSprites();
}

function blow(){
  Matter.Body.ApplyForce(ball.body,{x: 0, y: 0 },{x : 0, y: 0.05})
}