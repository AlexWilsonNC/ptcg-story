const masterList = document.querySelector('.masters-ol');
const modalBottom = document.querySelector('.modal-bottom');

function displayList(array = []) {
    masterList.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        let item = array[i];

        // item.name.charAt(0).toUpperCase() + str.slice(1);

        let item_element = document.createElement('li');
        item_element.classList.add('player-list-hover');
        let title = document.createElement('li');
        title.classList.add('results-list-item');

        let playerName = document.createElement('div');
        playerName.classList.add('name-n-flag');

        let flagImg = document.createElement('img');
        flagImg.classList.add('flag-size');
        flagImg.setAttribute('src', "../../../../assets/flag-codes/" + item.flag + ".png");

        let deck = document.createElement('div');
        deck.classList.add('player-deck-icons');

        let firstSprite = document.createElement('img');
        firstSprite.classList.add('sprite');
        let secondSprite = document.createElement('img');
        secondSprite.classList.add('sprite');
        secondSprite.classList.add('second-sprite');
        firstSprite.setAttribute('src', "../../../../assets/sprites/blank.png");
        secondSprite.setAttribute('src', "../../../../assets/sprites/blank.png");

        for (const pokemonCardInDeck in item.decklist) {
            item.decklist[pokemonCardInDeck].forEach(pokemon => {
                if (Object.values(pokemon).includes("Arceus VSTAR")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Hisuian Goodra VSTAR")) {
                            firstSprite.setAttribute('src', "../../../../assets/sprites/arceus.png");
                            secondSprite.setAttribute('src', "../../../../assets/sprites/goodra-hisui.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Comfey")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Sableye")) {
                            firstSprite.setAttribute('src', "../../../../assets/sprites/comfey.png");
                            secondSprite.setAttribute('src', "../../../../assets/sprites/sableye.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Snorlax")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Rotom V")) {
                            firstSprite.setAttribute('src', "../../../../assets/sprites/snorlax.png");
                            secondSprite.setAttribute('src', "../../../../assets/sprites/rotom.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Regigigas")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Regidrago")) {
                            firstSprite.setAttribute('src', "../../../../assets/sprites/blank.png");
                            secondSprite.setAttribute('src', "../../../../assets/sprites/regigigas.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Hisuian Zoroark VSTAR")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Gengar")) {
                            firstSprite.setAttribute('src', "../../../../assets/sprites/zoroark-hisui.png");
                            secondSprite.setAttribute('src', "../../../../assets/sprites/gengar.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Arceus VSTAR")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Gyarados VMAX")) {
                            firstSprite.setAttribute('src', "../../../../assets/sprites/arceus.png");
                            secondSprite.setAttribute('src', "../../../../assets/sprites/gyarados-vmax.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Arceus VSTAR")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Duraludon VMAX")) {
                            firstSprite.setAttribute('src', "../../../../assets/sprites/arceus.png");
                            secondSprite.setAttribute('src', "../../../../assets/sprites/duraludon-gmax.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Charizard ex")) {
                    firstSprite.setAttribute('src', "../../../../assets/sprites/blank.png");
                    secondSprite.setAttribute('src', "../../../../assets/sprites/charizard.png");
                }
                if (Object.values(pokemon).includes("Mew VMAX")) {
                    firstSprite.setAttribute('src', "../../../../assets/sprites/mew-vmax.png");
                    secondSprite.setAttribute('src', "../../../../assets/sprites/genesect.png");
                }
                if (Object.values(pokemon).includes("Lugia VSTAR")) {
                    firstSprite.setAttribute('src', "../../../../assets/sprites/lugia.png");
                    secondSprite.setAttribute('src', "../../../../assets/sprites/archeops.png");
                }
                if (Object.values(pokemon).includes("Gardevoir ex")) {
                    firstSprite.setAttribute('src', "../../../../assets/sprites/blank.png");
                    secondSprite.setAttribute('src', "../../../../assets/sprites/gardevoir.png");
                }
                if (Object.values(pokemon).includes("Baxcalibur")) {
                    firstSprite.setAttribute('src', "../../../../assets/sprites/chien-pao.png");
                    secondSprite.setAttribute('src', "../../../../assets/sprites/baxcalibur.png");
                }
                if (Object.values(pokemon).includes("Kyogre")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Comfey")) {
                            firstSprite.setAttribute('src', "../../../../assets/sprites/kyogre.png");
                            secondSprite.setAttribute('src', "../../../../assets/sprites/comfey.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Comfey")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Radiant Charizard")) {
                            firstSprite.setAttribute('src', "../../../../assets/sprites/charizard-shiny.png");
                            secondSprite.setAttribute('src', "../../../../assets/sprites/comfey.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Miraidon ex")) {
                    firstSprite.setAttribute('src', "../../../../assets/sprites/blank.png");
                    secondSprite.setAttribute('src', "../../../../assets/sprites/miraidon.png");
                }
                if (Object.values(pokemon).includes("Miraidon ex")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Flaaffy")) {
                            firstSprite.setAttribute('src', "../../../../assets/sprites/miraidon.png");
                            secondSprite.setAttribute('src', "../../../../assets/sprites/flaaffy.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Comfey")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Giratina VSTAR")) {
                            firstSprite.setAttribute('src', "../../../../assets/sprites/giratina-origin.png");
                            secondSprite.setAttribute('src', "../../../../assets/sprites/comfey.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Chien-Pao ex")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Origin Forme Palkia VSTAR")) {
                            firstSprite.setAttribute('src', "../../../../assets/sprites/palkia-origin.png");
                            secondSprite.setAttribute('src', "../../../../assets/sprites/chien-pao.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Inteleon VMAX")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Rapid Strike Urshifu VMAX")) {
                            firstSprite.setAttribute('src', "../../../../assets/sprites/inteleon-vmax.png");
                            secondSprite.setAttribute('src', "../../../../assets/sprites/urshifu-rapid-strike-gmax.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Arceus VSTAR")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Charizard ex")) {
                            firstSprite.setAttribute('src', "../../../../assets/sprites/charizard.png");
                            secondSprite.setAttribute('src', "../../../../assets/sprites/arceus.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Ting-Lu ex")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Koraidon ex")) {
                            firstSprite.setAttribute('src', "../../../../assets/sprites/ting-lu.png");
                            secondSprite.setAttribute('src', "../../../../assets/sprites/koraidon.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Charizard ex")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Pidgeot ex")) {
                            firstSprite.setAttribute('src', "../../../../assets/sprites/charizard.png");
                            secondSprite.setAttribute('src', "../../../../assets/sprites/pidgeot.png");
                        } else if (Object.values(pokemon).includes("Comfey")) {
                            firstSprite.setAttribute('src', "../../../../assets/sprites/charizard.png");
                            secondSprite.setAttribute('src', "../../../../assets/sprites/comfey.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Arceus VSTAR")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Flying Pikachu VMAX")) {
                            firstSprite.setAttribute('src', "../../../../assets/sprites/arceus.png");
                            secondSprite.setAttribute('src', "../../../../assets/sprites/pikachu-gmax.png");
                        } else if (Object.values(pokemon).includes("Umbreon VMAX")) {
                            firstSprite.setAttribute('src', "../../../../assets/sprites/arceus.png");
                            secondSprite.setAttribute('src', "../../../../assets/sprites/umbreon-vmax.png");
                        } else if (Object.values(pokemon).includes("Giratina VSTAR")) {
                            firstSprite.setAttribute('src', "../../../../assets/sprites/arceus.png");
                            secondSprite.setAttribute('src', "../../../../assets/sprites/giratina-origin.png");
                        } else if (Object.values(pokemon).includes("Alolan Vulpix VSTAR")) {
                            firstSprite.setAttribute('src', "../../../../assets/sprites/arceus.png");
                            secondSprite.setAttribute('src', "../../../../assets/sprites/vulpix-alola.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Comfey")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Hisuian Goodra VSTAR")) {
                            firstSprite.setAttribute('src', "../../../../assets/sprites/goodra-hisui.png");
                            secondSprite.setAttribute('src', "../../../../assets/sprites/comfey.png");
                        }
                    })
                }
                // if (!item.decklist) {
                //     firstSprite.setAttribute('src', "../../../../assets/sprites/blank.png");
                //     secondSprite.setAttribute('src', "../../../../assets/hyphen.png");   
                //     listIcon.setAttribute('src', "../../../../sprites/blank.png");   
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
            listIcon.setAttribute('src', "../../../../assets/list-icon.png");
            deck.appendChild(listIcon);

            item_element.addEventListener('click', function () {
                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.placing + ". " + item.name + "<br><i>" + item.event + "</i>";

                item.decklist.pokemon.sort((a, b) => b.count - a.count);
                item.decklist.trainer.sort((a, b) => b.count - a.count);
                item.decklist.energy.sort((a, b) => b.count - a.count);

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
                            sv3pt5, sv3, sv2, sv1, svp,
                            //swsh
                            swsh12pt5, swsh12, swsh11, pgo, swsh10, swsh9, swsh8, cel25, swsh7, swsh6, swsh5, swsh45, swsh4, swsh35, swsh3, swsh2, swsh1, swshp,
                            //sm
                            sm12, sm11, sm10, sm9, sm8, sm7, sm6, sm5, sm4, sm3, sm2, sm1, det, sm115, sm75, sm35, smp
                        }

                        let cardFound = allSets[setConvert[card.set]].find(cardInSet => cardInSet.id === setConvert[card.set] + "-" + card.number);
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
                        if (card.name === "Dark Energy - Basic") {
                            pokeCard.setAttribute('src', "../../../../assets/cards/new-energy/scvi-dark-energy.jpg");
                            pokeCard.classList.add('radius-card');
                        }
                        if (deck.radiusCard === true) {
                            pokeCard.classList.add('radius-card')
                        }

                        let numberCounter = document.createElement('img');
                        numberCounter.classList.add('num-1')
                        numberCounter.setAttribute('src', "../../../../assets/card-count/" + card.count + ".png");

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
        }
        masterList.appendChild(item_element);
    }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);