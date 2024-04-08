
let pastedCardContainer = document.createElement('div');
pastedCardContainer.classList.add('deckbuilt-card-container');
let pastedCard = document.createElement('img');
pastedCard.classList.add('database-card-in-list');
pastedCard.classList.add('card-added-in-decklist');

pastedCard.setAttribute('alt', alt.trim());
pastedCardContainer.appendChild(pastedCard);

let cardCount = document.createElement('img');
cardCount.classList.add('current-cnt-num');

let getmemyalt = pastedCard.getAttribute('alt');
let firstNumberMatch = getmemyalt.match(/\d+/);
let cardCountValue = firstNumberMatch[0];
cardCount.setAttribute('src', "../assets/card-count/" + cardCountValue + ".png");

minusCard.addEventListener('click', () => {
    cardCountValue = Math.max(parseInt(cardCount.getAttribute('src').match(/\d+/)[0]) - 1, 0);
    cardCount.setAttribute('src', "../assets/card-count/" + cardCountValue + ".png");
    plusCard.style.opacity = '1';
    plusCard.style.pointerEvents = 'all';
    if (cardCountValue === 0) {
        pastedCardContainer.remove();
     }
});

plusCard.addEventListener('click', () => {
    cardCountValue = parseInt(cardCount.getAttribute('src').match(/\d+/)[0]) + 1;
    if (!cardFound.id.includes("Energy,Basic")) {
        if (cardCountValue === 4) {
           plusCard.style.opacity = '0.4';
           plusCard.style.pointerEvents = 'none';
        }
     }
     if (cardFound.id.includes("Energy,Basic")) {
        if (cardCountValue === 30) {
           plusCard.style.opacity = '0.4';
           plusCard.style.pointerEvents = 'none';
        }
     }
    cardCount.setAttribute('src', "../assets/card-count/" + cardCountValue + ".png");
});
