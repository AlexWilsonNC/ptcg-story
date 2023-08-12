const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: '--',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: '--',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: '--',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: '--',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: '--',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: '--',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: '--',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: '--',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Cyrus Davis',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Brent Tonisson',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Alex Schemanske',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Karel Maertens',
    flag: '../../assets/flags/belgium.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Hui Yuan Huang',
    flag: '../../assets/flags/taiwan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Shinnosuke Sato',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Akira Sato',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Konsta Kallama',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Raz Wolpe',
    flag: '../../assets/flags/isreal.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Masataka Hirano',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Yerco Valencia',
    flag: '../../assets/flags/chile.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Jamie Frankland',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Andrew Mahone',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Daichi Shimada',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Bastian Silva',
    flag: '../../assets/flags/chile.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Miłosz Dyrlica',
    flag: '../../assets/flags/poland.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Cameron Shenoy',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Fabio Spanò',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Pedro Pertusi',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Jon Eng',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Alex Krekeler',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Sehun Park',
    flag: '../../assets/flags/korea.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Ciaran Farah',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Shuto Kogawa',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Jack Moore',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Akihiro Urata',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Xander Pero',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Tomu Mizutani',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Namhyeok Koo',
    flag: '../../assets/flags/korea.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Piotr Orleański',
    flag: '../../assets/flags/poland.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Gabor Van Meenen',
    flag: '../../assets/flags/denmark.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Isaiah Bradner',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Yuta Mori',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: '広明 磯野',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Su Chia-Hsing',
    flag: '../../assets/flags/taiwan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Yu Shirokuma',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Matthew Burris',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Javier Chelmes',
    flag: '../../assets/flags/chile.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Mateusz Łaszkiewicz',
    flag: '../../assets/flags/poland.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Ghe Nawon',
    flag: '../../assets/flags/korea.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Jeremy Evans',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Nicholas Moffitt',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Lucas Matheus',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Fabrizio Inga Silva',
    flag: '../../assets/flags/peru.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Kaito Kimura',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Sander Wojcik',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Bryan de Vries',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Jonathan Lanciano',
    flag: '../../assets/flags/argentina.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Moeen Mungalee',
    flag: '../../assets/flags/south-africa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Dyatmika Paramaanindya',
    flag: '../../assets/flags/indonesia.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Jory Koot',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Trevore Read',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Tim Franklin',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Owyn Kamerman',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Julian Luvara',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: 'Fabien Pujol',
    flag: '../../assets/flags/france.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: '--',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: '--',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: '--',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: '--',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: '--',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: '--',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: '--',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: '--',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: '--',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: '--',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: '--',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: '--',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: '--',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: '--',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: '--',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
    firstName: '--',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blank.png',  
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
