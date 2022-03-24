const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Henry Brand',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/mew.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019/mewtwo-mew.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/dedenne-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/solgaleo-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/reshiram-charizard-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/deoxys-espeon-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/naganadel-gx-dragon.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/cobalion-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/latios-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/magcargo-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/jirachi-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/marshadow.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/welder.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/steven-resolve.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/cherish-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/acro-bike.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/pokegear.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/custom-catcher.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/mysterious-treasure.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/switch.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/electromagnetic-radar.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/fire-crystal.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/giant-hearth.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/viridian-forest.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/energy-fire.png',
        numImg: '../../../assets/08.png'
      },
      {
        cardImg: '../../../assets/cards/2019/energy-psychic.png',
        numImg: '../../../assets/03.png'
      }
    ]
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
    firstName: 'David Cooper',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Will Jenkins',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Ilya Kornilov',
    flag: '../../../assets/flags/russia.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/sylveon.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Martin Janous',
    flag: '../../../assets/flags/czech-republic.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/spiritomb.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Tatsuya Kobayashi',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/reshiram.png',
    sprite2: '../../../assets/sprites/charizard.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Takuya Yoneda',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/giratina.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Dan Irish',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/persian.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Colin Tang',
    flag: '../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Alex Schemanske',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gengar.png',
    sprite2: '../../../assets/sprites/omastar.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Haruki Satoyama',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/sylveon.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Michele Schiraldi',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/giratina.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Zach Lesage',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/persian.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Tristan Lackey',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Pablo Meza',
    flag: '../../../assets/flags/mexico.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Stephan Ivanoff',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/sylveon.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Jon Eng',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/charizard.png',
    sprite2: '../../../assets/sprites/volcanion.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Koki Kimura',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/mew.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Nicolas Galaz',
    flag: '../../../assets/flags/chile.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Sander Wojcik',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/rowlet.png',
    sprite2: '../../../assets/sprites/exeggutor-alola.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Jack Underwood',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/mew.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Tobias Thesing',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/rampardos.png',
    sprite2: '../../../assets/sprites/omastar.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Jimmy Pendarvis',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/oranguru.png',
    sprite2: '../../../assets/sprites/pidgeotto.png',
    list: '../../../assets/list-icon.png'
  },
  {
    firstName: 'Miloslav Posledni',
    flag: '../../../assets/flags/czech-republic.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png'
  }
]

let seniors = [
    {
      firstName: 'Kaya Lichtleitner',
      flag: '../../../assets/flags/germany.png',
      sprite1: '../../../assets/sprites/reshiram.png',
      sprite2: '../../../assets/sprites/charizard.png',
      list: '../../../assets/list-icon.png'
    },
    {
        firstName: 'Grant Shen',
        flag: '../../../assets/flags/usa.png',
        sprite1: '../../../assets/sprites/gardevoir.png',
        sprite2: '../../../assets/sprites/sylveon.png',
        list: '../../../assets/list-icon.png'
    },
    {
        firstName: 'Rowan Stavenow',
        flag: '../../../assets/flags/uk.png',
        sprite1: '../../../assets/sprites/pikachu.png',
        sprite2: '../../../assets/sprites/zekrom.png',
        list: '../../../assets/list-icon.png'
    },
    {
        firstName: 'Thomas Naylor',
        flag: '../../../assets/flags/uk.png',
        sprite1: '../../../assets/sprites/pikachu.png',
        sprite2: '../../../assets/sprites/zekrom.png',
        list: '../../../assets/list-icon.png'
    },
    {
        firstName: 'Iain Harding',
        flag: '../../../assets/flags/usa.png',
        sprite1: '../../../assets/sprites/charizard.png',
        sprite2: '../../../assets/sprites/volcanion.png',
        list: '../../../assets/list-icon.png'
    },
    {
        firstName: 'YouTae Woo',
        flag: '../../../assets/flags/korea.png',
        sprite1: '../../../assets/sprites/pikachu.png',
        sprite2: '../../../assets/sprites/zekrom.png',
        list: '../../../assets/list-icon.png'
    },
    {
        firstName: 'James Cox',
        flag: '../../../assets/flags/australia.png',
        sprite1: '../../../assets/sprites/mewtwo.png',
        sprite2: '../../../assets/sprites/mew.png',
        list: '../../../assets/list-icon.png'
    },
    {
        firstName: 'Noa Bell',
        flag: '../../../assets/flags/usa.png',
        sprite1: '../../../assets/sprites/charizard.png',
        sprite2: '../../../assets/sprites/volcanion.png',
        list: '../../../assets/list-icon.png'
    }
]

let juniors = [
    {
      firstName: 'Haruki Miyamoto',
      flag: '../../../assets/flags/japan.png',
      sprite1: '../../../assets/sprites/pikachu.png',
      sprite2: '../../../assets/sprites/zekrom.png',
      list: '../../../assets/list-icon.png'
    },
    {
      firstName: 'Issac Terceira',
      flag: '../../../assets/flags/usa.png',
      sprite1: '../../../assets/sprites/charizard.png',
      sprite2: '../../../assets/sprites/volcanion.png',
      list: '../../../assets/list-icon.png'
    },
    {
      firstName: 'Logan Maracle',
      flag: '../../../assets/flags/usa.png',
      sprite1: '../../../assets/sprites/charizard.png',
      sprite2: '../../../assets/sprites/volcanion.png',
      list: '../../../assets/list-icon.png'
    },
    {
      firstName: 'Cassio Moraes',
      flag: '../../../assets/flags/brazil.png',
      sprite1: '../../../assets/sprites/mewtwo.png',
      sprite2: '../../../assets/sprites/mew.png',
      list: '../../../assets/list-icon.png'
    },
    {
      firstName: 'Sechan Oh',
      flag: '../../../assets/flags/korea.png',
      sprite1: '../../../assets/sprites/pikachu.png',
      sprite2: '../../../assets/sprites/zekrom.png',
      list: '../../../assets/list-icon.png'
    },
    {
      firstName: 'Daniel Magda',
      flag: '../../../assets/flags/czech-republic.png',
      sprite1: '../../../assets/sprites/pikachu.png',
      sprite2: '../../../assets/sprites/zekrom.png',
      list: '../../../assets/list-icon.png'
    },
    {
      firstName: 'Mitchell Ransome',
      flag: '../../../assets/flags/usa.png',
      sprite1: '../../../assets/sprites/quagsire.png',
      sprite2: '../../../assets/sprites/naganadel.png',
      list: '../../../assets/list-icon.png'
    },
    {
      firstName: 'Hotaru Yoshinari',
      flag: '../../../assets/flags/japan.png',
      sprite1: '../../../assets/sprites/mewtwo.png',
      sprite2: '../../../assets/sprites/mew.png',
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
