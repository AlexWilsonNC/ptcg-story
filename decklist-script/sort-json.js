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
        flagImg.setAttribute('src', "../../../assets/flag-codes/" + item.flag + ".png");

        let deck = document.createElement('div');
        deck.classList.add('player-deck-icons');

        let firstSprite = document.createElement('img');
        firstSprite.classList.add('sprite');
        let secondSprite = document.createElement('img');
        secondSprite.classList.add('sprite');
        secondSprite.classList.add('second-sprite');
        firstSprite.setAttribute('src', "../../../assets/sprites/blank.png");
        secondSprite.setAttribute('src', "../../../assets/sprites/substitute.png");


        for (const pokemonCardInDeck in item.decklist) {
            item.decklist[pokemonCardInDeck].forEach(pokemon => {
                if (Object.values(pokemon).includes("Comfey")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                         if (Object.values(pokemon).includes("Sableye")) {
                            firstSprite.setAttribute('src', "../../../assets/sprites/comfey.png");
                            secondSprite.setAttribute('src', "../../../assets/sprites/sableye.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Mew VMAX")) {
                    firstSprite.setAttribute('src', "../../../assets/sprites/mew-vmax.png");
                    secondSprite.setAttribute('src', "../../../assets/sprites/genesect.png");
                }
                if (Object.values(pokemon).includes("Lugia VSTAR")) {
                    firstSprite.setAttribute('src', "../../../assets/sprites/lugia.png");
                    secondSprite.setAttribute('src', "../../../assets/sprites/archeops.png");
                }
                if (Object.values(pokemon).includes("Gardevoir ex")) {
                    firstSprite.setAttribute('src', "../../../assets/sprites/blank.png");
                    secondSprite.setAttribute('src', "../../../assets/sprites/gardevoir.png");
                }
                if (Object.values(pokemon).includes("Baxcalibur")) {
                    firstSprite.setAttribute('src', "../../../assets/sprites/chien-pao.png");
                    secondSprite.setAttribute('src', "../../../assets/sprites/baxcalibur.png");
                }
                if (Object.values(pokemon).includes("Kyogre")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Comfey")) {
                            firstSprite.setAttribute('src', "../../../assets/sprites/kyogre.png");
                            secondSprite.setAttribute('src', "../../../assets/sprites/comfey.png");
                                }
                    })
                }
                if (Object.values(pokemon).includes("Comfey")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Radiant Charizard")) {
                            firstSprite.setAttribute('src', "../../../assets/sprites/charizard-shiny.png");
                            secondSprite.setAttribute('src', "../../../assets/sprites/comfey.png");
                                }
                    })
                }
                if (Object.values(pokemon).includes("Miraidon ex")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Flaaffy")) {
                            firstSprite.setAttribute('src', "../../../assets/sprites/miraidon.png");
                            secondSprite.setAttribute('src', "../../../assets/sprites/flaaffy.png");
                                }
                    })
                }
                if (Object.values(pokemon).includes("Comfey")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Giratina VSTAR")) {
                            firstSprite.setAttribute('src', "../../../assets/sprites/giratina-origin.png");
                            secondSprite.setAttribute('src', "../../../assets/sprites/comfey.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Chien-Pao ex")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                         if (Object.values(pokemon).includes("Origin Forme Palkia VSTAR")) {
                            firstSprite.setAttribute('src', "../../../assets/sprites/palkia-origin.png");
                            secondSprite.setAttribute('src', "../../../assets/sprites/chien-pao.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Inteleon VMAX")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Rapid Strike Urshifu VMAX")) {
                            firstSprite.setAttribute('src', "../../../assets/sprites/inteleon-vmax.png");
                            secondSprite.setAttribute('src', "../../../assets/sprites/urshifu-rapid-strike-gmax.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Arceus VSTAR")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Charizard ex")) {
                            firstSprite.setAttribute('src', "../../../assets/sprites/charizard.png");
                            secondSprite.setAttribute('src', "../../../assets/sprites/arceus.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Charizard ex")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Pidgeot ex")) {
                            firstSprite.setAttribute('src', "../../../assets/sprites/charizard.png");
                            secondSprite.setAttribute('src', "../../../assets/sprites/pidgeot.png");
                        } else if (Object.values(pokemon).includes("Comfey")) {
                            firstSprite.setAttribute('src', "../../../assets/sprites/charizard.png");
                            secondSprite.setAttribute('src', "../../../assets/sprites/comfey.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Arceus VSTAR")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                         if (Object.values(pokemon).includes("Flying Pikachu VMAX")) {
                            firstSprite.setAttribute('src', "../../../assets/sprites/arceus.png");
                            secondSprite.setAttribute('src', "../../../assets/sprites/pikachu-gmax.png");
                        } else if (Object.values(pokemon).includes("Umbreon VMAX")) {
                            firstSprite.setAttribute('src', "../../../assets/sprites/arceus.png");
                            secondSprite.setAttribute('src', "../../../assets/sprites/umbreon-vmax.png");
                        } else if (Object.values(pokemon).includes("Giratina VSTAR")) {
                            firstSprite.setAttribute('src', "../../../assets/sprites/arceus.png");
                            secondSprite.setAttribute('src', "../../../assets/sprites/giratina-origin.png");
                        }
                    })
                }

                // if (!item.decklist) {
                //     firstSprite.setAttribute('src', "../../../assets/sprites/blank.png");
                //     secondSprite.setAttribute('src', "../../../assets/hyphen.png");   
                //     listIcon.setAttribute('src', "../../../sprites/blank.png");   
                // }
            })
        }

        item_element.appendChild(title);
        title.appendChild(playerName);
        playerName.appendChild(flagImg);
        playerName.append(item.name);
        title.appendChild(deck);
        deck.appendChild(firstSprite);
        deck.appendChild(secondSprite);

        if (item.decklist) {
            let listIcon = document.createElement('img');
            listIcon.classList.add('list-icon');
            listIcon.setAttribute('src', "../../../assets/list-icon.png");
            deck.appendChild(listIcon);

            item_element.addEventListener('click', function () {
                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.placing + ". " + item.name + " -" + " " + item.event + " Regionals";

                item.decklist.pokemon.sort((a, b) => b.count - a.count);
                item.decklist.trainer.sort((a, b) => b.count - a.count);
                item.decklist.energy.sort((a, b) => b.count - a.count);

                for (const cardType in item.decklist) {
                    item.decklist[cardType].forEach(card => {

                        let cardSpace = document.createElement('div');
                        cardSpace.classList.add('pokemon-card');

                        let pokeCard = document.createElement('img');
                        pokeCard.classList.add('pok-card-small')

                        /////////////////////////////

                        const allSets = {
                            // sv
                            sv3pt5, sv3, sv2, sv1, svp,
                            //swsh
                            swsh12pt5, swsh12, swsh11, pgo, swsh10, swsh9, swsh8, cel25, swsh7, swsh6, swsh5, swsh45, swsh4, swsh35, swsh3, swsh2, swsh1, swshp,
                            //sm
                            sm12, sm11, sm10, sm9, sm8, sm7, sm6, sm5, sm4, sm3, sm2, sm1, det, sm115, sm75, sm35, smp
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

                        // console.log('pizza', allSets[setConvert[card.set]].find(cardInSet => cardInSet.id === setConvert[card.set] + "-" + card.number))

                        /////////////////////////////

                        // old way
                        // pokeCard.setAttribute('src', "https://images.pokemontcg.io/" + setConvert[card.set] + "/" + card.number + ".png");

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
                        if (card.name === "Dark Energy - Basic") {
                            pokeCard.setAttribute('src', "../../../assets/cards/new-energy/scvi-dark-energy.jpg");
                            pokeCard.classList.add('radius-card');
                        }
                        if (deck.radiusCard === true) {
                            pokeCard.classList.add('radius-card')
                        }

                        let numberCounter = document.createElement('img');
                        numberCounter.classList.add('num-1')
                        numberCounter.setAttribute('src', "../../../assets/card-count/" + card.count + ".png");

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