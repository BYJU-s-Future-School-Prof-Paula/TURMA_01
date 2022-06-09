class CannonBall {
    constructor(x, y) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.r = 30;

      //crie um corpo circular
      this.body = Bodies.circle(x,y,this.r,options);
      //carregue a imagem
      this.image = loadImage("../assets/cannonball.png");
      
      World.add(mundo, this.body);
    }
  
    shoot() {
        var novo = canhao.angle - 28;
        novo = novo * (3.14/180);

        var velocidade = p5.Vector.fromAngle(novo);
        velocidade.mult(0.5);
        
        Body.setStatic(this.body, false);
        Body.setVelocity(this.body, {x:velocidade.x * (180/3.14),
                                     y:velocidade.y * (180/3.14)});

    }
  
    display() {
        var angle = this.body.angle;
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        //mostrar a imagem
        image(this.image,0,0,this.r, this.r);
        pop();
  
      }
    }