class Stone {
    constructor(x, y, width, height){
      var options = {
        'restitution':0,
        'friction':1.0,
        'isStatic':false,
        'density':1.2
    }
      this.image = loadImage("stone.png");
      this.x = x;
      this.y = y;
      this.r = 30;
      
      this.body = Bodies.circle(this.x,this.y,15,options);
      World.add(world,this.body);
     


    }
  display()
  {
   var pos =this.body.position;
   var angle = this.body.angle;
   
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(4);
    imageMode(CENTER);
    image(this.image,0,0,this.r*2,this.r*2);
   
    pop();
  }
}