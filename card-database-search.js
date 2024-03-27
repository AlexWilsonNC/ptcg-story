const pokemonCard = [
   ...svp,
   ...sv4pt5,
   ...sv4,
   ...sv3pt5,
   ...sv3,
   ...sv2,
   ...sv1,
   // ...sve,
   ...ru1,
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
   const searchValue = searchField.value.trim().toLowerCase();

   if (searchValue === '') {
      setsOl.innerHTML = '';
      return;
   }

   const searchResults = pokemonCard.filter(poke => poke.name?.toLowerCase().includes(searchValue));

   setsOl.innerHTML = '';

   searchResults.forEach((poke) => {
      let cardArea = document.createElement('div');
      cardArea.classList.add('searched-card-wrap');
      // card img
      let img = document.createElement('img');
      img.classList.add('database-card-in-list');
      img.setAttribute('src', poke.images.small);
      img.setAttribute('alt', poke.name + " " + poke.setAbbrev + " " + poke.number);
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
         deckImg.setAttribute('alt', "1" + " " + poke.name + " " + poke.setAbbrev + " " + poke.number);
         deckImg.onclick = () => {
            zoomedImg.setAttribute('src', poke.images.large);
            zoombox.className = "show";
         };
         let currentValue = parseInt(currCounter.innerHTML);
         currentValue++;
         currCounter.innerHTML = currentValue;
         if (currCounter.innerHTML === "60") {
            currCounter.style.color = 'green';
            statCount.style.color = 'green';
            statCount.style.border = '1px solid green';
         } else {
            currCounter.style.color = 'black'
            statCount.style.color = 'black';
            statCount.style.border = '1px solid black';
         }
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
            if (currCounter.innerHTML === "60") {
               currCounter.style.color = 'green';
               statCount.style.color = 'green';
               statCount.style.border = '1px solid green';
            } else {
               currCounter.style.color = 'black'
               statCount.style.color = 'black';
               statCount.style.border = '1px solid black';
            } if (defaultCountofOne === 4) {
               plusCard.style.opacity = '0.4';
               plusCard.style.pointerEvents = 'none';
            }
            cardCount.setAttribute('src', "../assets/card-count/" + newNumber + ".png");
            deckImg.setAttribute('alt', newNumber + " " + poke.name + " " + poke.setAbbrev + " " + poke.number);
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
            if (currCounter.innerHTML === "60") {
               currCounter.style.color = 'green';
               statCount.style.color = 'green';
               statCount.style.border = '1px solid green';
            } else {
               currCounter.style.color = 'black'
               statCount.style.color = 'black';
               statCount.style.border = '1px solid black';
            }
            plusCard.style.opacity = '1';
            plusCard.style.pointerEvents = 'all';
            cardCount.setAttribute('src', "../assets/card-count/" + newNumber + ".png");
            deckImg.setAttribute('alt', newNumber + " " + poke.name + " " + poke.setAbbrev + " " + poke.number);
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
         copyButton.addEventListener('click', function () {
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
         exportJson.addEventListener('click', function () {
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
               const wrappedAlt = '{' + mappedPieces.join(', ') + '},';
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
         zoomedImg.setAttribute('src', poke.images.large);
         zoombox.className = "show";
      };
      zoombox.onclick = () => {
         zoombox.className = "";
      };

      setsOl.appendChild(cardArea);
   });
}

// for button click
searchButton.addEventListener('click', performSearch);

// for Enter key press
searchField.addEventListener('keypress', function (event) {
   if (event.key === 'Enter') {
      performSearch();
   }
});

searchField.addEventListener('input', function () {
   if (searchField.value.trim() === '') {
      setsOl.innerHTML = ''; // Clear search results
   }
});
