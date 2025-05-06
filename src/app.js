import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  loadRandomCard();
  document.getElementById("drawCard").onclick = loadRandomCard();
};

function loadRandomCard(){
  // set up the card deck 
  const cardRanks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "J", "Q", "K"]
  const cardSuits = ["❤️", "♠️", "♣️", "♦️"];

  // randomizer,and somewhere in here I will set up a new array with the cards to make sure that once we draw a card, then we can shuffle the deck, still working on this one
  const randomIndex = Math.floor(Math.random() * cardSuits.length);
  const randomCardIndex = Math.floor(Math.random() * cardRanks.length);
      // pick the suit
  const randomSuit = cardSuits[randomIndex];
  const randomCard = cardRanks[randomCardIndex];

  document.getElementById("displayCardSuit").innerHTML = randomSuit;
  document.getElementById("displayCardSuit1").innerHTML = randomSuit;
  document.getElementById("displayRandomCardRank").innerHTML = randomCard;
  //document.getElementById('myBox')
  //box.className = isModeA ? 'mode-a' : 'mode-b';
}
