const startBtn = document.querySelector("#start-game-btn");
const newCardBtn = document.querySelector("#new-card-btn");
const cardEl = document.querySelector("#card-el");
const sumEl = document.querySelector("#sum-el");
const statementEl = document.querySelector("#statement-el");
const playerEl = document.querySelector("#player-el");
const moreChips = document.querySelector("#add-chips-btn");
const winnings = document.querySelector("#winnings-btn");

let statement = "";
let player = { name: "Daniela", chips: 400 };
let player = { name: "Daniela", chips: 0 };
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let hasChips = false;

function addChips() {
  player.chips += 20;
  playerEl.innerHTML = `${player.name}: ${player.chips}€ `;
  hasChips = true;
}
moreChips.addEventListener("click", addChips);

function clearChips() {
  player.chips = 0;
  playerEl.innerHTML = `${player.name}: ${player.chips}€ `;
  hasChips = false;
}
winnings.addEventListener("click", clearChips);

playerEl.innerHTML = `${player.name}: ${player.chips}€ `;

function getRandomCard() {
  let randomNumber = Math.ceil(Math.random() * 13);
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function renderGame() {
  cardEl.innerHTML = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.innerHTML += cards[i] + " ";
  }

  sumEl.innerHTML = "Sum: " + sum;

  if (sum > 1 && sum < 21) {
    statement = "You are still in the game! Do you want to draw a new card?";
    isAlive = true;
  } else if (sum > 21) {
    statement = "You are OUT!";
    isAlive = false;
  } else if (sum === 21) {
    statement = "Congratulations! You got BLACKJACK!";
    hasBlackJack = true;
    player.chips += 50;
    playerEl.innerHTML = `${player.name}: ${player.chips}€ `;
  } else {
    statement = "Do you want to play a round?";
    isAlive = false;
  }
  statementEl.innerHTML = statement;
}

function updateChipCount() {
  player.chips -= 20;
  playerEl.innerHTML = `${player.name}: ${player.chips}€ `;
}

function startingGame() {
  if (player.chips > 0) {
    hasChips = true;
  } else {
    hasChips = false;
  }

  if (hasChips === true) {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
    updateChipCount();
  }
}

function addingNewCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    cards.push(card);
    sum += card;
    renderGame();
  }
}

startBtn.addEventListener("click", startingGame);
newCardBtn.addEventListener("click", addingNewCard);
