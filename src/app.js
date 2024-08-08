/* eslint-disable */
//
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let suits = ["♦", "♥", "♠", "♣"];
  let number = [
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
  let redOnes = ["♦", "♥"];

  function createSN() {
    const randomSuits = Math.floor(Math.random() * suits.length);
    const randomNumber = Math.floor(Math.random() * number.length);
    const suit = suits[randomSuits];
    const symbolElement = document.getElementById("SIsymbol");
    const symbolElement2 = document.getElementById("SIsymbol2");

    symbolElement.innerHTML = suit;
    symbolElement2.innerHTML = suit;

    if (redOnes.includes(suit)) {
      symbolElement.style.color = "red";
      symbolElement2.style.color = "red";
    } else {
      symbolElement.style.color = "black";
      symbolElement2.style.color = "black";
    }

    document.getElementById("numb3r").innerHTML = number[randomNumber];
  }

  createSN();
};
