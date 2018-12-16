import { cards, resetBtn } from "./globals";
import { init, flipCard, resetGame } from "./helpers";

window.addEventListener("load", init);
cards.forEach(card => card.addEventListener("click", flipCard));
resetBtn.addEventListener("click", resetGame);
