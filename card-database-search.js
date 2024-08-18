const pokemonCard = [
   ...sv6,
   ...sv5,
   ...svp,
   ...sv4pt5,
   ...sv4,
   ...sv3pt5,
   ...sv3,
   ...sv2,
   ...sv1,
   ...sve,
   ...swsh12pt5,
   ...swsh12,
   ...swsh11,
   ...pgo,
   ...swsh10,
   ...swsh9,
   ...swsh8,
   ...cel25,
   ...swsh7,
   ...swsh6,
   ...swsh5,
   ...swsh45,
   ...swsh4,
   ...swsh35,
   ...swsh3,
   ...swsh2,
   ...swsh1,
   ...swshp,
   ...smp,
   ...sm12,
   ...sm115,
   ...sm11,
   ...sm10,
   ...det,
   ...sm9,
   ...sm8,
   ...sm7,
   ...sm6,
   ...sm5,
   ...sm4,
   ...sm3,
   ...sm2,
   ...sm1,
   ...sm75,
   ...sm35,
   ...xyp,
   ...xy12,
   ...xy11,
   ...xy10,
   ...g1,
   ...xy9,
   ...xy8,
   ...xy7,
   ...xy6,
   ...dc1,
   ...xy5,
   ...xy4,
   ...xy3,
   ...xy2,
   ...xy1,
   ...xy0,
   ...bwp,
   ...errata,
   ...bw11,
   ...bw10,
   ...bw9,
   ...bw8,
   ...bw7,
   ...dv1,
   ...bw6,
   ...bw5,
   ...bw4,
   ...bw3,
   ...bw2,
   ...bw1,
   ...hsp,
   ...ru1,
   ...col1,
   ...hgss4,
   ...hgss3,
   ...hgss2,
   ...hgss1,
   ...dpp,
   ...pl4,
   ...pl3,
   ...pl2,
   ...pop9,
   ...pl1,
   ...dp7,
   ...pop8,
   ...dp6,
   ...dp5,
   ...pop7,
   ...dp4,
   ...dp3,
   ...pop6,
   ...dp2,
   ...dp1,
   ...pop5,
   ...np,
   ...ex16,
   ...ex15,
   ...ex14,
   ...pop4,
   ...ex13,
   ...pop3,
   // ...tk2,
   ...ex12,
   ...ex11,
   ...pop2,
   ...ex10,
   ...ex9,
   ...ex8,
   ...ex7,
   ...pop1,
   ...ex6,
   ...ex5,
   ...ex4,
   ...tk1a,
   ...ex3,
   ...ex2,
   ...ex1,
   ...ecard3,
   ...ecard2,
   ...ecard1,
   ...base6,
   ...neo4,
   ...neo3,
   ...si1,
   ...neo2,
   ...neo1,
   ...basep,
   ...gym2,
   ...gym1,
   ...base5,
   ...base4,
   ...base3,
   ...base2,
   ...base1,
];

const searchField = document.querySelector('#search');
const searchButton = document.querySelector('#searchButton');

function performSearch() {
   const searchValue = preprocessSearchQuery(searchField.value.trim().toLowerCase());

   if (searchValue === '') {
      setsOl.innerHTML = '';
      return;
   }

   let searchResults;
   if (searchValue === 'n') {
       // Special case: search for cards exactly named "N"
       searchResults = pokemonCard.filter(poke => poke.name?.toLowerCase() === 'n');
   } else if (searchValue === 'az') {
       // Special case: search for cards exactly named "N"
       searchResults = pokemonCard.filter(poke => poke.name?.toLowerCase() === 'az');
   } else {
       // General case: search for cards containing the search value
       searchResults = pokemonCard.filter(poke => poke.name?.toLowerCase().includes(searchValue));
   }
   setsOl.innerHTML = '';

   searchResults.forEach((poke) => {
      let cardArea = document.createElement('div');
      cardArea.classList.add('searched-card-wrap');
      // card img
      let img = document.createElement('img');
      img.classList.add('database-card-in-list');
      img.setAttribute('src", poke.images.small);
      img.setAttribute('alt", poke.name + " " + poke.setAbbrev + " " + poke.number);
      img.id = poke.supertype + "," + poke.subtypes;
      img.loading = 'lazy';

      // plus button on card
      let addCardBtn = document.createElement('div');
      addCardBtn.classList.add('add-card-to-deck');

      cardArea.appendChild(img);
      cardArea.appendChild(addCardBtn);

      addCardBtn.addEventListener("click", () => {
         let deckCardContainer = document.createElement('div');
         deckCardContainer.classList.add('deckbuilt-card-container');
         addCardBtn.style.opacity = 0;
         addCardBtn.style.pointerEvents = 'none';
         let deckImg = img.cloneNode(true);
         deckImg.classList.add('card-added-in-decklist');
         deckImg.setAttribute('alt", "1" + " " + poke.name + " " + poke.setAbbrev + " " + poke.number);
         deckImg.onclick = () => {
            zoomedImg.setAttribute('src", poke.images.large);
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
               const priority = ["Pokemon", "Trainer", "Energy"];
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
               plusCard.addEventListener('click", () => {
                  // Your plus card logic here
                  let image = plusCard.parentNode.previousElementSibling;
                  let alt = image.getAttribute('alt');
                  let cardCount = parseInt(alt.match(/\d+/)[0]);
                  cardCount++;
                  let newAlt = alt.replace(/\d+/, cardCount);
                  image.setAttribute('alt", newAlt);

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
                  currentCntNum.setAttribute('src", "../assets/card-count/" + cardCount + ".png");
               });
            });
            minusCards.forEach(minusCard => {
               minusCard.addEventListener('click", () => {
                  let image = minusCard.parentNode.previousElementSibling;
                  let alt = image.getAttribute('alt');
                  let cardCount = parseInt(alt.match(/\d+/)[0]);
                  cardCount--;
                  if (cardCount < 0) {
                     cardCount = 0;
                  }
                  let newAlt = alt.replace(/\d+/, cardCount);
                  image.setAttribute('alt", newAlt);

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
                  currentCntNum.setAttribute('src", "../assets/card-count/" + cardCount + ".png");
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
         // let currentDeckCount = document.querySelector('.current-deck-count').innerHTML;

         let cardCount = document.createElement('img');
         cardCount.classList.add('current-cnt-num');
         cardCount.setAttribute('src", "../assets/card-count/" + defaultCountofOne + ".png");

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
            cardCount.setAttribute('src", "../assets/card-count/" + newNumber + ".png");
            deckImg.setAttribute('alt", newNumber + " " + poke.name + " " + poke.setAbbrev + " " + poke.number);
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
            cardCount.setAttribute('src", "../assets/card-count/" + newNumber + ".png");
            deckImg.setAttribute('alt", newNumber + " " + poke.name + " " + poke.setAbbrev + " " + poke.number);
            if (defaultCountofOne === 0) {
               deckCardContainer.remove();
               addCardBtn.style.opacity = 1;
               addCardBtn.style.pointerEvents = 'all';
            }
         })

         if (deckImg.id.includes('ACE SPEC')) {
            plusCard.style.opacity = '0.4';
            plusCard.style.pointerEvents = 'none';
         } if (deckImg.id.includes('Prism Star')) {
            plusCard.style.opacity = '0.4';
            plusCard.style.pointerEvents = 'none';
         } if (deckImg.id.includes('Radiant')) {
            plusCard.style.opacity = '0.4';
            plusCard.style.pointerEvents = 'none';
         }

         // // PRINT DECKLIST
         let copyButton = document.querySelector('.copy-as-dckli');
         copyButton.addEventListener('click", function () {
            const images = document.querySelectorAll('.card-added-in-decklist');
            const altTexts = [];
            images.forEach(image => {
               altTexts.push(image.alt);
            });
            const textToCopy = altTexts.join('\n');
            navigator.clipboard.writeText(textToCopy)

            document.querySelector('.copied-check').style.display = 'flex';
            setTimeout(() => {
               document.querySelector('.copied-check').style.display = "none";
            }, 2500);
         })
         let exportJson = document.querySelector('.export-json');
         exportJson.addEventListener('click", function () {
            const images = document.querySelectorAll('.card-added-in-decklist');
            const altTexts = [];
            images.forEach((image, index) => {
               const altPieces = image.alt.split(' ');
               if (altPieces.length === 5) {
                  altPieces[1] += ' ' + altPieces[2];
                  altPieces.splice(2, 1);
               } if (altPieces.length === 6) {
                  altPieces[1] += ' ' + altPieces[2] + ' ' + altPieces[3];
                  altPieces.splice(2, 2);
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
                  if (index === 0 && !isNaN(piece)) {
                     return key + ' ' + piece;
                  } else {
                     return key + ' "' + piece + '"';
                  }
               });
               const wrappedAlt = '{' + mappedPieces.join(", ') + '},';
               altTexts.push(wrappedAlt);
            });
            const textToCopy = altTexts.join('\n');
            navigator.clipboard.writeText(textToCopy);

            document.querySelector('.copied-json-check').style.display = 'flex';
            setTimeout(() => {
               document.querySelector('.copied-json-check').style.display = "none";
            }, 2500);
         })

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
         zoomedImg.setAttribute('src", poke.images.large);
         zoombox.className = "show";
      };
      zoombox.onclick = () => {
         zoombox.className = "";
      };

      setsOl.appendChild(cardArea);
   });
   document.getElementById('search-reset').addEventListener('click", () => {
      setsOl.innerHTML = ''; // Clear search results
   })
}

function preprocessSearchQuery(query) {
   return query.replace(/pokem/gi, "pokém").replace(/mr m/gi, "mr. m").replace(/mr r/gi, "mr. r").replace(/type n/gi, "type: n").replace(/farfetchd/gi, "farfetch'd").replace(/sirfetchd/gi, "sirfetch'd").replace(/hooh/gi, "ho-oh").replace(/ho oh/gi, "ho-oh").replace(/ gx/gi, "-gx").replace(/ z/gi, "-z").replace(/porygonz/gi, "porygon-z").replace(/flabebe/gi, "flabébé").replace(/flabe/gi, "flabé").replace(/jangmoo/gi, "jangmo-o").replace(/jangmo o/gi, "jangmo-o").replace(/hakamoo/gi, "hakamo-o").replace(/hakamo o/gi, "hakamo-o").replace(/kommoo/gi, "kommo-o").replace(/kommo o/gi, "kommo-o").replace(/chi y/gi, "chi-y").replace(/ting l/gi, "ting-l").replace(/chien p/gi, "chien-p").replace(/wo c/gi, "wo-c").replace(/pokeg/gi, "pokég").replace(/pokes/gi, "pokés").replace(/trainers m/gi, "trainers' m");
   // .replace(/ ex/gi, "-ex")
}

// for button click
searchButton.addEventListener('click", performSearch);

// for Enter key press
searchField.addEventListener('keypress", function (event) {
   if (event.key === 'Enter') {
      performSearch();
   }
});

searchField.addEventListener('input", function () {
   if (searchField.value.trim() === '') {
      setsOl.innerHTML = ''; // Clear search results
   }
});
