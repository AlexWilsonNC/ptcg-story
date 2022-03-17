const pokemonCard = fetch('https://api.pokemontcg.io/v2/cards/xy1-1')
  .then(response => response.json())
  .then(data => console.log(data));
 

const list = document.querySelector('.masters-ol');

let masters = [
  {
    firstName: 'Henry Brand',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/mew.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Shintaro Ito',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Blaine Hill',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/charizard.png',
    sprite2: '../../../assets/sprites/volcanion.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Tord Reklev',
    flag: '../../../assets/flags/norway.png',
    sprite1: '../../../assets/sprites/reshiram.png',
    sprite2: '../../../assets/sprites/charizard.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Kaiwen Cabbabe',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Paco Vilchez Barea',
    flag: '../../../assets/flags/spain.png',
    sprite1: '../../../assets/sprites/charizard.png',
    sprite2: '../../../assets/sprites/volcanion.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Ryota Ishiyama',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/mew.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Isaiah Williams',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/oranguru.png',
    sprite2: '../../../assets/sprites/pidgeotto.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Hideki Sano',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/sylveon.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Karl Peters',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/sylveon.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Bert Wolters',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/mew.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Yoshiyuki Yamaguchi',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/reshiram.png',
    sprite2: '../../../assets/sprites/charizard.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Jonathan Lanciano',
    flag: '../../../assets/flags/argentina.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Shunpei Hosoya',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/sylveon.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Gustavo Wada',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Zakary Krekler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/weavile.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Lucas Pereira',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Charlie Lockyer',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Otavio Gouveia',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/charizard.png',
    sprite2: '../../../assets/sprites/volcanion.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Robin Shulz',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/mew.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Justin Bokhari',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Jose Marrero',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/reshiram.png',
    sprite2: '../../../assets/sprites/charizard.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Daniel Altavilla',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/oranguru.png',
    sprite2: '../../../assets/sprites/pidgeotto.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Keito Uchida',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma-ultra.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Bryan de Vries',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Dylan Gunn',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/keldeo.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Louis Chi',
    flag: '../../../assets/flags/new-zealand.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Mehdi Hafi',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/reshiram.png',
    sprite2: '../../../assets/sprites/charizard.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Pedro Torres',
    flag: '../../../assets/flags/spain.png',
    sprite1: '../../../assets/sprites/reshiram.png',
    sprite2: '../../../assets/sprites/charizard.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Rahul Reddy',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/charizard.png',
    sprite2: '../../../assets/sprites/volcanion.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Riley Hulbert',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/sylveon.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Dennis Peroff',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/giratina.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Ian Robb',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Christian Hasbani',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/giratina.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Azul Griego',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/oranguru.png',
    sprite2: '../../../assets/sprites/pidgeotto.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Bernardo Dias',
    flag: '../../../assets/flags/portugal.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma-ultra.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Clifton Goh',
    flag: '../../../assets/flags/singapore.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Haedon Jeong',
    flag: '../../../assets/flags/korea.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/volcanion.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Miguel Aml',
    flag: '../../../assets/flags/spain.png',
    sprite1: '../../../assets/sprites/reshiram.png',
    sprite2: '../../../assets/sprites/charizard.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Fabien Pujol',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/reshiram.png',
    sprite2: '../../../assets/sprites/charizard.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Marco Spataro',
    flag: '../../../assets/flags/italy.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/mew.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'name',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png'
  },
]

function displayList(array = []) {
  list.innerHTML = '';

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

    list.appendChild(item_element);
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

// window.onload = 
displayList(masters);
