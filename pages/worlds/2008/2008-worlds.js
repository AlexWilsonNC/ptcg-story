const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Jason Klaczynski',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Khan Le',
    flag: '../../../assets/flags/norway.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blissey.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Gino Lombardi',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: "Jimmy O’Brien",
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Yacine Sekkoum',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Takae Suzuki',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/banette.png',
    sprite2: '../../../assets/sprites/blissey.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Frank Diaz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Esa Juntunen',
    flag: '../../../assets/flags/finland.png',
    sprite1: '../../../assets/sprites/glaceon.png',
    sprite2: '../../../assets/sprites/absol.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Matthew Koo',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sami Sekkoum',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Agustin Pugliese',
    flag: '../../../assets/flags/argentina.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tom Dolezal',
    flag: '../../../assets/flags/us',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'David Atanassov',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blissey.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kyle Sabelhaus',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Morten Gundesen',
    flag: '../../../assets/flags/denmark.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/omastar.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'John Silvestro',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'nameeeeeeeeeeeee',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'nameeeeeeeeeeeee',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'nameeeeeeeeeeeee',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'nameeeeeeeeeeeee',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'nameeeeeeeeeeeee',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'nameeeeeeeeeeeee',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'nameeeeeeeeeeeee',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'nameeeeeeeeeeeee',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'nameeeeeeeeeeeee',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'nameeeeeeeeeeeee',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'nameeeeeeeeeeeee',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'nameeeeeeeeeeeee',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'nameeeeeeeeeeeee',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'nameeeeeeeeeeeee',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'nameeeeeeeeeeeee',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'nameeeeeeeeeeeee',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'nameeeeeeeeeeeee',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'nameeeeeeeeeeeee',
    flag: '../../../assets/flags',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
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

              // cardSpace.forEach(card => {
              //   card.addEventListener('click', () => {
              //     pokeCard.classList.add('large-card')
              //   })
              // })

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

          // pokeCard.onclick = function() {
          //   document.querySelector('.pok-card-small').style.width = '500px';
          // }

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
