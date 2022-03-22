const pokemonCard = fetch('https://api.pokemontcg.io/v2/cards/swsh1-1')
  .then(response => response.json())
  .then(data => console.log(data));

const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

let masters = [
  {
    firstName: 'Diego Cassiraga',
    flag: '../../../assets/flags/argentina.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Naoto Suzuki',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/golisopod.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Xander Pero',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/espeon.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Sho Sasaki',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/golisopod.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Reiji Nishiguchi',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/garbodor.png',
    sprite2: '../../../assets/sprites/necrozma.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Jimmy Pendarvis',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/espeon.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Pablo Meza',
    flag: '../../../assets/flags/mexico.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Sam Chen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/drampa.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Takuya Yoneda',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/ho-oh.png',
    sprite2: '../../../assets/sprites/salazzle.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/golisopod.png',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png'
  }
]

let seniors = [
    {
        firstName: 'Magnus Pederson',
        flag: '../../../assets/flags/denmark.png',
        sprite1: '../../../assets/sprites/banette.png',
        sprite2: '../../../assets/sprites/garbodor.png',
        list: '../../../assets/list-icon.png'
    },
    {
        firstName: 'Magnus Pederson',
        flag: '../../../assets/flags/denmark.png',
        sprite1: '../../../assets/sprites/banette.png',
        sprite2: '../../../assets/sprites/garbodor.png',
        list: '../../../assets/list-icon.png'
    },
    {
        firstName: 'Conner Pederson',
        flag: '../../../assets/flags/usa.png',
        sprite1: '../../../assets/sprites/buzzwole.png',
        sprite2: '../../../assets/sprites/garbodor.png',
        list: '../../../assets/list-icon.png'
    },{
        firstName: 'Takumi Kaji',
        flag: '../../../assets/flags/japan.png',
        sprite1: '../../../assets/sprites/buzzwole.png',
        sprite2: '../../../assets/sprites/lycanroc-midnight.png',
        list: '../../../assets/list-icon.png'
    },
    {
        firstName: 'Matthew Campbell',
        flag: '../../../assets/flags/usa.png',
        sprite1: '../../../assets/sprites/blank.png',
        sprite2: '../../../assets/sprites/greninja.png',
        list: '../../../assets/list-icon.png'
    },
    {
        firstName: 'Benjamin Branch-Trevathan',
        flag: '../../../assets/flags/usa.png',
        sprite1: '../../../assets/sprites/buzzwole.png',
        sprite2: '../../../assets/sprites/lycanroc-midnight.png',
        list: '../../../assets/list-icon.png'
    },
    {
        firstName: 'Caleb Banwarie',
        flag: '../../../assets/flags/canada.png',
        sprite1: '../../../assets/sprites/zoroark.png',
        sprite2: '../../../assets/sprites/garbodor.png',
        list: '../../../assets/list-icon.png'
    },
    {
        firstName: 'Jihun Choi',
        flag: '../../../assets/flags/korea.png',
        sprite1: '../../../assets/sprites/golisopod.png',
        sprite2: '../../../assets/sprites/garbodor.png',
        list: '../../../assets/list-icon.png'
    },
    {
        firstName: 'Tanner Hurley',
        flag: '../../../assets/flags/usa.png',
        sprite1: '../../../assets/sprites/zoroark.png',
        sprite2: '../../../assets/sprites/garbodor.png',
        list: '../../../assets/list-icon.png'
    }
]

let juniors = [
    {
        firstName: 'Naohito Inoue',
        flag: '../../../assets/flags/japan.png',
        sprite1: '../../../assets/sprites/buzzwole.png',
        sprite2: '../../../assets/sprites/lycanroc-midnight.png',
        list: '../../../assets/list-icon.png'
    },
    {
        firstName: 'Sebastian Enriquez',
        flag: '../../../assets/flags/usa.png',
        sprite1: '../../../assets/sprites/buzzwole.png',
        sprite2: '../../../assets/sprites/lycanroc-midnight.png',
        list: '../../../assets/list-icon.png'
    },
    {
        firstName: 'Rune Heiremans',
        flag: '../../../assets/flags/belgium.png',
        sprite1: '../../../assets/sprites/buzzwole.png',
        sprite2: '../../../assets/sprites/lycanroc-midnight.png',
        list: '../../../assets/list-icon.png'
    },
    {
        firstName: 'Walker Halliburton',
        flag: '../../../assets/flags/usa.png',
        sprite1: '../../../assets/sprites/zoroark.png',
        sprite2: '../../../assets/sprites/garbodor.png',
        list: '../../../assets/list-icon.png'
    },
    {
        firstName: 'Kota Onohara',
        flag: '../../../assets/flags/japan.png',
        sprite1: '../../../assets/sprites/naganadel.png',
        sprite2: '../../../assets/sprites/stakataka.png',
        list: '../../../assets/list-icon.png'
    },
    {
        firstName: 'Benjamin Bussert',
        flag: '../../../assets/flags/usa.png',
        sprite1: '../../../assets/sprites/buzzwole.png',
        sprite2: '../../../assets/sprites/garbodor.png',
        list: '../../../assets/list-icon.png'
    },
    {
        firstName: 'Joao Penteado',
        flag: '../../../assets/flags/brazil.png',
        sprite1: '../../../assets/sprites/buzzwole.png',
        sprite2: '../../../assets/sprites/garbodor.png',
        list: '../../../assets/list-icon.png'
    },
    {
        firstName: 'Sechan Oh',
        flag: '../../../assets/flags/korea.png',
        sprite1: '../../../assets/sprites/zoroark.png',
        sprite2: '../../../assets/sprites/garbodor.png',
        list: '../../../assets/list-icon.png'
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
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.playerName').innerHTML = item.firstName;
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
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.playerName').innerHTML = item.firstName;
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
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.playerName').innerHTML = item.firstName;
      })
    }

    juniorList.appendChild(item_element);
  }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

modalX.addEventListener('click', () => {
  modal.style.display = 'none';
  behind.style.display = 'none';
})
behind.addEventListener('click', () => {
  modal.style.display = 'none';
  behind.style.display = 'none';
})

displayList(masters);
displayList2(seniors);
displayList3(juniors);
