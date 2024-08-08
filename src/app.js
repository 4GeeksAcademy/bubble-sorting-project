/* eslint-disable */
// First, we need to create the function that creates cards
// Second, another one that creates random numbers and symbols
// Third, we need a function that injects the number of cards requested by the user
// Fourth, must
import "bootstrap";
import "./style.css";

window.onload = function() {
  let suits = ["♦", "♥", "♠", "♣"];
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let cardList = [];

  function completeCard() {
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const number = numbers[Math.floor(Math.random() * numbers.length)];
    return { suit, number };
  }

  function renderCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    cardList.forEach(card => {
      const cardHTML = `
        <div class="card" style="display: inline-block; width: 100px; height: 150px; margin: 10px;">
          <div class="card-body row row-cols-1">
            <div style="float: left;">
              <p>${card.suit}</p>
            </div>
            <div class="align-self-center" style="text-align: center; ">
              <p>${card.number}</p>
            </div>
            <div style="float: right; transform: rotate(180deg);">
              <p>${card.suit}</p>
            </div>
          </div>
        </div>
      `;
      cardContainer.innerHTML += cardHTML;
    });
  }

  function createCards(numCards) {
    cardList = [];
    for (let i = 0; i < numCards; i++) {
      cardList.push(completeCard());
    }
    renderCards();
  }

  const numCardsInput = document.getElementById("myInput");
  const generateButton = document.getElementById("myDraw");

  generateButton.addEventListener("click", () => {
    const numCards = parseInt(numCardsInput.value);
    createCards(numCards);
  });
};
