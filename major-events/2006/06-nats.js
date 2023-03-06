const masterList = document.querySelector('.uk-masters-ol');
const seniorList = document.querySelector('.uk-seniors-ol');
const juniorList = document.querySelector('.uk-juniors-ol');
const fourList = document.querySelector('.four-ol');
const fiveList = document.querySelector('.five-ol');
const sixList = document.querySelector('.six-ol');
const sevenList = document.querySelector('.seven-ol');
const eightList = document.querySelector('.eight-ol');
const nineList = document.querySelector('.nine-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
    {
        firstName: 'Daniel Chan',
        sprite1: '../../assets/sprites/arcanine.png',
        sprite2: '../../assets/sprites/ninetales.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2004-2006/arcanine-ex.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/growlith.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/ninetales.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/vulpix.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/latios-water.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/latias-fire-body.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/jirachi.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/prof-oaks-research-old.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/marys-request.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/elms-training-method.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/swoop-teleporter.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/pokemon-reversal.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/switch.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/cursed-stone.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/old-energy/fire-energy-holon-phantoms.png',
                numImg: '../../assets/10.png'
            },
            {
                cardImg: '../../assets/cards/old-energy/rainbow-energy-2006.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/old-energy/react-energy.png',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2004-2006',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

let seniors = [
    {
        firstName: 'Axel Sjilov',
        sprite1: '../../assets/sprites/lugia.png',
        sprite2: '../../assets/sprites/blastoise.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
              cardImg: '../../assets/cards/2004-2006/lugia-ex.png',
              numImg: '../../assets/01.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/blastoise-ex.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/wartortle.png',
              numImg: '../../assets/01.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/squirtle.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/steelix-ex.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/onix-horn-rush.png',
              numImg: '../../assets/01.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/onix.png',
              numImg: '../../assets/01.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/pidgeot.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/pidgeotto.png',
              numImg: '../../assets/01.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/pidgey.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/jirachi.png',
              numImg: '../../assets/03.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/ditto-mr-mime.png',
              numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/holon-electrode.png',
                numImg: '../../assets/04.png'
              },
            {
              cardImg: '../../assets/cards/2004-2006/holon-magneton.png',
              numImg: '../../assets/01.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/elms-training-method.png',
              numImg: '../../assets/04.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
              numImg: '../../assets/03.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/holon-mentor.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/holon-scientist.png',
              numImg: '../../assets/01.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/rare-candy-2006.png',
              numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/swoop-teleporter.png',
                numImg: '../../assets/03.png'
              },
            {
              cardImg: '../../assets/cards/2004-2006/holon-transeiver.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/switch.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/power-tree.png',
              numImg: '../../assets/03.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/giant-stump.png',
              numImg: '../../assets/01.png'
            },
            {
              cardImg: '../../assets/cards/old-energy/water-energy-holon-phantoms.png',
              numImg: '../../assets/09.png'
            }
          ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2004-2006',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

let juniors = [
    {
        firstName: 'Fai Cheung',
        sprite1: '../../assets/sprites/tyranitar.png',
        sprite2: '../../assets/sprites/electrode.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
              cardImg: '../../assets/cards/2004-2006/dark-tyranitar.png',
              numImg: '../../assets/03.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/dark-pupitar.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/larvitar.png',
              numImg: '../../assets/03.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/electrode-ex.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/voltorb.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/ninetales.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/vulpix.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/plusle.png',
              numImg: '../../assets/04.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/tv-reporter.png',
              numImg: '../../assets/04.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
              numImg: '../../assets/03.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
              numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/pow-hand-extension.png',
                numImg: '../../assets/03.png'
              },
              {
                cardImg: '../../assets/cards/2004-2006/life-herb.png',
                numImg: '../../assets/03.png'
              },
            {
              cardImg: '../../assets/cards/2004-2006/rare-candy-2006.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/rockets-poke-ball.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/battle-fronteir.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/old-energy/fire-energy-holon-phantoms.png',
              numImg: '../../assets/06.png'
            },
            {
              cardImg: '../../assets/cards/old-energy/2007-darkness-energy-special.png',
              numImg: '../../assets/04.png'
            },
            {
              cardImg: '../../assets/cards/old-energy/r-energy.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/old-energy/rainbow-energy-2006.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/old-energy/holon-energy-ff.png',
              numImg: '../../assets/02.png'
            }
          ]
    },
    {
        firstName: 'Simon Hjelle',
        sprite1: '../../assets/sprites/lugia.png',
        sprite2: '../../assets/sprites/blastoise.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2004-2006',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Willy Cun',
        sprite1: '../../assets/sprites/zapdos.png',
        sprite2: '../../assets/sprites/rayquaza.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2004-2006',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Evens Cheung',
        sprite1: '../../assets/sprites/lugia.png',
        sprite2: '../../assets/sprites/blastoise.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2004-2006',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Jawad Benhammou',
        sprite1: '../../assets/sprites/metagross.png',
        sprite2: '../../assets/sprites/dragonite.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2004-2006',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Tronn Johansen',
        sprite1: '../../assets/sprites/dustox.png',
        sprite2: '../../assets/sprites/espeon.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2004-2006',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Gio Chan',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/nidoqueen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2004-2006',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Robert Leszcynski',
        sprite1: '../../assets/sprites/dragonite.png',
        sprite2: '../../assets/sprites/electrode.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2004-2006',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

let fourEvent = [
    {
        firstName: 'eeee',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2004-2006',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

let fiveEvent = [
    {
        firstName: 'eeee',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
        // // list../../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

let sixEvent = [
    {
        firstName: 'eeee',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
        // // list../../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        // list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

let sevenEvent = [
    {
        firstName: 'eeee',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
        // // list../../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        // list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

let eightEvent = [
    {
        firstName: 'eeee',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
        // // list../../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        // list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

let nineEvent = [
    {
        firstName: 'eeee',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
        // // list../../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        // list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

//masters
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

        let deck = document.createElement('div');
        deck.classList.add('player-deck-icons');

        let firstSprite = document.createElement('img');
        firstSprite.classList.add('sprite');
        firstSprite.setAttribute('src', item.sprite1);
        let secondSprite = document.createElement('img');
        secondSprite.classList.add('sprite');
        secondSprite.classList.add('second-sprite');
        secondSprite.setAttribute('src', item.sprite2);
        let listIcon = document.createElement('img');
        listIcon.classList.add('list-icon');
        listIcon.setAttribute('src', item.list);

        item_element.appendChild(title);
        title.appendChild(playerName);
        playerName.append(item.firstName);
        title.appendChild(deck);
        deck.appendChild(firstSprite);
        deck.appendChild(secondSprite);
        deck.appendChild(listIcon);

        if (item.list === '../../assets/list-icon.png') {
            console.log('hey')
            item_element.addEventListener('click', function () {
                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2006 Norway Nats";

                if (item.type == 'psychic') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/psychic-bg.png)";
                } else if (item.type == 'fire') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fire-bg.png)";
                } else if (item.type == 'fairy') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fairy-bg.png)";
                } else if (item.type == 'normal') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/normal-bg.png)";
                } else if (item.type == '') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/-bg.png)";
                } else if (item.type == 'dark') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
                } else if (item.type == 'dragon') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dragon-bg.png)";
                } else if (item.type == 'fighting') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fighting-bg.png)";
                } else if (item.type == 'grass') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/grass-bg.png)";
                } else if (item.type == 'metal') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/metal-bg.png)";
                } else if (item.type == 'water') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/water-bg.png)";
                } else {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
                }

                for (let i = 0; i < item.deck.length; i++) {
                    let deck = item.deck[i];

                    let cardSpace = document.createElement('div');
                    cardSpace.classList.add('pokemon-card');

                    let pokeCard = document.createElement('img');
                    pokeCard.classList.add('pok-card-small')
                    pokeCard.setAttribute('src', deck.cardImg);

                    if (deck.oldCard === true) {
                        pokeCard.classList.add('old-card')
                    }
                    if (deck.oldCard === true) {
                        pokeCard.classList.add('radius-card')
                    }
                    if (deck.exCard === true) {
                        pokeCard.classList.add('ex-era-card')
                    }
                    if (deck.radiusCard === true) {
                        pokeCard.classList.add('radius-card')
                    }

                    let numberCounter = document.createElement('img');
                    numberCounter.classList.add('num-1')
                    numberCounter.setAttribute('src', deck.numImg);

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
                }
                document.querySelectorAll('.pokemon-card').forEach(card => {
                    let meep = document.getElementsByClassName("pok-card-small"),
                    zoombox = document.getElementById("zoom-card-box");
                   
                    if (meep.length > 0) { for (let i of meep) {
                      i.onclick = () => {
                        let clone = i.cloneNode();
                        clone.className = "";
                        zoombox.innerHTML = "";
                        zoombox.appendChild(clone);
                        zoombox.className = "show";
                      };
                    }}
                   
                    zoombox.onclick = () => {
                      zoombox.className = "";
                    };
                  });
            })
        }

        masterList.appendChild(item_element);
    }
}

// seniors
function displayList2(array = []) {
    seniorList.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        let item = array[i];

        let item_element = document.createElement('li');
        item_element.classList.add('player-list-hover');
        let title = document.createElement('li');
        title.classList.add('results-list-item');

        let playerName = document.createElement('div');
        playerName.classList.add('name-n-flag');

        let deck = document.createElement('div');
        deck.classList.add('player-deck-icons');

        let firstSprite = document.createElement('img');
        firstSprite.classList.add('sprite');
        firstSprite.setAttribute('src', item.sprite1);
        let secondSprite = document.createElement('img');
        secondSprite.classList.add('sprite');
        secondSprite.classList.add('second-sprite');
        secondSprite.setAttribute('src', item.sprite2);
        let listIcon = document.createElement('img');
        listIcon.classList.add('list-icon');
        listIcon.setAttribute('src', item.list);

        item_element.appendChild(title);
        title.appendChild(playerName);
        playerName.append(item.firstName);
        title.appendChild(deck);
        deck.appendChild(firstSprite);
        deck.appendChild(secondSprite);
        deck.appendChild(listIcon);

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2006 Norway Nats";

                if (item.type == 'psychic') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/psychic-bg.png)";
                } else if (item.type == 'fire') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fire-bg.png)";
                } else if (item.type == 'fairy') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fairy-bg.png)";
                } else if (item.type == 'normal') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/normal-bg.png)";
                } else if (item.type == 'lightning') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/lightning-bg.png)";
                } else if (item.type == 'dark') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
                } else if (item.type == 'dragon') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dragon-bg.png)";
                } else if (item.type == 'fighting') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fighting-bg.png)";
                } else if (item.type == 'grass') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/grass-bg.png)";
                } else if (item.type == 'metal') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/metal-bg.png)";
                } else if (item.type == 'water') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/water-bg.png)";
                } else {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
                }


                for (let i = 0; i < item.deck.length; i++) {
                    let deck = item.deck[i];

                    let cardSpace = document.createElement('div');
                    cardSpace.classList.add('pokemon-card');

                    let pokeCard = document.createElement('img');
                    pokeCard.classList.add('pok-card-small')
                    pokeCard.setAttribute('src', deck.cardImg);

                    if (deck.oldCard === true) {
                        pokeCard.classList.add('old-card')
                    }
                    if (deck.oldCard === true) {
                        pokeCard.classList.add('radius-card')
                    }
                    if (deck.exCard === true) {
                        pokeCard.classList.add('ex-era-card')
                    }
                    if (deck.radiusCard === true) {
                        pokeCard.classList.add('radius-card')
                    }

                    let numberCounter = document.createElement('img');
                    numberCounter.classList.add('num-1')
                    numberCounter.setAttribute('src', deck.numImg);

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
                }
                document.querySelectorAll('.pokemon-card').forEach(card => {
                    let meep = document.getElementsByClassName("pok-card-small"),
                    zoombox = document.getElementById("zoom-card-box");
                   
                    if (meep.length > 0) { for (let i of meep) {
                      i.onclick = () => {
                        let clone = i.cloneNode();
                        clone.className = "";
                        zoombox.innerHTML = "";
                        zoombox.appendChild(clone);
                        zoombox.className = "show";
                      };
                    }}
                   
                    zoombox.onclick = () => {
                      zoombox.className = "";
                    };
                  });
            })
        }

        seniorList.appendChild(item_element);
    }
}

// juniors
function displayList3(array = []) {
    juniorList.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        let item = array[i];

        let item_element = document.createElement('li');
        item_element.classList.add('player-list-hover');
        let title = document.createElement('li');
        title.classList.add('results-list-item');

        let playerName = document.createElement('div');
        playerName.classList.add('name-n-flag');

        let deck = document.createElement('div');
        deck.classList.add('player-deck-icons');

        let firstSprite = document.createElement('img');
        firstSprite.classList.add('sprite');
        firstSprite.setAttribute('src', item.sprite1);
        let secondSprite = document.createElement('img');
        secondSprite.classList.add('sprite');
        secondSprite.classList.add('second-sprite');
        secondSprite.setAttribute('src', item.sprite2);
        let listIcon = document.createElement('img');
        listIcon.classList.add('list-icon');
        listIcon.setAttribute('src', item.list);

        item_element.appendChild(title);
        title.appendChild(playerName);
        playerName.append(item.firstName);
        title.appendChild(deck);
        deck.appendChild(firstSprite);
        deck.appendChild(secondSprite);
        deck.appendChild(listIcon);

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2006 Norway Nats";

                if (item.type == 'psychic') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/psychic-bg.png)";
                } else if (item.type == 'fire') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fire-bg.png)";
                } else if (item.type == 'fairy') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fairy-bg.png)";
                } else if (item.type == 'normal') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/normal-bg.png)";
                } else if (item.type == 'lightning') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/lightning-bg.png)";
                } else if (item.type == 'dark') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
                } else if (item.type == 'dragon') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dragon-bg.png)";
                } else if (item.type == 'fighting') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fighting-bg.png)";
                } else if (item.type == 'grass') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/grass-bg.png)";
                } else if (item.type == 'metal') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/metal-bg.png)";
                } else if (item.type == 'water') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/water-bg.png)";
                } else {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
                }


                for (let i = 0; i < item.deck.length; i++) {
                    let deck = item.deck[i];

                    let cardSpace = document.createElement('div');
                    cardSpace.classList.add('pokemon-card');

                    let pokeCard = document.createElement('img');
                    pokeCard.classList.add('pok-card-small')
                    pokeCard.setAttribute('src', deck.cardImg);

                    if (deck.oldCard === true) {
                        pokeCard.classList.add('old-card')
                    }
                    if (deck.oldCard === true) {
                        pokeCard.classList.add('radius-card')
                    }
                    if (deck.exCard === true) {
                        pokeCard.classList.add('ex-era-card')
                    }
                    if (deck.radiusCard === true) {
                        pokeCard.classList.add('radius-card')
                    }

                    let numberCounter = document.createElement('img');
                    numberCounter.classList.add('num-1')
                    numberCounter.setAttribute('src', deck.numImg);

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
                }
                document.querySelectorAll('.pokemon-card').forEach(card => {
                    let meep = document.getElementsByClassName("pok-card-small"),
                    zoombox = document.getElementById("zoom-card-box");
                   
                    if (meep.length > 0) { for (let i of meep) {
                      i.onclick = () => {
                        let clone = i.cloneNode();
                        clone.className = "";
                        zoombox.innerHTML = "";
                        zoombox.appendChild(clone);
                        zoombox.className = "show";
                      };
                    }}
                   
                    zoombox.onclick = () => {
                      zoombox.className = "";
                    };
                  });
            })
        }

        juniorList.appendChild(item_element);
    }
}

// four
function displayList4(array = []) {
    fourList.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        let item = array[i];

        let item_element = document.createElement('li');
        item_element.classList.add('player-list-hover');
        let title = document.createElement('li');
        title.classList.add('results-list-item');

        let playerName = document.createElement('div');
        playerName.classList.add('name-n-flag');

        let deck = document.createElement('div');
        deck.classList.add('player-deck-icons');

        let firstSprite = document.createElement('img');
        firstSprite.classList.add('sprite');
        firstSprite.setAttribute('src', item.sprite1);
        let secondSprite = document.createElement('img');
        secondSprite.classList.add('sprite');
        secondSprite.classList.add('second-sprite');
        secondSprite.setAttribute('src', item.sprite2);
        let listIcon = document.createElement('img');
        listIcon.classList.add('list-icon');
        listIcon.setAttribute('src', item.list);

        item_element.appendChild(title);
        title.appendChild(playerName);
        playerName.append(item.firstName);
        title.appendChild(deck);
        deck.appendChild(firstSprite);
        deck.appendChild(secondSprite);
        deck.appendChild(listIcon);

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2007 Germany Nats";

                if (item.type == 'psychic') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/psychic-bg.png)";
                } else if (item.type == 'fire') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fire-bg.png)";
                } else if (item.type == 'fairy') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fairy-bg.png)";
                } else if (item.type == 'normal') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/normal-bg.png)";
                } else if (item.type == 'lightning') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/lightning-bg.png)";
                } else if (item.type == 'dark') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
                } else if (item.type == 'dragon') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dragon-bg.png)";
                } else if (item.type == 'fighting') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fighting-bg.png)";
                } else if (item.type == 'grass') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/grass-bg.png)";
                } else if (item.type == 'metal') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/metal-bg.png)";
                } else if (item.type == 'water') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/water-bg.png)";
                } else {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
                }


                for (let i = 0; i < item.deck.length; i++) {
                    let deck = item.deck[i];

                    let cardSpace = document.createElement('div');
                    cardSpace.classList.add('pokemon-card');

                    let pokeCard = document.createElement('img');
                    pokeCard.classList.add('pok-card-small')
                    pokeCard.setAttribute('src', deck.cardImg);

                    if (deck.oldCard === true) {
                        pokeCard.classList.add('old-card')
                    }
                    if (deck.oldCard === true) {
                        pokeCard.classList.add('radius-card')
                    }
                    if (deck.exCard === true) {
                        pokeCard.classList.add('ex-era-card')
                    }
                    if (deck.radiusCard === true) {
                        pokeCard.classList.add('radius-card')
                    }

                    let numberCounter = document.createElement('img');
                    numberCounter.classList.add('num-1')
                    numberCounter.setAttribute('src', deck.numImg);

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
                }
                document.querySelectorAll('.pokemon-card').forEach(card => {
                    let meep = document.getElementsByClassName("pok-card-small"),
                    zoombox = document.getElementById("zoom-card-box");
                   
                    if (meep.length > 0) { for (let i of meep) {
                      i.onclick = () => {
                        let clone = i.cloneNode();
                        clone.className = "";
                        zoombox.innerHTML = "";
                        zoombox.appendChild(clone);
                        zoombox.className = "show";
                      };
                    }}
                   
                    zoombox.onclick = () => {
                      zoombox.className = "";
                    };
                  });
            })
        }

        fourList.appendChild(item_element);
    }
}

// five
function displayList5(array = []) {
    fiveList.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        let item = array[i];

        let item_element = document.createElement('li');
        item_element.classList.add('player-list-hover');
        let title = document.createElement('li');
        title.classList.add('results-list-item');

        let playerName = document.createElement('div');
        playerName.classList.add('name-n-flag');

        let deck = document.createElement('div');
        deck.classList.add('player-deck-icons');

        let firstSprite = document.createElement('img');
        firstSprite.classList.add('sprite');
        firstSprite.setAttribute('src', item.sprite1);
        let secondSprite = document.createElement('img');
        secondSprite.classList.add('sprite');
        secondSprite.classList.add('second-sprite');
        secondSprite.setAttribute('src', item.sprite2);
        let listIcon = document.createElement('img');
        listIcon.classList.add('list-icon');
        listIcon.setAttribute('src', item.list);

        item_element.appendChild(title);
        title.appendChild(playerName);
        playerName.append(item.firstName);
        title.appendChild(deck);
        deck.appendChild(firstSprite);
        deck.appendChild(secondSprite);
        deck.appendChild(listIcon);

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2011 France Nats";

                if (item.type == 'psychic') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/psychic-bg.png)";
                } else if (item.type == 'fire') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fire-bg.png)";
                } else if (item.type == 'fairy') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fairy-bg.png)";
                } else if (item.type == 'normal') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/normal-bg.png)";
                } else if (item.type == 'lightning') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/lightning-bg.png)";
                } else if (item.type == 'dark') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
                } else if (item.type == 'dragon') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dragon-bg.png)";
                } else if (item.type == 'fighting') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fighting-bg.png)";
                } else if (item.type == 'grass') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/grass-bg.png)";
                } else if (item.type == 'metal') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/metal-bg.png)";
                } else if (item.type == 'water') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/water-bg.png)";
                } else {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
                }


                for (let i = 0; i < item.deck.length; i++) {
                    let deck = item.deck[i];

                    let cardSpace = document.createElement('div');
                    cardSpace.classList.add('pokemon-card');

                    let pokeCard = document.createElement('img');
                    pokeCard.classList.add('pok-card-small')
                    pokeCard.setAttribute('src', deck.cardImg);

                    if (deck.oldCard === true) {
                        pokeCard.classList.add('old-card')
                    }
                    if (deck.oldCard === true) {
                        pokeCard.classList.add('radius-card')
                    }
                    if (deck.exCard === true) {
                        pokeCard.classList.add('ex-era-card')
                    }
                    if (deck.radiusCard === true) {
                        pokeCard.classList.add('radius-card')
                    }

                    let numberCounter = document.createElement('img');
                    numberCounter.classList.add('num-1')
                    numberCounter.setAttribute('src', deck.numImg);

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
                }
                document.querySelectorAll('.pokemon-card').forEach(card => {
                    let meep = document.getElementsByClassName("pok-card-small"),
                    zoombox = document.getElementById("zoom-card-box");
                   
                    if (meep.length > 0) { for (let i of meep) {
                      i.onclick = () => {
                        let clone = i.cloneNode();
                        clone.className = "";
                        zoombox.innerHTML = "";
                        zoombox.appendChild(clone);
                        zoombox.className = "show";
                      };
                    }}
                   
                    zoombox.onclick = () => {
                      zoombox.className = "";
                    };
                  });
            })
        }

        fiveList.appendChild(item_element);
    }
}

// six
function displayList6(array = []) {
    sixList.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        let item = array[i];

        let item_element = document.createElement('li');
        item_element.classList.add('player-list-hover');
        let title = document.createElement('li');
        title.classList.add('results-list-item');

        let playerName = document.createElement('div');
        playerName.classList.add('name-n-flag');

        let deck = document.createElement('div');
        deck.classList.add('player-deck-icons');

        let firstSprite = document.createElement('img');
        firstSprite.classList.add('sprite');
        firstSprite.setAttribute('src', item.sprite1);
        let secondSprite = document.createElement('img');
        secondSprite.classList.add('sprite');
        secondSprite.classList.add('second-sprite');
        secondSprite.setAttribute('src', item.sprite2);
        let listIcon = document.createElement('img');
        listIcon.classList.add('list-icon');
        listIcon.setAttribute('src', item.list);

        item_element.appendChild(title);
        title.appendChild(playerName);
        playerName.append(item.firstName);
        title.appendChild(deck);
        deck.appendChild(firstSprite);
        deck.appendChild(secondSprite);
        deck.appendChild(listIcon);

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 Germany Nats";

                if (item.type == 'psychic') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/psychic-bg.png)";
                } else if (item.type == 'fire') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fire-bg.png)";
                } else if (item.type == 'fairy') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fairy-bg.png)";
                } else if (item.type == 'normal') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/normal-bg.png)";
                } else if (item.type == 'lightning') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/lightning-bg.png)";
                } else if (item.type == 'dark') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
                } else if (item.type == 'dragon') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dragon-bg.png)";
                } else if (item.type == 'fighting') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fighting-bg.png)";
                } else if (item.type == 'grass') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/grass-bg.png)";
                } else if (item.type == 'metal') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/metal-bg.png)";
                } else if (item.type == 'water') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/water-bg.png)";
                } else {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
                }


                for (let i = 0; i < item.deck.length; i++) {
                    let deck = item.deck[i];

                    let cardSpace = document.createElement('div');
                    cardSpace.classList.add('pokemon-card');

                    let pokeCard = document.createElement('img');
                    pokeCard.classList.add('pok-card-small')
                    pokeCard.setAttribute('src', deck.cardImg);

                    if (deck.oldCard === true) {
                        pokeCard.classList.add('old-card')
                    }
                    if (deck.oldCard === true) {
                        pokeCard.classList.add('radius-card')
                    }
                    if (deck.exCard === true) {
                        pokeCard.classList.add('ex-era-card')
                    }
                    if (deck.radiusCard === true) {
                        pokeCard.classList.add('radius-card')
                    }

                    let numberCounter = document.createElement('img');
                    numberCounter.classList.add('num-1')
                    numberCounter.setAttribute('src', deck.numImg);

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
                }
                document.querySelectorAll('.pokemon-card').forEach(card => {
                    let meep = document.getElementsByClassName("pok-card-small"),
                    zoombox = document.getElementById("zoom-card-box");
                   
                    if (meep.length > 0) { for (let i of meep) {
                      i.onclick = () => {
                        let clone = i.cloneNode();
                        clone.className = "";
                        zoombox.innerHTML = "";
                        zoombox.appendChild(clone);
                        zoombox.className = "show";
                      };
                    }}
                   
                    zoombox.onclick = () => {
                      zoombox.className = "";
                    };
                  });
            })
        }

        sixList.appendChild(item_element);
    }
}

// seven
function displayList7(array = []) {
    sevenList.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        let item = array[i];

        let item_element = document.createElement('li');
        item_element.classList.add('player-list-hover');
        let title = document.createElement('li');
        title.classList.add('results-list-item');

        let playerName = document.createElement('div');
        playerName.classList.add('name-n-flag');

        let deck = document.createElement('div');
        deck.classList.add('player-deck-icons');

        let firstSprite = document.createElement('img');
        firstSprite.classList.add('sprite');
        firstSprite.setAttribute('src', item.sprite1);
        let secondSprite = document.createElement('img');
        secondSprite.classList.add('sprite');
        secondSprite.classList.add('second-sprite');
        secondSprite.setAttribute('src', item.sprite2);
        let listIcon = document.createElement('img');
        listIcon.classList.add('list-icon');
        listIcon.setAttribute('src', item.list);

        item_element.appendChild(title);
        title.appendChild(playerName);
        playerName.append(item.firstName);
        title.appendChild(deck);
        deck.appendChild(firstSprite);
        deck.appendChild(secondSprite);
        deck.appendChild(listIcon);

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 Denmark Nats";

                if (item.type == 'psychic') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/psychic-bg.png)";
                } else if (item.type == 'fire') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fire-bg.png)";
                } else if (item.type == 'fairy') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fairy-bg.png)";
                } else if (item.type == 'normal') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/normal-bg.png)";
                } else if (item.type == 'lightning') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/lightning-bg.png)";
                } else if (item.type == 'dark') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
                } else if (item.type == 'dragon') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dragon-bg.png)";
                } else if (item.type == 'fighting') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fighting-bg.png)";
                } else if (item.type == 'grass') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/grass-bg.png)";
                } else if (item.type == 'metal') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/metal-bg.png)";
                } else if (item.type == 'water') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/water-bg.png)";
                } else {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
                }


                for (let i = 0; i < item.deck.length; i++) {
                    let deck = item.deck[i];

                    let cardSpace = document.createElement('div');
                    cardSpace.classList.add('pokemon-card');

                    let pokeCard = document.createElement('img');
                    pokeCard.classList.add('pok-card-small')
                    pokeCard.setAttribute('src', deck.cardImg);

                    if (deck.oldCard === true) {
                        pokeCard.classList.add('old-card')
                    }
                    if (deck.oldCard === true) {
                        pokeCard.classList.add('radius-card')
                    }
                    if (deck.exCard === true) {
                        pokeCard.classList.add('ex-era-card')
                    }
                    if (deck.radiusCard === true) {
                        pokeCard.classList.add('radius-card')
                    }

                    let numberCounter = document.createElement('img');
                    numberCounter.classList.add('num-1')
                    numberCounter.setAttribute('src', deck.numImg);

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
                }
                document.querySelectorAll('.pokemon-card').forEach(card => {
                    let meep = document.getElementsByClassName("pok-card-small"),
                    zoombox = document.getElementById("zoom-card-box");
                   
                    if (meep.length > 0) { for (let i of meep) {
                      i.onclick = () => {
                        let clone = i.cloneNode();
                        clone.className = "";
                        zoombox.innerHTML = "";
                        zoombox.appendChild(clone);
                        zoombox.className = "show";
                      };
                    }}
                   
                    zoombox.onclick = () => {
                      zoombox.className = "";
                    };
                  });
            })
        }

        sevenList.appendChild(item_element);
    }
}

// eight
function displayList8(array = []) {
    eightList.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        let item = array[i];

        let item_element = document.createElement('li');
        item_element.classList.add('player-list-hover');
        let title = document.createElement('li');
        title.classList.add('results-list-item');

        let playerName = document.createElement('div');
        playerName.classList.add('name-n-flag');

        let deck = document.createElement('div');
        deck.classList.add('player-deck-icons');

        let firstSprite = document.createElement('img');
        firstSprite.classList.add('sprite');
        firstSprite.setAttribute('src', item.sprite1);
        let secondSprite = document.createElement('img');
        secondSprite.classList.add('sprite');
        secondSprite.classList.add('second-sprite');
        secondSprite.setAttribute('src', item.sprite2);
        let listIcon = document.createElement('img');
        listIcon.classList.add('list-icon');
        listIcon.setAttribute('src', item.list);

        item_element.appendChild(title);
        title.appendChild(playerName);
        playerName.append(item.firstName);
        title.appendChild(deck);
        deck.appendChild(firstSprite);
        deck.appendChild(secondSprite);
        deck.appendChild(listIcon);

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 Denmark Nats";

                if (item.type == 'psychic') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/psychic-bg.png)";
                } else if (item.type == 'fire') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fire-bg.png)";
                } else if (item.type == 'fairy') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fairy-bg.png)";
                } else if (item.type == 'normal') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/normal-bg.png)";
                } else if (item.type == 'lightning') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/lightning-bg.png)";
                } else if (item.type == 'dark') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
                } else if (item.type == 'dragon') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dragon-bg.png)";
                } else if (item.type == 'fighting') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fighting-bg.png)";
                } else if (item.type == 'grass') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/grass-bg.png)";
                } else if (item.type == 'metal') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/metal-bg.png)";
                } else if (item.type == 'water') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/water-bg.png)";
                } else {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
                }


                for (let i = 0; i < item.deck.length; i++) {
                    let deck = item.deck[i];

                    let cardSpace = document.createElement('div');
                    cardSpace.classList.add('pokemon-card');

                    let pokeCard = document.createElement('img');
                    pokeCard.classList.add('pok-card-small')
                    pokeCard.setAttribute('src', deck.cardImg);

                    if (deck.oldCard === true) {
                        pokeCard.classList.add('old-card')
                    }
                    if (deck.oldCard === true) {
                        pokeCard.classList.add('radius-card')
                    }
                    if (deck.exCard === true) {
                        pokeCard.classList.add('ex-era-card')
                    }
                    if (deck.radiusCard === true) {
                        pokeCard.classList.add('radius-card')
                    }

                    let numberCounter = document.createElement('img');
                    numberCounter.classList.add('num-1')
                    numberCounter.setAttribute('src', deck.numImg);

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
                }
                document.querySelectorAll('.pokemon-card').forEach(card => {
                    let meep = document.getElementsByClassName("pok-card-small"),
                    zoombox = document.getElementById("zoom-card-box");
                   
                    if (meep.length > 0) { for (let i of meep) {
                      i.onclick = () => {
                        let clone = i.cloneNode();
                        clone.className = "";
                        zoombox.innerHTML = "";
                        zoombox.appendChild(clone);
                        zoombox.className = "show";
                      };
                    }}
                   
                    zoombox.onclick = () => {
                      zoombox.className = "";
                    };
                  });
            })
        }

        eightList.appendChild(item_element);
    }
}

// nine
function displayList9(array = []) {
    nineList.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        let item = array[i];

        let item_element = document.createElement('li');
        item_element.classList.add('player-list-hover');
        let title = document.createElement('li');
        title.classList.add('results-list-item');

        let playerName = document.createElement('div');
        playerName.classList.add('name-n-flag');

        let deck = document.createElement('div');
        deck.classList.add('player-deck-icons');

        let firstSprite = document.createElement('img');
        firstSprite.classList.add('sprite');
        firstSprite.setAttribute('src', item.sprite1);
        let secondSprite = document.createElement('img');
        secondSprite.classList.add('sprite');
        secondSprite.classList.add('second-sprite');
        secondSprite.setAttribute('src', item.sprite2);
        let listIcon = document.createElement('img');
        listIcon.classList.add('list-icon');
        listIcon.setAttribute('src', item.list);

        item_element.appendChild(title);
        title.appendChild(playerName);
        playerName.append(item.firstName);
        title.appendChild(deck);
        deck.appendChild(firstSprite);
        deck.appendChild(secondSprite);
        deck.appendChild(listIcon);

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 Brazil Nats";

                if (item.type == 'psychic') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/psychic-bg.png)";
                } else if (item.type == 'fire') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fire-bg.png)";
                } else if (item.type == 'fairy') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fairy-bg.png)";
                } else if (item.type == 'normal') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/normal-bg.png)";
                } else if (item.type == 'lightning') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/lightning-bg.png)";
                } else if (item.type == 'dark') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
                } else if (item.type == 'dragon') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dragon-bg.png)";
                } else if (item.type == 'fighting') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fighting-bg.png)";
                } else if (item.type == 'grass') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/grass-bg.png)";
                } else if (item.type == 'metal') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/metal-bg.png)";
                } else if (item.type == 'water') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/water-bg.png)";
                } else {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
                }


                for (let i = 0; i < item.deck.length; i++) {
                    let deck = item.deck[i];

                    let cardSpace = document.createElement('div');
                    cardSpace.classList.add('pokemon-card');

                    let pokeCard = document.createElement('img');
                    pokeCard.classList.add('pok-card-small')
                    pokeCard.setAttribute('src', deck.cardImg);

                    if (deck.oldCard === true) {
                        pokeCard.classList.add('old-card')
                    }
                    if (deck.oldCard === true) {
                        pokeCard.classList.add('radius-card')
                    }
                    if (deck.exCard === true) {
                        pokeCard.classList.add('ex-era-card')
                    }
                    if (deck.radiusCard === true) {
                        pokeCard.classList.add('radius-card')
                    }

                    let numberCounter = document.createElement('img');
                    numberCounter.classList.add('num-1')
                    numberCounter.setAttribute('src', deck.numImg);

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
                }
                document.querySelectorAll('.pokemon-card').forEach(card => {
                    let meep = document.getElementsByClassName("pok-card-small"),
                    zoombox = document.getElementById("zoom-card-box");
                   
                    if (meep.length > 0) { for (let i of meep) {
                      i.onclick = () => {
                        let clone = i.cloneNode();
                        clone.className = "";
                        zoombox.innerHTML = "";
                        zoombox.appendChild(clone);
                        zoombox.className = "show";
                      };
                    }}
                   
                    zoombox.onclick = () => {
                      zoombox.className = "";
                    };
                  });
            })
        }

        nineList.appendChild(item_element);
    }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
displayList2(seniors);
displayList3(juniors);
displayList4(fourEvent);
displayList5(fiveEvent);
displayList6(sixEvent);
displayList7(sevenEvent);
displayList8(eightEvent);
displayList9(nineEvent);