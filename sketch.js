
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,bob6;
var roof;
var connection1,connection2,connection3,connection4;
function preload()
{

}

function setup() {
	createCanvas(800,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


  Engine.run(engine);
  var y=150;
  bob1 = new Bobs(200,y);
  bob2 = new Bobs(300,y);
  bob3 = new Bobs(400,y);
  bob4 = new Bobs(500,y);
  bob5 = new Bobs(600,y);
  roof = new Top(400,50,800,50)
  connection1 = new Attach(bob1.body,{x:200,y:50});
  connection2 = new Attach(bob2.body,{x:300,y:50});
  connection3 = new Attach(bob3.body,{x:400,y:50});
  connection4 = new Attach(bob4.body,{x:500,y:50});
  connection5 = new Attach(bob5.body,{x:600,y:50});
}


function draw() {
  //rectMode(CENTER);
  background(255);
  //Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  connection1.display();
  connection2.display();
  connection3.display();
  connection4.display();
  connection5.display();
}

function mouseDragged ()
{

  bob1.body.position.x = mouseX
  bob1.body.position.y = mouseY

}