const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Taketo Seki',
    flag: '../../../../assets/flags/japan.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/archeops.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Grant Shen',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/archeops.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Grant Manley',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/comfey.png',
    sprite2: '../../../../assets/sprites/sableye.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Pedro Torres',
    flag: '../../../../assets/flags/spain.png',
    sprite1: '../../../../assets/sprites/comfey.png',
    sprite2: '../../../../assets/sprites/sableye.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Yerco Valencia',
    flag: '../../../../assets/flags/chile.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/archeops.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Raz Wolpe',
    flag: '../../../../assets/flags/isreal.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/archeops.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ciaran Farah',
    flag: '../../../../assets/flags/canada.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/archeops.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Peter Lo',
    flag: '../../../../assets/flags/hong-kong.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/archeops.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Regan Retzloff',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/archeops.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Mads Jensen',
    flag: '../../../../assets/flags/denmark.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/archeops.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Owyn Kamerman',
    flag: '../../../../assets/flags/netherlands.png',
    sprite1: '../../../../assets/sprites/mew-vmax.png',
    sprite2: '../../../../assets/sprites/genesect.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kai Chung',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/archeops.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Yuki Kawahito',
    flag: '../../../../assets/flags/japan.png',
    sprite1: '../../../../assets/sprites/goodra-hisui.png',
    sprite2: '../../../../assets/sprites/comfey.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Joel Suryadi',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/comfey.png',
    sprite2: '../../../../assets/sprites/sableye.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Connor Finton',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/archeops.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jack Underwood',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/regigigas.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Robbie Caldwell',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/archeops.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Azul Griego',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/comfey.png',
    sprite2: '../../../../assets/sprites/sableye.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Takuto Itagaki',
    flag: '../../../../assets/flags/japan.png',
    sprite1: '../../../../assets/sprites/goodra-hisui.png',
    sprite2: '../../../../assets/sprites/comfey.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Facundo Facio',
    flag: '../../../../assets/flags/argentina.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/eldegoss.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Karl Peters',
    flag: '../../../../assets/flags/germany.png',
    sprite1: '../../../../assets/sprites/palkia-origin.png',
    sprite2: '../../../../assets/sprites/inteleon.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Christian Tuomi',
    flag: '../../../../assets/flags/finland.png',
    sprite1: '../../../../assets/sprites/mew-vmax.png',
    sprite2: '../../../../assets/sprites/genesect.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ryan Antonucci',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/comfey.png',
    sprite2: '../../../../assets/sprites/sableye.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Christian Hasbani',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/vikavolt.png',
    sprite2: '../../../../assets/sprites/aerodactyl.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Pedro Pertusi',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/archeops.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Rahul Reddy',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/regigigas.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tord Reklev',
    flag: '../../../../assets/flags/norway.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/archeops.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Gustavo Wada',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/archeops.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kim Beom Jin',
    flag: '../../../../assets/flags/korea.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/pikachu-gmax.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Agustín Campo',
    flag: '../../../../assets/flags/argentina.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/archeops.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Cameron Shenoy',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/vikavolt.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Elliot Gantner',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/archeops.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jon Eng',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/archeops.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Soma Arai',
    flag: '../../../../assets/flags/japan.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/archeops.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Carlos Barros',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/archeops.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Anselm Sim',
    flag: '../../../../assets/flags/singapore.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/archeops.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kazutaka Tajima',
    flag: '../../../../assets/flags/japan.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/archeops.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'David Daritan',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/mew-vmax.png',
    sprite2: '../../../../assets/sprites/genesect.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sam Chen',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/regigigas.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Haru Nishikawa',
    flag: '../../../../assets/flags/japan.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/archeops.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Peter Ghionis',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/regigigas.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Andrew Gantner',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/archeops.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Akira Sato',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/archeops.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kye Edmondston',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/comfey.png',
    sprite2: '../../../../assets/sprites/sableye.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alex Schemanske',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/comfey.png',
    sprite2: '../../../../assets/sprites/sableye.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Callum Pinnegar',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/comfey.png',
    sprite2: '../../../../assets/sprites/sableye.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Magnus Pedersen',
    flag: '../../../../assets/flags/denmark.png',
    sprite1: '../../../../assets/sprites/mew-vmax.png',
    sprite2: '../../../../assets/sprites/genesect.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Courtney Fox',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/archeops.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Mia Fountain',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/arceus.png',
    sprite2: '../../../../assets/sprites/duraludon-gmax.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Shuto Itagaki',
    flag: '../../../../assets/flags/japan.png',
    sprite1: '../../../../assets/sprites/goodra-hisui.png',
    sprite2: '../../../../assets/sprites/comfey.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jay Tyrrell',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/vikavolt.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Giovanni Peragallo',
    flag: '../../../../assets/flags/chile.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ehren Roebuck',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/mew-vmax.png',
    sprite2: '../../../../assets/sprites/genesect.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Marcelo Turra',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/archeops.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jamie Frankland',
    flag: '../../../../assets/flags/uk.png',
    sprite1: '../../../../assets/sprites/comfey.png',
    sprite2: '../../../../assets/sprites/sableye.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Taisei Kodama',
    flag: '../../../../assets/flags/japan.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Heddi Brahmi',
    flag: '../../../../assets/flags/france.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/archeops.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Paul Coletta',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/flaaffy.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Aiden Harrison',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Aidan Khus',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/archeops.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Joshua Wilson',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Matthew Burris',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Daichi Shimada',
    flag: '../../../../assets/flags/japan.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/eldegoss.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Hoong Ngiam',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2022-2023',
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2023 LAIC";

        if (item.type == 'psychic') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/psychic-bg.png)";
        } else if (item.type == 'fire') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fire-bg.png)";
        } else if (item.type == 'fairy') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fairy-bg.png)";
        } else if (item.type == 'normal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/normal-bg.png)";
        } else if (item.type == 'lightning') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/lightning-bg.png)";
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
        // document.querySelectorAll('.pokemon-card').forEach(card => {
        //   console.log('here')
        //   card.addEventListener('click', () => {
        //       card.querySelector('.pok-card-small').classList.add('large-card');
        //       document.querySelector('.second-behind-modal').style.display = 'block';
        //       if (card.querySelector('.pok-card-small').classList.contains('large-card')) {
        //         document.querySelector('.second-behind-modal').addEventListener('click', () => {
        //               card.querySelector('.pok-card-small').classList.remove('large-card');
        //               document.querySelector('.second-behind-modal').style.display = 'none';
        //           })
        //       }
        //   })
        // });
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

    if (item.list === '../../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2023 LAIC";

        if (item.type == 'psychic') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/psychic-bg.png)";
        } else if (item.type == 'fire') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fire-bg.png)";
        } else if (item.type == 'fairy') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fairy-bg.png)";
        } else if (item.type == 'normal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/normal-bg.png)";
        } else if (item.type == 'lightning') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/lightning-bg.png)";
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
        // document.querySelectorAll('.pokemon-card').forEach(card => {
        //   console.log('here')
        //   card.addEventListener('click', () => {
        //       card.querySelector('.pok-card-small').classList.add('large-card');
        //       document.querySelector('.second-behind-modal').style.display = 'block';
        //       if (card.querySelector('.pok-card-small').classList.contains('large-card')) {
        //         document.querySelector('.second-behind-modal').addEventListener('click', () => {
        //               card.querySelector('.pok-card-small').classList.remove('large-card');
        //               document.querySelector('.second-behind-modal').style.display = 'none';
        //           })
        //       }
        //   })
        // });
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

    if (item.list === '../../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2023 LAIC";

        if (item.type == 'psychic') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/psychic-bg.png)";
        } else if (item.type == 'fire') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fire-bg.png)";
        } else if (item.type == 'fairy') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fairy-bg.png)";
        } else if (item.type == 'normal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/normal-bg.png)";
        } else if (item.type == 'lightning') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/lightning-bg.png)";
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
        // document.querySelectorAll('.pokemon-card').forEach(card => {
        //   console.log('here')
        //   card.addEventListener('click', () => {
        //       card.querySelector('.pok-card-small').classList.add('large-card');
        //       document.querySelector('.second-behind-modal').style.display = 'block';
        //       if (card.querySelector('.pok-card-small').classList.contains('large-card')) {
        //         document.querySelector('.second-behind-modal').addEventListener('click', () => {
        //               card.querySelector('.pok-card-small').classList.remove('large-card');
        //               document.querySelector('.second-behind-modal').style.display = 'none';
        //           })
        //       }
        //   })
        // });
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
