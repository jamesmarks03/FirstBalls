var balls = [];

function setup() {
  createCanvas(1000,1000);
  background(0);
  loadBalls(100);
  Ball = new Ball(200,200);
}

function draw() {
  background(0);
  for(var i = 0; i < balls.length; i++){
    balls[i].update();
  }

}

  function loadBalls(num){
    for(var i = 0; i < num; i++){
      balls.push(new Ball(width/2, height/2));
    }
  }
