/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let leftElement = this.document.getElementById("symbol-left");
  let rightElement = this.document.getElementById("symbol-right");
  let numberElement = this.document.getElementById("number");
  let cardElement = this.document.getElementById("card");

  let cardNumber = [
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
  let symbols = ["spade", "club", "heart", "diamond"];

  function generateRandom(array) {
    let result = Math.floor(Math.random() * array.length);
    return result;
  }
  let valueSymbol = generateRandom(symbols);
  cardElement.className = "card " + symbols[valueSymbol];
  numberElement.innerHTML = cardNumber[generateRandom(cardNumber)];

  switch (valueSymbol) {
    case 0:
      leftElement.innerHTML = rightElement.innerHTML = "&#9824;";
      break;
    case 1:
      leftElement.innerHTML = rightElement.innerHTML = "&#9827;";
      break;
    case 2:
      leftElement.innerHTML = rightElement.innerHTML = "&#9829;";
      break;
    case 3:
      leftElement.innerHTML = rightElement.innerHTML = "&#9830;";
      break;
    default:
      break;
  }
};
