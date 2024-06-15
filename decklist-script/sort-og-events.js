const renderedList = document.querySelector('.masters-ol');
const modalBottom = document.querySelector('.modal-bottom');

function displayList(array = []) {
    renderedList.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        let item = array[i];

        let item_element = document.createElement('li');
        item_element.classList.add('player-list-hover');
        let title = document.createElement('li');
        title.classList.add('results-list-item');

        let playerName = document.createElement('div');
        playerName.classList.add('name-n-flag');

        if (item.banned === true) {
            playerName.classList.add('crossed-out');
        }

        let flagImg = document.createElement('img');
        flagImg.classList.add('flag-size');
        flagImg.setAttribute('src', item.flag);

        let countryName = document.createElement('div');
        countryName.classList.add('country-name');
        countryName.style.display = 'none';

        flagImg.addEventListener('mouseover', function() {
            if (flagImg.getAttribute('src').includes('argentina')) {
                countryName.textContent = 'Argentina (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('australia')) {
                countryName.textContent = 'Australia (Oceania)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('austria')) {
                countryName.textContent = 'Austria (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('belarus')) {
                countryName.textContent = 'Belarus (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('belgium')) {
                countryName.textContent = 'Belgium (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('brazil')) {
                countryName.textContent = 'Brazil (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('canada')) {
                countryName.textContent = 'Canada (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('chile')) {
                countryName.textContent = 'Chile (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('china')) {
                countryName.textContent = 'China (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('colombia')) {
                countryName.textContent = 'Colombia (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('croatia')) {
                countryName.textContent = 'Croatia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('czech-republic')) {
                countryName.textContent = 'Czechia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('denmark')) {
                countryName.textContent = 'Denmark (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('el-salvador')) {
                countryName.textContent = 'El Salvador (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('finland')) {
                countryName.textContent = 'Finland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('france')) {
                countryName.textContent = 'France (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('germany')) {
                countryName.textContent = 'Germany (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('greece')) {
                countryName.textContent = 'Greece (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('hong-kong')) {
                countryName.textContent = 'Hong Kong (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('indonesia')) {
                countryName.textContent = 'Indonesia (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('ireland')) {
                countryName.textContent = 'Ireland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('isreal')) {
                countryName.textContent = 'Israel (Middle East-South Africa)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('italy')) {
                countryName.textContent = 'Italy (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('japan')) {
                countryName.textContent = 'Japan (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('korea')) {
                countryName.textContent = 'South Korea (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('malaysia')) {
                countryName.textContent = 'Malaysia (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('malta')) {
                countryName.textContent = 'Malta (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('mexico')) {
                countryName.textContent = 'Mexico (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('moroco')) {
                countryName.textContent = 'Moroco (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('netherlands')) {
                countryName.textContent = 'Netherlands (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('new-zealand')) {
                countryName.textContent = 'New Zealand (Oceania)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('nicaragua')) {
                countryName.textContent = 'Nicaragua (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('norway')) {
                countryName.textContent = 'Norway (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('peru')) {
                countryName.textContent = 'Peru (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('philippines')) {
                countryName.textContent = 'Philippines (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('poland')) {
                countryName.textContent = 'Poland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('portugal')) {
                countryName.textContent = 'Portugal (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('puerto-rico')) {
                countryName.textContent = 'Puerto Rico (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('russia')) {
                countryName.textContent = 'Russia (Russia)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('singapore')) {
                countryName.textContent = 'Singapore (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('slovakia')) {
                countryName.textContent = 'Slovakia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('south-africa')) {
                countryName.textContent = 'South Africa (Middle East-South Africa)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('spain')) {
                countryName.textContent = 'Spain (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('sweden')) {
                countryName.textContent = 'Sweden (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('switzerland')) {
                countryName.textContent = 'Switzerland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('taiwan')) {
                countryName.textContent = 'Taiwan (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('thailand')) {
                countryName.textContent = 'Thailand (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('uk')) {
                countryName.textContent = 'United Kingdom (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('usa')) {
                countryName.textContent = 'USA (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('unknown')) {
                countryName.textContent = 'Unknown';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('slovenia')) {
                countryName.textContent = 'Slovenia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('ecuador')) {
                countryName.textContent = 'Ecuador (Latin America)';
                countryName.style.display = 'block';
            }
        });

        flagImg.addEventListener('mouseout', function() {
            countryName.style.display = 'none';
        });

        let deck = document.createElement('div');
        deck.classList.add('player-deck-icons');

        let deckName = document.createElement('div');
        deckName.classList.add('decklist-name');
        deckName.style.display = 'none';

        deck.addEventListener('mouseover', function() {
            if (item.deckid) {
                deckName.textContent = item.deckid;
                deckName.style.display = 'block';
            }
        })

        deck.addEventListener('mouseout', function() {
            deckName.style.display = 'none';
        });

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
        playerName.appendChild(countryName); // Append the country name element
        playerName.appendChild(flagImg);
        playerName.append(convertToTitleCase(item.firstName));
        title.appendChild(deck);
        deck.appendChild(deckName); // Append the deck name element
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
                document.querySelector('.playerName').innerHTML = item.firstName + "<br><i>" + item.event + "</i>";

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

                        if (item.event.includes('2020')) {
                            let allSets = {
                                //swsh
                                swsh1, swshp,
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
                        } if (item.event.includes('2019')) {
                            let allSets = {
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
                        } if (item.event.includes('2018')) {
                            let allSets = {
                                //sm
                                sm12, sm11, sm10, sm9, sm8, sm7, sm6, sm5, sm4, sm3, sm2, sm1, det, sm115, sm75, sm35, smp,
                                //xy
                                xy12, xy11, xy10, g1, xy9, xy8, xy7, xy6, dc1, xy5, xy4, xy3, xy2, xy1, xy0, xyp
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
                        } if (item.event.includes('2017')) {
                            let allSets = {
                                //sm
                                sm12, sm11, sm10, sm9, sm8, sm7, sm6, sm5, sm4, sm3, sm2, sm1, det, sm115, sm75, sm35, smp,
                                //xy
                                xy12, xy11, xy10, g1, xy9, xy8, xy7, xy6, dc1, xy5, xy4, xy3, xy2, xy1, xy0, xyp
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
                        } if (item.event.includes('2016')) {
                            let allSets = {
                                //xy
                                xy12, xy11, xy10, g1, xy9, xy8, xy7, xy6, dc1, xy5, xy4, xy3, xy2, xy1, xy0, xyp, 
                                //unknown - tanner h 2016 worlds srs
                                fr
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
                        } if (item.event.includes('2015')) {
                            let allSets = {
                                //xy
                                xy12, xy11, xy10, g1, xy9, xy8, xy7, xy6, dc1, xy5, xy4, xy3, xy2, xy1, xy0, xyp,
                                //bw
                                bw11, bw10, bw9, bw8, bw7, bw6, bw5, bw4, bw3, bw2, bw1, dv1, bwp
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
                        } if (item.event.includes('2014')) {
                            let allSets = {
                                //xy
                                xy3, xy2, xy1, xy0, xyp,
                                //bw
                                bw11, bw10, bw9, bw8, bw7, bw6, bw5, bw4, bw3, bw2, bw1, dv1, bwp
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
                        } if (item.event.includes('2013')) {
                            let allSets = {
                                //bw
                                bw11, bw10, bw9, bw8, bw7, bw6, bw5, bw4, bw3, bw2, bw1, dv1, bwp
                            }
                            const cardFound = allSets[setConvert[card.set]].find(cardInSet => cardInSet.id === setConvert[card.set] + "-" + card.number)
                            pokeCard.setAttribute('src', cardFound.images.small);
                            pokeCard.classList.add('radius-card');
                            pokeCard.setAttribute('alt', card.name + " " + card.set + " " + card.number);
                            let zoomedImg = document.getElementById("insert-zoomed-img");
                            let zoombox = document.getElementById("zoomed-bg");
                            pokeCard.onclick = () => {
                                zoomedImg.setAttribute('src', cardFound.images.large);
                                zoomedImg.classList.add('radius-card');
                                zoombox.className = "show";
                            }
                            zoombox.onclick = () => {
                                zoombox.className = "";
                            };
                        } if (item.event.includes('2012')) {
                            let allSets = {
                                //bw
                                bw6, bw5, bw4, bw3, bw2, bw1, dv1, bwp,
                                //hgss
                                col1, hgss4, hgss3, hgss2, hgss1, hsp
                            }
                            const cardFound = allSets[setConvert[card.set]].find(cardInSet => cardInSet.id === setConvert[card.set] + "-" + card.number)
                            pokeCard.setAttribute('src', cardFound.images.small);
                            pokeCard.classList.add('radius-card');
                            pokeCard.setAttribute('alt', card.name + " " + card.set + " " + card.number);
                            let zoomedImg = document.getElementById("insert-zoomed-img");
                            let zoombox = document.getElementById("zoomed-bg");
                            pokeCard.onclick = () => {
                                zoomedImg.setAttribute('src', cardFound.images.large);
                                zoomedImg.classList.add('radius-card');
                                zoombox.className = "show";
                            }
                            zoombox.onclick = () => {
                                zoombox.className = "";
                            };
                        } if (item.event.includes('2011')) {
                            let allSets = {
                                //bw
                                bw1, bwp,
                                //hgss
                                col1, hgss4, hgss3, hgss2, hgss1, hsp
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
                        } if (item.event.includes('2010')) {
                            let allSets = {
                                //hgss
                                hgss2, hgss1, hsp,
                                //dp
                                pl4, pl3, pl2, pl1, dp7, dp6, dp5, dp4, dp3, dp2, dp1, dpp,
                                //other
                                pop9, pop8, pop7, pop6, tk2a, tk1a
                            }
                            const cardFound = allSets[setConvert[card.set]].find(cardInSet => cardInSet.id === setConvert[card.set] + "-" + card.number)
                            pokeCard.setAttribute('src', cardFound.images.small);
                            pokeCard.classList.add('radius-card');
                            pokeCard.setAttribute('alt', card.name + " " + card.set + " " + card.number);
                            let zoomedImg = document.getElementById("insert-zoomed-img");
                            let zoombox = document.getElementById("zoomed-bg");
                            pokeCard.onclick = () => {
                                zoomedImg.setAttribute('src', cardFound.images.large);
                                zoomedImg.classList.add('radius-card');
                                zoombox.className = "show";
                            }
                            zoombox.onclick = () => {
                                zoombox.className = "";
                            };
                        } if (item.event.includes('2009')) {
                            let allSets = {
                                //dp
                                pl2, pl1, dp7, dp6, dp5, dp4, dp3, dp2, dp1, dpp,
                                //other
                                pop9, pop8, pop7, pop6, pop5, pop4, pop3, pop2, pop1, tk2a, tk1a
                            }
                            const cardFound = allSets[setConvert[card.set]].find(cardInSet => cardInSet.id === setConvert[card.set] + "-" + card.number)
                            pokeCard.setAttribute('src', cardFound.images.small);
                            pokeCard.classList.add('radius-card');
                            pokeCard.setAttribute('alt', card.name + " " + card.set + " " + card.number);
                            let zoomedImg = document.getElementById("insert-zoomed-img");
                            let zoombox = document.getElementById("zoomed-bg");
                            pokeCard.onclick = () => {
                                zoomedImg.setAttribute('src', cardFound.images.large);
                                zoomedImg.classList.add('radius-card');
                                zoombox.className = "show";
                            }
                            zoombox.onclick = () => {
                                zoombox.className = "";
                            };
                        } if (item.event.includes('2008')) {
                            let allSets = {
                                //dp
                                dp5, dp4, dp3, dp2, dp1, dpp,
                                //rs
                                ex16, ex15, ex14, ex13, np,
                                //other
                                pop7, pop6, pop5, pop4, pop3, pop2, pop1, tk2a, tk1a
                            }
                            const cardFound = allSets[setConvert[card.set]].find(cardInSet => cardInSet.id === setConvert[card.set] + "-" + card.number)
                            pokeCard.setAttribute('src', cardFound.images.small);
                            pokeCard.classList.add('radius-card');
                            pokeCard.setAttribute('alt', card.name + " " + card.set + " " + card.number);
                            let zoomedImg = document.getElementById("insert-zoomed-img");
                            let zoombox = document.getElementById("zoomed-bg");
                            pokeCard.onclick = () => {
                                zoomedImg.setAttribute('src', cardFound.images.large);
                                zoomedImg.classList.add('radius-card');
                                zoombox.className = "show";
                            }
                            zoombox.onclick = () => {
                                zoombox.className = "";
                            };
                        } if (item.event.includes('2007')) {
                            let allSets = {
                                //dp
                                dp2, dp1, dpp,
                                //rs
                                ex16, ex15, ex14, ex13, ex12, ex11, ex10, ex9, ex8, ex7, ex6, ex5, ex4, ex3, ex2, ex1, np,
                                //other
                                pop9, pop8, pop7, pop6, pop5, pop4, pop3, pop2, pop1, tk2a, tk1a
                            }
                            const cardFound = allSets[setConvert[card.set]].find(cardInSet => cardInSet.id === setConvert[card.set] + "-" + card.number)
                            pokeCard.setAttribute('src', cardFound.images.small);
                            pokeCard.classList.add('radius-card');
                            pokeCard.setAttribute('alt', card.name + " " + card.set + " " + card.number);
                            let zoomedImg = document.getElementById("insert-zoomed-img");
                            let zoombox = document.getElementById("zoomed-bg");
                            pokeCard.onclick = () => {
                                zoomedImg.setAttribute('src', cardFound.images.large);
                                zoomedImg.classList.add('radius-card');
                                zoombox.className = "show";
                            }
                            zoombox.onclick = () => {
                                zoombox.className = "";
                            };
                        } if (item.event.includes('06')) {
                            let allSets = {
                                //rs
                                ex16, ex15, ex14, ex13, ex12, ex11, ex10, ex9, ex8, ex7, ex6, ex5, ex4, ex3, ex2, ex1, np,
                                //other
                                xy0, pop1, pop2, pop3, pop4, pop5, pop6, pop7, pop8, pop9, si1, tk1a, tk2a, fr
                            }
                            const cardFound = allSets[setConvert[card.set]].find(cardInSet => cardInSet.id === setConvert[card.set] + "-" + card.number)
                            pokeCard.setAttribute('src', cardFound.images.small);
                            pokeCard.classList.add('radius-card');
                            // pokeCard.classList.add('old-card');
                            pokeCard.setAttribute('alt', card.name + " " + card.set + " " + card.number);
                            let zoomedImg = document.getElementById("insert-zoomed-img");
                            let zoombox = document.getElementById("zoomed-bg");
                            pokeCard.onclick = () => {
                                zoomedImg.setAttribute('src', cardFound.images.large);
                                zoomedImg.classList.add('radius-card');
                                zoombox.className = "show";
                            }
                            zoombox.onclick = () => {
                                zoombox.className = "";
                            };
                        } if (item.event.includes('2005')) {
                            let allSets = {
                                //rs
                                ex16, ex15, ex14, ex13, ex12, ex11, ex10, ex9, ex8, ex7, ex6, ex5, ex4, ex3, ex2, ex1, np,
                                //other
                                pop1, pop2, pop3, si1, tk1a, tk2a
                            }
                            const cardFound = allSets[setConvert[card.set]].find(cardInSet => cardInSet.id === setConvert[card.set] + "-" + card.number)
                            pokeCard.setAttribute('src', cardFound.images.small);
                            pokeCard.classList.add('radius-card');
                            // pokeCard.classList.add('old-card');
                            pokeCard.setAttribute('alt', card.name + " " + card.set + " " + card.number);
                            let zoomedImg = document.getElementById("insert-zoomed-img");
                            let zoombox = document.getElementById("zoomed-bg");
                            pokeCard.onclick = () => {
                                zoomedImg.setAttribute('src', cardFound.images.large);
                                zoomedImg.classList.add('radius-card');
                                zoombox.className = "show";
                            }
                            zoombox.onclick = () => {
                                zoombox.className = "";
                            };
                        } if (item.event.includes('2004')) {
                            let allSets = {
                                //rs
                                ex7, ex6, ex5, ex4, ex3, ex2, ex1, np,
                                //wotc
                                ecard3, ecard2, ecard1, neo4, neo3, neo2, neo1, gym2, gym1, base6, base5, base4, base3, base2, base1, basep,
                                //other
                                pop1, si1, tk1a, tk2a
                            }
                            const cardFound = allSets[setConvert[card.set]].find(cardInSet => cardInSet.id === setConvert[card.set] + "-" + card.number)
                            pokeCard.setAttribute('src', cardFound.images.small);
                            pokeCard.classList.add('radius-card');
                            // pokeCard.classList.add('old-card');
                            pokeCard.setAttribute('alt', card.name + " " + card.set + " " + card.number);
                            let zoomedImg = document.getElementById("insert-zoomed-img");
                            let zoombox = document.getElementById("zoomed-bg");
                            pokeCard.onclick = () => {
                                zoomedImg.setAttribute('src', cardFound.images.large);
                                zoomedImg.classList.add('radius-card');
                                zoombox.className = "show";
                            }
                            zoombox.onclick = () => {
                                zoombox.className = "";
                            };
                        } if (item.event.includes('2002')) {
                            let allSets = {
                                //wotc
                                ecard3, ecard2, ecard1, neo4, neo3, neo2, neo1, gym2, gym1, base6, base5, base4, base3, base2, base1, basep,
                                //other
                                si1
                            }
                            const cardFound = allSets[setConvert[card.set]].find(cardInSet => cardInSet.id === setConvert[card.set] + "-" + card.number)
                            pokeCard.setAttribute('src', cardFound.images.small);
                            pokeCard.classList.add('radius-card');
                            // pokeCard.classList.add('old-card');
                            pokeCard.setAttribute('alt', card.name + " " + card.set + " " + card.number);
                            let zoomedImg = document.getElementById("insert-zoomed-img");
                            let zoombox = document.getElementById("zoomed-bg");
                            pokeCard.onclick = () => {
                                zoomedImg.setAttribute('src', cardFound.images.large);
                                zoomedImg.classList.add('radius-card');
                                zoombox.className = "show";
                            }
                            zoombox.onclick = () => {
                                zoombox.className = "";
                            };
                        } if (item.event.includes('2001')) {
                            let allSets = {
                                //wotc
                                ecard3, ecard2, ecard1, neo4, neo3, neo2, neo1, gym2, gym1, base6, base5, base4, base3, base2, base1, basep,
                                //other
                                si1
                            }
                            const cardFound = allSets[setConvert[card.set]].find(cardInSet => cardInSet.id === setConvert[card.set] + "-" + card.number)
                            pokeCard.setAttribute('src', cardFound.images.small);
                            pokeCard.classList.add('old-card');
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
                        } if (item.event.includes('2000')) {
                            let allSets = {
                                //wotc
                                ecard3, ecard2, ecard1, neo4, neo3, neo2, neo1, gym2, gym1, base6, base5, base4, base3, base2, base1, basep,
                                //other
                                si1
                            }
                            const cardFound = allSets[setConvert[card.set]].find(cardInSet => cardInSet.id === setConvert[card.set] + "-" + card.number)
                            pokeCard.setAttribute('src', cardFound.images.small);
                            pokeCard.classList.add('old-card');
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
                        }
                        // 60 card checker
                        let sixtyCheck = item.decklist.pokemon.reduce((n, { count }) => n + count, 0) + item.decklist.trainer.reduce((n, { count }) => n + count, 0) + item.decklist.energy.reduce((n, { count }) => n + count, 0);
                        if (sixtyCheck !== 60) {
                            confirm('NOT 60 CARDS! only' + " " + sixtyCheck)
                        }

                        let numberCounter = document.createElement('img');
                        numberCounter.classList.add('num-1')
                        numberCounter.setAttribute('src', "../../assets/card-count/" + card.count + ".png");
                        if (item.event.includes('Internationals')) {
                            numberCounter.setAttribute('src', "../../../assets/card-count/" + card.count + ".png");
                        }
                        if (item.event.includes('Regionals')) {
                            numberCounter.setAttribute('src', "../../../../assets/card-count/" + card.count + ".png");
                        } 
                        if (item.event.includes('Qualifier')) {
                            numberCounter.setAttribute('src', "../../../../assets/card-count/" + card.count + ".png");
                        } 
                        if (item.event.includes('Retro')) {
                            numberCounter.setAttribute('src', "../../../../assets/card-count/" + card.count + ".png");
                        } 
                        if (item.event.includes('National Championships')) {
                            numberCounter.setAttribute('src', "../../../../assets/card-count/" + card.count + ".png");
                        } 
                        if (item.event.includes('US National Championships')) {
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
        renderedList.appendChild(item_element);
    }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);