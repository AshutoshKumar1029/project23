var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var side1, side2 , side3;
var side1body, side2body, side3body;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("cyan")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 22 , {restitution:1, isStatic:true, friction:1});
	World.add(world, packageBody);
	
	side1 = createSprite(width/2,height-50,200,20)
	side1.shapeColor= ("red")
	side1body = Bodies.rectangle(side1.x,side1.y,side1.width,side1.height,isStatic=true)
	World.add(world, side1body)

	side2 = createSprite(side1.x-90,height-90,20,70)
	side2.shapeColor= ("red")
	side2body = Bodies.rectangle(side2.x,side2.y,side2.width,side2.height)
	World.add(world, side2body)

	side3 = createSprite(side1.x+90,height-90,20,70)
	side3.shapeColor= ("red")
	side3body = Bodies.rectangle(side3.x,side3.y,side3.width,side3.height)
	World.add(world, side3body)

	//Create a Ground
	ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Body.setStatic(packageBody, false)
  }
}



