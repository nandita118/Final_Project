let url = 'https://newsapi.org/v2/everything?' + //variable for url
          'q=Apple&' +
          'from=2018-11-15&' +
          'sortBy=popularity&' +
          'apiKey=357931bc86ea40858f9d6da35d8c9351';
let data1; //cnn variable
let data2; //msnbc variable
let data3; //fox news variable
var results1 =[];

var currentSource = 1
function loadSource (source){
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
	//cnnData = loadSource('cnn').articles[i].description
	
	// description1 = loadSource('cnn').articles.description;
	
// 	let req = new Request(url);

// 	fetch(req)
// 			.then(function(response) {
// 					console.log(response.json());
// 			})
	


//console.log(cnnData);
//function gotData(data){
//	let description1 = data.cnn.articles.description;
 // console.log(description1);
//}
// function gotData(data) {
// 	let description1 = data.cnn.articles.description;
// 	for (var i = 0; i < articles.length; i++) {
		
// 	}
// 	console.log(description1);
// }


function setup() {
		console.log(data1); //log taken data into the console -- makes sure data has been taken
		console.log(data2);
		console.log(data3);

	createCanvas(800,600)	
	
		var btn1 = createButton("Source 1")
		btn1.position (20,20)
		
		btn1.mousePressed(mousePressedOnButton1)
		
		
		var btn2 = createButton("Source 2")
		btn2.position (20,50)
		
		btn2.mousePressed(mousePressedOnButton2)
		
		var btn3 = createButton("Source 3") //**
		btn3.position (20,70)
		
		btn3.mousePressed(mousePressedOnButton3)
		
	// 	var url = 'https://newsapi.org/v2/top-headlines?' +
//           'country=us&' +
//           'apiKey=357931bc86ea40858f9d6da35d8c9351';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })

		var totalText = ""
		for (var i = 0; i < data1.articles.length; i++) {
			let cnnData = data1.articles[i].description;
			totalText += cnnData
				
		}
	
	  results1=  getFreqArray(totalText) //gets frequency of descriptions of 10 articles for cnn from g to l
									.filter(d=>d.word!=".")
									.filter(d=>d.word!="the")
    console.log(results1);
	
		

		for (var i = 0; i < data2.articles.length; i++) {
				let msnbcData = data2.articles[i].description;
				// console.log(getFreqArray(msnbcData));
		}

		
		for (var i = 0; i < data3.articles.length; i++) {
			 let foxData = data3.articles[i].description;
				// console.log(getFreqArray(foxData));
		}

//let cnnArticle = data1.articles.title

// let s = `Since being fired by President Donald Trump as secretary of state, Rex Tillerson has kept a very low profile. But on Thursday night in Houston, Tillerson broke that silence in a big way.

// Here's how he described the "why" behind the breakdown of his relationship with the President, according to the Houston Chronicle:
// "So often, the President would say here's what I want to do and here's how I want to do it and I would have to say to him, Mr. President I understand what you want to do but you can't do it that way. It violates the law."
// Um, what???`


	// console.log(getFreqArray(s))

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
	
	if (currentSource==1){
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
	if (currentSource==2){
		text(2,50,50)
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