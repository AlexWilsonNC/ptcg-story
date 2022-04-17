const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Shintaro Ito',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/audino-mega.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Cody Walinski',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/greninja.png',
    sprite2: '../../../assets/sprites/talonflame.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Samuel Hough',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/vileplume.png',
    sprite2: '../../../assets/sprites/jolteon.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Ross Cawthon',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/vespiquen.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Bert Wolters',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/greninja.png',
    sprite2: '../../../assets/sprites/talonflame.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Brad Curcio',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Luca Schuster',
    flag: '../../../assets/flags/austria.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/vespiquen.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Gustavo Wada',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/aegislash.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Freya Pearce',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Kojiro Tsuruta',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/volcanion.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Kazuki Kasahara',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/volcanion.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Brandon Flowers',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/vespiquen.png',
    sprite2: '../../../assets/sprites/vileplume.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Hiroki Yano',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/greninja.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Yee Wei Chun',
    flag: '../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Eric Gansman',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Jacob Lesage',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/aegislash.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Kian Amini',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Brit Pybas',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manaphy.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Frank Diaz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manaphy.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Simone Zucchelli',
    flag: '../../../assets/flags/italy.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/genesect.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'TJ Traquair',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Shin Akiyama',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/audino-mega.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Patrick Landis',
    flag: '../../../assets/flags/switzerland.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Ciaran Farah',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/vespiquen.png',
    sprite2: '../../../assets/sprites/vileplume.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Michael Pramawat',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Jit Min Lim',
    flag: '../../../assets/flags/singapore.png',
    sprite1: '../../../assets/sprites/vespiquen.png',
    sprite2: '../../../assets/sprites/excadrill.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Gawein Wagner',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/aegislash.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Takuya Yoneda',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Se Jun Park',
    flag: '../../../assets/flags/korea.png',
    sprite1: '../../../assets/sprites/carbink.png',
    sprite2: '../../../assets/sprites/vileplume.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Paul Johnston',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manaphy.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Ryo Yamamotot',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Fabien Pujol',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/sceptile-mega.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  }
]

let seniors = [
  {
    firstName: 'Jesper Eriksen',
    flag: '../../../assets/flags/denmark.png',
    sprite1: '../../../assets/sprites/yanmega.png',
    sprite2: '../../../assets/sprites/vespiquen.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Connor Pedersen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/crobat.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Raphael Souto',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/trevenant.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Calvin Conno',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/vespiquen.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Attar Ricco',
    flag: '../../../assets/flags/indonesia.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Spencer Perez-Dormitzer',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/manectric-mega.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Tanner Hurley',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/greninja.png',
    sprite2: '../../../assets/sprites/talonflame.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Kim Hyeok',
    flag: '../../../assets/flags/korea.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  }
]

let juniors = [
  {
    firstName: 'Shunto Sadahiro',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/darkrai.png',
    sprite2: '../../../assets/sprites/giratina-origin.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Riku Ushirosaka',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/trevenant.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Roan Godfrey-Robbins',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/trevenant.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Yuta Ozawa',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/darkrai.png',
    sprite2: '../../../assets/sprites/giratina-origin.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Kai Abe',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/darkrai.png',
    sprite2: '../../../assets/sprites/giratina-origin.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Enrico Marini',
    flag: '../../../assets/flags/italy.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/aegislash.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Asaki Hasegawa',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/darkrai.png',
    sprite2: '../../../assets/sprites/giratina-origin.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Christian Moreno',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: []
  }
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
    if (item.banned === true) {
      playerName.classList.add('crossed-out');
    }

    let flagImg = document.createElement('img');
    flagImg.classList.add('flag-size');
    flagImg.setAttribute('src', item.flag);
    
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
    playerName.appendChild(flagImg);
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
        document.querySelector('.playerName').innerHTML = item.firstName;

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

    let flagImg = document.createElement('img');
    flagImg.classList.add('flag-size');
    flagImg.setAttribute('src', item.flag);
    
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
    playerName.appendChild(flagImg);
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
        document.querySelector('.playerName').innerHTML = item.firstName;

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

    let flagImg = document.createElement('img');
    flagImg.classList.add('flag-size');
    flagImg.setAttribute('src', item.flag);
    
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
    playerName.appendChild(flagImg);
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
        document.querySelector('.playerName').innerHTML = item.firstName;

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
