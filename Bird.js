class Bird extends baseclass{
    constructor(x, y) {
      //super is going to access all the properties and functions from the parent /base class
      super(x,y,50,50)
      this.image=loadImage("sprites/bird.png");
      
    };

    //to take permission from parent class
    //overriding the function
 display(){
   this.body.position.x=mouseX;
   this.body.position.y=mouseY;
   super.display();
 }};
