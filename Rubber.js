class Rubber {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':0.8
      }
      this.ball = Bodies.circle(200,100,20,options);
      
      
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
      fill("green");
      ellipse(0, 0,20,20);
      pop();
    }
  };