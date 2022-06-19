const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Jeremy Maron',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/nidoqueen.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ross Cawthon',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/tyranitar.png',
    sprite2: '../../../assets/sprites/electrode.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Pablo Meza',
    flag: '../../../assets/flags/mexico.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/nidoqueen.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ken Yukuhiro',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/tyranitar.png',
    sprite2: '../../../assets/sprites/magcargo.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jaime Guerrero',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/tyranitar.png',
    sprite2: '../../../assets/sprites/ampharos.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sami Sekkoum',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/medicham.png',
    sprite2: '../../../assets/sprites/ninetales.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Eric Permenter',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/steelix.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tsuguyoshi Yamato',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/ludicolo.png',
    sprite2: '../../../assets/sprites/magcargo.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Yuki Fujimori',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/rayquaza.png',
    list: '../../../assets/list-icon.png',
    type: '',
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
    sprite2: '../../../assets/sprites/medicham.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Chris Schell',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blaziken.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jordan Hill',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/ludicolo.png',
    sprite2: '../../../assets/sprites/magcargo.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Adam Vernola',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/tyranitar.png',
    sprite2: '../../../assets/sprites/ampharos.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ashley Bennett',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/steelix.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Adam Maldonado',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/steelix.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Faisal Khan',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/ludicolo.png',
    sprite2: '../../../assets/sprites/magcargo.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Go Miyamoto',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/rayquaza.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'William Hung',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/sharpedo.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Yohei Takeda',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/electrode.png',
    sprite2: '../../../assets/sprites/delcatty.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Bin Xiu',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/tyranitar.png',
    sprite2: '../../../assets/sprites/ampharos.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Anna Schipper',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/ludicolo.png',
    sprite2: '../../../assets/sprites/grumpig.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Patrick Kennedy',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/moltres.png',
    sprite2: '../../../assets/sprites/zapdos.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Shigeru Kanda',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/ludicolo.png',
    sprite2: '../../../assets/sprites/magcargo.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Matthew Yuen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/rayquaza.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Martin Moreno',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/medicham.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nicholas Caporelli',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/medicham.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Brent Siebenkittel',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/ludicolo.png',
    sprite2: '../../../assets/sprites/magcargo.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jeroen Robert',
    flag: '../../../assets/flags/belgium.png',
    sprite1: '../../../assets/sprites/slowking.png',
    sprite2: '../../../assets/sprites/magcargo.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Matthew Moss',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/medicham.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Steve Perucca',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/rayquaza.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Hideki Sano',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/machamp.png',
    sprite2: '../../../assets/sprites/pidgeot.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Gregory Cresswell',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/sharpedo.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  }
]

let seniors = [
  {
    firstName: 'Stuart Benson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/medicham.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Takashi Yoneda',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/tyranitar.png',
    sprite2: '../../../assets/sprites/pidgeot.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Daniel Richard',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/ludicolo.png',
    sprite2: '../../../assets/sprites/magcargo.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Andrew Knaack',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/rayquaza.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Steve Davis',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blastoise.png',
    sprite2: '../../../assets/sprites/deoxys.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Keaton Gill',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Bobby Malec',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/steelix.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
    {
      firstName: 'Jeffrey Vernola',
      flag: '../../../assets/flags/usa.png',
      sprite1: '../../../assets/sprites/tyranitar.png',
      sprite2: '../../../assets/sprites/ampharos.png',
      list: '../../../assets/list-icon.png',
      type: '',
      deck: [
        {
          cardImg: '../../../assets/cards/2004-2006',
          numImg: '../../../assets/04.png'
        },
      ]
    },
    {
      firstName: 'Paris Garavaglia',
      flag: '../../../assets/flags/usa.png',
      sprite1: '../../../assets/sprites/blastoise.png',
      sprite2: '../../../assets/sprites/deoxys.png',
      list: '../../../assets/list-icon.png',
      type: '',
      deck: [
        {
          cardImg: '../../../assets/cards/2004-2006',
          numImg: '../../../assets/04.png'
        },
      ]
    },
    {
      firstName: 'Daniel Mermelstein',
      flag: '../../../assets/flags/usa.png',
      sprite1: '../../../assets/sprites/blank.png',
      sprite2: '../../../assets/hyphen.png',
      list: '../../../assets/sprites/blank.png',
      type: '',
      deck: [
        {
          cardImg: '../../../assets/cards/2004-2006',
          numImg: '../../../assets/04.png'
        },
      ]
    },
    {
      firstName: 'Miranda Craig',
      flag: '../../../assets/flags/usa.png',
      sprite1: '../../../assets/sprites/blank.png',
      sprite2: '../../../assets/sprites/steelix.png',
      list: '../../../assets/list-icon.png',
      type: '',
      deck: [
        {
          cardImg: '../../../assets/cards/2004-2006',
          numImg: '../../../assets/04.png'
        },
      ]
    },
    {
      firstName: 'Joe Getsy',
      sprite1: '../../../assets/sprites/blank.png',
      sprite2: '../../../assets/hyphen.png',
      list: '../../../assets/sprites/blank.png',
      type: '',
      deck: [
        {
          cardImg: '../../../assets/cards/2004-2006',
          numImg: '../../../assets/04.png'
        },
      ]
    },
    {
      firstName: 'Nicholas Hatchel',
      flag: '../../../assets/flags/usa.png',
      sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
      type: '',
      deck: [
        {
          cardImg: '../../../assets/cards/2004-2006',
          numImg: '../../../assets/04.png'
        },
      ]
    },
    {
      firstName: 'Joel Anderson',
      flag: '../../../assets/flags/usa.png',
      sprite1: '../../../assets/sprites/swampert.png',
      sprite2: '../../../assets/sprites/articuno.png',
      list: '../../../assets/list-icon.png',
      type: '',
      deck: [
        {
          cardImg: '../../../assets/cards/2004-2006',
          numImg: '../../../assets/04.png'
        },
      ]
    },
    {
      firstName: 'Zachary Krekeler',
      flag: '../../../assets/flags/usa.png',
      sprite1: '../../../assets/sprites/tyranitar.png',
      sprite2: '../../../assets/sprites/ampharos.png',
      list: '../../../assets/list-icon.png',
      type: '',
      deck: [
        {
          cardImg: '../../../assets/cards/2004-2006',
          numImg: '../../../assets/04.png'
        },
      ]
    },
    {
      firstName: 'Kevin Bennett',
      flag: '../../../assets/flags/usa.png',
      sprite1: '../../../assets/sprites/blank.png',
      sprite2: '../../../assets/sprites/vileplume.png',
      list: '../../../assets/list-icon.png',
      type: '',
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
    firstName: 'Curran Hill',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/medicham.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Geoffrey Sauk',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/electrike.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Michael Gonzalez',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/ludicolo.png',
    sprite2: '../../../assets/sprites/magcargo.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jefre Robert',
    flag: '../../../assets/flags/belgium.png',
    sprite1: '../../../assets/sprites/dragonite.png',
    sprite2: '../../../assets/sprites/electrode.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Andy Cheung',
    flag: '../../../assets/flags/norway.png',
     sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'James Ballard',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/tyranitar.png',
    sprite2: '../../../assets/sprites/ampharos.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jon Siu',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Pablo Kingsley',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
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
