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
  function bubbleSortCards() {
    let wall = cardList.length - 1;
    while (wall > 0) {
      let index = 0;
      while (index < wall) {
        if (cardList[index].number > cardList[index + 1].number) {
          [cardList[index], cardList[index + 1]] = [
            cardList[index + 1],
            cardList[index]
          ];
        }
        index++;
      }
      wall--;
      renderLog(cardList, wall);
    }
    renderCards();
  }

  function renderLog(cardList, wall) {
    const logContainer = document.getElementById("bubbleLog");
    logContainer.innerHTML += `
      <p>Iteration ${cardList.length - wall - 1}:</p>
      <div class="log-cards">
        ${cardList
          .map(
            card => `
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
        `
          )
          .join("")}
      </div>
    `;
  }
  const numCardsInput = document.getElementById("myInput");
  const generateButton = document.getElementById("myDraw");
  const sortButton = document.getElementById("mySort");

  generateButton.addEventListener("click", () => {
    const numCards = parseInt(numCardsInput.value);
    createCards(numCards);
  });
  sortButton.addEventListener("click", () => {
    bubbleSortCards();
  });
};
