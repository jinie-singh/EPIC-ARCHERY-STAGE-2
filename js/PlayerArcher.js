class PlayerArcher {
    constructor(x, y, width, height) {
      const options = {
        isStatic: true
      };
  
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      //this.collapse = false;
      this.image = loadImage("./assets/playerArcher.png");
  
      World.add(world, this.body);
  
      //set the angle for Computer Archer , should be -90 degree


    }
  
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;

      //code to move arrow down when down arrow key is pressed, angle should be less than -1.2
      
      
  
      //code to move arrow up when up arrow key is pressed, angle should be greater than -1.9
      
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  