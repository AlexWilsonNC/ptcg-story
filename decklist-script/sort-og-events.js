const masterList = document.querySelector('.masters-ol');
const modalBottom = document.querySelector('.modal-bottom');

function displayList(array = []) {
    masterList.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        let item = array[i];

        let item_element = document.createElement('li');
        item_element.classList.add('player-list-hover');
        let title = document.createElement('li');
        title.classList.add('results-list-item');

        let playerName = document.createElement('div');
        playerName.classList.add('name-n-flag');

        let flagImg = document.createElement('img');
        flagImg.classList.add('flag-size');
        flagImg.setAttribute('src', item.flag);

        let deck = document.createElement('div');
        deck.classList.add('player-deck-icons');

        let firstSprite = document.createElement('img');
        firstSprite.classList.add('sprite');
        firstSprite.setAttribute('src', item.sprite1);
        let secondSprite = document.createElement('img');
        secondSprite.classList.add('sprite');
        secondSprite.classList.add('second-sprite');
        secondSprite.setAttribute('src', item.sprite2);
        let listIcon = document.createElement('img');
        listIcon.classList.add('list-icon');
        listIcon.setAttribute('src', item.list);    

        item_element.appendChild(title);
        title.appendChild(playerName);
        playerName.appendChild(flagImg);
        playerName.append(item.firstName);
        title.appendChild(deck);
        deck.appendChild(firstSprite);
        deck.appendChild(secondSprite);
        deck.appendChild(listIcon);

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {
                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + "<br><i>" + item.event + "</i>";

                for (const cardType in item.decklist) {
                    item.decklist[cardType].forEach(card => {

                        let cardSpace = document.createElement('div');
                        cardSpace.classList.add('pokemon-card');

                        let pokeCard = document.createElement('img');
                        pokeCard.classList.add('pok-card-small')

                        const allSets = {
                            // sv
                            sv3pt5, sv3, sv2, sv1, svp,
                            //swsh
                            swsh12pt5, swsh12, swsh11, pgo, swsh10, swsh9, swsh8, cel25, swsh7, swsh6, swsh5, swsh45, swsh4, swsh35, swsh3, swsh2, swsh1, swshp,
                            //sm
                            sm12, sm11, sm10, sm9, sm8, sm7, sm6, sm5, sm4, sm3, sm2, sm1, det, sm115, sm75, sm35, smp
                        }

                        // 60 card checker
                        let sixtyCheck = item.decklist.pokemon.reduce((n, {count}) => n + count, 0) + item.decklist.trainer.reduce((n, {count}) => n + count, 0) + item.decklist.energy.reduce((n, {count}) => n + count, 0);
                        if (sixtyCheck !== 60) {
                            confirm('NOT 60 CARD! only' + " " + sixtyCheck)
                        }

                        const cardFound = allSets[setConvert[card.set]].find(cardInSet => cardInSet.id === setConvert[card.set] + "-" + card.number)

                        pokeCard.setAttribute('src', cardFound.images.small);
                        pokeCard.setAttribute('alt', card.name + " " + card.set + " " + card.number);

                        let zoomedImg = document.getElementById("insert-zoomed-img");
                        let zoombox = document.getElementById("zoomed-bg");

                        pokeCard.onclick = () => {
                            zoomedImg.setAttribute('src', cardFound.images.large);
                            zoombox.className = "show";
                        }
                        zoombox.onclick = () => {
                            zoombox.className = "";
                        };

                        let numberCounter = document.createElement('img');
                        numberCounter.classList.add('num-1')
                        numberCounter.setAttribute('src', "../../assets/card-count/" + card.count + ".png");

                        cardSpace.appendChild(pokeCard);
                        cardSpace.appendChild(numberCounter);

                        modalBottom.appendChild(cardSpace);
                        modalX.addEventListener('click', () => {
                            modal.style.display = 'none';
                            behind.style.display = 'none';
                            cardSpace.remove();
                        })
                        behind.addEventListener('click', () => {
                            modal.style.display = 'none';
                            behind.style.display = 'none';
                            cardSpace.remove();
                        })
                    })
                }

            })
        }
        masterList.appendChild(item_element);
    }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);