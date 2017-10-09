function Ball(x,y){
  this.x = x;
  this.y = x;
  this.vx = random(-10.0,10.0);
  this.vy = random(-10.0,10.0);
  this.clr = color(random(255.0),random(0.0),random(0.0));


    this.update = function(){
      this.x += this.vx;
      this.y += this.vy;
      this.checkEdges();
      this.render();
    }

    this.render = function(){
      fill(this.clr);
      ellipse(this.x , this.y , 30, 30);
    }

    this.checkEdges = function(){
      if(this.x > width || this.x < 0) this.vx = -this.vx;
      if(this.y > height || this.y < 0) this.vy = -this.vy;
    }

}// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
