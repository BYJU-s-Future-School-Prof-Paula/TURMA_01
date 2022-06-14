class Boat{
    constructor(x,y,largura, altura, posBarco){
        var options = {
            restitution: 0.8,
            friction: 1,
            density: 1
        };

        this.body = Bodies.rectangle(x,y,largura,altura,options);

        this.largura = largura;
        this.altura = altura;
        this.posBarco = posBarco;

        this.image = loadImage("../assets/boat.png");

        World.add(mundo, this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        imageMode(CENTER);
        image(this.image,pos.x, pos.y,this.largura,this.altura);
        pop();
    }

}