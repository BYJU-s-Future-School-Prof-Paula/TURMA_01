class Cannon {
    constructor(x,y,largura, altura) {
        this.x = x;
        this.y = y;
        this.width = largura;
        this.height = altura;

        this.angle = 20;

        this.baseImg = loadImage("../assets/cannon_base.png");
        this.tuboImg = loadImage("../assets/CANON.png");
    }

    display() {
        // Controlar o canhao

        console.log(this.angle);

        if(keyIsDown(RIGHT_ARROW) && this.angle < 64){
            this.angle = this.angle + 1;
        }else if(keyIsDown(LEFT_ARROW) && this.angle > -50 ){
            this.angle = this.angle - 1;
        }


        //Desenhar o topo do canhao
        push();
        translate(this.x,this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.tuboImg,0,0,this.width,this.height);
        pop();

        // Desenhar a base do canhao
        image(this.baseImg,60,28,200,200);
    }

}