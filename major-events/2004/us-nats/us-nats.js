const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Jacy Sturkie',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/gardevoir-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/gardevoir.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/kirlia.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ralts.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/wobbuffet-safegaurd.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ss.054.wynaut.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ss.060.dunsparce.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/copycat-e-reader.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/hl.092.stevens_advice.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/tv-reporter-e-reader.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/prof-oaks-research-old.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rare-candy-e-reader.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/pokemon-reversal-e-reader.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/switch-e-reader.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/warp-point.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/em.080.oran_berry.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magnetic-storm.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/psychic-energy.jpg',
        numImg: '../../../assets/14.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/boost-energy.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Kyle Sucevich',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/walrein.png',
    sprite2: '../../../assets/sprites/milotic.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/walrein.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/sealeo.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/spheal.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/milotic.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/feebas-ascension.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ss.060.dunsparce.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/oracle.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/hl.092.stevens_advice.png',
        numImg: '../../../assets/04.png',
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dr.088.tv_reporter.jpg',
        numImg: '../../../assets/04.png',
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/copycat-e-reader.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dr.087.mr_brineys_compassion.jpg',
        numImg: '../../../assets/01.png',
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/town-volunteers.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/warp-point.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/crystal-shard.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/hl.088.desert_ruins.jpg',
        numImg: '../../../assets/03.png',
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/water-energy.jpg',
        numImg: '../../../assets/15.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/old-energy/double-rainbow-old.png',
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'AJ DeLoye',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/swampert.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Dan Saunders',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ben Wood',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'John Wetz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blaziken.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Chris ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blaziken.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jason Klaczynski',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blaziken.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Steve Davis',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blaziken.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jason Chen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blaziken.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/blaziken.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/blaziken-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/combusken.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/combusken-flare.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/torchic.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/torchic-e-reader.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/nintendo_black_star_promos.017.torchic.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/delcatty.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/skitty.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ma.004.team_aquas_manectric.jpg',
        numImg: '../../../assets/02.png',
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/aquas-electrike.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magneton.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magnemite.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ss.060.dunsparce.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rayquaza-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/oracle.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/tv-reporter-e-reader.png',
        numImg: '../../../assets/04.png',
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/hl.092.stevens_advice.png',
        numImg: '../../../assets/02.png',
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/copycat-e-reader.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/elm-training-method.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rare-candy-e-reader.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/friend-ball.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/warp-point.png',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/hl.085.ancient_technical_machine_rock.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/fire-energy.jpg',
        numImg: '../../../assets/11.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/lightning-energy.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/old-energy/multi-energy-e-reader.png',
        numImg: '../../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Robert Rinner',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blaziken.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: '--',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/kingdra.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Kevin White',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blaziken.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Andrew Krekeler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Donovan R',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: '--',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
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

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2004 US Nats";

        if (item.type == 'psychic') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/psychic-bg.png)";
        } else if (item.type == 'fire') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fire-bg.png)";
        } else if (item.type == 'fairy') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fairy-bg.png)";
        } else if (item.type == 'normal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/normal-bg.png)";
        } else if (item.type == 'lightning') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/lightning-bg.png)";
        } else if (item.type == 'dark') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dark-bg.png)";
        } else if (item.type == 'dragon') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dragon-bg.png)";
        } else if (item.type == 'fighting') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fighting-bg.png)";
        } else if (item.type == 'grass') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/grass-bg.png)";
        } else if (item.type == 'metal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/metal-bg.png)";
        } else if (item.type == 'water') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/water-bg.png)";
        } else {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dark-bg.png)";
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

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2004 US Nats";

        if (item.type == 'psychic') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/psychic-bg.png)";
        } else if (item.type == 'fire') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fire-bg.png)";
        } else if (item.type == 'fairy') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fairy-bg.png)";
        } else if (item.type == 'normal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/normal-bg.png)";
        } else if (item.type == 'lightning') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/lightning-bg.png)";
        } else if (item.type == 'dark') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dark-bg.png)";
        } else if (item.type == 'dragon') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dragon-bg.png)";
        } else if (item.type == 'fighting') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fighting-bg.png)";
        } else if (item.type == 'grass') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/grass-bg.png)";
        } else if (item.type == 'metal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/metal-bg.png)";
        } else if (item.type == 'water') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/water-bg.png)";
        } else {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dark-bg.png)";
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

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2004 US Nats";

        if (item.type == 'psychic') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/psychic-bg.png)";
        } else if (item.type == 'fire') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fire-bg.png)";
        } else if (item.type == 'fairy') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fairy-bg.png)";
        } else if (item.type == 'normal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/normal-bg.png)";
        } else if (item.type == 'lightning') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/lightning-bg.png)";
        } else if (item.type == 'dark') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dark-bg.png)";
        } else if (item.type == 'dragon') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dragon-bg.png)";
        } else if (item.type == 'fighting') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fighting-bg.png)";
        } else if (item.type == 'grass') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/grass-bg.png)";
        } else if (item.type == 'metal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/metal-bg.png)";
        } else if (item.type == 'water') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/water-bg.png)";
        } else {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dark-bg.png)";
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

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
displayList2(seniors);
displayList3(juniors);
