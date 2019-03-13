var colors = generateRandomColors(6);
var numOfSquares = 6;

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var statusDisplay = document.getElementById("status");
var header = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function() {
	
	// change button color
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	
	// generate all new colors
	numOfSquares = 3
	colors = generateRandomColors(numOfSquares);

	// pick a new color
	pickedColor = pickColor();

	// change color display text
	colorDisplay.textContent = pickedColor;
	
	// change square colors to new colors
	for (var i = 0; i < squares.length; i++) {
		
		if (colors[i]) {
		
			squares[i].style.backgroundColor = colors[i];
		
		}

		else{
		
			squares[i].style.display = "none";
		
		}
	}

});

hardBtn.addEventListener("click", function() {

	// change button color
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	
	// generate all new colors
	numOfSquares = 6
	colors = generateRandomColors(numOfSquares);
	
	// pick a new color
	pickedColor = pickColor();

	// change color display text
	colorDisplay.textContent = pickedColor;

	// change square colors to new colors
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function() {
	
	// generate all new colors
	colors = generateRandomColors(numOfSquares);	
	
	// pick a new color
	pickedColor = pickColor();
	
	// change a color display
	colorDisplay.textContent = pickedColor;
	
	// change color of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}

	// reset status display
	statusDisplay.textContent = "";

	// reset header color
	header.style.backgroundColor = "steelblue";

	// reset button text
	resetButton.textContent = "New Colors";

});

for (var i = 0; i < squares.length; i++) {
	
	// add initial colors to the squares
	
	squares[i].style.backgroundColor = colors[i];

	// add click event on each square

	squares[i].addEventListener("click", function() {
		
		// grab color of clicked square
		
		var clickedColor = this.style.backgroundColor;
		
		// compare that color to picked color
		
		if (clickedColor !== pickedColor) {
			
			// change the color to match the background
			
			this.style.backgroundColor = "#232323";

			statusDisplay.textContent = "Try Again..";
		
		}

		else{

			statusDisplay.textContent = "Correct!!";
			
			changeAllColors(clickedColor);
			
			header.style.backgroundColor = clickedColor;

			resetButton.textContent = "Play Again?";

		}
	});

}


// This function changes the background colors when the guess is right
function changeAllColors(color) {
	// Loop through all squares 
	for (var i = 0; i < squares.length; i++) {
		// change color of all squares
		squares[i].style.backgroundColor = color;
	}

}

// This function picks the random color from the colors array
function pickColor() {

	var random = Math.floor(Math.random() * colors.length);
	return colors[random];

}

// this function generates the colors and adds to the colors array
function generateRandomColors(num) {
	// create an array
	var arr = [];
	// add num of random colors to the array
	for (var i = 0; i < num; i++) {
		// get random color and push into array
		arr.push(randomColor());
	}

	// return the array
	return arr;
}

// this function generates the rgb values for the colors array
function randomColor() {
	
	// pick "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	
	// pick "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	
	// pick "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}