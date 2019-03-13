var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Text = document.getElementById("p1s");
var p2Text = document.getElementById("p2s");
var winnerText = document.getElementById("winner");
var numInput = document.getElementById("numInput");
var playTo = document.getElementById("playto");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winScore = 5;


p1Button.addEventListener("click", function() {
	
	if (!gameOver) {
		
		p1Score++;

		if (p1Score === winScore) {
			gameOver = true;
			p1Text.classList.add("winner");	
			winnerText.textContent = "Player 1 has Won the Game!!!";
		}
		
		p1Text.textContent = p1Score;
	
	}

});

p2Button.addEventListener("click", function() {
	
	if (!gameOver) {

		p2Score++;
		
		if (p2Score === winScore) {
			gameOver = true;
			p2Text.classList.add("winner");
			winnerText.textContent = "Player 2 has Won the Game!!!";
		}
		
		p2Text.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function() {
	
	reset();

});

function reset() {
	
	p1Text.textContent = 0;
	p2Text.textContent = 0;
	gameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1Text.classList.remove("winner");
	p2Text.classList.remove("winner");
	winnerText.textContent = "";

}

numInput.addEventListener("change", function() {
	
	playTo.textContent = numInput.value;
	winScore = Number(numInput.value);
	reset();

});