function Obstacle(game) {
    this.game = game;
    this.ctx= this.game.ctx;
    this.image = new Image();
    this.imgPath = ['images/Alien.png','images/Buzz.png',
    'images/Woman.png','images/woody.png','images/pig.png','images/chiefwoody.png',
    'images/dinosaurious.png','images/potatoe.png'
    ]
    this.image.src = this.imgPath[Math.floor(Math.random()*this.imgPath.length)]
    this.dx = 1;
    this.y = 400;
    this.x =  this.game.canvas.width;
    this.width = 150;
    this.isFollow =false;
  }
  
  Obstacle.prototype.draw = function() {

    this.ctx.drawImage(this.image, this.x, this.y, this.width, 150);
    

  };
  
  Obstacle.prototype.move = function() {
    if(this.isFollow){
      this.x = this.game.player.x +10;
      this.y = this.game.player.y;

    }else{
      this.x -= this.dx ;
    }

  };

