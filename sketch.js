
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,
mango9,mango10,mango11,stone,tree,boy,slingshot
var BackgroundImg,boyImg,treeImg
var lmango,lstone
function preload()
{
treeImg = loadImage("Sprites/tree.png")
boyImg = loadImage("Sprites/boy.png")
BackgroundImg = loadImage("Sprites/bg.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;


	boy = createSprite(300,620,10,10,);
	boy.addImage(boyImg)
	boy.scale=0.1

	
	//Create the Bodies Here.
	ground = new Ground(500,690,1000,40);
	stone = new Stone(200,380)
	mango1 = new Mango(750,350);
	mango2 = new Mango(700,325);
	mango3 = new Mango(775,400);
	mango4 = new Mango(850,400);
	mango5 = new Mango(830,320);
	mango6 = new Mango(650,350)
	mango7 = new Mango(580,390);
	mango8 = new Mango(650,410);
	mango9 = new Mango(700,410);
	mango10 = new Mango(780,300);
	mango11 = new Mango(890,370);
	tree = new Tree(750,475);
	slingshot = new SlingShot(stone.body,{x:245, y:575});

	
	


	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(BackgroundImg);
  ground.display();
  stone.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  slingshot.display();

  detectollison(stone,mango1);
  detectollison(stone,mango2);
  	detectollison(stone,mango3);
	detectollison(stone,mango4);
	detectollison(stone,mango5);
	detectollison(stone,mango6);
	detectollison(stone,mango7);
	detectollison(stone,mango8);
	detectollison(stone,mango9);
	detectollison(stone,mango10);
	detectollison(stone,mango11);


  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
	if(keyCode == 32){
		Matter.Body.setPosition(stone.body,{x:200,y:380});
		slingshot.attach(stone.body);
	}
}

function detectollison(lstone,lmango){
	mangoBodyPosition =  lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance <- lmango.width + lstone.width){
		Matter.Body.setStatic(lmango.body,false);
	}
}