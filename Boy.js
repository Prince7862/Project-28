class Boy {
  constructor(x,y){
      var options = {
        isStatic:true 
      }
      this.image= loadImage("Sprites/boy.png")
      this.body = Bodies.rectangle(x,y,150,200,options)
      this.width = 190
      this.height = 190
      World.add(world,this.body)
  }
  display(){
      var pos = this.body.position
      
      var angle = this.body.angle
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      strokeWeight(4);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
      pop();
  }
  }