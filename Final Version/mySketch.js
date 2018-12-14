let url = 'https://newsapi.org/v2/everything?' + //variable for url
          'q=Apple&' +
          'from=2018-11-20&' +
          'sortBy=popularity&' +
          'apiKey=357931bc86ea40858f9d6da35d8c9351';
let data1; //cnn variable
let data2; //msnbc variable
let data3; //fox news variable
let results1 =[]; // array with 10 descriptions from cnn data
let results2 =[]; // array with 10 descriptions from msnbc data
let results3 =[]; // array with 10 descriptions from fox news data

let currentSource = 0 //for button controls, initializing variable currentSource to set at cnn source

// let a;
// let b;
// let c;

var ball1;
var ball2;
var ball3;
var ball4;
var ball5;

function loadSource (source){ //allows me to load all data from one certain source
	let sourceURL = 'https://newsapi.org/v2/everything?' +
          'from=2018-11-20&' + //from Nov 13 onward data -- data only stays for one month so have to keep changing th edate
					'sources='+source+'&' + //creating source variable to get from specifically chosen sources
					'pageSize=10&' + //return 10 top articles 
          'sortBy=popularity&' + // popularity is how they are sorted -- top 10 is what we are getting
          'apiKey=357931bc86ea40858f9d6da35d8c9351'; //API Key
  return loadJSON(sourceURL);
	
}

function preload(){
	data1 = loadSource('cnn'); //input source to load top 10 articles from
	data2 = loadSource('msnbc');
	data3 = loadSource('fox-news');
	
	loadFont('font.otf');
	loadFont('font_2.otf');
	loadFont('font_1.otf');
	}


function setup() {
		console.log(data1); //logs data from 10 most popular cnn articles into the console 
		console.log(data2); //logs data from 10 most popular msnbc articles into the console 
		console.log(data3); //logs data from 10 most popular fox news articles into the console 

	createCanvas(800,600);	
	// createCanvas(window.outerWidth, window.outerHeight);

	//if (currentSource == 1){
	//	textFont('font');
	//}
	// if (currentSource == 2){
	// 	textFont('font_2');
	// }
	// if (currentSource == 3){
	// 	textFont('font_1');
	// }
	
	 
	ball1 = new ball(800/2, 600/2, 1, 4, 14); 
  ball2 = new ball(800/2, 600/2, -2, -2, 23);
  ball3 = new ball(800/2, 600/2, 3, 1, 5);
  ball4 = new ball(800/2, 600/2, 1, -3, 10);
  ball5 = new ball(800/2, 600/2, -2, 1, 20);
	
		var btn1 = createButton("CNN") //creates button
		btn1.position (20,20)					//places button
		
		
		btn1.mousePressed(mousePressedOnButton1) //uses dot syntax, calls function mousePressedButton1 when mouse pressed on btn1
		
		
		var btn2 = createButton("MSNBC")
		btn2.position (70,20)
		
		btn2.mousePressed(mousePressedOnButton2)
		
		var btn3 = createButton("Fox News") //**
		btn3.position (140,20)
		
		btn3.mousePressed(mousePressedOnButton3)
		
//CNN:
		let totalText1 = "" //creates string variable
		for (let i = 0; i < data1.articles.length; i++) { //loops through all 10 articles in source (data1)
			let cnnData = data1.articles[i].description; //uses dot syntax to pull out descriptions of articles
			totalText1 += cnnData //puts descriptions of 10 articles (cnnData) into string variable totalText1
			// console.log(getFreqArray(cnnData));
		}
		// if (result1 == true){
		// 	textFont('font');
		// }
	
	  results1 = getFreqArray(totalText1) //gets frequency of descriptions of 10 articles for cnn from g to l
									.filter(d=>d.word!=".") //removes this out of words in results1 array
									.filter(d=>d.word!="the")
									.filter(d=>d.word!="The")
									.filter(d=>d.word!="to")
									.filter(d=>d.word!="-")
									.filter(d=>d.word!="its")
									.filter(d=>d.word!="with")
									.filter(d=>d.word!=",")
									.filter(d=>d.word!="of")
									.filter(d=>d.word!="a")
									.filter(d=>d.word!="in")
									.filter(d=>d.word!="and")
									.filter(d=>d.word!="that")
		
    console.log(results1); //logs description string freq array in console
	
	//MSNBC:
		let totalText2 = ""
		for (let i = 0; i < data2.articles.length; i++) {
				let msnbcData = data2.articles[i].description;
				totalText2 += msnbcData
				// console.log(getFreqArray(msnbcData));
		}

	results2 = getFreqArray(totalText2) //gets frequency of descriptions of 10 articles for msnbc from g to l
									.filter(d=>d.word!=".") //removes this out of words
									.filter(d=>d.word!="the")
									.filter(d=>d.word!="The")
									.filter(d=>d.word!="to")
									.filter(d=>d.word!="-")
									.filter(d=>d.word!="its")
									.filter(d=>d.word!="with")
									.filter(d=>d.word!=",")
									.filter(d=>d.word!="of")
									.filter(d=>d.word!="a")
									.filter(d=>d.word!="in")
									.filter(d=>d.word!="and")
	
    console.log(results2);
	
	
//FOX:
	let totalText3 = ""	
	for (let i = 0; i < data3.articles.length; i++) {
			 let foxData = data3.articles[i].description;
			 totalText3 += foxData
				// console.log(getFreqArray(foxData));
		}
	
	results3 = getFreqArray(totalText3) //gets frequency of descriptions of 10 articles for fox from g to l
									.filter(d=>d.word!="'") //removes this out of words
									.filter(d=>d.word!="the")
									.filter(d=>d.word!="The")
									.filter(d=>d.word!="to")
									.filter(d=>d.word!="on")
									.filter(d=>d.word!=";")
									.filter(d=>d.word!=":")
									.filter(d=>d.word!=",")
									.filter(d=>d.word!="of")
									.filter(d=>d.word!="A")
									.filter(d=>d.word!="...Fox")
									.filter(d=>d.word!=".") //removes this out of words in results1 array
									.filter(d=>d.word!="-")
									.filter(d=>d.word!="its")
									.filter(d=>d.word!="with")
									.filter(d=>d.word!="a")
									.filter(d=>d.word!="in")
    console.log(results3);



// 	console.log(getFreqArray(data1))
// 	console.log(getFreqArray(data2))
// 	console.log(getFreqArray(data3))

}



function mousePressedOnButton1(){
	currentSource=1
	textFont('font');

}

function mousePressedOnButton2(){
	currentSource=2
	textFont('Georgia');
}

function mousePressedOnButton3(){ //**
	currentSource=3
	textFont('Verdana');
}

function draw() {
	background(255)
		let x = 0; // initialize variables -- x is where words start to appear on the screen (along the x axis)
	  let y= 100; // y is where words appear on the screen (along y axis)
	fill(0);

	
	
	if (currentSource==1){ //CNN
		for(let i=0;i<results1.length;i++){
	//		textFont('font.otf');
			textSize(results1[i].count*14); //size based on frequency of word
			text(results1[i].word,x + sin( (frameCount/10 + i)/results1[i].count)*10, y) // the larger the word the slower it moves )*10,y);
			x+=textWidth(results1[i].word) +10; // spaces out words properly
			if (x>width){ // makes sure words are not going off the page on the sides
				x=0;
				y+=50;
			}
		}
	}
	if (currentSource==2){ //MSNBC
		for(let i=0;i<results2.length;i++){
			textSize(results2[i].count*14)
			text(results2[i].word,x + sin( (frameCount/10 + i)/results2[i].count )*10,y)
			x+=textWidth(results2[i].word) +10
			if (x>width){
				x=0
				y+=50
			}
		}
	}
	if (currentSource==3){ //FOX
		for(let i=0;i<results3.length;i++){
			textSize(results3[i].count*7)
			text(results3[i].word,x + sin( (frameCount/10 + i)/results3[i].count )*10,y)
			x+=textWidth(results3[i].word) +10
			if (x>width){
				x=0
				y+=50
			}
		}
	}
	
	if(ball1.size >= 50 || ball3.size >= 50){ //balls change sizes based on each other
      ball2.sizeStep *= -1;
			ball4.sizeStep *= -1;
    }
	
	ball1.move(); //call to balls
  ball1.display();
	
	
  ball2.move();
  ball2.display();

  ball3.move();
  ball3.display();

  ball4.move();
  ball4.display();

  ball5.move();
  ball5.display();
	
}



function getFreqArray(text){ //sorts data
	
	let result = RiTa.concordance(text) //creates a variable named result and tells it to store data from RiTa.concordance -- frequency of words

	let resultList = Object.keys(result) //creates variable resultList to sort result variable by count (or frequency)
												.reduce((all,key)=>{
													all.push({word:key, count:result[key]})
													return all
												},[])
												.sort((a,b)=>b.count-a.count) // greatest count to least count
	return resultList //returns resultList variable

}


function ball(myX, myY, myXVel, myYVel, mySize){       

  this.x = myX; //position
  this.y = myY;

  this.size = mySize; // size
  this.sizeStep = 1/16;

  this.xvel = myXVel; //velocity
  this.yvel = myYVel;


  this.move = function(){ //turns ball around if hits side
    this.x += this.xvel;
    if(this.x<=0 || this.x >= 800){
      this.xvel *= -1;
    }

    this.y += this.yvel;  //turns ball around if hits top / bottom
		if(this.y<=0 || this.y >= 600){
      this.yvel *= -1;
    }

    this.size += this.sizeStep; // size changes
    if(this.size >= 100 || this.size <= 10){
      this.sizeStep *= -1;
    }

  }

  this.display = function(){

    noStroke();

   // fill(55,50, 30, 80);
		//fill('rgba(a,b,c, 0.15)');
   
		if (currentSource ==1){ // changes color of balls based on source
			fill('rgba(255, 0, 0, 0.15)');
		}
		
			if (currentSource ==2){
			fill('rgba(0, 255, 0, 0.15)');
		}
			
			if (currentSource ==3){
			fill('rgba(0, 0, 255, 0.15)');
		}
		
	
		ellipse(this.x, this.y, this.size, this.size);

  }


}