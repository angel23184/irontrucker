# Irontrucker
Juego desarrollado durante mi formación en Ironhack.

  -  HTML5 Canvas
  - CSS
  - JavaScript

### Código relevante.

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

### Si empezase de nuevo...
Análisis y organización previos antes de programar.
* Clases a crear.
* Métodos de cada clase.
* Relación entre los elementos del juego.

### Con más tiempo...
* Niveles de juego.
* Peso según elemento cogido.
* Restar puntos según el elemento.
* Refactorizar y mejorar el código para generar nuevas pantallas.

### Dificultades
* Movimiento dentro límites del canvas.
* Colisiones.

### Pruébalo
https://angel23184.github.io/irontrucker/
