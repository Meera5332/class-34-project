class Bomb{
    constructor(x,y,w,h){
        var bomb_options={
            isStatic:true
        }
        this.x=x
        this.y=y
        this.w = width;
        this.h = height;
        this.body = Bodies.rectangle(x, y, w, h, bomb_options)
        this.bomb_image = loadImage("sprite_0.png")
        World.add(world, this.body)
    }
    shoot(){
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, {
            x: 0.1, y:0 });
    }
    display(){
        image(this.bomb_image,this.x, this.y, this.w, this.h)
    }
}