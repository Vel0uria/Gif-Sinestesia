let myFont
let flame = []
let word = []
let snow
let snowflakes = []
function preload(){

	myFont = loadFont('data/Nice Dream Come True.ttf')

	for(let i=0; i <= 1280; i = i + 160){
		flame[i] = createImg('https://media.giphy.com/media/KanivNSR8L1Q8XD46T/giphy.gif')	
		flame[i].position(i-200,height+400)
	
	}

	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES)
	//word = new Snow(100,100)
snow = loadImage('data/580b585b2edbce24c47b2706.png')

for(let i = 0; i <= width; i++){
	snowflakes[i] = new Snow(random(width),random(-300,-100))
}

}

function draw() {
	
background(30)

// Para mostrar el texto 
// push()
// word.displayText()
// pop()

for(let i = 0; i<30; i=i+2){
	snowflakes[i].displaySnow()
	//snowflakes[i].displayText(snowflakes[i])
	
}


}