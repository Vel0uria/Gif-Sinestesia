class Snow {


constructor(x,y){

    this.x = x
    this.y = y
    this.ySpeed = 2
    //random(0.5,1.5)
}

 displaySnow(){
this.y  = this.y + this.ySpeed
image(snow,this.x,this.y,80,80)
if(this.y >=500){   
    tint(30)
    image(snow,this.x,this.y,80,80)
    this.ySpeed = 0
this.displayText()
}


}

displayText(){
   
        push()
        translate(width/2,height/2)
        rotate(270)
        fill(255)
        textFont(myFont)
        textSize(50)
        text('Tsssss',this.x,this.y)
        pop()

           
}

}