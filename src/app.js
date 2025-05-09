import "bootstrap";
import "./style.css";
window.onload = function () {
  let cardDeck = [];
  shuffleCards();
  loadRandomCard();
  document.getElementById("drawCard").addEventListener("click", loadRandomCard);
  

  function loadRandomCard() {
    const [suit, rank] = drawCard(cardDeck);
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
    document.getElementById("customCardHeaderText").innerHTML =
      "Random Card Generator";
  }

  function drawCard(deck) {
    if (deck.length == 0) {
      showShuffleModal();

    } else {
      const i = Math.floor(Math.random() * deck.length);
      console.log(i, deck);
      // splice returns an array of removed elements
      const [card] = deck.splice(i, 1);
      return card; // e.g. ["♣️","7"]
    }
  }

  function showShuffleModal(){
    const modalShuffle = document.getElementById('outOfCards');
    const myModal = new bootstrap.Modal(modalShuffle);
    myModal.show();
    myModal.hide();
    document.getElementById("shuffleTheCards").addEventListener('click', () => {
      shuffleCards();  
      loadRandomCard();  
      myModal.hide();   
    }, { once: true }); 
  }

  function shuffleCards() {
    cardDeck = [
      ["❤️", "A"],
      ["❤️", "2"],
      ["❤️", "3"],
      ["❤️", "4"],
      ["❤️", "5"],
      ["❤️", "6"],
      ["❤️", "7"],
      ["❤️", "8"],
      ["❤️", "9"],
      ["❤️", "10"],
      ["❤️", "11"],
      ["❤️", "J"],
      ["❤️", "Q"],
      ["❤️", "K"],
      ["♠️", "A"],
      ["♠️", "2"],
      ["♠️", "3"],
      ["♠️", "4"],
      ["♠️", "5"],
      ["♠️", "6"],
      ["♠️", "7"],
      ["♠️", "8"],
      ["♠️", "9"],
      ["♠️", "10"],
      ["♠️", "11"],
      ["♠️", "J"],
      ["♠️", "Q"],
      ["♠️", "K"],
      ["♣️", "A"],
      ["♣️", "2"],
      ["♣️", "3"],
      ["♣️", "4"],
      ["♣️", "5"],
      ["♣️", "6"],
      ["♣️", "7"],
      ["♣️", "8"],
      ["♣️", "9"],
      ["♣️", "10"],
      ["♣️", "11"],
      ["♣️", "J"],
      ["♣️", "Q"],
      ["♣️", "K"],
      ["♦️", "A"],
      ["♦️", "2"],
      ["♦️", "3"],
      ["♦️", "4"],
      ["♦️", "5"],
      ["♦️", "6"],
      ["♦️", "7"],
      ["♦️", "8"],
      ["♦️", "9"],
      ["♦️", "10"],
      ["♦️", "11"],
      ["♦️", "J"],
      ["♦️", "Q"],
      ["♦️", "K"],
    ];
  }
};
