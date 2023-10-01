let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackJack = false;
let message = "";
let messageEl = document.getElementById("message-el");
sumEl = document.getElementById("sum-el");
cardsEl = document.getElementById("cards-el");
let player = {
  name: "Anitesh",
  chips: 140,
};
playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;
function startGame() {
  isAlive = true;
  let firstCard = randomCard();
  let secondCard = randomCard();
  sum = firstCard + secondCard;
  cards = [firstCard, secondCard];
  renderGame();
}
function renderGame() {
  cardsEl.textContent = "Cards:";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  if (sum <= 20) {
    message = "Want to draw a new card?";
  } else if (sum > 21) {
    message = "You'r out of the game";
    isAlive = false;
  } else {
    message = "You have got a blackjack ";
    hasBlackJack = true;
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum:" + sum;
}
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let newcard = randomCard();
    cards.push(newcard);
    sum = sum + newcard;
    renderGame();
  }
}
function randomCard() {
  let random = Math.floor(Math.random() * 13) + 1;
  if (random == 1) {
    return 11;
  } else if (random > 10) {
    return 10;
  } else {
    return random;
  }
}
