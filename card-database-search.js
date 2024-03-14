const pokemonCard = [
   ...sv4pt5,
   ...sv4,
   ...sv3pt5,
   ...sv3,
   ...sv2,
   ...sv1,
   // ...sve,
   ...svp,
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
   ...smp,
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
   ...xyp,
   ...bw11,
   ...bw10,
   ...bw9,
   ...bw8,
   ...bw7,
   ...bw6,
   ...bw5,
   ...bw4,
   ...bw3,
   ...bw2,
   ...bw1,
   ...dv1,
   ...bwp,
   ...col1,
   ...hgss4,
   ...hgss3,
   ...hgss2,
   ...hgss1,
   ...hsp,
   ...pl4,
   ...pl3,
   ...pl2,
   ...pl1,
   ...dp7,
   ...dp6,
   ...dp5,
   ...dp4,
   ...dp3,
   ...dp2,
   ...dp1,
   ...dpp,
   ...ex16,
   ...ex15,
   ...ex14,
   ...ex13,
   ...ex12,
   ...ex11,
   ...ex10,
   ...ex9,
   ...ex8,
   ...ex7,
   ...ex6,
   ...ex5,
   ...ex4,
   ...ex3,
   ...ex2,
   ...ex1,
   ...np,
   ...ecard3,
   ...ecard2,
   ...ecard1,
   ...neo4,
   ...neo3,
   ...neo2,
   ...neo1,
   ...gym2,
   ...gym1,
   ...base6,
   ...base5,
   ...base4,
   ...base3,
   ...base2,
   ...base1,
   ...basep,
   ...xy0,
   ...pop1,
   ...pop2,
   ...pop3,
   ...pop4,
   ...pop5,
   ...pop6,
   ...pop7,
   ...pop8,
   ...pop9,
   ...ru1,
   ...si1,
   ...tk1a,
   // ...tk2,
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
         deckImg.onclick = () => {
             zoomedImg.setAttribute('src', item.images.large);
             zoombox.className = "show";
         };

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
                 console.log(newNumber);
                 if (defaultCountofOne === 4) {
                     plusCard.style.opacity = '0.4';
                     plusCard.style.pointerEvents = 'none';
                 }
             cardCount.setAttribute('src', "../assets/card-count/" + newNumber + ".png");
             // currentDeckCount.innerHTML = newNumber;
         })
         minusCard.addEventListener("click", () => {
             let newNumber = defaultCountofOne
             ? defaultCountofOne - 1
             : defaultCountofOne + 1;
             defaultCountofOne = newNumber;
             plusCard.style.opacity = '1';
             plusCard.style.pointerEvents = 'all';
                 console.log(newNumber);
             cardCount.setAttribute('src', "../assets/card-count/" + newNumber + ".png");
             if (defaultCountofOne === 0) {
                 deckCardContainer.remove();
                 addCardBtn.style.opacity = 1;
                 addCardBtn.style.pointerEvents = 'all';
             }
         })
         
         // reset decklist
         document.getElementById('deck-reset').addEventListener("click", () => {
             deckCardContainer.remove();
             addCardBtn.style.opacity = 1;
             addCardBtn.style.pointerEvents = 'all';
         })

         deckAndPm.appendChild(minusCard);
         deckAndPm.appendChild(cardCount);
         deckAndPm.appendChild(plusCard);
         deckCardContainer.appendChild(deckAndPm);
         deckCardContainer.appendChild(deckImg);
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
searchField.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

searchField.addEventListener('input', function() {
   if (searchField.value.trim() === '') {
         setsOl.innerHTML = ''; // Clear search results
   }
});