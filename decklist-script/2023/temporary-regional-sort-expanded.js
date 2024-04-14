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

        function convertToTitleCase(str) {
            if (!str) {
                return ""
            }
            return str.toLowerCase().split(' ').map(function (word) {
                return word.charAt(0).toUpperCase().concat(word.substr(1));
            }).join(' ');
        }
        item_element.appendChild(title);
        title.appendChild(playerName);
        playerName.appendChild(flagImg);
        playerName.append(convertToTitleCase(item.firstName));
        title.appendChild(deck);
        deck.appendChild(firstSprite);
        deck.appendChild(secondSprite);
        if (item.list.includes('./assets/list-icon.png')) {
            let listIcon = document.createElement('i');
            listIcon.classList.add('list-icon');
            listIcon.classList.add('list-icon-live');
            listIcon.classList.add('material-symbols-outlined');
            listIcon.innerHTML = "format_list_bulleted";
            deck.appendChild(listIcon);

            listIcon.addEventListener('click', function () {
                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = convertToTitleCase(item.firstName) + "<br><i>" + item.event + "</i>";
                if (item.disclaimer) {
                    document.querySelector('.playerName').innerHTML = convertToTitleCase(item.firstName) + "<br><i>" + item.event + "<br><span class='small-disclaimer-txt'>" + item.disclaimer + "</span></i>";
                }
                const copyButton = document.querySelector('.copy-to-clip');

                // PRINT DECKLIST //
                copyButton.addEventListener('click', function () {
                    copyButton.setAttribute('value', "")
                    navigator.clipboard.writeText(copyButton.value)
                })

                for (const cardType in item.decklist) {
                    item.decklist[cardType].forEach(card => {

                        let cardSpace = document.createElement('div');
                        cardSpace.classList.add('pokemon-card');

                        let pokeCard = document.createElement('img');
                        pokeCard.classList.add('pok-card-small')

                        const allSets = {
                            // sv
                            sv5, sv4pt5, fr, sv4, sv3pt5, sv3, sv2, sv1, svp, sve,
                            //swsh
                            swsh12pt5, swsh12, swsh11, pgo, swsh10, swsh9, swsh8, cel25, swsh7, swsh6, swsh5, swsh45, swsh4, swsh35, swsh3, swsh2, swsh1, swshp,
                            //sm
                            sm12, sm11, sm10, sm9, sm8, sm7, sm6, sm5, sm4, sm3, sm2, sm1, det, sm115, sm75, sm35, smp,
                            xy12, xy11, xy10, g1, xy9, xy8, xy7, xy6, dc1, xy5, xy4, xy3, xy2, xy1, xy0, xyp,
                            bw11, bw10, bw9, bw8, bw7, bw6, bw5, bw4, bw3, bw2, bw1, dv1, bwp
                        }

                        // 60 card checker
                        let sixtyCheck = item.decklist.pokemon.reduce((n, { count }) => n + count, 0) + item.decklist.trainer.reduce((n, { count }) => n + count, 0) + item.decklist.energy.reduce((n, { count }) => n + count, 0);
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

                        if (card.name === "Grass Energy - Basic") {
                            pokeCard.setAttribute('src', "../../../../assets/cards/new-energy/scvi-grass-energy.jpg");
                            pokeCard.classList.add('radius-card');
                        }
                        if (card.name === "Water Energy - Basic") {
                            pokeCard.setAttribute('src', "../../../../assets/cards/new-energy/scvi-water-energy.jpg");
                            pokeCard.classList.add('radius-card');
                        }
                        if (card.name === "Lightning Energy - Basic") {
                            pokeCard.setAttribute('src', "../../../../assets/cards/new-energy/scvi-lightning-energy.jpg");
                            pokeCard.classList.add('radius-card');
                        }
                        if (card.name === "Fire Energy - Basic") {
                            pokeCard.setAttribute('src', "../../../../assets/cards/new-energy/scvi-fire-energy.jpg");
                            pokeCard.classList.add('radius-card');
                        }
                        if (card.name === "Psychic Energy - Basic") {
                            pokeCard.setAttribute('src', "../../../../assets/cards/new-energy/scvi-psychic-energy.jpg");
                            pokeCard.classList.add('radius-card');
                        }
                        if (card.name === "Fighting Energy - Basic") {
                            pokeCard.setAttribute('src', "../../../../assets/cards/new-energy/scvi-fighting-energy.jpg");
                            pokeCard.classList.add('radius-card');
                        }
                        if (card.name === "Metal Energy - Basic") {
                            pokeCard.setAttribute('src', "../../../../assets/cards/new-energy/scvi-metal-energy.jpg");
                            pokeCard.classList.add('radius-card');
                        }
                        if (card.name === "Darkness Energy - Basic") {
                            pokeCard.setAttribute('src', "../../../../assets/cards/new-energy/scvi-dark-energy.jpg");
                            pokeCard.classList.add('radius-card');
                        }
                        if (deck.radiusCard === true) {
                            pokeCard.classList.add('radius-card')
                        }
                        if (item.event.includes('Internationals')) {
                            if (card.name === "Grass Energy - Basic") {
                                pokeCard.setAttribute('src', "../../../assets/cards/new-energy/scvi-grass-energy.jpg");
                                pokeCard.classList.add('radius-card');
                            }
                            if (card.name === "Water Energy - Basic") {
                                pokeCard.setAttribute('src', "../../../assets/cards/new-energy/scvi-water-energy.jpg");
                                pokeCard.classList.add('radius-card');
                            }
                            if (card.name === "Lightning Energy - Basic") {
                                pokeCard.setAttribute('src', "../../../assets/cards/new-energy/scvi-lightning-energy.jpg");
                                pokeCard.classList.add('radius-card');
                            }
                            if (card.name === "Fire Energy - Basic") {
                                pokeCard.setAttribute('src', "../../../assets/cards/new-energy/scvi-fire-energy.jpg");
                                pokeCard.classList.add('radius-card');
                            }
                            if (card.name === "Psychic Energy - Basic") {
                                pokeCard.setAttribute('src', "../../../assets/cards/new-energy/scvi-psychic-energy.jpg");
                                pokeCard.classList.add('radius-card');
                            }
                            if (card.name === "Fighting Energy - Basic") {
                                pokeCard.setAttribute('src', "../../../assets/cards/new-energy/scvi-fighting-energy.jpg");
                                pokeCard.classList.add('radius-card');
                            }
                            if (card.name === "Metal Energy - Basic") {
                                pokeCard.setAttribute('src', "../../../assets/cards/new-energy/scvi-metal-energy.jpg");
                                pokeCard.classList.add('radius-card');
                            }
                            if (card.name === "Darkness Energy - Basic") {
                                pokeCard.setAttribute('src', "../../../assets/cards/new-energy/scvi-dark-energy.jpg");
                                pokeCard.classList.add('radius-card');
                            }
                            if (deck.radiusCard === true) {
                                pokeCard.classList.add('radius-card')
                            }
                        }

                        let numberCounter = document.createElement('img');
                        numberCounter.classList.add('num-1')
                        numberCounter.setAttribute('src', "../../../../assets/card-count/" + card.count + ".png");
                        if (item.event.includes('Internationals')) {
                            numberCounter.setAttribute('src', "../../../assets/card-count/" + card.count + ".png");
                        }

                        cardSpace.appendChild(pokeCard);
                        cardSpace.appendChild(numberCounter);

                        // PRINT DECKLIST //
                        copyButton.addEventListener('click', function () {
                            copyButton.setAttribute('value', copyButton.value ? `${copyButton.value}\n${card.count} ${card.name} ${card.set} ${card.number}` : `${card.count} ${card.name} ${card.set} ${card.number}`)
                            navigator.clipboard.writeText(copyButton.value)
                        })

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

        } if (item.list.includes('./assets/sprites/blank.png')) {
            let listIcon = document.createElement('img');
            listIcon.classList.add('list-icon');
            listIcon.setAttribute('src', item.list);
            deck.appendChild(listIcon);
        }
        masterList.appendChild(item_element);
    }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);