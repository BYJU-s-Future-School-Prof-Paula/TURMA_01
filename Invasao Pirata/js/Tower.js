class Tower{

    constructor(x,y,largura, altura){
        var options = {
            isStatic: true
        };

        this.largura =largura;
        this.altura = altura;

        this.body = Bodies.rectangle(x,y,largura,altura, options);
        World.add(mundo,this.body);

        this.image = loadImage("../assets/tower.png");
    }

    display(){
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.largura, this.altura);
        pop();
    }

}
