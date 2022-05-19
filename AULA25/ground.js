class Ground
{
    constructor(x,y,largura, altura)
    {
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;

        var options = {
            isStatic: true
        };

        this.body = Bodies.rectangle(x,y,this.largura,this.altura, options);
        World.add(mundo, this.body);
    }

    show()
    {
        var pos = this.body.position;
        Matter.Body.rotate(this.body,angle);

        ///////////
        push();
        rectMode(CENTER);
        stroke("black");
        fill("white");

        translate(this.x,this.y);
        rotate(angle);
        rect(0, 0, this.largura, this.altura);
        pop();
        ///////////

        angle = angle+0.1;
    
    }
}