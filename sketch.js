
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,hammer,stone,rubber,iron;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(200,590,2000,20);
  hammer=new Hammer(100,100);
	stone=new  Stone (700,200,100,100);
  rubber=new Rubber(200,200);
  iron=new Iron(1000,200,50,50);
  sand1=new Sand(600,200);
  sand2=new Sand(500,200);
  sand3=new Sand(650,200);
  sand4=new Sand(675,200);
  sand5=new Sand(100,200);
  sand6=new Sand(250,200);
  sand7=new Sand(375,200);
  sand8=new Sand(450,200);
  sand9=new Sand(475,200);
  sand10=new Sand(900,200);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  iron.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  drawSprites();
 
}



