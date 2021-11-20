const startBtn = document.querySelector("#start-game-btn");
const newCardBtn = document.querySelector("#new-card-btn");
const cardEl = document.querySelector("#card-el");
const sumEl = document.querySelector("#sum-el");
const statementEl = document.querySelector("#statement-el");
const playerEl = document.querySelector("#player-el");

let player = { name: "Daniela", chips: 400 };
let cards = [];
let sum = 0;

playerEl.innerHTML = `${player.name}: ${player.chips}€ `;

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

function startingGame() {
  cards[0] = Math.ceil(Math.random() * 10);
  cards[1] = Math.ceil(Math.random() * 10);
  sum = cards[0] + cards[1];
  cardEl.innerHTML = "Cards: " + cards[0] + ", " + cards[1];
  sumEl.innerHTML = "Sum: " + sum;
  generateStatement();
}

function addingNewCard() {
  cards[2] = Math.ceil(Math.random() * 10);
  sum = cards[0] + cards[1] + cards[2];
  cardEl.innerHTML = "Cards: " + cards[0] + ", " + cards[1] + ", " + cards[2];
  sumEl.innerHTML = "Sum: " + sum;
  generateStatement();
}

startBtn.addEventListener("click", startingGame);
newCardBtn.addEventListener("click", addingNewCard);
