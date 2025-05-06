import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  const cardRanks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "J", "Q", "K"]
  const cardSuits = ["❤️", "♠️", "♣️", "♦️"];

  const randomIndex = Math.floor(Math.random() * cardSuits.length);
  const randomCardIndex = Math.floor(Math.random() * cardRanks.length);
      // pick the suit
  const randomSuit = cardSuits[randomIndex];
  const randomCard = cardRanks[randomCardIndex];
  document.getElementById("displayCardSuit").innerHTML = randomSuit;
  document.getElementById("displayCardSuit1").innerHTML = randomSuit;
  document.getElementById("displayRandomCardRank").innerHTML = randomCard;

};
