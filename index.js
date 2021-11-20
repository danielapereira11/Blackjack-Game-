const startBtn = document.querySelector("#start-game-btn");
const newCardBtn = document.querySelector("#new-card-btn");
const cardEl = document.querySelector("#card-el");
const sumEl = document.querySelector("#sum-el");
const statementEl = document.querySelector("#statement-el");
const player = document.querySelector("#player-el");

let cards = [4, 6, 9];
let sum = cards[0] + cards[1] + cards[2];

cardEl.innerHTML = "Cards: " + cards + " ";
sumEl.innerHTML = "Sum: " + sum + " ";
// console.log(sum);
