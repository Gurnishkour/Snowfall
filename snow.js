class Snow{
    constructor(x,y,width,height) { 
    var options = { 
        restitution:0.2,
        isStatic:false
      
    }
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.body = Bodies.rectangle(x,y,width,height);
    this.image= loadImage("snow5.webp");
    World.add(myworld,this.body);

    }
    display(){
        translate(this.body.position.x,this.body.position.y);
        rotate (this.body.angle);
        imageMode(CENTER);
        image (this.image,0,0,this.width,this.height);
    
    }
}