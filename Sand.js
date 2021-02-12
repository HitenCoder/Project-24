class Sand {
    constructor(x, y) {
      var options = {
          'restitution':1.0,
          'friction':5,
          'density':0.5
      }
      this.ball = Bodies.circle(200,100,5,options);
      
      
      World.add(world, this.ball);
    }
    display(){
      var pos =this.ball.position;
      var angle = this.ball.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(2)
      stroke("white")
      fill("orange");
      ellipse(0, 0,5,5);
      pop();
    }
  };