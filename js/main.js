var newEmpty = []
var userInput = document.getElementById("userInput")

function myFunk(){
	newEmpty.push(userInput.value)

	var lastItem = newEmpty[newEmpty.length - 1]
	var t = document.createTextNode(lastItem)
	var li = document.createElement("li")
	li.appendChild(t)
	var ol = document.getElementsByTagName("ol")[0]
	ol.appendChild(li)

	//clear the input field
	userInput.value = ' '
}
