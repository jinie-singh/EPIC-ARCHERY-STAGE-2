class ComputerArcher {
    constructor(x, y, width, height) {
      const options = {
        isStatic: true
      };
  
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("./assets/computerArcher.png");
  
      World.add(world, this.body);

      //set the angle for Computer Archer, should be 90 degree


    }
  
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
       
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  