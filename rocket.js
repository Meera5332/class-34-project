class Rocket{
constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.rocket_image = loadImage("rocket.gif")
}
display(){
    if (keyIsDown(UP_ARROW)){
        this.y-=5      
    }
    if (keyIsDown(DOWN_ARROW)){
        this.y+=5      
    }
    
    image(this.rocket_image,this.x, this.y, this.w, this.h)
}
}