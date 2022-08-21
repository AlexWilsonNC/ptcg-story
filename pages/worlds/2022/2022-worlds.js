const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Ondřej Škubal',
    flag: '../../../assets/flags/czech-republic.png',
    record: '9-0-2',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/pikachu-gmax.png',  
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Daichi Shimada',
    flag: '../../../assets/flags/japan.png',
    record: '9-1-1',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/pikachu-gmax.png',  
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ryota Ishiyama',
    flag: '../../../assets/flags/japan.png',
    record: '8-2-0',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/pikachu-gmax.png',  
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'James Cox',
    flag: '../../../assets/flags/australia.png',
    record: '7-2-1',
    sprite1: '../../../assets/sprites/palkia-origin.png',
    sprite2: '../../../assets/sprites/inteleon.png',  
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Andrew Estrada',
    flag: '../../../assets/flags/canada.png',
    record: '6-2-1',
    sprite1: '../../../assets/sprites/palkia-origin.png',
    sprite2: '../../../assets/sprites/inteleon.png',  
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'André Chiasson',
    flag: '../../../assets/flags/canada.png',
    record: '6-2-1',
    sprite1: '../../../assets/sprites/mew-vmax.png',
    sprite2: '../../../assets/sprites/genesect.png',  
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kaiwen Cabbabe',
    flag: '../../../assets/flags/australia.png',
    record: '6-2-1',
    sprite1: '../../../assets/sprites/palkia-origin.png',
    sprite2: '../../../assets/sprites/inteleon.png',  
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Otavio Gouveia',
    flag: '../../../assets/flags/brazil.png',
    record: '6-2-1',
    sprite1: '../../../assets/sprites/palkia-origin.png',
    sprite2: '../../../assets/sprites/inteleon.png',  
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Calvin Connor',
    flag: '../../../assets/flags/usa.png',
    record: '6-2-1',
    sprite1: '../../../assets/sprites/palkia-origin.png',
    sprite2: '../../../assets/sprites/inteleon.png',  
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Toyoaki Fujita',
    flag: '../../../assets/flags/japan.png',
    record: '6-2-0',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blank.png',  
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Grant Manley',
    flag: '../../../assets/flags/usa.png',
    record: '6-2-0',
    sprite1: '../../../assets/sprites/palkia-origin.png',
    sprite2: '../../../assets/sprites/calyrex-ice-rider.png',  
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Lucas Calzà',
    flag: '../../../assets/flags/italy.png',
    record: '6-2-0',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blank.png',  
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Adam Hawkins',
    flag: '../../../assets/flags/uk.png',
    record: '6-2-0',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/aggron-vmax.png',  
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Miloslav Posledni',
    flag: '../../../assets/flags/czech-republic.png',
    record: '5-1-2',
    sprite1: '../../../assets/sprites/palkia-origin.png',
    sprite2: '../../../assets/sprites/jolteon.png',  
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ross Cawthon',
    flag: '../../../assets/flags/usa.png',
    record: '5-1-2',
    sprite1: '../../../assets/sprites/charizard-shiny.png',
    sprite2: '../../../assets/sprites/inteleon.png',  
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Isaiah Bradner',
    flag: '../../../assets/flags/usa.png',
    record: '5-1-2',
    sprite1: '../../../assets/sprites/palkia-origin.png',
    sprite2: '../../../assets/sprites/inteleon.png',  
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Pablo Meza',
    flag: '../../../assets/flags/mexico.png',
    record: '5-1-2',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/regigigas.png',  
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Cristian Sarnataro',
    flag: '../../../assets/flags/italy.png',
    record: '5-1-2',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Haru Nishikawa',
    flag: '../../../assets/flags/japan-usa.png',
    record: '5-2-1',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Asaki Hasegawa',
    flag: '../../../assets/flags/japan.png',
    record: '5-2-1',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tomoki Masuda',
    flag: '../../../assets/flags/japan.png',
    record: '5-2-1',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Caleb Patton',
    flag: '../../../assets/flags/usa.png',
    record: '5-2-1',
    sprite1: '../../../assets/sprites/mew-vmax.png',
    sprite2: '../../../assets/sprites/genesect.png',  
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Takuya Baba',
    flag: '../../../assets/flags/japan.png',
    record: '5-2-1',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Mehdi Hafi',
    flag: '../../../assets/flags/france.png',
    record: '5-2-1',
    sprite1: '../../../assets/sprites/palkia-origin.png',
    sprite2: '../../../assets/sprites/jolteon.png',  
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Keito Yoshihara',
    flag: '../../../assets/flags/japan.png',
    record: '5-2-1',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Azul Griego',
    flag: '../../../assets/flags/usa.png',
    record: '5-2-1',
    sprite1: '../../../assets/sprites/palkia-origin.png',
    sprite2: '../../../assets/sprites/calyrex-ice-rider.png',  
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Owyn Kamerman',
    flag: '../../../assets/flags/netherlands.png',
    record: '5-2-1',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/pikachu-gmax.png',  
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Gabriel Smart',
    flag: '../../../assets/flags/usa.png',
    record: '5-2-1',
    sprite1: '../../../assets/sprites/mew-vmax.png',
    sprite2: '../../../assets/sprites/genesect.png',  
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Steven Mao',
    flag: '../../../assets/flags/germany.png',
    record: '5-2-1',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kenki Tago',
    flag: '../../../assets/flags/japan.png',
    record: '5-2-1',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Christian LaBella',
    flag: '../../../assets/flags/canada.png',
    record: '5-2-1',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/duraludon-gmax.png',  
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tim Bartels',
    flag: '../../../assets/flags/germany.png',
    record: '5-2-1',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'João Zambrano',
    flag: '../../../assets/flags/brazil.png',
    record: '5-2-1',
    sprite1: '../../../assets/sprites/palkia-origin.png',
    sprite2: '../../../assets/sprites/inteleon.png',  
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Pedro Torres',
    flag: '../../../assets/flags/spain.png',
    record: '5-2-1',
    sprite1: '../../../assets/sprites/palkia-origin.png',
    sprite2: '../../../assets/sprites/jolteon.png',  
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tseng Hsiang',
    flag: '../../../assets/flags/taiwan.png',
    record: '5-2-1',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Piper Lepine',
    flag: '../../../assets/flags/usa.png',
    record: '5-2-1',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Caleb Gedemer',
    flag: '../../../assets/flags/usa.png',
    record: '5-2-1',
    sprite1: '../../../assets/sprites/palkia-origin.png',
    sprite2: '../../../assets/sprites/calyrex-ice-rider.png',  
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Brent Tonisson',
    flag: '../../../assets/flags/australia.png',
    record: '5-2-1',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ryuki Okada',
    flag: '../../../assets/flags/japan.png',
    record: '5-3-0',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Boulay Antoine',
    flag: '../../../assets/flags/japan.png',
    record: '5-3-0',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tomoya Tanaka',
    flag: '../../../assets/flags/japan.png',
    record: '5-3-0',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Fabien Pujol',
    flag: '../../../assets/flags/france.png',
    record: '5-3-0',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Pedro Pertusi',
    flag: '../../../assets/flags/brazil.png',
    record: '5-3-0',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'JW Kriewall',
    flag: '../../../assets/flags/usa.png',
    record: '5-3-0',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/pikachu-gmax.png',  
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Logan Madden',
    flag: '../../../assets/flags/uk.png',
    record: '5-3-0',
    sprite1: '../../../assets/sprites/mew-vmax.png',
    sprite2: '../../../assets/sprites/genesect.png',  
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Angus Johnson',
    flag: '../../../assets/flags/australia.png',
    record: '5-3-0',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Shoichi Saito',
    flag: '../../../assets/flags/japan.png',
    record: '4-1-3',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Rui Sato',
    flag: '../../../assets/flags/japan.png',
    record: '5-3-0',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Rowan Stavenow',
    flag: '../../../assets/flags/canada.png',
    record: '5-3-0',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tsai Yung-Ta',
    flag: '../../../assets/flags/taiwan.png',
    record: '4-2-2',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Shinnosuke Sato',
    flag: '../../../assets/flags/japan.png',
    record: '4-2-2',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Dan Hugar',
    flag: '../../../assets/flags/usa.png',
    record: '4-2-2',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tu Cheng-Tai',
    flag: '../../../assets/flags/taiwan.png',
    record: '4-2-2',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Cobi Kawasaki',
    flag: '../../../assets/flags/usa.png',
    record: '4-2-2',
    sprite1: '../../../assets/sprites/charizard-shiny.png',
    sprite2: '../../../assets/sprites/inteleon.png',  
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Takuma Tominaga',
    flag: '../../../assets/flags/japan.png',
    record: '4-2-2',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Fabrizio Silva',
    flag: '../../../assets/flags/peru.png',
    record: '4-3-1',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Christian Fontenot',
    flag: '../../../assets/flags/denmark.png',
    record: '4-3-1',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Manuel Jorach',
    flag: '../../../assets/flags/germany.png',
    record: '4-3-1',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kaisei Takata',
    flag: '../../../assets/flags/japan.png',
    record: '4-3-1',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tanner Hurley',
    flag: '../../../assets/flags/usa.png',
    record: '4-3-1',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Haruto Masubuchi',
    flag: '../../../assets/flags/japan.png',
    record: '4-3-1',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Takuya Hasegawa',
    flag: '../../../assets/flags/japan.png',
    record: '4-3-1',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Syahmi Razak',
    flag: '../../../assets/flags/liberia-malaysia.png',
    record: '4-3-1',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Luca Clavadetscher',
    flag: '../../../assets/flags/switzerland.png',
    record: '4-3-1',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'nammeeeee',
    flag: '../../../assets/flags',
    record: '6-2',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
        numImg: '../../../assets/04.png'
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'nammeeeee',
    flag: '../../../assets/flags',
    record: '6-2',
    sprite2: '../../../assets/sprites/blank.png',  
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023',
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " " + "(" + item.record + ")" + " - 2022 Worlds";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " " + "(" + item.record + ")" + " - 2022 Worlds";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " " + "(" + item.record + ")" + " - 2022 Worlds";

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
    juniorList.appendChild(item_element);
  }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
displayList2(seniors);
displayList3(juniors);
