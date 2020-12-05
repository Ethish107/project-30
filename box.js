class Box {
  constructor(x, y, width, height,color) {
    var options = {
        'restitution':0.4,
        'friction':0.0
        
    }
    this.Visibility = 255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.color = color;

    World.add(world, this.body);

  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    // console.log(this.body.speed);
    push()
    if(this.body.speed<3){

      translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(1);
    stroke(0);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    var rec = rect(0, 0, this.width, this.height);
    pop()
    }else
    {
      World.remove(world,this.body);
      push()
      this.Visibility = this.Visibility - 0.2;
      tint(255,this.Visibility);
      pop()
    }
  }
};
