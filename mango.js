class mango {
    constructor(x,y,radius){
        var options = { 
            isStatic: true,
            restitution:0,
            friction:1,
            density:1.2 }; 
         this.r=radius;
          this.body=Bodies.circle(x,y,radius,options);
           this.image = loadImage("Plucking mangoes/mango.png");
            World.add(world, this.body); }
             display() { 
                var mangoPos=this.body.position;
                push()
                translate(mangoPos.x, mangoPos.y);
                rectMode(CENTER);
                 rotate(this.body.angle)
                fill(255,0,255)
                imageMode(CENTER);
                ellipseMode(CENTER);
                image(this.image, 0,0,this.r*2, this.r*2)
                 pop() 
             }
            }
                    