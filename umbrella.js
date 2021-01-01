class Umbrella{
    constructor(x,y){
       
        this.image=loadImage("images/Walking Frame/walking_2.png");
        var options={
            isStatic:true
        }
        this.umbrella=Bodies.circle(x,y,30,options);
        this.radius=30;
        World.add(world,this.umbrella);
    }

    display(){
        var pos=this.umbrella.position;
        imageMode(CENTER);
        
        image(this.image,pos.x,pos.y+70,300,300);
    }
}