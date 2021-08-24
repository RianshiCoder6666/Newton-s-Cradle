
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,bob6,roofObject;
var rope1,rope2,rope3, rope4,rope5,rope6;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,100,270,20);
	bob1 = new bob(320,555,40)
	bob2 = new bob(360,555,40)
	bob3 = new bob(400,555,40)
	bob4 = new bob(440,555,40)
	bob5 = new bob(480,555,40)
	bob6 = new bob(520,555,40)
	
	
	rope1=new rope(bob1.body,roofObject.body,-100)
	rope2=new rope(bob2.body,roofObject.body,-60)
	rope3=new rope(bob3.body,roofObject.body,-17)
	rope4=new rope(bob4.body,roofObject.body,27)
	rope5=new rope(bob5.body,roofObject.body,70)
	rope6=new rope(bob6.body,roofObject.body,110)
	
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("white");
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
}

 function keyPressed() {
 	if (keyCode === UP_ARROW) {
 		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-42,y:-43});
 	}
 }
