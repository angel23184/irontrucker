function Player(game) {
    this.game = game;
    this.y = 20;
    this.x =  10;
    this.ctx= this.game.ctx;
    this.img = new Image();
    this.img.src = 'images/claw.png';
    this.w = 175;
    this.h = 175;
    this.vy = 0.5;
    this.fastvy = 2;
    this.up = false;
    this.down = false;
    this.fast = false;
    this.vyClawRetorn = 1;
    this.setListeners();
  }
  
  var TOP_KEY = 38;
  var SPACE = 32;
  var RIGHT = 39;
  var DOWN = 40;
  var LEFT = 37;
  
  Player.prototype.draw = function() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
  
  Player.prototype.setListeners = function() {
    document.onkeydown = function(event) {
      if (event.keyCode === SPACE) {
        this.fast =true;
      }
      if (event.keyCode === DOWN) {
        this.down = true;
      }
      if (event.keyCode === RIGHT) {
        this.x +=10;
      }
      if (event.keyCode === LEFT) {
        this.x -=10;
      }
    }.bind(this);
  };

  Player.prototype.move = function(){


      if(this.fast === true){
          this.y += this.fastvy; 
      }else if(this.down === true){
          this.y += this.vy;
      }else if(this.up === true){
          this.y -= this.vyClawRetorn;
      }else if(this.y < this.game.canvas.height){
        //   this.y = 20;
        //   this.x +=3;
      }


      if(this.y +this.h >= this.game.canvas.height){
          this.down = false;
          this.fast = false;
          this.up = true;
      }
  }

  