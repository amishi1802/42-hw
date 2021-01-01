 const Bodies=Matter.Bodies;
 const World=Matter.World;
 const Engine=Matter.Engine;

var umbrellaObj;
var thunder1,thunder2,thunder3,thunder4;
var engine,world;
var drops=[];
var maxDrops=100;
var rand;
var thunder;
var thunderCreatedFrame=0;

function preload(){
   thunder1=loadImage("images/thunderbolt/1.png");
   thunder2=loadImage("images/thunderbolt/2.png");
   thunder3=loadImage("images/thunderbolt/3.png");
   thunder4=loadImage("images/thunderbolt/4.png"); 
}

function setup(){
   createCanvas(600,600);
   engine=Engine.create();
   world=engine.world;
    umbrellaObj=new Umbrella(400,300);

     if(frameCount % 100 === 0){
        
     
    for (var i=0 ; i < maxDrops ; i++){
        drops.push(new Drop(random(0,400),random(0,400)));
    }
}
}

function draw(){
   background(0); 
   Engine.update(engine);

  
rand=Math.round(random(1,4));
  if (frameCount % 80 === 0){
     thunderCreatedFrame=frameCount;
     thunder= createSprite(random(10,370), random(10,30),10,10);
   switch(rand){
       case 1: thunder.addImage(thunder1);
        break; 
        case 2: thunder.addImage(thunder2);
        break;
        case 3: thunder.addImage(thunder3);
        break;
        case 4: thunder.addImage(thunder4);
         default:break;}
         thunder.scale=random(0.3,0.6);
   }

   if(thunderCreatedFrame + 10 === frameCount && thunder){
      thunder.destroy();
   }
         umbrellaObj.display();
         for(var i = 0; i < maxDrops; i++){
            drops[i].showDrop();
            drops[i].updateY();
         }
         drawSprites();
}   

