function Player(game) {
  //todo: consider using the config
    this.game = game;
    this.y0 = 20;
    this.y = this.y0;
    this.yMinHeight = 10;
    this.x =  10;
    this.xMaxCanvasWidth = 900;
    this.xMinCanvasWidth = 10;
    this.moveX = false;
    this.ctx= this.game.ctx;
    this.img = new Image();
    this.img.src = 'images/reaclaw.png';
    this.w = 175;
    this.h = 175;
    this.vy = 0.5;
    this.fastvy = 4;
    this.up = false;
    this.down = false;
    this.fast = false;
    this.start = 850;
    this.vClawRetorn = 2;
    this.setListeners();
  }

  //todo: consider using a KeyboardConfig object
  // var KeyboardConfig = {
  //   LEFT: 37
  // }

  
  var TOP_KEY = 38;
  var SPACE = 32;
  var RIGHT = 39;
  var DOWN = 40;
  var LEFT = 37;
  
  Player.prototype.draw = function() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
  
  Player.prototype.setListeners = function() {

    //todo: consider using a KeyboardManager class
    document.onkeydown = function(event) {
      if (event.keyCode === SPACE) {
        this.fast =true;
        var audio = new Audio("sounds/gancho.mp3");
        audio.play();
      }
      if (event.keyCode === DOWN) {
        this.down = true;
      }
      if (event.keyCode === LEFT) {
        if (this.x>=this.xMinCanvasWidth){
          this.x -= 15;
        }
      }
      if (event.keyCode === RIGHT) {
        if(this.x<=this.xMaxCanvasWidth){
          this.x += 15;
        }
        }
    }.bind(this);
  };

  Player.prototype.move = function(){
    //todo: consider refactor this code. difficult to understand
      if(this.fast === true){
          this.y += this.fastvy; 
      }else if(this.down === true){
          this.y += this.vy;
      }else if(this.up === true){
          this.y -= this.vClawRetorn;
      }

      if(this.y +this.h >= this.game.canvas.height){
          this.down = false;
          this.fast = false;
          this.up = true;
      }

    if(this.y<= this.yMinHeight){
      this.up = false;
      this.moveX = true;
      this.y = this.y0;
    }
    if(this.moveX){
      this.x += this.vClawRetorn;
    }
    if(this.x +this.w >= this.game.canvas.width){
      this.moveX = false;
      this.x -=5;
      this.game.delete=true;
    }

  }

  
