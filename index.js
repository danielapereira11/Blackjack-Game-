const startBtn = document.querySelector("#start-game-btn");
const newCardBtn = document.querySelector("#new-card-btn");
const cardEl = document.querySelector("#card-el");
const sumEl = document.querySelector("#sum-el");
const statementEl = document.querySelector("#statement-el");
const playerEl = document.querySelector("#player-el");

let cards = [];
let sum = "";

cardEl.innerHTML = "Cards: " + cards + " ";
sumEl.innerHTML = "Sum: " + sum + " ";

function generateStatement() {
  if (sum > 1 && sum < 21) {
    statementEl.innerHTML =
      "You are still in the game! Do you want to draw a new card?";
  } else if (sum > 21) {
    statementEl.innerHTML = "You are OUT!";
  } else if (sum === 21) {
    statementEl.innerHTML = "Congratulations! You got BLACKJACK!";
  } else {
    statementEl.innerHTML = "Do you want to play a round?";
  }
}

generateStatement();
