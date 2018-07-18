var newEmpty = []
var userInput = document.getElementById("userInput")
var ul = document.getElementsByTagName("ul")[0]

function appendFunk(){
	ul.innerHTML = ""

	for(i = 0; i < newEmpty.length; i++){
		if(newEmpty[i] !== " ") {
			var t = document.createTextNode(newEmpty[i])
			var li = document.createElement("li")
			li.appendChild(t)
			ul.appendChild(li)
		} 
	}
};

function myFunk(){
	if(userInput.value !== " "){
		//push the input value into the array
	newEmpty.push(userInput.value)
	ul.innerHTML = ""
	appendFunk()	
	//clear the input field
	userInput.value = ' '

	}
}

function sortFunk(){
	newEmpty.sort()
	appendFunk()
}

function popFunk(){
	newEmpty.pop()
	appendFunk()
}

function shiftFunk(){
	newEmpty.shift()
	appendFunk()
}