const container = document.querySelector(".container");
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", e => {
    const card = e.target.parentElement;
    if (card.classList.contains("rotate-js")) {
      card.classList.remove("rotate-js");
    } else {
      card.classList.add("rotate-js");
    }
  });
});

window.addEventListener("load", init);

function init() {
  const deck = [];
  cards.forEach(card => deck.push(card));
  // Remove each card from game board
  while (container.firstChild) {
    container.firstChild.remove();
  }
  // Shuffle deck of cards using Fisher Yates Algorithm
  shuffle(deck);

  // Reassign shuffled card to the game board
  deck.forEach(card => container.appendChild(card));
}

/**
 * Fisher Yates Algorithm:
 */
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
