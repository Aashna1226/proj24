const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinOb, paperOb, groundOb;
var world

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	dustbinOb= new Dustbin(600, 650);
	paperOb= new Paper(50, 450, 40);
	groundOb= new Ground(width/2, 670, width, 20);

	var render= Render.create({
		element: document.body,
		engine: engine,
		options: {
			width:500, 
			height: 700,
			wireframes: false
		}
	});

	Engine.run(engine);
	//Render.run(render);

}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbinOb.display();
  paperOb.display();
  groundOb.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:85, y:-85});
	}
}


