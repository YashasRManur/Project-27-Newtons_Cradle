
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function setup() {
	createCanvas(600, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Roof = new Roof(300,75,250,37)
	Bob1 = new Bob(200,175,25)
	Bob2 = new Bob(250,175,25)
	Bob3 = new Bob(300,175,25)
	Bob4 = new Bob(350,175,25)
	Bob5 = new Bob(400,175,25)
	RopeA = new Rope(Bob1.body,{x:200,y:75})
	RopeB = new Rope(Bob2.body,{x:250,y:75})
	RopeC = new Rope(Bob3.body,{x:300,y:75})
	RopeD = new Rope(Bob4.body,{x:350,y:75})
	RopeE = new Rope(Bob5.body,{x:400,y:75})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Roof.display();
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  RopeA.display();
  RopeB.display();
  RopeC.display();
  RopeD.display();
  RopeE.display();
  drawSprites();
  Position();
}


function Position(){
    if (mouseY<=30){
      if (mouseX <= 500){
        text("x : "+ mouseX + ", y : "+ mouseY, mouseX + 5, mouseY + 20);
      } else{
        text("x : "+ mouseX + ", y : "+ mouseY, mouseX - 80, mouseY + 20);
      }  
	} else{
      if (mouseX <= 500){
        text("x : "+ mouseX + ", y : "+ mouseY, mouseX + 5, mouseY - 5);
      } else{
        text("x : "+ mouseX + ", y : "+ mouseY, mouseX - 80, mouseY - 5);
      }
    }
  }

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(Bob1.body,Bob1.body.position,{x : -290, y : 1000});
	}
}