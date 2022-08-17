const masterList = document.querySelector('.masters-ol');

const modalBottom = document.querySelector('.modal-bottom');
// https://www.pokemon.com/us/play-pokemon/pokemon-players-cup-25th-anniversary-invitational/tcg-results/
let masters = [
  {
    firstName: 'Alex Schemanske',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/urshifu-rapid-strike-gmax.png',
    sprite2: '../../../../assets/sprites/inteleon.png',
    list: '../../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../../assets/cards/2021-2022',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Azul Griego',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/calyrex-shadow-rider.png',
    sprite2: '../../../../assets/sprites/alcremie-vmax.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2021-2022',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Natalie Millar',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/urshifu-rapid-strike-gmax.png',
    sprite2: '../../../../assets/sprites/moltres-galar.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2021-2022',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Diego Cassiraga',
    flag: '../../../../assets/flags/argentina.png',
    sprite1: '../../../../assets/sprites/calyrex-shadow-rider.png',
    sprite2: '../../../../assets/sprites/alcremie-vmax.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2021-2022',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Henry Brand',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/calyrex-ice-rider.png',
    sprite2: '../../../../assets/sprites/inteleon.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2021-2022',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Zach Lesage',
    flag: '../../../../assets/flags/canada.png',
    sprite1: '../../../../assets/sprites/calyrex-ice-rider.png',
    sprite2: '../../../../assets/sprites/inteleon.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2021-2022',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Gustavo Wada',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/victini.png',
    sprite2: '../../../../assets/sprites/moltres-galar.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2021-2022',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Robin Schulz',
    flag: '../../../../assets/flags/germany.png',
    sprite1: '../../../../assets/sprites/mewtwo-mew-tagteam.png',
    sprite2: '../../../../assets/sprites/weavile.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2021-2022',
        numImg: '../../../../assets/04.png'
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

    if (item.list === '../../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.playerName').innerHTML = item.firstName;

        if (item.type == 'psychic') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/psychic-bg.png)";
        } else if (item.type == 'fire') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fire-bg.png)";
        } else if (item.type == 'fairy') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fairy-bg.png)";
        } else if (item.type == 'normal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/normal-bg.png)";
        } else if (item.type == '') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/-bg.png)";
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
          console.log('here')
          card.addEventListener('click', () => {
              card.querySelector('.pok-card-small').classList.add('large-card');
              document.querySelector('.second-behind-modal').style.display = 'block';
              if (card.querySelector('.pok-card-small').classList.contains('large-card')) {
                document.querySelector('.second-behind-modal').addEventListener('click', () => {
                      card.querySelector('.pok-card-small').classList.remove('large-card');
                      document.querySelector('.second-behind-modal').style.display = 'none';
                  })
              }
          })
        });
      })
    }

    masterList.appendChild(item_element);
  }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
