const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

const cardOne = [cards[0]];
cardsInPlay.push(cardOne);

const cardTwo = [cards[2]];
cardsInPlay.push(cardTwo);


if (cardsInPlay.length === 2) {
function checkForMatch() {
if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else 
console.log("Sorry, try again");
};	
}

function checkForMatch() {
if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else 
console.log("Sorry, try again");
};

function flipCard(cardId) {
console.log("User flipped " + cards[cardId])
cardsInPlay.push(cards[cardId]);
if (cardsInPlay.length === 2) {
	checkForMatch();
}
};

flipCard(0);
flipCard(2);
checkForMatch();