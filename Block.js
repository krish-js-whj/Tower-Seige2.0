class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("block.png")
      World.add(world, this.body);
      this.Visiblity = 255;
    }
    display(){
            var pos= this.body.position;
  
      if(this.body.speed < 3){
        //rectMode(CENTER);
//rect(pos.x,pos.y,this.width, this.height);
       image(this.image, pos.x-this.width/2, pos.y-this.height/2, this.width, this.height);
      }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         image(this.image, pos.x-this.width/2, pos.y-this.height/2, this.width, this.height);
         pop();
       }
      }
      score(){
        if (this.Visiblity < 0 && this.Visiblity > -105){
          score++;
        }
    }}