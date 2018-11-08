//todo: consider adding a config object
// var Configs = {
//   dxObs: 1.05,
//   count: 90
// }

function Game(canvadId) {
    this.canvas = document.getElementById(canvadId);
    this.ctx = this.canvas.getContext("2d");
    this.background = new Background(this);
    this.player = new Player(this);
    this.fps = 60;
    this.framesCounter = 0;
    this.obstacles = [];
    this.score = 0;
    this.delete = false;
    this.dxObs = 1.05;
    this.count = 60;
    this.image = new Image();
    this.image.src = 'images/andystoys.png';
  }
  
  //todo: remember, it could be nice to add an Stage class to separate business logic from painting and gameplay
  Game.prototype.start = function() {
    this.interval = setInterval(function() {
      this.clear();
      this.draw();
      this.moveAll();
      this.drawTime();

      this.framesCounter++;
      if(this.framesCounter % 220 ===0){
        this.obstacles.push(new Obstacle(this, this.dxObs));
      }
      if(this.framesCounter % 1000 ===0){
        this.dxObs+3;
      }
      if(this.framesCounter % 60 == 0){
        this.count--;
        
        
      }
      // controlamos que frameCounter no sea superior a 1000
      if (this.framesCounter > 1000) {
        this.framesCounter = 0;
      }
      //cuando hay colision seleccionamos el primer elemento del array y posteriormente lo eliminamos.
      var arrayObstacles = this.isCollision();
      if(arrayObstacles.length > 0){
        arrayObstacles[0].isFollow = true; 
        if(this.delete){
          this.obstacles.splice(this.obstacles.findIndex(function(e){return e==arrayObstacles[0]}),1)
          this.arrayObstacles = [];
          this.delete = false;
          this.score++;
        }
      }
      if(this.count ===0){
        clearInterval(this.interval);
        // this.count = 5;
          
          if(confirm(`Has salvado ${this.score} juguetes de Andy ¿Intentarlo otra vez?`)) {
            this.reset();
            this.start();
          }else{
            window.location.href = "endgame.html";
            // this.reset();
            // this.start();
          }
      }
     }.bind(this), 1000 / this.fps);

  };
  
  Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }; 

  Game.prototype.clearObstacles = function() {
  this.obstacles = this.obstacles.filter(function(obstacle) {
    return obstacle.x >= 0;
  });
};

Game.prototype.stop = function() {
  clearInterval(this.interval);
};

Game.prototype.gameOver = function() {
  this.stop();
};

//todo: consider adding a CollisionTester class
  Game.prototype.isCollision = function() {
    // colisiones genéricas 
    // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )
    return this.obstacles.filter(function(obstacle) {
      return (
        ((this.player.x + this.player.w) >= obstacle.x &&
         this.player.x < (obstacle.x + obstacle.width) &&
         this.player.y + (this.player.h - 20) >= obstacle.y)
      );
    }.bind(this));
  };
  
  Game.prototype.draw = function() {
    this.background.draw();
    this.drawBox();
    this.obstacles.forEach(function(obstacle) {
      obstacle.draw();
      
    });
    this.player.draw();
    // this.drawScore();  
  };
  
  Game.prototype.moveAll = function() {
    this.obstacles.forEach(function(obstacle){
      obstacle.move();
    })
    this.player.move();
    this.drawScore();
  };


  //todo: consider adding a ScoreManager class
  Game.prototype.drawScore = function() {
    this.ctx.font = "50px sans-serif";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(Math.floor(this.score), 50, 75);
  }

  //todo: consider adding a TimePainterManager class
  Game.prototype.drawTime = function() {
    this.ctx.font = "30px sans-serif";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`${this.count} seg.`, 50, 120);
  }

  //todo: please remember using an external config file
  Game.prototype.reset = function() {
    this.background = new Background(this);
    this.player = new Player(this);
    this.framesCounter = 0;
    this.obstacles = [];
    this.score = 0;
    this.count = 60;
    this.dxObs =1.05;
  };

  Game.prototype.drawBox = function() {
    this.ctx.drawImage(this.image, 850, 100, 250,200);
  };
  

  