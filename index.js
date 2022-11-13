var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;

function diceRoll1 (randomNum1) {

        var dice1 = randomNum1;

        if (dice1 == 1) {
                return document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
        } else if (dice1 == 2) {
                return document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
        } else if (dice1 == 3) {
                return document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
        } else if (dice1 == 4) {
                return document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
        } else if (dice1 == 5) {
                return document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
        } else {
                return document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
        }

}

function diceRoll2 (randomNum2) {

        var dice2 = randomNum2;


        if (dice2 == 1) {
                return document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
        } else if (dice2 == 2) {
                return document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
        } else if (dice2 == 3) {
                return document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
        } else if (dice2 == 4) {
                return document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
        } else if (dice2 == 5) {
                return document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
        } else {
                return document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
        }
}

function displayWinner(randomNum1, randomNum2) {
        var playerOne = randomNum1;
        var playerTwo = randomNum2;

        if (playerOne > playerTwo) {
          return document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
        } else if (playerOne == playerTwo) {
          return document.querySelector("h1").innerHTML = "DRAW!";
        } else {
          return document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
        }
}

diceRoll1(randomNum1);
diceRoll2(randomNum2);
displayWinner(randomNum1,randomNum2);
