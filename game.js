function Game(canvadId) {
    this.canvas = document.getElementById(canvadId);
    this.ctx = this.canvas.getContext("2d");
    this.background = new Background(this);
    this.player = new Player(this);
    this.fps = 60;
    this.framesCounter = 0;
    this.obstacles = [];
    // this.obstacle1 = new Obstacle(this);
    // this.obstacle2 = new Obstacle(this);
    // this.obstacle3 = new Obstacle(this);
    // this.obstacle4 = new Obstacle(this);
    // this.obstacles.push(this.obstacle1);
    // this.obstacles.push(this.obstacle2);
    // this.obstacles.push(this.obstacle3);
    // this.obstacles.push(this.obstacle4);
  }
  
  Game.prototype.start = function() {
    this.interval = setInterval(function() {
      this.clear();
      this.draw();
      this.moveAll();
  
      this.framesCounter++;
      if(this.framesCounter %220 ===0){
        this.obstacles.push(new Obstacle(this));
      }
  
      // controlamos que frameCounter no sea superior a 1000
      if (this.framesCounter > 1000) {
        this.framesCounter = 0;
      }
    }.bind(this), 1000 / this.fps);
  };
  
  Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }; 
  
  Game.prototype.draw = function() {
    this.background.draw();
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
  };
  