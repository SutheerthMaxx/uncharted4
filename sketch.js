
var PLAY = 1;
var END = 0;
var gameState = PLAY;
 
var nathan,nathanjump;
var ground;
var bg,bgImg;

var obstaclesGroup, obstacle1, obstacle2;

var score;
var gameOverImg,restartImg

 function preload(){
 nathan= loadImage("images/nathanrunning.webp");
 nathanjump= loadImage("images/nathanjumping.jpg");
 obstacle1= loadImage("images/rockimage.jpg");
 obstacle2= loadImage("images/sackimage.jpg");
 bgImg=loadImage("images/forestimage.jpg");
 }

 function setup(){
 createCanvas(600,600);
 
 bg=createSprite(500,500,150,150);
 bg.addImage(bgImg);
 
 nathan=createSprite(100,100,50,50);
 nathan.addImage(nathan);
 nathan.scale(0.5);
 }

function draw(){

 drawSprites();
}