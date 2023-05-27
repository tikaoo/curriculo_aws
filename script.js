let time = 5000;
let currentCardIndex = 0;
let cardContainers = document.querySelectorAll(".card-container");

function nextCard() {
  const currentCard = cardContainers[currentCardIndex];
  currentCard.style.opacity = "0";
  currentCard.classList.remove("selected");

  currentCard.addEventListener("transitionend", () => {
    currentCard.style.display = "none";
    currentCard.style.opacity = "1";
  });

  currentCardIndex++;
  if (currentCardIndex >= cardContainers.length) {
    currentCardIndex = 0;
  }

  const nextCard = cardContainers[currentCardIndex];
  nextCard.style.display = "block";
  nextCard.classList.add("selected");
}

function start() {
  cardContainers.forEach((card, index) => {
    if (index !== currentCardIndex) {
      card.style.display = "none";
    }
  });

  setInterval(() => {
    nextCard();
  }, time);
}

window.addEventListener("load", start);
