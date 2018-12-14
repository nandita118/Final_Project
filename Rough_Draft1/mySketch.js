let url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2018-11-11&' +
          'sortBy=popularity&' +
          'apiKey=357931bc86ea40858f9d6da35d8c9351';
let data1
let data2
let data3

function loadSource (source){
	let sourceURL = 'https://newsapi.org/v2/everything?' +
          'from=2018-11-11&' +
					'sources='+source+'&' +
					'pageSize=10&' +
          'sortBy=popularity&' +
          'apiKey=357931bc86ea40858f9d6da35d8c9351';
return loadJSON(sourceURL);
	
}

function preload(){
	data1 = loadSource('cnn');
	data2 = loadSource('msnbc');
	data3 = loadSource('fox-news');
// 	let req = new Request(url);

// 	fetch(req)
// 			.then(function(response) {
// 					console.log(response.json());
// 			})
	
}


function setup() {
	console.log(data1);
	console.log(data2);
	console.log(data3);

}

function draw() {
	
}

function getFreqArray(text){
	
	let result = RiTa.concordance(text)

	let resultList = Object.keys(result)
												.reduce((all,key)=>{
													all.push({word:key, count:result[key]})
													return all
												},[])
												.sort((a,b)=>b.count-a.count)
	return resultList

}



let s = `Since being fired by President Donald Trump as secretary of state, Rex Tillerson has kept a very low profile. But on Thursday night in Houston, Tillerson broke that silence in a big way.

Here's how he described the "why" behind the breakdown of his relationship with the President, according to the Houston Chronicle:
"So often, the President would say here's what I want to do and here's how I want to do it and I would have to say to him, Mr. President I understand what you want to do but you can't do it that way. It violates the law."
Um, what???`


console.log(getFreqArray(s))