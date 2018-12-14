// LET S; //= "TRUMP, TRUMP, POTATO"

// FUNCTION SETUP() {
// 	CREATECANVAS(WINDOWWIDTH, WINDOWHEIGHT);
// 	BACKGROUND(100);
// 	S = "TRUMP TRUMP";
// }

// FUNCTION DRAW() {

// 	//LET RS = NEW RISTRING(S);
// 	//RITA.CONCORDANCE(S);
// 	//CONSOLE.LOG('EVENT');
// 	ARGS = {
// 		IGNORECASE: FALSE,
// 		IGNORESTOPWORDS: TRUE
// 	};

// 	KWIC = RITA.CONCORDANCE(S, "TRUMP", ARGS);
// }


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
// let r = new RiString(s);
// console.log(r);