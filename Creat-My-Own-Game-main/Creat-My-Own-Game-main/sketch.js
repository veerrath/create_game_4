let ground;
let lander;
var lander_img;
var bg_img;


var vx = 0;
var g = 0.02;
var vy = 5;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  meteor_img = loadImage("meteor.png")
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(500,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  meteor = createSprite(800,-30,50,50);
  meteor.addImage(meteor_img);
  meteor.scale = 0.1;


  invis_sprite1 = createSprite(60, 600, 160, 30)
  invis_sprite1.visible = false

  invis_sprite2 = createSprite(550, 600, 160, 30)
  invis_sprite2.visible = false

  invis_sprite3 = createSprite(650, 700, 160, 20)
  invis_sprite3.visible = false

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  meteor.y +=5
  meteor.x -= 3

  lander.collide(invis_sprite1)
  lander.collide(invis_sprite2)
  lander.collide(invis_sprite3)
  lander.collide(meteor)

  if(lander.y >= 1000){
    text("GAME OVER", 100, 50)
  }

  if(keyDown(LEFT_ARROW)){
    lander.x -= 3
  }
  if(keyDown(RIGHT_ARROW)){
    lander.x += 3
  }
  if(keyDown(UP_ARROW)){
    lander.y -= 50
  }

  //fall down
  lander.position.y+=vy;
  drawSprites();
}


