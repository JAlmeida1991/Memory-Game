// Global variables
const container = document.querySelector(".container");
const cards = document.querySelectorAll(".card");

let firstPick = null;
let secondPick = null;

// Event handlers

cards.forEach(card => {
  card.addEventListener("click", e => {
    // Need to check if user actually picked the front of the card
    if (e.target.classList.contains("card-front")) {
      // The user will only be allowed to flip a card only if he or she has not picked a first or second card
      if (!firstPick || !secondPick) {
        //  Obtain a reference to the whole card... Need to use parentElement since only clicking front of card
        const card = e.target.parentElement;
        //  Obtain a refrence the the back of the card (2nd child div)
        const cardBack = card.children[1];
        // Add rotate class to card
        card.classList.add("rotate-js");
        // This will assign the values to firstPick and secondPick
        selectCard(cardBack);
        // Only compare the two cards unless they have a value
        if (firstPick && secondPick) compareCards(firstPick, secondPick);
      }
    }
  });
});

window.addEventListener("load", init);

/************************
 * Fisher Yates Algorithm:
 * **********************
 */

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

//**********************

function compareCards(firstCard, secondCard) {
  const result = firstCard.textContent === secondCard.textContent;
  // Need to use setTimeout since incorrect change will happen instant otherwise
  setTimeout(() => {
    if (!result) {
      firstCard.parentElement.classList.remove("rotate-js");
      secondCard.parentElement.classList.remove("rotate-js");
    }
    firstPick = null;
    secondPick = null;
  }, 2000);
}

function selectCard(cardSide) {
  // Check if user did not select a card... If he or she has not, assign value as first pick
  if (!firstPick) {
    firstPick = cardSide;
    // Need to check if user selected a card twice. Game will get buggy if do not check for this clause...
  } else if (cardSide !== firstPick) {
    secondPick = cardSide;
  }
}

function init() {
  // Assign cards to deck
  const deck = [...cards];
  // Remove each card from game board
  while (container.firstChild) {
    container.firstChild.remove();
  }
  // Shuffle deck of cards using Fisher Yates Algorithm
  shuffle(deck);
  // Reassign shuffled card to the game board
  deck.forEach(card => container.appendChild(card));
}
