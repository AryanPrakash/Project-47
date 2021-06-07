
var block1,block2,block3,block4,block5,block6,block7,block8;
var playerbar,ball,ground;
var edges;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13;
var block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25, block26;
var block27, block28, block29, block30, block31, block32, block33, block34, block35, block36, block37, block38, block39;
var block40, block41, block42, block43, block44, block45, block46, block47, block48, block49, block50, block51, block52;
var blocklayer2,blocklayer1,blocklayer3,blocklayer4;
var blocklayer1grp, blocklayer2grp, blocklayer3grp, blocklayer4grp;
var bg,bgimg;
var score = 0;
var gamestate="serve"
var border1,border2;
var boy,boyimg;
var go,goimg;
var audio1,audio1load;
var audio2,audio2load;

function preload()
{
  ballimg = loadImage("ball.PNG");
  bgimg = loadImage("background.jpg");
  boyimg = loadImage("character1.png");
  goimg = loadImage("yw.png");
  audio2load = loadSound("audio1.mp3");
  audio1load = loadSound("audio2.wav");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

    border1 = createSprite(250,30,10,10000);
    border1.shapeColor = "white"

    border2 = createSprite(1080,30,10,10000);
    border2.shapeColor = "white";

    boy=createSprite(1194,257,20,2000);
    boy.addImage(boyimg);
    boy.scale=0.65

    go=createSprite(windowWidth/2,windowHeight/2,20,20);
    go.addImage(goimg);
    go.visible = false;

  //create blocks
  //block layer 1

//for( var i = (starting position of x);i = (the extend in x);i = i + (gap/distance between 2 objects))
//blocklayer1 = createSprite(i,30,50,50)
//if you want it to be a loop in horizontal line otherwise i in place of y position shold be done.
  
  /*for loops - blocklayer1
  for(var i=windowWidth/2-200;i<=750;i = i+60)
  {
    blocklayer1 = createSprite(i,30,50,50);
    blocklayer1.shapeColor = "orange"
  }*/
  
  //indivituals - block layer 1
  block1 = createSprite(300,30,50,50);
  block1.shapeColor = "pink";
  block2 = createSprite(360,30,50,50);
  block2.shapeColor = "pink";
  block3 = createSprite(430,30,50,50);
  block3.shapeColor = "pink";
  block4 = createSprite(490,30,50,50);
  block4.shapeColor = "pink";
  block5 = createSprite(550,30,50,50);
  block5.shapeColor = "pink";
  block6 = createSprite(610,30,50,50);
  block6.shapeColor = "pink";
  block7 = createSprite(670,30,50,50);
  block7.shapeColor = "pink";
  block8 = createSprite(730,30,50,50);
  block8.shapeColor = "pink";
  block9 = createSprite(790,30,50,50);
  block9.shapeColor = "pink";
  block10 = createSprite(850,30,50,50);
  block10.shapeColor = "pink";
  block11 = createSprite(910,30,50,50);
  block11.shapeColor = "pink";
  block12 = createSprite(970,30,50,50);
  block12.shapeColor = "pink";
  block13 = createSprite(1030,30,50,50);
  block13.shapeColor = "pink";
  
  /*for loop - block layer 2
  for(var i=30;i<=750;i = i+60)
  {
    blocklayer2 = createSprite(i,90,50,50);
    blocklayer2.shapeColor = "red"
  }*/

  //block layer 2
  block14 = createSprite(300,90,50,50);
  block14.shapeColor = "green";
  block15 = createSprite(360,90,50,50);
  block15.shapeColor = "green";
  block16 = createSprite(430,90,50,50);
  block16.shapeColor = "green";
  block17 = createSprite(490,90,50,50);
  block17.shapeColor = "green";
  block18 = createSprite(550,90,50,50);
  block18.shapeColor = "green";
  block19 = createSprite(610,90,50,50);
  block19.shapeColor = "green";
  block20 = createSprite(670,90,50,50);
  block20.shapeColor = "green";
  block21 = createSprite(730,90,50,50);
  block21.shapeColor = "green";
  block22 = createSprite(790,90,50,50);
  block22.shapeColor = "green";
  block23 = createSprite(850,90,50,50);
  block23.shapeColor = "green";
  block24 = createSprite(910,90,50,50);
  block24.shapeColor = "green";
  block25 = createSprite(970,90,50,50);
  block25.shapeColor = "green";
  block26 = createSprite(1030,90,50,50);
  block26.shapeColor = "green";

  //for loop - block layer 3
  /*for(var i=30;i<=750;i = i+60)
  {
    blocklayer3 = createSprite(i,150,50,50);
    blocklayer3.shapeColor = "blue"
  }*/

  //block layer 3
  block27 = createSprite(300,150,50,50);
  block27.shapeColor = "brown";
  block28 = createSprite(360,150,50,50);
  block28.shapeColor = "brown";
  block29 = createSprite(430,150,50,50);
  block29.shapeColor = "brown";
  block30 = createSprite(490,150,50,50);
  block30.shapeColor = "brown";
  block31 = createSprite(550,150,50,50);
  block31.shapeColor = "brown";
  block32 = createSprite(610,150,50,50);
  block32.shapeColor = "brown";
  block33 = createSprite(670,150,50,50);
  block33.shapeColor = "brown";
  block34 = createSprite(730,150,50,50);
  block34.shapeColor = "brown";
  block35 = createSprite(790,150,50,50);
  block35.shapeColor = "brown";
  block36 = createSprite(850,150,50,50);
  block36.shapeColor = "brown";
  block37 = createSprite(910,150,50,50);
  block37.shapeColor = "brown";
  block38 = createSprite(970,150,50,50);
  block38.shapeColor = "brown";
  block39 = createSprite(1030,150,50,50);
  block39.shapeColor = "brown";

  
  /*block layer 4
  for loop - block layer 4
  for(var i=30;i<=750;i = i+60)
  {
    blocklayer4 = createSprite(i,210,50,50);
    blocklayer4.shapeColor = "green"
  }*/

  //block layer 4
  block40 = createSprite(300,210,50,50);
  block40.shapeColor = "orange";
  block41 = createSprite(360,210,50,50);
  block41.shapeColor = "orange";
  block42 = createSprite(430,210,50,50);
  block42.shapeColor = "orange";
  block43 = createSprite(490,210,50,50);
  block43.shapeColor = "orange";
  block44 = createSprite(550,210,50,50);
  block44.shapeColor = "orange";
  block45 = createSprite(610,210,50,50);
  block45.shapeColor = "orange";
  block46 = createSprite(670,210,50,50);
  block46.shapeColor = "orange";
  block47 = createSprite(730,210,50,50);
  block47.shapeColor = "orange";
  block48 = createSprite(790,210,50,50);
  block48.shapeColor = "orange";
  block49 = createSprite(850,210,50,50);
  block49.shapeColor = "orange";
  block50 = createSprite(910,210,50,50);
  block50.shapeColor = "orange";
  block51 = createSprite(970,210,50,50);
  block51.shapeColor = "orange";
  block52 = createSprite(1030,210,50,50);
  block52.shapeColor = "orange";

  //create a ball
  ball = createSprite(300,300,10,30);
  ball.addImage(ballimg);
  ball.shapeColor = "blue";
  ball.velocityX = -4;
  ball.velocityY = 5;

  //create a player bar
  playerbar = createSprite(300,550,200,20);
  playerbar.shapeColor = "purple"

  //create a ground/base
  ground = createSprite(200,600,5220,20);
  ground.shapeColor = "red";

  //groups - blocks
  blocklayer1grp = new Group();
  blocklayer2grp = new Group();
  blocklayer3grp = new Group();


}

function draw() {
  background(bgimg);

  //for checking the x and y position
  textSize(20);
  text(mouseX + "," + mouseY, 600,500);
  //guidelines
  fill("white")
  stroke("white");
  text("Move your PLAYERBAR",10,100);
  text("with your mouse",10,150);
  text("to make the ball ",10,200);
  text("bounce off and also to  ",10,250);
  text("get points!",10,300);
  //guidelines -2
  text("",10,350);
  text("If you want to",10,370);
  text("restart then press 'R'.",10,420);
  //logo
  textSize(80);
  stroke("white");
  fill("yellow");
  text("Clear The Trash Out!",windowWidth/2-400,windowHeight/2);

  //displaying the scores
  textSize(40)
  text("Score:"+score,1141,100)
       
  if(score===104)
  {
    ball.velocityX = 0;
    ball.velocityY = 0;
    go.visible = true;
    audio2load.play();
  }
  if(ball.y>578){
    ball.velocityX = 0;
    ball.velocityY = 0;
    stroke("white");
    fill("orange");
    textSize(60);
    text("Game Over!",windowWidth/2-200,windowHeight/2+100);
    text("Press R to restart",windowWidth/2-200,700);
  }

    if(keyDown("r"))
    {
block1.visible = true
block2.visible = true
block3.visible = true
block4.visible = true
block5.visible = true
block6.visible = true
block7.visible = true
block8.visible = true
block9.visible = true
block10.visible = true
block11.visible = true
block12.visible = true
block13.visible = true
block14.visible = true
block15.visible = true
block16.visible = true
block17.visible = true
block18.visible = true
block19.visible = true
block20.visible = true
block21.visible = true
block22.visible = true
block23.visible = true
block24.visible = true
block25.visible = true
block26.visible = true
block27.visible = true
block28.visible = true
block29.visible = true
block30.visible = true
block31.visible = true
block32.visible = true
block33.visible = true
block34.visible = true
block35.visible = true
block36.visible = true
block37.visible = true
block38.visible = true
block39.visible = true
block40.visible = true
block41.visible = true
block42.visible = true
block43.visible = true
block44.visible = true
block45.visible = true
block46.visible = true
block47.visible = true
block48.visible = true
block49.visible = true
block50.visible = true
block51.visible = true
block52.visible = true

      ball.velocityX = 4;
      ball.velocityY = -5
    }
    
    //block layer 1//
  if(ball.isTouching(block1))
  {
    block1.visible = false
    score = score + 2;
    audio1load.play();
  }
  if(ball.isTouching(block2))
  {
    block2.visible = false
    score = score + 2;
    audio1load.play();
   
  }
  if(ball.isTouching(block3))
  {
    block3.visible = false
    score = score + 2;
    audio1load.play();
   
  }
  if(ball.isTouching(block4))
  {
    block4.visible = false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block5))
  {
    block5.visible = false
    score = score + 2
    audio1load.play();
 
  }
  if(ball.isTouching(block6))
  {
    block6.visible = false
    score = score + 2
    audio1load.play();
    
  }
  if(ball.isTouching(block7))
  {
    block7.visible = false
    score = score + 2
    audio1load.play();
    
  }
  if(ball.isTouching(block8))
  {
    block8.visible = false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block9))
  {
    block9.visible = false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block10))
  {
    block10.visible = false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block11))
  {
    block11.visible = false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block12))
  {
    block12.visible = false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block13))
  {
    block13.visible = false
    score = score + 2
    audio1load.play();
  }

    //block layer 2//
  if(ball.isTouching(block14))
  {
    block14.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block15))
  {
    block15.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block16))
  {
    block16.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block17))
  {
    block17.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block18))
  {
    block18.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block19))
  {
    block19.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block20))
  {
    block20.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block21))
  {
    block21.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block22))
  {
    block22.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block23))
  {
    block24.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block25))
  {
    block25.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block26))
  {
    block26.visible=false
    score = score + 2;
    audio1load.play();
  }

  //block layer 3//
  if(ball.isTouching(block27))
  {
    block27.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block28))
  {
    block28.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block29))
  {
    block29.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block30))
  {
    block30.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block31))
  {
    block31.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block32))
  {
    block32.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block33))
  {
    block33.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block34))
  {
    block34.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block35))
  {
    block35.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block36))
  {
    block36.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block37))
  {
    block37.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block38))
  {
    block38.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block39))
  {
    block39.visible=false
    score = score + 2
    audio1load.play();
  }

  //block layer 4//
  if(ball.isTouching(block40))
  {
    block40.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block41))
  {
    block41.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block42))
  {
    block42.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block43))
  {
    block43.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block44))
  {
    block44.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block45))
  {
    block45.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block46))
  {
    block46.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block47))
  {
    block47.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block47))
  {
    block47.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block48))
  {
    block48.visible=false
    score = score + 2
    audio2load.play();
  }
  if(ball.isTouching(block49))
  {
    block49.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block50))
  {
    block50.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block51))
  {
    block51.visible=false
    score = score + 2;
    audio1load.play();
  }
  if(ball.isTouching(block52))
  {
    block52.visible=false
    score = score + 2
    audio1load.play();
  }

  //playerbar moment
  //(1) playerbar.x=world.mouseX
  playerbar.x=mouseX
  
  //bounce
  edges = createEdgeSprites();
  ball.bounceOff(border1);
  ball.bounceOff(border2);
  playerbar.bounceOff(border1);
  playerbar.bounceOff(border2);
  //block layer 1
  ball.bounceOff(playerbar);
  ball.bounceOff(edges);
  ball.bounceOff(block1);
  ball.bounceOff(block2);
  ball.bounceOff(block3);
  ball.bounceOff(block4);
  ball.bounceOff(block5);
  ball.bounceOff(block6);
  ball.bounceOff(block7);
  ball.bounceOff(block8);
  ball.bounceOff(block9);
  ball.bounceOff(block10);
  ball.bounceOff(block11);
  ball.bounceOff(block12);
  ball.bounceOff(block13);

  //block layer 2
  ball.bounceOff(block14);
  ball.bounceOff(block15);
  ball.bounceOff(block16);
  ball.bounceOff(block17);
  ball.bounceOff(block18);
  ball.bounceOff(block19);
  ball.bounceOff(block20);
  ball.bounceOff(block21);
  ball.bounceOff(block22);
  ball.bounceOff(block23);
  ball.bounceOff(block24);
  ball.bounceOff(block25);
  ball.bounceOff(block26);

  //block layer 3
  ball.bounceOff(block27);
  ball.bounceOff(block28);
  ball.bounceOff(block29);
  ball.bounceOff(block30);
  ball.bounceOff(block31);
  ball.bounceOff(block32);
  ball.bounceOff(block33);
  ball.bounceOff(block34);
  ball.bounceOff(block35);
  ball.bounceOff(block36);
  ball.bounceOff(block37);
  ball.bounceOff(block38);
  ball.bounceOff(block39);

  //block layer 4
  ball.bounceOff(block40);
  ball.bounceOff(block41);
  ball.bounceOff(block42);
  ball.bounceOff(block43);
  ball.bounceOff(block44);
  ball.bounceOff(block45);
  ball.bounceOff(block46);
  ball.bounceOff(block47);
  ball.bounceOff(block48);
  ball.bounceOff(block50);
  ball.bounceOff(block51);
  ball.bounceOff(block52);

  drawSprites();
}