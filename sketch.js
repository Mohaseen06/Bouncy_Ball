var ball,ballImage,paddleImage,paddle;
var topEdge,bottomEdge,leftEdge,rand;
var MAX_SPEED =180;

function preload() {
  /* preload your images here of the ball and the paddle*/
  ballImage = loadImage("ball.png");
  paddleImage = loadImage("paddle.png");
}

function setup() {
  createCanvas(400, 400);
  
   /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(50,200,10,10);
  paddle = createSprite(370,200,10,10);
  
  /* assign the images to the sprites */
  ball.addImage(ballImage);
  paddle.addImage(paddleImage);
  paddle.immovable = true;
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 7;
  ball.velocityY = 9;
}

function draw() {
  background(205,153,0);
  
  /* create Edge Sprites here */
   edges = createEdgeSprites();
  
/*  topEdge = createSprite(width/2, -30/2, width, 30);
  topEdge.immovable = true;

  bottomEdge = createSprite(width/2, height+30/2, width, 30);
  bottomEdge.immovable = true;
  
  leftEdge = createSprite(1,200,1, 400);
  leftEdge.immovable = true;
  */
   
  /*Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  
  topEdge = edges[0];
  bottomEdge = edges[2];
  leftEdge = edges[3];
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(leftEdge);
  
  /* Allow the ball to bounceoff from the paddle */
 ball.bounce(paddle);
  
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
  
  
  ball.bounce(leftEdge)
  ball.bounce(topEdge)
  ball.bounce(bottomEdge)
    
  
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
    paddle.velocityY = -7
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY = 7
  }
  
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  ball.velocityY = random(-8,8)
 
}

