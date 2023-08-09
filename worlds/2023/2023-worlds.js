const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'eeee',
    flag: '../../assets/flags',
    sprite1: '../../assets/sprites',
    sprite2: '../../assets/sprites',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../assets/flags',
    sprite1: '../../assets/sprites',
    sprite2: '../../assets/sprites',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../assets/flags',
    sprite1: '../../assets/sprites',
    sprite2: '../../assets/sprites',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../assets/flags',
    sprite1: '../../assets/sprites',
    sprite2: '../../assets/sprites',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../assets/flags',
    sprite1: '../../assets/sprites',
    sprite2: '../../assets/sprites',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../assets/flags',
    sprite1: '../../assets/sprites',
    sprite2: '../../assets/sprites',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../assets/flags',
    sprite1: '../../assets/sprites',
    sprite2: '../../assets/sprites',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../assets/flags',
    sprite1: '../../assets/sprites',
    sprite2: '../../assets/sprites',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'eeee',
    flag: '../../assets/flags',
    sprite1: '../../assets/sprites',
    sprite2: '../../assets/sprites',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../assets/flags',
    sprite1: '../../assets/sprites',
    sprite2: '../../assets/sprites',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../assets/flags',
    sprite1: '../../assets/sprites',
    sprite2: '../../assets/sprites',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../assets/flags',
    sprite1: '../../assets/sprites',
    sprite2: '../../assets/sprites',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../assets/flags',
    sprite1: '../../assets/sprites',
    sprite2: '../../assets/sprites',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../assets/flags',
    sprite1: '../../assets/sprites',
    sprite2: '../../assets/sprites',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../assets/flags',
    sprite1: '../../assets/sprites',
    sprite2: '../../assets/sprites',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../assets/flags',
    sprite1: '../../assets/sprites',
    sprite2: '../../assets/sprites',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'eeee',
    flag: '../../assets/flags',
    sprite1: '../../assets/sprites',
    sprite2: '../../assets/sprites',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../assets/flags',
    sprite1: '../../assets/sprites',
    sprite2: '../../assets/sprites',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../assets/flags',
    sprite1: '../../assets/sprites',
    sprite2: '../../assets/sprites',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../assets/flags',
    sprite1: '../../assets/sprites',
    sprite2: '../../assets/sprites',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../assets/flags',
    sprite1: '../../assets/sprites',
    sprite2: '../../assets/sprites',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../assets/flags',
    sprite1: '../../assets/sprites',
    sprite2: '../../assets/sprites',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../assets/flags',
    sprite1: '../../assets/sprites',
    sprite2: '../../assets/sprites',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../assets/flags',
    sprite1: '../../assets/sprites',
    sprite2: '../../assets/sprites',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
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

    // let zoomBox = document.createElement('div');
    // zoomBox.classList.add('zoom-card-box');
    // console.log(zoomBox)

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

    const enableDarkMode = () => {
      title.classList.add('darkon');
      item_element.classList.add('darkon');
      if (item.list === '../../assets/list-icon.png') {
        listIcon.setAttribute('src', '../../assets/list-icon-white.png');
      }
      localStorage.setItem('darkMode', 'enabled');
    };
    const disableDarkMode = () => {
      title.classList.remove('darkon');
      item_element.classList.remove('darkon');
      listIcon.setAttribute('src', item.list);
      localStorage.setItem('darkMode', null);
    };
    if(darkMode === 'enabled') {
      enableDarkMode();
    };
    toggle.addEventListener('click', () => {
      darkMode = localStorage.getItem('darkMode');
      if (darkMode !== 'enabled') {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    });
    
    item_element.appendChild(title);
    title.appendChild(playerName);
    playerName.appendChild(flagImg);
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
                document.querySelector('.playerName').innerHTML = item.firstName + " " + " - 2022 Worlds";
                // document.querySelector('.playerName').innerHTML = item.firstName + " " + "(" + item.record + ")" + " - 2022 Worlds";
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

    const enableDarkMode = () => {
      title.classList.add('darkon');
      item_element.classList.add('darkon');
      if (item.list === '../../assets/list-icon.png') {
        listIcon.setAttribute('src', '../../assets/list-icon-white.png');
      }
      localStorage.setItem('darkMode', 'enabled');
    };
    const disableDarkMode = () => {
      title.classList.remove('darkon');
      item_element.classList.remove('darkon');
      listIcon.setAttribute('src', item.list);
      localStorage.setItem('darkMode', null);
    };
    if(darkMode === 'enabled') {
      enableDarkMode();
    };
    toggle.addEventListener('click', () => {
      darkMode = localStorage.getItem('darkMode');
      if (darkMode !== 'enabled') {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    });
    
    item_element.appendChild(title);
    title.appendChild(playerName);
    playerName.appendChild(flagImg);
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
                document.querySelector('.playerName').innerHTML = item.firstName + " " + " - 2022 Worlds";
                // document.querySelector('.playerName').innerHTML = item.firstName + " " + "(" + item.record + ")" + " - 2022 Worlds";

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

    const enableDarkMode = () => {
      title.classList.add('darkon');
      item_element.classList.add('darkon');
      if (item.list === '../../assets/list-icon.png') {
        listIcon.setAttribute('src', '../../assets/list-icon-white.png');
      }
      localStorage.setItem('darkMode', 'enabled');
    };
    const disableDarkMode = () => {
      title.classList.remove('darkon');
      item_element.classList.remove('darkon');
      listIcon.setAttribute('src', item.list);
      localStorage.setItem('darkMode', null);
    };
    if(darkMode === 'enabled') {
      enableDarkMode();
    };
    toggle.addEventListener('click', () => {
      darkMode = localStorage.getItem('darkMode');
      if (darkMode !== 'enabled') {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    });
    
    item_element.appendChild(title);
    title.appendChild(playerName);
    playerName.appendChild(flagImg);
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " " + " - 2022 Worlds";
                    // document.querySelector('.playerName').innerHTML = item.firstName + " " + "(" + item.record + ")" + " - 2022 Worlds";

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
