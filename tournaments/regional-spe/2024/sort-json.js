
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
        
        item.decklist.pokemon.forEach((name) => {
            firstSprite.setAttribute('src', "../../../assets/sprites/blank.png");
            secondSprite.setAttribute('src', "../../../assets/sprites/substitute.png");
            if (Object.values(item.decklist.pokemon).includes("Mew VMAX")) {
                firstSprite.setAttribute('src', "../../../assets/sprites/mew-vmax.png");
                secondSprite.setAttribute('src', "../../../assets/sprites/genesect.png");
            } else if (!item.decklist) {
                firstSprite.setAttribute('src', "../../../assets/sprites/blank.png");
                secondSprite.setAttribute('src', "../../../assets/hyphen.png");    
            }
          })

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

                const setConvert = {
                    // sv
                    "OBF": "sv3",
                    "PAL": "sv2",
                    "SVI": "sv1",
                    "SVP": "svp",
                    // swsh
                    "CRZ": "swsh12pt5",
                    "SIT": "swsh12",
                    "LOR": "swsh11",
                    "PGO": "pgo",
                    "ASR": "swsh10",
                    "BRS": "swsh9",
                    "FST": "swsh8",
                    "CEL": "cel25",
                    "EVS": "swsh7",
                    "CRE": "swsh6",
                    "BST": "swsh5",
                    "SHF": "swsh45",
                    "VIV": "swsh4",
                    "CPA": "swsh35",
                    "DAA": "swsh3",
                    "RCL": "swsh2",
                    "SSH": "swsh1",
                    // sm
                    "CEC": "sm12",
                    "UNM": "sm11",
                    "UNB": "sm10",
                    "TEU": "sm9",
                    "LOT": "sm8",
                    "CES": "sm7",
                    "FLI": "sm6",
                    "UPR": "sm5",
                    "CIN": "sm4",
                    "BUS": "sm3",
                    "GRI": "sm2",
                    "SUM": "sm1"
                }

                item.decklist.pokemon.sort((a, b) => b.count - a.count);
                item.decklist.trainer.sort((a, b) => b.count - a.count);
                item.decklist.energy.sort((a, b) => b.count - a.count);

                for (const cardType in item.decklist) {
                    item.decklist[cardType].forEach(card => {

                        let cardSpace = document.createElement('div');
                        cardSpace.classList.add('pokemon-card');
    
                        let pokeCard = document.createElement('img');
                        pokeCard.classList.add('pok-card-small')
    
                        pokeCard.setAttribute('alt', card.name + " " + card.set);
                        pokeCard.setAttribute('src', "https://images.pokemontcg.io/" + setConvert[card.set] + "/" + card.number + ".png");
                        if (card.set === "PR" && card.number.startsWith('SWSH' || 'swsh')) {
                            pokeCard.setAttribute('src', "https://images.pokemontcg.io/swshp/" + card.number + ".png");
                        }
                        if (card.set === "CRZ" && card.number.startsWith('G' || 'g')) {
                            pokeCard.setAttribute('src', "https://images.pokemontcg.io/swsh12pt5gg/" + card.number + ".png");
                        }
                        if (card.set === "LOR" && card.number.startsWith('TG' || 'tg')) {
                            pokeCard.setAttribute('src', "https://images.pokemontcg.io/swsh11tg/" + card.number + ".png");
                        }
                        if (card.set === "ASR" && card.number.startsWith('TG' || 'tg')) {
                            pokeCard.setAttribute('src', "https://images.pokemontcg.io/swsh10tg/" + card.number + ".png");
                        }
                        if (card.set === "SIT" && card.number.startsWith('TG' || 'tg')) {
                            pokeCard.setAttribute('src', "https://images.pokemontcg.io/swsh12tg/" + card.number + ".png");
                        }
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
                        // let xhr = new XMLHttpRequest();
                        
                        // xhr.open('GET', 'https://api.pokemontcg.io/v2/cards/', true);  

                        // pokemon.card.find(card.set + '-' + card.number)
                        //     .then(cardResult => {
                        //     console.log(cardResult) // "Charizard"
                        // })

                        let zoomedImg = document.getElementById("insert-zoomed-img");
                        let zoombox = document.getElementById("zoomed-bg");

                        pokeCard.onclick = () => {
                            zoomedImg.setAttribute('src', "https://images.pokemontcg.io/" + setConvert[card.set] + "/" + card.number + "_hires.png");
                            if (card.set === "PR" && card.number.startsWith('SWSH' || 'swsh')) {
                                pokeCard.setAttribute('src', "https://images.pokemontcg.io/swshp/" + card.number + "_hires.png");
                            }
                            if (card.set === "CRZ" && card.number.startsWith('G' || 'g')) {
                                pokeCard.setAttribute('src', "https://images.pokemontcg.io/swsh12pt5gg/" + card.number + "_hires.png");
                            }
                            if (card.set === "LOR" && card.number.startsWith('TG' || 'tg')) {
                                pokeCard.setAttribute('src', "https://images.pokemontcg.io/swsh11tg/" + card.number + "_hires.png");
                            }
                            if (card.set === "ASR" && card.number.startsWith('TG' || 'tg')) {
                                pokeCard.setAttribute('src', "https://images.pokemontcg.io/swsh10tg/" + card.number + "_hires.png");
                            }
                            if (card.set === "SIT" && card.number.startsWith('TG' || 'tg')) {
                                pokeCard.setAttribute('src', "https://images.pokemontcg.io/swsh12tg/" + card.number + "_hires.png");
                            }
                            zoombox.className = "show";
                        };
                        zoombox.onclick = () => {
                            zoombox.className = "";
                        };

                        // if (deck.radiusCard === true) {
                        //     pokeCard.classList.add('radius-card')
                        // }

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