var player, playerImg, police, policeImg;

var background, backgroundImg;

var road, roadImg, alley1Img, alley2Img, safespotImg;

var players;

var goldbar, goldbarImg;

var r = 100;


function preload(){
alley1Img = loadImage("AlleyMorning.jpg");
playerImg = loadImage("Playercar.png");
policeImg = loadImage("policecar.png");
roadImg = loadImage("Roadupdated.png");
goldbarImg = loadImage("Gold Bar.png");
}

function setup(){
//createCanvas(600,1500);

canvas = createCanvas(windowWidth/2, windowHeight);

player = createSprite(400,400);
player.addImage("playercar", playerImg);
player.scale = 0.1;
police = createSprite(400,450);
police.addImage("policecar", policeImg);
police.scale = 0.1;



players = [player,police];

}

function draw(){
//background(roadImg);
image(roadImg, 0, -height*3, width, height*4);

if(keyDown(UP_ARROW)){
    players[0].y = players[0].y-50;
camera.position.y = players[0].y+height/4;
console.log(player.y);
}

if(keyDown(LEFT_ARROW)){
    players[0].x = players[0].x-50;
}

if(keyDown(RIGHT_ARROW)){
    players[0].x = players[0].x+10;
    console.log(player[0].x);
}

if(frameCount%50 === 0){

    r = Math.round(random(40,400));

    x = Math.round(random(40,400));

   var goldbar = createSprite(350,350);
goldbar.addImage("goldbar", goldbarImg);
goldbar.scale = 0.01;

}
if(player.x>= 700){
    player.x = 700;
}
police.y = player.y+r;
police.x = player.x;


drawSprites();
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}


