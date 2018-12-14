let url = 'https://newsapi.org/v2/everything?' + //variable for url
          'q=Apple&' +
          'from=2018-11-15&' +
          'sortBy=popularity&' +
          'apiKey=357931bc86ea40858f9d6da35d8c9351';
let data1; //cnn variable
let data2; //msnbc variable
let data3; //fox news variable
var results1 =[]; // array with 10 descriptions from cnn data
var results2 =[]; // array with 10 descriptions from msnbc data
var results3 =[]; // array with 10 descriptions from fox news data

var currentSource = 1 //for button controls, initializing variable currentSource to set at cnn source

function loadSource (source){ //allows me to load all data from one certain source
	let sourceURL = 'https://newsapi.org/v2/everything?' +
          'from=2018-11-15&' + //from Nov 10 onward data
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
	}


function setup() {
		console.log(data1); //logs data from 10 most popular cnn articles into the console 
		console.log(data2); //logs data from 10 most popular msnbc articles into the console 
		console.log(data3); //logs data from 10 most popular fox news articles into the console 

	createCanvas(800,600)	
	
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
		var totalText1 = "" //creates string variable
		for (var i = 0; i < data1.articles.length; i++) { //loops through all 10 articles in source (data1)
			let cnnData = data1.articles[i].description; //uses dot syntax to pull out descriptions of articles
			totalText1 += cnnData //puts descriptions of 10 articles (cnnData) into string variable totalText1
				
		}
	
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
    console.log(results1); //logs description string freq array in console
	
	//MSNBC:
		var totalText2 = ""
		for (var i = 0; i < data2.articles.length; i++) {
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
	
    console.log(results2);
	
	
//FOX:
	var totalText3 = ""	
	for (var i = 0; i < data3.articles.length; i++) {
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
}

function mousePressedOnButton2(){
	currentSource=2
}

function mousePressedOnButton3(){ //**
	currentSource=3
}

function draw() {
	background(255)
		var x = 0;
	  var y= 100;
	 fill(0);
	
	if (currentSource==1){ //CNN
	  for(var i=0;i<results1.length;i++){
			textSize(results1[i].count*10)
			text(results1[i].word,x + sin( (frameCount/10 + i)/results1[i].count )*10,y)
			x+=textWidth(results1[i].word) +10
			if (x>width){
				x=0
				y+=50
			}
		}
	}
	if (currentSource==2){ //MSNBC
		for(var i=0;i<results2.length;i++){
			textSize(results2[i].count*10)
			text(results2[i].word,x + sin( (frameCount/10 + i)/results2[i].count )*10,y)
			x+=textWidth(results2[i].word) +10
			if (x>width){
				x=0
				y+=50
			}
		}
	}
	if (currentSource==3){ //FOX
		for(var i=0;i<results3.length;i++){
			textSize(results3[i].count*10)
			text(results3[i].word,x + sin( (frameCount/10 + i)/results3[i].count )*10,y)
			x+=textWidth(results3[i].word) +10
			if (x>width){
				x=0
				y+=50
			}
		}
	}
	

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