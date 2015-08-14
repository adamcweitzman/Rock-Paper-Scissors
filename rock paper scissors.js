var playerWins = 0;
var computerWins = 0;
var playerMove;


function showMove () {
	alert("You chose " + playerMove + ".   " + "The computer chose " + computerMove + ".")
} 

while (playerWins < 5 && computerWins < 5)  {

var computerMove = Math.random()

playerMove = prompt("Do you choose rock, paper, or scissors?"); 


if (computerMove < .33) {
    computerMove = "rock"
	} else if (computerMove < .66)  {
		computerMove = "paper"
	} else {
		computerMove = "scissors"
	}





	if (playerMove === computerMove) {
		showMove();
		alert("tie!");
  } else if (playerMove === "rock" && computerMove === "paper") {
  		showMove()
  		alert("computer wins!")
  		computerWins = computerWins + 1
  } else if (playerMove === "rock" && computerMove === "scissors") {
		showMove()
		alert("player wins!")
		playerWins = playerWins + 1
  } else if (playerMove === "paper" && computerMove === "rock") {
  	    showMove()
  	    alert("player wins!")
  	    playerWins = playerWins + 1
  } else if (playerMove === "paper" && computerMove === "scissors") {
  	    showMove()
  	    alert("computer wins!")
  	    computerWins = computerWins + 1
  } else if (playerMove === "scissors" && computerMove === "rock") {
  		showMove()
  		alert("computer wins!")
  		computerWins = computerWins + 1
  } else if (playerMove === "scissors" && computerMove === "paper") {
  		showMove()
  		alert("player wins!")
  		playerWins = playerWins + 1
  }
}

  
  alert("You have won" + " " + playerWins + " times! And the computer has won" + " " + computerWins + " times!")