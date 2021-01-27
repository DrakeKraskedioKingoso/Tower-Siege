const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score = 0;
var engine, world;
/*var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;*/

var gameState = "onSling";

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    box1 = new Box(600, 265, 50, 50)
    box2 = new Box(625, 265, 50, 50)
    box3 = new Box(675, 265, 50, 50)
   
    box4 = new Box(600-25, 265, 50, 50)
    box5 = new Box(700, 265, 50, 50)
    box6 = new Box(600-50, 265, 50, 50)
    box7 = new Box(600-75, 265, 50, 50)
    box8 = new Box(505, 210, 50, 50)
    box9 = new Box(555, 210, 50, 50)
    box10 = new Box(605, 210, 50, 50)
    box11 = new Box(655, 210, 50, 50)
    box12 = new Box(705, 210, 50, 50)
    box13 = new Box(600, 160, 50, 50)
    box14 = new Box(650, 160, 50, 50)
    box15 = new Box(550, 160, 50, 50)
    box16 = new Box(600, 110, 50, 50)
   stone = new Stone(100, 250, 50, 50)
   stand1 = new Stand(600, 300, 400, 20)

    slingshot = new SlingShot(stone.body,{x:100, y:250});

 
}

function draw(){
    background(225)
    Engine.update(engine);
    
    text("X:"+mouseX+ ","+ "Y:"+mouseY, mouseX, mouseY)
    fill("white")
    
    textSize(25)
    text("Score:" + score, 900, 50)
   
    stand1.display();
    stone.display();
    fill(255, 6, 150)
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box10.display()
    box9.display()
    box16.display()

    box1.score()
    box2.score()
    box3.score()
    box4.score()
    box5.score()
    box6.score()
    box7.score()
    box8.display()
    box11.score()
    box12.score()
    box10.score()
    box9.score()
    box13.score()
    box14.display()
    box15.score()
    box16.score()
    fill("blue")
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
        
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
     slingshot.attach(stone.body);
     gameState = "onSling"
    }
}
async function getBackground(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json()
    
    var datetime = responseJSON.datetime
    console.log(datetime)
    var hour = datetime.slice(11, 13)
    console.log(hour)
    if (hour >= 6 && hour<18){
        bg = 255

    }
    else{
        bg = "darkBlue"
    }
 backgroundImg = loadImage(bg)   
}


