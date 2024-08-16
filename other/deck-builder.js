const setsOl = document.querySelector('.all-cards-displayed');
let zoomedImg = document.getElementById("insert-zoomed-img");
let card = document.getElementsByClassName("database-card-in-list"),
    zoombox = document.getElementById("zoomed-bg");
let advancedDropdownBtn = document.querySelector(".advanced-p-btn");
let advancedDropdown = document.querySelector(".expand-advanced");

let deckbox = document.querySelector(".deck-box");
let statCount = document.querySelector(".stat-count");
let currCounter = document.querySelector(".current-deck-count");
let deckSort = document.getElementById("deck-sort");

function displayList(arr) {
    const arrOfAllCards = [];
    arr.forEach(element => {
        arrOfAllCards.push(...element);
    });
    setsOl.innerHTML = '';
    for (let i = 0; i < arrOfAllCards.length; i++) {
        let item = arrOfAllCards[i];
        let cardArea = document.createElement('div');
        cardArea.classList.add('searched-card-wrap');
        let img = document.createElement('img');
        img.classList.add('database-card-in-list');
        img.setAttribute('src', item.images.small);
        img.setAttribute('alt', item.name + " " + item.setAbbrev + " " + item.number);
        img.id = item.supertype + "," + item.subtypes;
        // if the card is a pokemon
        if (item.types) {
            img.id = item.supertype + "," + item.subtypes + "," + item.types;
        } if (item.evolvesFrom) {
            img.id = item.supertype + "," + item.subtypes + "," + item.types + ",Evolves from " + item.evolvesFrom;
        }
        img.loading = 'lazy';
        let addCardBtn = document.createElement('div');
        addCardBtn.classList.add('add-card-to-deck');

        cardArea.appendChild(img);
        cardArea.appendChild(addCardBtn);

        // duplicate card from search into decklist
        addCardBtn.addEventListener("click", () => {
            let deckCardContainer = document.createElement('div');
            deckCardContainer.classList.add('deckbuilt-card-container');
            addCardBtn.style.opacity = 0;
            addCardBtn.style.pointerEvents = 'none';
            let deckImg = img.cloneNode(true);
            deckImg.classList.add('card-added-in-decklist');
            deckImg.setAttribute('alt', "1" + " " + item.name + " " + item.setAbbrev + " " + item.number);
            deckImg.onclick = () => {
                zoomedImg.setAttribute('src', item.images.large);
                zoombox.className = "show";
            };
            let currentValue = parseInt(currCounter.innerHTML);
            currentValue++;
            currCounter.innerHTML = currentValue;

            // SORT DECKLIST
            deckSort.addEventListener("click", () => {
                // Define basic energy types
                const basicEnergyTypes = ["Grass", "Fire", "Water", "Lightning", "Psychic", "Fighting", "Darkness", "Metal", "Fairy"];

                const cardUnsorted = deckbox.getElementsByClassName("deckbuilt-card-container");
                const sortedContainers = Array.from(cardUnsorted).sort((a, b) => {
                    // Function to extract the basic energy type from the card alt text
                    function getTypeFromName(cardAlt) {
                        // Extract the energy type from the card alt text
                        const altParts = cardAlt.split(" ");
                        const typeIndex = altParts.findIndex(part => {
                            return basicEnergyTypes.some(energyType => part.toLowerCase().includes(energyType.toLowerCase()));
                        });

                        if (typeIndex !== -1) {
                            return altParts[typeIndex];
                        }

                        // If no energy type is found, return the original type
                        return altParts[1]; // Assuming type is the second part of the alt text
                    }

                    const idA = a.firstChild.id.split(","); // Get ID of the first image in the container
                    const idB = b.firstChild.id.split(","); // Get ID of the first image in the container

                    // Prioritize Pokemon, Trainer, Energy
                    const priority = ["Pokémon", "Trainer", "Energy"];
                    const categoryIndexA = priority.indexOf(idA[0]);
                    const categoryIndexB = priority.indexOf(idB[0]);

                    // Sort by category priority
                    if (categoryIndexA !== categoryIndexB) {
                        return categoryIndexA - categoryIndexB;
                    }

                    // If both images belong to the same category but it's Trainer, prioritize by type first, then count
                    if (idA[0] === "Trainer") {
                        const typePriority = {
                            "Supporter": 0,
                            "Item": 1,
                            "undefined": 1,
                            "Rocket's Secret Machine": 1,
                            "Rocket's Secret Robot": 1,
                            "Goldenrod Game Corner": 1,
                            "Pokémon Tool": 2,
                            "Technical Machine": 2,
                            "Stadium": 3,
                        };
                        const typeIndexA = typePriority[idA[1]];
                        const typeIndexB = typePriority[idB[1]];

                        // Sort by type priority
                        if (typeIndexA !== typeIndexB) {
                            return typeIndexA - typeIndexB;
                        }

                        // If types are the same, sort by count
                        const countA = parseInt(a.firstChild.getAttribute('alt').match(/\d+/)[0]);
                        const countB = parseInt(b.firstChild.getAttribute('alt').match(/\d+/)[0]);
                        return countB - countA;
                    }

                    // If both images belong to the same category but it's Energy
                    if (idA[0] === "Energy") {
                        const typeA = getTypeFromName(a.firstChild.getAttribute('alt'));
                        const typeB = getTypeFromName(b.firstChild.getAttribute('alt'));
                        const countA = parseInt(a.firstChild.getAttribute('alt').match(/\d+/)[0]);
                        const countB = parseInt(b.firstChild.getAttribute('alt').match(/\d+/)[0]);

                        // Check if either card is special energy
                        const isSpecialA = !basicEnergyTypes.includes(typeA);
                        const isSpecialB = !basicEnergyTypes.includes(typeB);

                        // If both cards are special energy or both are basic energy, sort by energy type
                        if (isSpecialA === isSpecialB) {
                            if (isSpecialA) {
                                // Both cards are special energy, so prioritize them by count, then type
                                if (countA !== countB) {
                                    return countB - countA;
                                }
                                // If counts are equal, sort by energy type
                                const indexA = basicEnergyTypes.indexOf(typeA);
                                const indexB = basicEnergyTypes.indexOf(typeB);
                                return indexA - indexB;
                            } else {
                                // Both cards are basic energy, so sort by count first, then energy type
                                if (countA !== countB) {
                                    return countB - countA;
                                }
                                const indexA = basicEnergyTypes.indexOf(typeA);
                                const indexB = basicEnergyTypes.indexOf(typeB);
                                return indexA - indexB;
                            }
                        } else {
                            // One card is special energy and the other is basic energy
                            // Prioritize basic energy first to ensure special energy is printed after all basic energy
                            return isSpecialA ? 1 : -1;
                        }
                    }

        // If both images belong to the same category and it's Pokémon
        if (idA[0] === "Pokémon") {
            const stagePriority = {
                "Stage 2": 0,
                "Stage 1": 1,
                "Basic": 2,
            };
        
            const stageA = stagePriority[idA[1]] !== undefined ? stagePriority[idA[1]] : 3; // Assume unknown stages are lowest priority
            const stageB = stagePriority[idB[1]] !== undefined ? stagePriority[idB[1]] : 3; // Assume unknown stages are lowest priority
        
            // Sort by stage priority first
            if (stageA !== stageB) {
                return stageA - stageB;
            }
        
            // If stages are the same, check for evolution hierarchy
            const evolvesFromA = idA[2] ? idA[2] : null;
            const evolvesFromB = idB[2] ? idB[2] : null;
        
            // Sort by evolution hierarchy if both have evolution information
            if (evolvesFromA && evolvesFromB) {
                if (evolvesFromA === idB[1]) {
                    return 1; // A evolves from B, so B should come first
                } else if (evolvesFromB === idA[1]) {
                    return -1; // B evolves from A, so A should come first
                }
            }
        
            // If one card has evolution information and the other doesn't, prioritize the one with evolution info
            if (evolvesFromA && !evolvesFromB) {
                return 1; // A should come after B
            } else if (!evolvesFromA && evolvesFromB) {
                return -1; // B should come after A
            }
        
            // Default to sorting by count if evolution information is not available or if stages are the same
            const countA = parseInt(a.firstChild.getAttribute('alt').match(/\d+/)[0]);
            const countB = parseInt(b.firstChild.getAttribute('alt').match(/\d+/)[0]);
            return countB - countA;
        }

                    // Default sorting behavior for other categories or when no additional values are present
                    if (idA.length > 1 && idB.length > 1) {
                        const altA = parseInt(a.firstChild.getAttribute('alt').match(/\d+/)[0]);
                        const altB = parseInt(b.firstChild.getAttribute('alt').match(/\d+/)[0]);
                        return altB - altA;
                    }

                    return idA.length - idB.length;
                });
                // Remove existing containers
                while (deckbox.firstChild) {
                    deckbox.removeChild(deckbox.firstChild);
                }
                // reset decklist
                document.getElementById('deck-reset').addEventListener("click", () => {
                    while (deckbox.firstChild) {
                        deckbox.removeChild(deckbox.firstChild);
                    }
                });
                sortedContainers.forEach(deckCardContainer => {
                    deckbox.appendChild(deckCardContainer.cloneNode(true));
                });

                let plusCards = document.querySelectorAll('.plus-card');
                let minusCards = document.querySelectorAll('.minus-card');
                plusCards.forEach(plusCard => {
                    plusCard.addEventListener('click', () => {
                        // Your plus card logic here
                        let image = plusCard.parentNode.previousElementSibling;
                        let alt = image.getAttribute('alt');
                        let cardCount = parseInt(alt.match(/\d+/)[0]);
                        cardCount++;
                        let newAlt = alt.replace(/\d+/, cardCount);
                        image.setAttribute('alt', newAlt);

                        if (!image.id.includes("Energy,Basic")) {
                            if (cardCount === 4) {
                                plusCard.style.opacity = '0.4';
                                plusCard.style.pointerEvents = 'none';
                            }
                        }
                        if (image.id.includes("Energy,Basic")) {
                            if (cardCount === 30) {
                                plusCard.style.opacity = '0.4';
                                plusCard.style.pointerEvents = 'none';
                            }
                        }

                        let currentCntNum = plusCard.parentNode.querySelector('.current-cnt-num');
                        currentCntNum.setAttribute('src', "../assets/card-count/" + cardCount + ".png");
                    });
                });
                minusCards.forEach(minusCard => {
                    minusCard.addEventListener('click', () => {
                        let image = minusCard.parentNode.previousElementSibling;
                        let alt = image.getAttribute('alt');
                        let cardCount = parseInt(alt.match(/\d+/)[0]);
                        cardCount--;
                        if (cardCount < 0) {
                            cardCount = 0;
                        }
                        let newAlt = alt.replace(/\d+/, cardCount);
                        image.setAttribute('alt', newAlt);

                        // Target the plus card within the same parent node as the minus card
                        let plusCard = minusCard.parentNode.querySelector('.plus-card');
                        plusCard.style.opacity = '1';
                        plusCard.style.pointerEvents = 'all';

                        if (cardCount === 0) {
                            minusCard.parentNode.parentNode.remove();
                            addCardBtn.style.opacity = 1;
                            addCardBtn.style.pointerEvents = 'all';
                        }

                        let currentCntNum = minusCard.parentNode.querySelector('.current-cnt-num');
                        currentCntNum.setAttribute('src', "../assets/card-count/" + cardCount + ".png");
                    });
                });
            });

            let deckAndPm = document.createElement('div');
            deckAndPm.classList.add('deck-add-minus');

            let minusCard = document.createElement('span');
            minusCard.classList.add('pm-card');
            minusCard.classList.add('minus-card');
            minusCard.classList.add('material-symbols-outlined');
            minusCard.innerHTML = "remove";

            let defaultCountofOne = 1;

            let cardCount = document.createElement('img');
            cardCount.classList.add('current-cnt-num');
            cardCount.setAttribute('src', "../assets/card-count/" + defaultCountofOne + ".png");

            let plusCard = document.createElement('span');
            plusCard.classList.add('pm-card');
            plusCard.classList.add('plus-card');
            plusCard.classList.add('material-symbols-outlined');
            plusCard.innerHTML = "add";

            // add and minus card count
            plusCard.addEventListener("click", () => {
                let newNumber = defaultCountofOne
                    ? defaultCountofOne + 1
                    : defaultCountofOne - 1;
                defaultCountofOne = newNumber;
                let currentValue = parseInt(currCounter.innerHTML);
                currentValue++;
                currCounter.innerHTML = currentValue;
                if (!deckImg.id.includes("Energy,Basic")) {
                    if (defaultCountofOne === 4) {
                        plusCard.style.opacity = '0.4';
                        plusCard.style.pointerEvents = 'none';
                    }
                }
                if (deckImg.id.includes("Energy,Basic")) {
                    if (defaultCountofOne === 30) {
                        plusCard.style.opacity = '0.4';
                        plusCard.style.pointerEvents = 'none';
                    }
                }
                cardCount.setAttribute('src', "../assets/card-count/" + newNumber + ".png");
                deckImg.setAttribute('alt', newNumber + " " + item.name + " " + item.setAbbrev + " " + item.number);

                // currentDeckCount.innerHTML = newNumber;
            })
            minusCard.addEventListener("click", () => {
                let newNumber = defaultCountofOne
                    ? defaultCountofOne - 1
                    : defaultCountofOne + 1;
                defaultCountofOne = newNumber;
                let currentValue = parseInt(currCounter.innerHTML);
                currentValue--;
                currCounter.innerHTML = currentValue;
                plusCard.style.opacity = '1';
                plusCard.style.pointerEvents = 'all';
                cardCount.setAttribute('src', "../assets/card-count/" + newNumber + ".png");
                deckImg.setAttribute('alt', newNumber + " " + item.name + " " + item.setAbbrev + " " + item.number);

                if (defaultCountofOne === 0) {
                    deckCardContainer.remove();
                    addCardBtn.style.opacity = 1;
                    addCardBtn.style.pointerEvents = 'all';
                }
            })

            if (deckImg.id.includes('ACE SPEC', 'Prism Star')) {
                plusCard.style.opacity = '0.4';
                plusCard.style.pointerEvents = 'none';
            }

            // // PRINT DECKLIST
            let copyButton = document.querySelector('.copy-as-dckli');
            copyButton.addEventListener('click', function () {
                const images = document.querySelectorAll('.card-added-in-decklist');
                const altTexts = [];
                images.forEach(image => {
                    altTexts.push(image.alt);
                });
                const textToCopy = altTexts.join('\n');
                navigator.clipboard.writeText(textToCopy);

                document.querySelector('.copied-check').style.display = 'flex';
                setTimeout(() => {
                    document.querySelector('.copied-check').style.display = "none";
                }, 2500);
            })
            let exportJson = document.querySelector('.export-json');
            exportJson.addEventListener('click', function () {
                const images = document.querySelectorAll('.card-added-in-decklist');
                const altTexts = [];
                images.forEach((image, index) => {
                    const altPieces = image.alt.split(' ');
                    if (altPieces.length === 5) { // Check if there are five pieces
                        altPieces[1] += ' ' + altPieces[2]; // Combine the second and third pieces if 5
                        altPieces.splice(2, 1); // Remove the third piece if 5
                    } if (altPieces.length === 6) {
                        altPieces[1] += ' ' + altPieces[2] + ' ' + altPieces[3];
                        altPieces.splice(2, 2); // Remove the third and fourth pieces
                    } if (altPieces.length === 7) {
                        altPieces[1] += ' ' + altPieces.slice(2, 5).join(' ');
                        altPieces.splice(2, 3);
                    } if (altPieces.length === 8) {
                        altPieces[1] += ' ' + altPieces.slice(2, 6).join(' ');
                        altPieces.splice(2, 4);
                    } if (altPieces.length === 9) {
                        altPieces[1] += ' ' + altPieces.slice(2, 7).join(' ');
                        altPieces.splice(2, 5);
                    }
                    // for card name like "Team Galactic's Invention G-107 Technical Machine G"
                    if (altPieces.length === 10) {
                        altPieces[1] += ' ' + altPieces.slice(2, 8).join(' ');
                        altPieces.splice(2, 6);
                    } if (altPieces.length === 11) { // just in case
                        altPieces[1] += ' ' + altPieces.slice(2, 9).join(' ');
                        altPieces.splice(2, 7);
                    }
                    const mappedPieces = altPieces.map((piece, index) => {
                        let key;
                        switch (index) {
                            case 0:
                                key = '"count":';
                                break;
                            case 1:
                                key = '"name":';
                                break;
                            case 2:
                                key = '"set":';
                                break;
                            case 3:
                                key = '"number":';
                                break;
                            default:
                                key = '';
                        }
                        // Wrap count and number fields in quotes
                        if ((index === 0 || index === 3) && !isNaN(piece)) {
                            return key + ' "' + piece + '"';
                        } else {
                            return key + ' "' + piece + '"';
                        }
                    });
                    const wrappedAlt = '{' + mappedPieces.join(', ') + '},';
                    altTexts.push(wrappedAlt);
                });
                const textToCopy = altTexts.join('\n');
                navigator.clipboard.writeText(textToCopy);
            
                document.querySelector('.copied-json-check').style.display = 'flex';
                setTimeout(() => {
                    document.querySelector('.copied-json-check').style.display = "none";
                }, 2500);
            });
            
            // click addBtn again to add card count w/o duplicating?
            // addCardBtn.addEventListener("click", () => {
            //     let newNumber = defaultCountofOne
            //     ? defaultCountofOne + 1
            //     : defaultCountofOne - 1;
            //     defaultCountofOne = newNumber;
            //         console.log(newNumber);
            //         if (defaultCountofOne === 4) {
            //             plusCard.style.opacity = '0.4';
            //         }
            //     cardCount.setAttribute('src', "../assets/card-count/" + newNumber + ".png");
            // })

            // reset decklist
            document.getElementById('deck-reset').addEventListener("click", () => {
                deckCardContainer.remove();
                addCardBtn.style.opacity = 1;
                addCardBtn.style.pointerEvents = 'all';
                currCounter.innerHTML = "0";
                currCounter.style.color = 'black'
                statCount.style.color = 'black';
                statCount.style.border = '1px solid black';
            })

            deckCardContainer.appendChild(deckImg);
            deckAndPm.appendChild(minusCard);
            deckAndPm.appendChild(cardCount);
            deckAndPm.appendChild(plusCard);
            deckCardContainer.appendChild(deckAndPm);
            deckbox.appendChild(deckCardContainer);
        })

        // zoom card
        img.onclick = () => {
            zoomedImg.setAttribute('src', item.images.large);
            zoombox.className = "show";
        };
        zoombox.onclick = () => {
            zoombox.className = "";
        };

        document.querySelector('.all-cards-container').scrollTop = 0;

        setsOl.appendChild(cardArea);
    }
}

// collapse and open set boxes
let coll = document.getElementsByClassName("set-white-box");
let setCube = document.querySelectorAll(".set-cube");
let setCubePromo = document.querySelectorAll(".set-cube-promo");
let i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = "2000px";
        }
        // force close all set option dropdowns
        advancedDropdownBtn.addEventListener("click", function () {
            if (content.style.maxHeight === "2000px") {
                content.style.maxHeight = "0px";
            }
        })
        setCube.forEach(function (elem) {
            elem.addEventListener("click", function () {
                if (content.style.maxHeight === "2000px") {
                    content.style.maxHeight = "0px";
                    document.querySelector('.expand-advanced-arrow').classList.toggle('inverted-arrow');
                    document.querySelector('.all-cards-container').scrollTop = 0;
                }
            })
        })
        setCubePromo.forEach(function (elem) {
            elem.addEventListener("click", function () {
                if (content.style.maxHeight === "2000px") {
                    content.style.maxHeight = "0px";
                    document.querySelector('.expand-advanced-arrow').classList.toggle('inverted-arrow');
                    document.querySelector('.all-cards-container').scrollTop = 0;
                }
            })
        })
    });
}

// close advanced search when set clicked
function collapseAdvanced() {
    advancedDropdown.classList.toggle('collapse-advanced');
}

// click advanced to dropdown
advancedDropdownBtn.addEventListener('click', () => {
    advancedDropdown.classList.toggle('collapse-advanced');
    document.querySelector('.expand-advanced-arrow').classList.toggle('inverted-arrow');
})

// spinner till loaded
window.addEventListener("load", () => {
    const spinner = document.querySelector(".spinner");
    spinner.classList.add("spinner-hidden");
})

// hidden filters dropdown
document.getElementById('filter-search').addEventListener("click", () => {
    document.querySelector('.hidden-filter-sec').classList.toggle('hide-filt-sec');
    document.querySelector('.all-cards-container').classList.toggle('all-cards-farther');
    document.getElementById('filter-search').classList.toggle('blue-selected');
})

// paste decklist
function importDeck() {
    navigator.clipboard.readText()
        .then(text => {
            const altTexts = text.split('\n');
            deckbox.innerHTML = '';
            let totalCardCount = 0; // Initialize total card count
            altTexts.forEach(alt => {
                const altPieces = alt.trim().split(' ');
                let allCardCount = 1; // Default card count value
                if (altPieces.length >= 1 && !isNaN(altPieces[0])) {
                    allCardCount = parseInt(altPieces[0]);
                }
                if (altPieces.length === 5) {
                    altPieces[1] += ' ' + altPieces[2];
                    altPieces.splice(2, 1);
                } else if (altPieces.length === 6) {
                    altPieces[1] += ' ' + altPieces[2] + ' ' + altPieces[3];
                    altPieces.splice(2, 2);
                } else if (altPieces.length === 7) {
                    altPieces[1] += ' ' + altPieces.slice(2, 5).join(' ');
                    altPieces.splice(2, 3);
                } else if (altPieces.length === 8) {
                    altPieces[1] += ' ' + altPieces.slice(2, 6).join(' ');
                    altPieces.splice(2, 4);
                } else if (altPieces.length === 9) {
                    altPieces[1] += ' ' + altPieces.slice(2, 7).join(' ');
                    altPieces.splice(2, 5);
                } else if (altPieces.length === 10) {
                    altPieces[1] += ' ' + altPieces.slice(2, 8).join(' ');
                    altPieces.splice(2, 6);
                } else if (altPieces.length === 11) {
                    altPieces[1] += ' ' + altPieces.slice(2, 9).join(' ');
                    altPieces.splice(2, 7);
                }
                const mappedPieces = altPieces.map((piece, index) => {
                    let key;
                    switch (index) {
                        case 0:
                            key = '"count":';
                            break;
                        case 1:
                            key = '"name":';
                            break;
                        case 2:
                            key = '"set":';
                            break;
                        case 3:
                            key = '"number":';
                            break;
                        default:
                            key = '';
                    }
                    if (index === 0 && !isNaN(piece)) {
                        return key + ' ' + piece;
                    } else {
                        return key + ' "' + piece + '"';
                    }
                });
                const wrappedAlt = '{' + mappedPieces.join(', ') + '}';

                const setMatch = wrappedAlt.match(/"set": "(.*?)"/);
                const numberMatch = wrappedAlt.match(/"number": "(.*?)"/);

                let setAbbrevFromWrappedAlt, cardNumberFromWrappedAlt;
                if (setMatch && setMatch[1] && numberMatch && numberMatch[1]) {
                    setAbbrevFromWrappedAlt = setMatch[1];
                    cardNumberFromWrappedAlt = numberMatch[1];
                }
                // console.log('extracted set:', setAbbrevFromWrappedAlt);
                // console.log('extracted card number:', cardNumberFromWrappedAlt);

                const allSets = {
                    sv6, sv5, sv4pt5, sv4, sv3pt5, sv3, sv2, sv1, sve, svp, swsh12pt5, swsh12, swsh11, pgo, swsh10, swsh9, swsh8, cel25, swsh7, swsh6, swsh5, swsh45, swsh4, swsh35, swsh3, swsh2, swsh1, swshp, sm12, sm115, sm11, sm10, det, sm9, sm8, sm7, sm6, sm5, sm4, sm3, sm2, sm1, sm75, sm35, smp, xy12, xy11, xy10, g1, xy9, xy8, xy7, xy6, dc1, xy5, xy4, xy3, xy2, xy1, xyp, errata, bw11, bw10, bw9, bw8, bw7, bw6, bw5, bw4, bw3, bw2, bw1, dv1, bwp, col1, hgss4, hgss3, hgss2, hgss1, hsp, pl4, pl3, pl2, pl1, dp7, dp6, dp5, dp4, dp3, dp2, dp1, dpp, ex16, ex15, ex14, ex13, ex12, ex11, ex10, ex9, ex8, ex7, ex6, ex5, ex4, ex3, ex2, ex1, np, ecard3, ecard2, ecard1, neo4, neo3, neo2, neo1, gym2, gym1, base6, base5, base4, base3, base2, base1, basep, xy0, pop1, pop2, pop3, pop4, pop5, pop6, pop7, pop8, pop9, ru1, si1, tk1a
                }

                if (setAbbrevFromWrappedAlt && cardNumberFromWrappedAlt) {
                    let pastedCardContainer = document.createElement('div');
                    pastedCardContainer.classList.add('deckbuilt-card-container');
                    let pastedCard = document.createElement('img');
                    pastedCard.classList.add('database-card-in-list');
                    pastedCard.classList.add('card-added-in-decklist');
                    let cardFound = allSets[setConvert[setAbbrevFromWrappedAlt]].find(cardInSet => cardInSet.id === setConvert[setAbbrevFromWrappedAlt] + "-" + cardNumberFromWrappedAlt);
                    pastedCard.setAttribute('src', cardFound.images.small);
                    pastedCard.id = cardFound.supertype + "," + cardFound.subtypes;
                    // if the card is a pokemon
                    if (cardFound.types) {
                        pastedCard.id = cardFound.supertype + "," + cardFound.subtypes + "," + cardFound.types;
                    } if (cardFound.evolvesFrom) {
                        pastedCard.id = cardFound.supertype + "," + cardFound.subtypes + "," + cardFound.types + ",Evolves from " + cardFound.evolvesFrom;
                    }
                    // zoom card
                    pastedCard.onclick = () => {
                        zoomedImg.setAttribute('src', cardFound.images.large);
                        zoombox.className = "show";
                    };
                    zoombox.onclick = () => {
                        zoombox.className = "";
                    };

                    pastedCard.setAttribute('alt', alt.trim());
                    pastedCardContainer.appendChild(pastedCard);

                    let deckAndPm = document.createElement('div');
                    deckAndPm.classList.add('deck-add-minus');

                    let minusCard = document.createElement('span');
                    minusCard.classList.add('pm-card');
                    minusCard.classList.add('minus-card');
                    minusCard.classList.add('material-symbols-outlined');
                    minusCard.innerHTML = "remove";

                    let cardCount = document.createElement('img');
                    cardCount.classList.add('current-cnt-num');

                    let getmemyalt = pastedCard.getAttribute('alt');
                    let firstNumberMatch = getmemyalt.match(/\d+/);
                    let cardCountValue = firstNumberMatch[0];
                    cardCount.setAttribute('src', "../assets/card-count/" + cardCountValue + ".png");

                    let plusCard = document.createElement('span');
                    plusCard.classList.add('pm-card');
                    plusCard.classList.add('plus-card');
                    plusCard.classList.add('material-symbols-outlined');
                    plusCard.innerHTML = "add";

                    deckAndPm.appendChild(minusCard);
                    deckAndPm.appendChild(cardCount);
                    deckAndPm.appendChild(plusCard);
                    pastedCardContainer.appendChild(deckAndPm);
                    deckbox.appendChild(pastedCardContainer);

                    let containsSpecialCard = false; // Flag to indicate if special card is found
                    if (pastedCard.id.includes('ACE SPEC') || pastedCard.id.includes('Prism Star') || pastedCard.id.includes('Radiant')) {
                        containsSpecialCard = true;
                    }
                    if (containsSpecialCard) {
                        plusCard.style.opacity = '0.4';
                        plusCard.style.pointerEvents = 'none';
                    }
                    // Hide pluscard w/ COUNTS OF 4
                    const altRegex = /(\d+)/; // Regular expression to match the count value
                    // Get the alt attribute of the card image
                    const altText = pastedCard.getAttribute('alt');
                    // Extract the count value from the alt text using the regular expression
                    const match = altText.match(altRegex);
                    // Check if a match is found and extract the count value
                    const meepers = match ? parseInt(match[1]) : 1; // Default to 1 if no match is found
                    // Now you can use cardCountValue to set the opacity and pointerEvents
                    if (meepers === 4) {
                        plusCard.style.opacity = '0.4';
                        plusCard.style.pointerEvents = 'none';
                    }

                    minusCard.addEventListener('click', () => {
                        cardCountValue = Math.max(parseInt(cardCount.getAttribute('src').match(/\d+/)[0]) - 1, 0);
                        cardCount.setAttribute('src', "../assets/card-count/" + cardCountValue + ".png");
                        plusCard.style.opacity = '1';
                        plusCard.style.pointerEvents = 'all';
                        if (cardCountValue === 0) {
                            pastedCardContainer.remove();
                        }
                        updateTotalCount(-1);
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
                        updateTotalCount(1);
                    });

                    function updateTotalCount(change) {
                        let totalCountElement = document.querySelector('.current-deck-count');
                        let currentTotal = parseInt(totalCountElement.innerHTML);
                        let newTotal = currentTotal + change;
                        totalCountElement.innerHTML = newTotal;
                    }

                    totalCardCount += allCardCount;

                } else {
                    // NOTHING
                    // pastedCard.setAttribute('src', '../assets/card-back.png');
                }

                let exportJson = document.querySelector('.export-json');
                exportJson.addEventListener('click', function () {
                    const images = document.querySelectorAll('.card-added-in-decklist');
                    const altTexts = {
                        pokemon: [],
                        trainer: [],
                        energy: []
                    };
                
                    images.forEach((image) => {
                        const altPieces = image.alt.split(' ');
                        if (altPieces.length === 5) { // Check if there are five pieces
                            altPieces[1] += ' ' + altPieces[2]; // Combine the second and third pieces if 5
                            altPieces.splice(2, 1); // Remove the third piece if 5
                        } if (altPieces.length === 6) {
                            altPieces[1] += ' ' + altPieces[2] + ' ' + altPieces[3];
                            altPieces.splice(2, 2); // Remove the third and fourth pieces
                        } if (altPieces.length === 7) {
                            altPieces[1] += ' ' + altPieces.slice(2, 5).join(' ');
                            altPieces.splice(2, 3);
                        } if (altPieces.length === 8) {
                            altPieces[1] += ' ' + altPieces.slice(2, 6).join(' ');
                            altPieces.splice(2, 4);
                        } if (altPieces.length === 9) {
                            altPieces[1] += ' ' + altPieces.slice(2, 7).join(' ');
                            altPieces.splice(2, 5);
                        }
                        // for card name like "Team Galactic's Invention G-107 Technical Machine G"
                        if (altPieces.length === 10) {
                            altPieces[1] += ' ' + altPieces.slice(2, 8).join(' ');
                            altPieces.splice(2, 6);
                        } if (altPieces.length === 11) { // just in case
                            altPieces[1] += ' ' + altPieces.slice(2, 9).join(' ');
                            altPieces.splice(2, 7);
                        }
                        const mappedPieces = altPieces.map((piece, index) => {
                            let key;
                            let value = piece;
                            switch (index) {
                                case 0:
                                    key = 'count';
                                    value = `${piece}`; // Wrap count in quotes
                                    break;
                                case 1:
                                    key = 'name';
                                    break;
                                case 2:
                                    key = 'set';
                                    break;
                                case 3:
                                    key = 'number';
                                    value = `${piece}`; // Wrap number in quotes
                                    break;
                                default:
                                    key = '';
                            }
                            return { [key]: value };
                        });
                        const cardObject = Object.assign({}, ...mappedPieces);
                
                        // Determine the category of the card
                        const idParts = image.id.split(',');
                        const category = idParts[0];
                
                        if (category === 'Pokémon') {
                            altTexts.pokemon.push(cardObject);
                        } else if (category === 'Trainer') {
                            altTexts.trainer.push(cardObject);
                        } else if (category === 'Energy') {
                            altTexts.energy.push(cardObject);
                        }
                    });
                
                    // Convert the decklist object to a JSON string without extra spaces or indentation
                    const textToCopy = JSON.stringify(altTexts);
                
                    navigator.clipboard.writeText(textToCopy);
                
                    document.querySelector('.copied-json-check').style.display = 'flex';
                    setTimeout(() => {
                        document.querySelector('.copied-json-check').style.display = "none";
                    }, 2500);
                });
                            });
            document.querySelector('.current-deck-count').innerHTML = totalCardCount;

            document.getElementById('deck-reset').addEventListener("click", () => {
                while (deckbox.firstChild) {
                    deckbox.removeChild(deckbox.firstChild);
                }
            });
        })
}

function searchReset() {
    if (searchField.value.trim() === '') {
        setsOl.innerHTML = ''; // Clear search results
    }
}

// 1550+
function checkElementCount(className, threshold) {
    let deckBoxes = document.querySelectorAll('.' + className);
    deckBoxes.forEach(deckBox => {
        const handleMutation = function (mutationsList, observer) {
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    let deckCards = deckBox.querySelectorAll('.database-card-in-list');
                    let addnminus = deckBox.querySelectorAll('.deck-add-minus');
                    let pmCard = deckBox.querySelectorAll('.pm-card');
                    let elementCount = deckCards.length;
                    let viewportWidth = window.innerWidth;
                    if (viewportWidth >= 1550) {
                        if (elementCount >= threshold) {
                            deckCards.forEach(deckCard => {
                                deckCard.style.width = '93px';
                            });
                            addnminus.forEach(addnminus => {
                                addnminus.style.width = '93px';
                                addnminus.style.marginBottom = '10px';
                            });
                            pmCard.forEach(pmCard => {
                                pmCard.style.fontSize = '16px';
                                pmCard.style.padding = '3px';
                            });
                        } else {
                            deckCards.forEach(deckCard => {
                                deckCard.style.width = '6vw';
                            });
                            addnminus.forEach(addnminus => {
                                addnminus.style.width = '6vw';
                                addnminus.style.marginBottom = '12px';
                            });
                            pmCard.forEach(pmCard => {
                                pmCard.style.fontSize = '20px';
                                pmCard.style.padding = '4px';
                            });
                        }
                    }
                }
            }
        };
        const observer = new MutationObserver(handleMutation);
        observer.observe(deckBox, { childList: true, subtree: true });
    });
}
// <1550
function checkElementCount2(className, threshold) {
    let deckBoxes = document.querySelectorAll('.' + className);
    deckBoxes.forEach(deckBox => {
        const handleMutation = function (mutationsList, observer) {
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    let deckCards = deckBox.querySelectorAll('.database-card-in-list');
                    let addnminus = deckBox.querySelectorAll('.deck-add-minus');
                    let pmCard = deckBox.querySelectorAll('.pm-card');
                    let elementCount = deckCards.length;
                    let viewportWidth = window.innerWidth;
                    if (viewportWidth <= 1549) {
                        if (elementCount >= threshold) {
                            deckCards.forEach(deckCard => {
                                deckCard.style.width = '75px';
                            });
                            addnminus.forEach(addnminus => {
                                addnminus.style.width = '75px';
                                addnminus.style.marginBottom = '8px';
                            });
                            pmCard.forEach(pmCard => {
                                pmCard.style.fontSize = '14px';
                                pmCard.style.padding = '3px';
                            });
                        } else {
                            deckCards.forEach(deckCard => {
                                deckCard.style.width = '90px';
                            });
                            addnminus.forEach(addnminus => {
                                addnminus.style.width = '90px';
                                addnminus.style.marginBottom = '11px';
                            });
                            pmCard.forEach(pmCard => {
                                pmCard.style.fontSize = '18px';
                                pmCard.style.padding = '3px';
                            });
                        }
                    }
                }
            }
        };
        const observer = new MutationObserver(handleMutation);
        observer.observe(deckBox, { childList: true, subtree: true });
    });
}
// <1490
function checkElementCount3(className, threshold) {
    let deckBoxes = document.querySelectorAll('.' + className);
    deckBoxes.forEach(deckBox => {
        const handleMutation = function (mutationsList, observer) {
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    let deckCards = deckBox.querySelectorAll('.database-card-in-list');
                    let addnminus = deckBox.querySelectorAll('.deck-add-minus');
                    let pmCard = deckBox.querySelectorAll('.pm-card');
                    let elementCount = deckCards.length;
                    let viewportWidth = window.innerWidth;
                    if (viewportWidth <= 1490) {
                        if (elementCount >= threshold) {
                            deckCards.forEach(deckCard => {
                                deckCard.style.width = '75px';
                            });
                            addnminus.forEach(addnminus => {
                                addnminus.style.width = '75px';
                                addnminus.style.marginBottom = '8px';
                            });
                            pmCard.forEach(pmCard => {
                                pmCard.style.fontSize = '14px';
                                pmCard.style.padding = '3px';
                            });
                        } else {
                            deckCards.forEach(deckCard => {
                                deckCard.style.width = '90px';
                            });
                            addnminus.forEach(addnminus => {
                                addnminus.style.width = '90px';
                                addnminus.style.marginBottom = '11px';
                            });
                            pmCard.forEach(pmCard => {
                                pmCard.style.fontSize = '18px';
                                pmCard.style.padding = '3px';
                            });
                        }
                    }
                }
            }
        };
        const observer = new MutationObserver(handleMutation);
        observer.observe(deckBox, { childList: true, subtree: true });
    });
}
// <1330
function checkElementCount4(className, threshold) {
    let deckBoxes = document.querySelectorAll('.' + className);
    deckBoxes.forEach(deckBox => {
        const handleMutation = function (mutationsList, observer) {
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    let deckCards = deckBox.querySelectorAll('.database-card-in-list');
                    let addnminus = deckBox.querySelectorAll('.deck-add-minus');
                    let pmCard = deckBox.querySelectorAll('.pm-card');
                    let elementCount = deckCards.length;
                    let viewportWidth = window.innerWidth;
                    if (viewportWidth <= 1330) {
                        if (elementCount >= threshold) {
                            deckCards.forEach(deckCard => {
                                deckCard.style.width = '75px';
                            });
                            addnminus.forEach(addnminus => {
                                addnminus.style.width = '75px';
                                addnminus.style.marginBottom = '8px';
                            });
                            pmCard.forEach(pmCard => {
                                pmCard.style.fontSize = '14px';
                                pmCard.style.padding = '3px';
                            });
                        } else {
                            deckCards.forEach(deckCard => {
                                deckCard.style.width = '89px';
                            });
                            addnminus.forEach(addnminus => {
                                addnminus.style.width = '89px';
                                addnminus.style.marginBottom = '11px';
                            });
                            pmCard.forEach(pmCard => {
                                pmCard.style.fontSize = '18px';
                                pmCard.style.padding = '3px';
                            });
                        }
                    }
                }
            }
        };
        const observer = new MutationObserver(handleMutation);
        observer.observe(deckBox, { childList: true, subtree: true });
    });
}
// <705
function checkElementCount5(className, threshold) {
    let deckBoxes = document.querySelectorAll('.' + className);
    deckBoxes.forEach(deckBox => {
        const handleMutation = function (mutationsList, observer) {
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    let deckCards = deckBox.querySelectorAll('.database-card-in-list');
                    let addnminus = deckBox.querySelectorAll('.deck-add-minus');
                    let pmCard = deckBox.querySelectorAll('.pm-card');
                    let elementCount = deckCards.length;
                    let viewportWidth = window.innerWidth;
                    if (viewportWidth <= 705) {
                        if (elementCount >= threshold) {
                            deckCards.forEach(deckCard => {
                                deckCard.style.width = '75px';
                            });
                            addnminus.forEach(addnminus => {
                                addnminus.style.width = '75px';
                                addnminus.style.marginBottom = '8px';
                            });
                            pmCard.forEach(pmCard => {
                                pmCard.style.fontSize = '14px';
                                pmCard.style.padding = '3px';
                            });
                        } else {
                            deckCards.forEach(deckCard => {
                                deckCard.style.width = '89px';
                            });
                            addnminus.forEach(addnminus => {
                                addnminus.style.width = '89px';
                                addnminus.style.marginBottom = '11px';
                            });
                            pmCard.forEach(pmCard => {
                                pmCard.style.fontSize = '18px';
                                pmCard.style.padding = '3px';
                            });
                        }
                    }
                }
            }
        };
        const observer = new MutationObserver(handleMutation);
        observer.observe(deckBox, { childList: true, subtree: true });
    });
}
// NEXT DO 575px ?
// lessen bottom menu height
checkElementCount('deck-box', 37);
checkElementCount2('deck-box', 46);
checkElementCount3('deck-box', 41);
checkElementCount4('deck-box', 36);
checkElementCount5('deck-box', 36);

function applyFlexToPmCards() {
    console.log("Applying flex to .pm-card elements");
    let pmCards = document.querySelectorAll('.pm-card');
    pmCards.forEach(card => {
        card.style.visibility = 'visible !important';
    });
}
function observePmCards() {
    const observer = new MutationObserver(mutationsList => {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                applyFlexToPmCards();
            }
        }
    });

    const targetNode = document.body; // You can change this to observe a specific container if needed

    const observerConfig = { childList: true, subtree: true };

    observer.observe(targetNode, observerConfig);
}

const bottomMenu = document.getElementById('bottomMenu');
    const hiddenMenu = document.getElementById('hiddenMenu');
    
    bottomMenu.addEventListener('click', toggleMenu);
    
    let startY;
    let endY;
    
    bottomMenu.addEventListener('touchstart', handleTouchStart, false);
    bottomMenu.addEventListener('touchmove', handleTouchMove, false);
    bottomMenu.addEventListener('touchend', handleTouchEnd, false);
    
    function handleTouchStart(event) {
        startY = event.touches[0].clientY;
    }
    
    function handleTouchMove(event) {
        if (!startY) {
            return;
        }
        endY = event.touches[0].clientY;
    }
    
    function handleTouchEnd() {
        if (!endY) {
            return;
        }
        const deltaY = endY - startY;
        if (deltaY > 50) {
            // Swiped down
            hideMenu();
        } else if (deltaY < -50) {
            // Swiped up
            toggleMenu();
        }
        startY = null;
        endY = null;
    }
    
    function toggleMenu(event) {
        if (event) {
            event.stopPropagation();
        }
        hiddenMenu.classList.toggle('active');
    }
    
    function hideMenu() {
        hiddenMenu.classList.remove('active');
    }
    
    document.body.addEventListener('touchstart', (event) => {
        startY = event.touches[0].clientY;
    });
    
    document.body.addEventListener('touchmove', (event) => {
        if (!startY) {
            return;
        }
        endY = event.touches[0].clientY;
    });
    
    document.body.addEventListener('touchend', () => {
        if (!endY) {
            return;
        }
        const deltaY = endY - startY;
        if (deltaY > 50) {
            // Swiped down
            hideMenu();
        }
        startY = null;
        endY = null;
    });