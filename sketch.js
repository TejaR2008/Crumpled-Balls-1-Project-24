
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

	var engine, world, ground1, paper1, rect1, rect2, rect3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);

	paper = new Paper(100, 200, 20);

    dustbin1 = new Dustbin (630,657,20,120);
    dustbin2 = new Dustbin (740, 657, 20, 120);
    dustbin3 = new Dustbin (686, 690, 100, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);

  drawSprites();
 
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ball.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.body.applyForce(paperObject.body, paperObject.body.position, {x:85, y:85});
	}
}




