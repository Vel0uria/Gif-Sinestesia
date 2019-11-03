class Snow {


constructor(x,y){

    this.x = x
    this.y = y
    this.ySpeed = random(0.5,1.5)
    
}

 displaySnow(){

    this.y  = this.y + this.ySpeed
    image(snow,this.x,this.y,80,80)
 

}
    




displayText() {
    
//tint(30)
    push()
    translate(width/2,height/2)
    rotate(270)
    fill(255)
    textFont(myFont)
    textSize(50)  
    text('Tsssss',this.y -width/2, this.x-width/2)
    pop()

//onsole.log(this.y);


}

   //if(snowflake.y > 200){
        //tint(30)
        // this.x = snowflake.x
        //this.y = snowflake.y - this.y
 
        //console.log(snowflake.y)
   // }

}







