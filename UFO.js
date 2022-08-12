class UFO{
    constructor(x, y, width, height){
        this.speed = 0.05
        this.body = Bodies.rectangle(x, y, width, height);
        this.x=x
        this.y=y
        this.width = width;
        this.height = height;
        this.ufo_imge=loadImage("ufo.png")
        World.add(world, this.body);
        
}
show(){
    image(this.ufo_image,this.x, this.y, this.width, this.height)
}
}