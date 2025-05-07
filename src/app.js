import "bootstrap";
import "./style.css";

window.onload = function () {
  //write your code here
  loadRandomCard();
};

document.getElementById("drawCard").addEventListener('click', loadRandomCard);


/*function loadRandomCard() {
  // set up the card deck 
  const cardRanks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "J", "Q", "K"]
  const cardSuits = ["❤️", "♠️", "♣️", "♦️"];
  
  // randomizer,and somewhere in here I will set up a new array with the cards to make sure that once we draw a card, then we can shuffle the deck, still working on this one
  const randomIndex = Math.floor(Math.random() * cardSuits.length);
  const randomCardIndex = Math.floor(Math.random() * cardRanks.length);
  // pick the suit
  const randomSuit = cardSuits[randomIndex];
  const randomCard = cardRanks[randomCardIndex];
  console.log(randomSuit);
  
  //obviously this code changes the css style so that the text color is appropriate
  switch (randomSuit) {
  case "❤️":
    document.getElementById("displayRandomCardRank").className = "red";
    break;
  case "♠️":
    document.getElementById("displayRandomCardRank").className = "black";
    break;
  case "♣️":
    document.getElementById("displayRandomCardRank").className = "black";
    break;
  case "♦️":
    document.getElementById("displayRandomCardRank").className = "red";
    break;
  default:
    document.getElementById("displayRandomCardRank").className = "red";
  }

  document.getElementById("displayCardSuit").innerHTML = randomSuit;
  document.getElementById("displayCardSuit1").innerHTML = randomSuit;
  document.getElementById("displayRandomCardRank").innerHTML = randomCard;
  document.getElementById("drawCard").innerHTML = "Pick a card";
  document.getElementById("customCardHeaderText").innerHTML = "Random Card Generator"
} 
  */
 const cardDeck =   [["❤️","A"]
                     ["❤️","2"], 
                     ["❤️","3"],
                     ["❤️","4"],
                     ["❤️","5"],
                     ["❤️","6"],
                     ["❤️","7"],
                     ["❤️","8"],
                     ["❤️","9"],
                     ["❤️","10"],
                     ["❤️","11"],
                     ["❤️","J"],
                     ["❤️","Q"],
                     ["❤️","K"]
                     ["♠️","A"],
                     ["♠️","2"], 
                     ["♠️","3"],
                     ["♠️","4"],
                     ["♠️","5"],
                     ["♠️","6"],
                     ["♠️","7"],
                     ["♠️","8"],
                     ["♠️","9"],
                     ["♠️","10"],
                     ["♠️","11"],
                     ["♠️","J"],
                     ["♠️","Q"],
                     ["♠️","K"]
                     ["♣️","A"],
                     ["♣️","2"], 
                     ["♣️","3"],
                     ["♣️","4"],
                     ["♣️","5"],
                     ["♣️","6"],
                     ["♣️","7"],
                     ["♣️","8"],
                     ["♣️","9"],
                     ["♣️","10"],
                     ["♣️","11"],
                     ["♣️","J"],
                     ["♣️","Q"],
                     ["♣️","K"]
                     ["♦️","A"],
                     ["♦️","2"], 
                     ["♦️","3"],
                     ["♦️","4"],
                     ["♦️","5"],
                     ["♦️","6"],
                     ["♦️","7"],
                     ["♦️","8"],
                     ["♦️","9"],
                     ["♦️","10"],
                     ["♦️","11"],
                     ["♦️","J"],
                     ["♦️","Q"],
                     ["♦️","K"]];

function loadRandomCard(){
  const [suit, rank] = drawCard(cardDeck);
 console.log({suit}, {rank});
  switch (suit) {
    case "❤️":
      document.getElementById("displayRandomCardRank").className = "red";
      break;
    case "♠️":
      document.getElementById("displayRandomCardRank").className = "black";
      break;
    case "♣️":
      document.getElementById("displayRandomCardRank").className = "black";
      break;
    case "♦️":
      document.getElementById("displayRandomCardRank").className = "red";
      break;
    default:
      document.getElementById("displayRandomCardRank").className = "red";
    }
     document.getElementById("displayCardSuit").innerHTML = suit;
     document.getElementById("displayCardSuit1").innerHTML = suit;
     document.getElementById("displayRandomCardRank").innerHTML = rank;
     document.getElementById("drawCard").innerHTML = "Pick a card";
    document.getElementById("customCardHeaderText").innerHTML = "Random Card Generator"
  }



function drawCard(deck) {
  const i = Math.floor(Math.random() * deck.length);
  // splice returns an array of removed elements—take the first
  const [card] = deck.splice(i, 1); 
  return card;  // e.g. ["♣️","7"]
}

