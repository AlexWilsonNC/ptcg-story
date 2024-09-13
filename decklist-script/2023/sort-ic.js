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
        flagImg.setAttribute('src", "../../../assets/flag-codes/" + item.flag + ".png");

        let countryName = document.createElement('div');
        countryName.classList.add('country-name');
        countryName.style.display = 'none';

        flagImg.addEventListener('mouseover", function() {
            if (flagImg.getAttribute('src').includes('AR')) {
                countryName.textContent = 'Argentina (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('AU')) {
                countryName.textContent = 'Australia (Oceania)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('AT')) {
                countryName.textContent = 'Austria (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('BY')) {
                countryName.textContent = 'Belarus (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('BE')) {
                countryName.textContent = 'Belgium (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('BR')) {
                countryName.textContent = 'Brazil (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('CA')) {
                countryName.textContent = 'Canada (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('CL')) {
                countryName.textContent = 'Chile (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('CN')) {
                countryName.textContent = 'China (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('CO')) {
                countryName.textContent = 'Colombia (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('HR')) {
                countryName.textContent = 'Croatia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('CZ')) {
                countryName.textContent = 'Czechia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('DK')) {
                countryName.textContent = 'Denmark (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('SV')) {
                countryName.textContent = 'El Salvador (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('FI')) {
                countryName.textContent = 'Finland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('FR')) {
                countryName.textContent = 'France (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('DE')) {
                countryName.textContent = 'Germany (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('GR')) {
                countryName.textContent = 'Greece (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('HK')) {
                countryName.textContent = 'Hong Kong (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('HU')) {
                countryName.textContent = 'Hungary (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('IS')) {
                countryName.textContent = 'Iceland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('ID')) {
                countryName.textContent = 'Indonesia (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('IE')) {
                countryName.textContent = 'Ireland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('IM')) {
                countryName.textContent = 'Isle of Man (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('IL')) {
                countryName.textContent = 'Israel (Middle East-South Africa)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('IT')) {
                countryName.textContent = 'Italy (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('JP')) {
                countryName.textContent = 'Japan (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('SO')) {
                countryName.textContent = 'Somalia (Middle East-South Africa)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('KR')) {
                countryName.textContent = 'South Korea (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('LT')) {
                countryName.textContent = 'Lithuania (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('MY')) {
                countryName.textContent = 'Malaysia (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('MT')) {
                countryName.textContent = 'Malta (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('MX')) {
                countryName.textContent = 'Mexico (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('MA')) {
                countryName.textContent = 'Moroco (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('NL')) {
                countryName.textContent = 'Netherlands (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('NZ')) {
                countryName.textContent = 'New Zealand (Oceania)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('NI')) {
                countryName.textContent = 'Nicaragua (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('NO')) {
                countryName.textContent = 'Norway (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('PE')) {
                countryName.textContent = 'Peru (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('PH')) {
                countryName.textContent = 'Philippines (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('PL')) {
                countryName.textContent = 'Poland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('PT')) {
                countryName.textContent = 'Portugal (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('PR')) {
                countryName.textContent = 'Puerto Rico (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('RU')) {
                countryName.textContent = 'Russia (Russia)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('SG')) {
                countryName.textContent = 'Singapore (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('SK')) {
                countryName.textContent = 'Slovakia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('ZA')) {
                countryName.textContent = 'South Africa (Middle East-South Africa)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('ES')) {
                countryName.textContent = 'Spain (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('SE')) {
                countryName.textContent = 'Sweden (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('CH')) {
                countryName.textContent = 'Switzerland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('TW')) {
                countryName.textContent = 'Taiwan (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('TH')) {
                countryName.textContent = 'Thailand (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('UK')) {
                countryName.textContent = 'United Kingdom (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('US')) {
                countryName.textContent = 'USA (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('unknown')) {
                countryName.textContent = 'Unknown';
                countryName.style.display = 'block';
            }
        });

        flagImg.addEventListener('mouseout", function() {
            countryName.style.display = 'none';
        });

        let deck = document.createElement('div');
        deck.classList.add('player-deck-icons');

        let firstSprite = document.createElement('img');
        firstSprite.classList.add('sprite');
        let secondSprite = document.createElement('img');
        secondSprite.classList.add('sprite');
        secondSprite.classList.add('second-sprite');
        firstSprite.setAttribute('src", "../../../assets/sprites/blank.png");
        secondSprite.setAttribute('src", "../../../assets/sprites/blank.png");

        for (const pokemonCardInDeck in item.decklist) {
            item.decklist[pokemonCardInDeck].forEach(pokemon => {
                if (Object.values(pokemon).includes("Arceus VSTAR")) {
                    firstSprite.setAttribute('src", "../../../assets/sprites/blank.png");
                    secondSprite.setAttribute('src", "../../../assets/sprites/arceus.png");
                }
                if (Object.values(pokemon).includes("Arceus VSTAR")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Hisuian Goodra VSTAR")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/arceus.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/goodra-hisui.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Arceus VSTAR")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Aerodactyl VSTAR")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/arceus.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/aerodactyl.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Pidgeot ex")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Snorlax")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/pidgeot.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/snorlax.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Arceus VSTAR")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Serperior VSTAR")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/arceus.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/serperior.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Arceus VSTAR")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Regigigas VSTAR")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/arceus.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/regigigas.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Comfey")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Sableye")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/comfey.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/sableye.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Snorlax")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Rotom V")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/snorlax.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/rotom.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Regigigas")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Regidrago")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/blank.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/regigigas.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Hisuian Zoroark VSTAR")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Gengar")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/zoroark-hisui.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/gengar.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Mewtwo V-UNION")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Snorlax")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/mewtwo.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/snorlax.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Arceus VSTAR")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Gyarados VMAX")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/arceus.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/gyarados-vmax.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Arceus VSTAR")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Duraludon VMAX")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/arceus.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/duraludon-gmax.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Hisuian Electrode V")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Klawf")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/klawf.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/electrode-hisui.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Entei V")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Iron Valiant ex")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/entei.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/iron-valiant.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Rapid Strike Urshifu VMAX")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Iron Valiant ex")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/urshifu-rapid-strike-gmax.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/iron-valiant.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Roaring Moon ex")) {
                    firstSprite.setAttribute('src", "../../../assets/sprites/blank.png");
                    secondSprite.setAttribute('src", "../../../assets/sprites/roaring-moon.png");
                }
                if (Object.values(pokemon).includes("Roaring Moon ex")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Comfey")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/comfey.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/roaring-moon.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Roaring Moon ex")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Giratina VSTAR")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/giratina-origin.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/comfey.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Charizard ex")) {
                    firstSprite.setAttribute('src", "../../../assets/sprites/blank.png");
                    secondSprite.setAttribute('src", "../../../assets/sprites/charizard.png");
                }
                if (Object.values(pokemon).includes("Zoroark")) {
                    firstSprite.setAttribute('src", "../../../assets/sprites/blank.png");
                    secondSprite.setAttribute('src", "../../../assets/sprites/zoroark.png");
                }
                if (Object.values(pokemon).includes("Gholdengo ex")) {
                    firstSprite.setAttribute('src", "../../../assets/sprites/blank.png");
                    secondSprite.setAttribute('src", "../../../assets/sprites/gholdengo.png");
                }
                if (Object.values(pokemon).includes("Gholdengo ex")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Origin Forme Palkia VSTAR")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/gholdengo.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/palkia-origin.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Iron Valiant ex")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Greedent VMAX")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/iron-valiant.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/greedent.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Mew VMAX")) {
                    firstSprite.setAttribute('src", "../../../assets/sprites/mew-vmax.png");
                    secondSprite.setAttribute('src", "../../../assets/sprites/genesect.png");
                }
                if (Object.values(pokemon).includes("Lugia VSTAR")) {
                    firstSprite.setAttribute('src", "../../../assets/sprites/lugia.png");
                    secondSprite.setAttribute('src", "../../../assets/sprites/archeops.png");
                }
                if (Object.values(pokemon).includes("Gardevoir ex")) {
                    firstSprite.setAttribute('src", "../../../assets/sprites/blank.png");
                    secondSprite.setAttribute('src", "../../../assets/sprites/gardevoir.png");
                }
                if (Object.values(pokemon).includes("Baxcalibur")) {
                    firstSprite.setAttribute('src", "../../../assets/sprites/chien-pao.png");
                    secondSprite.setAttribute('src", "../../../assets/sprites/baxcalibur.png");
                }
                if (Object.values(pokemon).includes("Kyogre")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Comfey")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/kyogre.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/comfey.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Comfey")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Radiant Charizard")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/charizard-shiny.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/comfey.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Comfey")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Charizard ex")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/comfey.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/charizard.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Miraidon ex")) {
                    firstSprite.setAttribute('src", "../../../assets/sprites/blank.png");
                    secondSprite.setAttribute('src", "../../../assets/sprites/miraidon.png");
                }
                if (Object.values(pokemon).includes("Miraidon ex")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Flaaffy")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/miraidon.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/flaaffy.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Comfey")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Giratina VSTAR")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/giratina-origin.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/comfey.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Chien-Pao ex")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Origin Forme Palkia VSTAR")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/palkia-origin.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/chien-pao.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Inteleon VMAX")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Rapid Strike Urshifu VMAX")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/inteleon-vmax.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/urshifu-rapid-strike-gmax.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Arceus VSTAR")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Charizard ex")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/charizard.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/arceus.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Ting-Lu ex")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Koraidon ex")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/ting-lu.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/koraidon.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Charizard ex")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Pidgeot ex")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/charizard.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/pidgeot.png");
                        } else if (Object.values(pokemon).includes("Comfey")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/charizard.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/comfey.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Arceus VSTAR")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Flying Pikachu VMAX")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/arceus.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/pikachu-gmax.png");
                        } else if (Object.values(pokemon).includes("Umbreon VMAX")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/arceus.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/umbreon-vmax.png");
                        } else if (Object.values(pokemon).includes("Giratina VSTAR")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/arceus.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/giratina-origin.png");
                        } else if (Object.values(pokemon).includes("Alolan Vulpix VSTAR")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/arceus.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/vulpix-alola.png");
                        }
                    })
                }
                if (Object.values(pokemon).includes("Comfey")) {
                    item.decklist[pokemonCardInDeck].forEach(pokemon => {
                        if (Object.values(pokemon).includes("Hisuian Goodra VSTAR")) {
                            firstSprite.setAttribute('src", "../../../assets/sprites/goodra-hisui.png");
                            secondSprite.setAttribute('src", "../../../assets/sprites/comfey.png");
                        }
                    })
                }
                // if (!item.decklist) {
                //     firstSprite.setAttribute('src", "../../../assets/sprites/blank.png");
                //     secondSprite.setAttribute('src", "../../../assets/hyphen.png");   
                //     listIcon.setAttribute('src", "../../../sprites/blank.png");   
                // }
            })
        }
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
        playerName.appendChild(countryName); // Append the country name element
        playerName.appendChild(flagImg);
        playerName.append(convertToTitleCase(item.name));
        title.appendChild(deck);
        deck.appendChild(firstSprite);
        deck.appendChild(secondSprite);

        if (item.decklist) {
            let listIcon = document.createElement('i');
            listIcon.classList.add('list-icon');
            listIcon.classList.add('list-icon-live');
            listIcon.classList.add('material-symbols-outlined');
            listIcon.innerHTML = "format_list_bulleted";
            deck.appendChild(listIcon);

            listIcon.addEventListener('click", function () {
                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                if (item.placing) {
                    document.querySelector('.playerName').innerHTML = item.placing + ". " + convertToTitleCase(item.name) + "<br><i>" + item.event + "</i>";
                } else {
                    document.querySelector('.playerName').innerHTML = convertToTitleCase(item.name) + "<br><i>" + item.event + "</i>";
                }

                item.decklist.pokemon.sort((a, b) => b.count - a.count);
                item.decklist.trainer.sort((a, b) => b.count - a.count);
                item.decklist.energy.sort((a, b) => b.count - a.count);

                const copyButton = document.querySelector('.copy-to-clip');

                // PRINT DECKLIST //
                copyButton.addEventListener('click", function () {
                    copyButton.setAttribute('value", "")
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
                            sv4pt5, sv4, sv3pt5, sv3, sv2, sv1, svp, sve,
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

                        let cardFound = allSets[setConvert[card.set]].find(cardInSet => cardInSet.id === setConvert[card.set] + "-" + card.number);

                        // if (cardFound.rarity === "Ultra Rare" || "Special Illustration Rare" || "Hyper Rare") {
                            // find card of same name and use card.rarity = "Double Rare"
                        // }

                        pokeCard.setAttribute('src", cardFound.images.small);
                        pokeCard.setAttribute('alt", card.name + " " + card.set + " " + card.number);

                        let zoomedImg = document.getElementById("insert-zoomed-img");
                        let zoombox = document.getElementById("zoomed-bg");

                        pokeCard.onclick = () => {
                            zoomedImg.setAttribute('src", cardFound.images.large);
                            zoombox.className = "show";
                        }
                        zoombox.onclick = () => {
                            zoombox.className = "";
                        };

                        if (card.name === "Grass Energy - Basic") {
                            pokeCard.setAttribute('src", "../../../assets/cards/new-energy/scvi-grass-energy.jpg");
                            pokeCard.classList.add('radius-card');
                        }
                        if (card.name === "Water Energy - Basic") {
                            pokeCard.setAttribute('src", "../../../assets/cards/new-energy/scvi-water-energy.jpg");
                            pokeCard.classList.add('radius-card');
                        }
                        if (card.name === "Lightning Energy - Basic") {
                            pokeCard.setAttribute('src", "../../../assets/cards/new-energy/scvi-lightning-energy.jpg");
                            pokeCard.classList.add('radius-card');
                        }
                        if (card.name === "Fire Energy - Basic") {
                            pokeCard.setAttribute('src", "../../../assets/cards/new-energy/scvi-fire-energy.jpg");
                            pokeCard.classList.add('radius-card');
                        }
                        if (card.name === "Psychic Energy - Basic") {
                            pokeCard.setAttribute('src", "../../../assets/cards/new-energy/scvi-psychic-energy.jpg");
                            pokeCard.classList.add('radius-card');
                        }
                        if (card.name === "Fighting Energy - Basic") {
                            pokeCard.setAttribute('src", "../../../assets/cards/new-energy/scvi-fighting-energy.jpg");
                            pokeCard.classList.add('radius-card');
                        }
                        if (card.name === "Metal Energy - Basic") {
                            pokeCard.setAttribute('src", "../../../assets/cards/new-energy/scvi-metal-energy.jpg");
                            pokeCard.classList.add('radius-card');
                        }
                        if (card.name === "Darkness Energy - Basic") {
                            pokeCard.setAttribute('src", "../../../assets/cards/new-energy/scvi-dark-energy.jpg");
                            pokeCard.classList.add('radius-card');
                        }
                        if (deck.radiusCard === true) {
                            pokeCard.classList.add('radius-card')
                        }

                        let numberCounter = document.createElement('img');
                        numberCounter.classList.add('num-1')
                        numberCounter.setAttribute('src", "../../../assets/card-count/" + card.count + ".png");

                        cardSpace.appendChild(pokeCard);
                        cardSpace.appendChild(numberCounter);

                        // PRINT DECKLIST //
                        copyButton.addEventListener('click", function () {
                            copyButton.setAttribute('value", copyButton.value ? `${copyButton.value}\n${card.count} ${card.name} ${card.set} ${card.number}` : `${card.count} ${card.name} ${card.set} ${card.number}`)
                            navigator.clipboard.writeText(copyButton.value)
                        })

                        modalBottom.appendChild(cardSpace);
                        modalX.addEventListener('click", () => {
                            modal.style.display = 'none';
                            behind.style.display = 'none';
                            cardSpace.remove();
                        })
                        behind.addEventListener('click", () => {
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