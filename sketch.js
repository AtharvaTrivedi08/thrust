var ground, lander, bg;
var thrust;
var lander_img 
var vy = 0;
var vx = 0;
var g = 0.5;

function preload(){
  lander_img = loadImage("normal.png");
  bg = loadImage("bg.png");
  thrust = loadAnimation("b_thrust_1.png","b_thrust_2.png","b_thrust_3.png")
  thrust.playing = true;
  thrust.looping = false;
}

function setup(){
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(150,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider("rectangle",0,0,200,200);
  lander.addAnimation("thrusting",thrust);
  rectMode(CENTER);
}

function draw(){
  background(51);
  image(bg,0,0);

  push();
  fill(255);
  text("Vertical Velocity : "+round(vy),800,75);
  pop();

  vy = vy+g;
  lander.position.y += vy;
  lander.position.x += vx;

  drawSprites();
}

function keyPressed(){
  if(keyCode == UP_ARROW){
    upward_thrust();
    lander.changeAnimation("thrusting");
    thrust.nextFrame();
  }
}

function upward_thrust(){
  vy = -1
}