class Tree {
  constructor(x,y){
      var options = {
        isStatic:true,
          //restitution : 1,
          density: 1.5,
          friction: 1 
      }
      this.image= loadImage("Sprites/tree.png")
      this.body = Bodies.rectangle(x,y,20,25,options)
      this.width = 430
      this.height = 430
      World.add(world,this.body)
  }
  display(){
      var pos = this.body.position
      
      var angle = this.body.angle
      push();
      //strokeWeight(4);
      //rectMode(CENTER)
      //rect(pos.x,pos.y,this.width,this.height)

      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.width,this.height);
      pop();
  }
  }