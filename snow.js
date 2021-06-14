class Snow{
    constructor(x,y,width,height) { 
    var options = { 
        restitution:0.2,
        density:1.0,
        friction:2,
        isStatic:false,
      
    }
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.image= loadImage("snow5.webp");
    World.add(myworld,this.image);
    }
    display(){
        imageMode(CENTER);
        image (this.image,this.x,this.y,50,50);
    
    }
}