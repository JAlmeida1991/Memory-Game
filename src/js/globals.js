// Global variables
const container = document.querySelector(".container");
const cards = document.querySelectorAll(".card");
const resetBtn = document.querySelector(".btn");

const state = {
  firstPick: null,
  secondPick: null,
  totalCombos: null
};

export { container, cards, resetBtn, state };
