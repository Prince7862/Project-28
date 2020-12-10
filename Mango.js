class Mango {
  constructor(x,y){
      var options = {
        isStatic:true,
          restitution : 1,
          density: 1,
          friction: 0.5
      }
      this.image = loadImage("Sprites/mango.png")
      this.body = Bodies.rectangle(x,y,15,15,options)
      this.width = 40
      this.height = 40
      World.add(world,this.body)
  }
  display(){
      var pos = this.body.position
      
      var angle = this.body.angle
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      //strokeWeight(4);
      //rectMode(CENTER)
      //rect(0,0,this.width,this.height)
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
      pop();
  }
  }