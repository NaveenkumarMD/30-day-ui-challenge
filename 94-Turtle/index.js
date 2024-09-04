class Turtle{
    constructor(x,y) {
        this.x=x;
        this.y=y;
    }
    up(){
        this.y+=1;
    }
    down(){
        this.y-=1;
    }
    right(){
        this.x+=1;
    }
    left(){
        this.x-=1;
    }
}

const turtle=new Turtle(0,0)
turtle.down();
turtle.up();
turtle.left();
turtle.right();
