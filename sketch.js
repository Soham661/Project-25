var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper
var box1,box2,box3;
var dustbin
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  paper = new Paper(200,200,20,70);
 // box1 = new Box(200,300,200,20);
  //box2 = new Box(300,400,20,200)
  //box3 = new Box(100,400,20,200);
dustbin =  new Box(200,400,20,20)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 paper.display();
 //box1.display();
// box2.display();
 //box3.display();
 dustbin.display();

 Engine.update(engine);

}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.Body,paperObject.body.position,{x:85,y:-85});
	}
}


