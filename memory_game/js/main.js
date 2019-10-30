//console.log("Up and Running!");
//console.log("User flipped" + cardOne);
//console.log("User flipped" + cardTwo);

alert('Hello, friends.');

const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
cardsInPlay.push(cardOne);
console.log("User flipped queen");
cardsInPlay.push(cardTwo);
console.log("User flipped king");

var cardOne = cards[0];
var cardTwo = cards[2];

if (cardsInPlay.length === 2) {
} else if (cardsInPlay[0] === cardsInPlay[2]) {
alert("You found a match!");
} else (cardsInPlay[0] === cardsInPlay[2])
alert("Sorry, try again");
