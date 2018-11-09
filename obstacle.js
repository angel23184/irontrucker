function Obstacle(game, dx) {
    this.game = game;
    this.ctx= this.game.ctx;
    this.image = new Image();
    //todo: consider using the snippet I provided you
    this.imgPath = ['images/Alien.png','images/Buzz.png',
    'images/Woman.png','images/woody.png','images/pig.png','images/dog.png','images/chiefwoody.png',
    'images/dinosaurious.png','images/potatoe.png', 'images/baby.png', 'images/barbie.png', 
    'images/girl.png','images/perdigon.png','images/mspotatoe.png','images/littlebaby.png', 'images/Alien.png','images/Buzz.png',
    'images/Woman.png','images/woody.png','images/pig.png','images/chiefwoody.png',
    'images/dinosaurious.png','images/potatoe.png', 'images/baby.png', 'images/barbie.png', 
    'images/girl.png','images/perdigon.png','images/mspotatoe.png','images/littlebaby.png'
    ]
    this.image.src = this.imgPath[Math.floor(Math.random()*this.imgPath.length)]
    this.dx = dx;
    this.y = 400;
    this.x =  this.game.canvas.width;
    this.width = 150;
    this.isFollow = false;
    this.isInTheBox = false;
  }
  
  Obstacle.prototype.draw = function() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, 150);
  };
  
  Obstacle.prototype.move = function() {
    if(this.isFollow){
      this.x = this.game.player.x+10;
      this.y = this.game.player.y+50;
    }else{
      this.x -= this.dx ;
    }
  };

