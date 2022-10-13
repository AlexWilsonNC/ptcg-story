const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Dylan Austin',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/feraligatr.png',
    sprite2: '../../../assets/sprites/slowking.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n4.005.dark_feraligatr.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n4.032.dark_croconaw.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.081.totodile.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.014.slowking.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.073.slowpoke.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.027.suicune.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.091.bills_teleporter.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.077.pokemon_trader.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.073.the_bosss_way.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.090.time_capsule.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.089.super_energy_retrieval.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.093.gold_berry.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.060.balloon_berry.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.063.rockets_hideout.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.102.water_energy.jpg',
        numImg: '../../../assets/13.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Bryson Bonham',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/espeon.png',
    sprite2: '../../../assets/sprites/slowking.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n1.014.slowking.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.073.slowpoke.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.001.espeon.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.013.umbreon.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.038.eevee_.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.091.bill_.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.091.bills_teleporter.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.077.pokemon_trader.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.090.time_capsule.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.060.balloon_berry.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.093.gold_berry.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.101.psychic_energy.jpg',
        numImg: '../../../assets/09.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.104.darkness_energy.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.105.recycle_energy.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Stephen Silvestro',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Nikko Ruelos',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kingdra.png',
    sprite2: '../../../assets/sprites/steelix.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n3.019.kingdra.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.048.seadra.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.062.horsea.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.015.steelix.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/si.003.onix_.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.012.pichu_.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.040.igglybuff.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.091.bill_.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.077.pokemon_trader.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.090.time_capsule.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.093.gold_berry.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n4.099.energy_stadium.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.102.water_energy.jpg',
        numImg: '../../../assets/05.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.019.metal_energy.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.105.recycle_energy.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.081.full_heal_energy.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Joe Spanier',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/lanturn.png',
    sprite2: '../../../assets/sprites/slowking.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Kevin Cheng',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Tom Liesegang',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/kingdra.png',
    sprite2: '../../../assets/sprites/slowking.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Brian Gurta',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/feraligatr.png',
    sprite2: '../../../assets/sprites/slowking.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n4.005.dark_feraligatr.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n4.032.dark_croconaw.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.081.totodile.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.014.slowking.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.073.slowpoke.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.024.murkrow.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.091.bill_.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.077.pokemon_trader.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.073.the_bosss_way.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.090.time_capsule.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.093.gold_berry.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.060.balloon_berry.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.063.rockets_hideout.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.102.water_energy.jpg',
        numImg: '../../../assets/12.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.104.darkness_energy.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Luke Reed',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Drew Holton',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'David Hausknecht',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Jonathan Schweppe',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Tom Dolezal',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Eric Brooks',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Tony Lau',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'David Marquardt',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Michael Pramawat',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Seena Ghaziaksa',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/donphan.png',
    sprite2: '../../../assets/sprites/slowking.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Ioannis Giannopoulos',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Jonathan Brooks',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Joey Fulford',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Nicholas Morton',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Wayne Gralewski Jr',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Milan Musil',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Eric De Leon III',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Alex Schanz',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Yi-An Lu',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Roy Roberson',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Alessandro Caserta',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Tommy Derian',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Brain Six',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Zer-Ken Yap',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Mindy Lambkee',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/donphan.png',
    sprite2: '../../../assets/sprites/slowking.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n1.021.donphan.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.043.phanpy.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.014.slowking.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.073.slowpoke.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.066.tyrogue.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.091.bill_.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.077.pokemon_trader.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.091.bills_teleporter.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.087.mary_.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n4.101.magnifier.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/wizards_black_star_promos.040.pokemon_center.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.060.balloon_berry.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
        numImg: '../../../assets/12.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Ryan Carter',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kingdra.png',
    sprite2: '../../../assets/sprites/steelix.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n3.019.kingdra.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.048.seadra.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.062.horsea.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.015.steelix.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/si.003.onix_.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.012.pichu_.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.066.tyrogue.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.091.bill_.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.077.pokemon_trader.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/wizards_black_star_promos.040.pokemon_center.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.093.gold_berry.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n4.099.energy_stadium.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.102.water_energy.jpg',
        numImg: '../../../assets/05.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.019.metal_energy.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.105.recycle_energy.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.081.full_heal_energy.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Bryan Cresswell',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/feraligatr.png',
    sprite2: '../../../assets/sprites/slowking.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n4.005.dark_feraligatr.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n4.032.dark_croconaw.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.081.totodile.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.014.slowking.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.073.slowpoke.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.022.elekid.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.091.bill_.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.091.bills_teleporter.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.077.pokemon_trader.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/lc.106.challenge.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.090.time_capsule.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.060.balloon_berry.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.063.rockets_hideout.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.102.water_energy.jpg',
        numImg: '../../../assets/10.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Jefre Robert',
    flag: '../../../assets/flags/belgium.png',
    sprite1: '../../../assets/sprites/entei.png',
    sprite2: '../../../assets/sprites/magcargo.png',
    list: '../../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n3.006.entei_.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.033.magcargo.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n4.082.slugma.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.022.elekid.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.066.tyrogue.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.090.time_capsule.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.077.pokemon_trader.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.093.gold_berry.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n4.099.energy_stadium.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.098.fire_energy.jpg',
        numImg: '../../../assets/22.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Alessio Montalto',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/entei.png',
    sprite2: '../../../assets/sprites/magcargo.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Wesley Bartlett',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/kingdra.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Jeffrey Vernola',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/entei.png',
    sprite2: '../../../assets/sprites/magcargo.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'David Bui',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/slowking.png',
    sprite2: '../../../assets/sprites/charizard.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Joshuwa Hallberg',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Mikael Bondum',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Benjamin Sauk',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/espeon.png',
    sprite2: '../../../assets/sprites/slowking.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Brianna Bonham',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Dan Richard',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Tracy Cho',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'I-Han Lu',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Taylor Davis',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Jonathan Hausknecht',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Nicholas Chimento',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Caitlin Christian',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Nicholas Kukshtel',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Jose Eguia',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Daniel Mermelstein',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Darian Gonzalez',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Dylan Langenstein',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Shaun Banham',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Christopher Noren',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Michael Tapia',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Amy Clarke',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Dillon Jarman',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Jared Biehl',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Orion Craig',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Robbie Borchardt',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Alex Brosseau',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/chansey.png',
    list: '../../../assets/list-icon.png',
    type: 'metal',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/bs.003.chansey.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ju.026.scyther.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.050.unown_n.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/fo.018.ditto_.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.040.igglybuff.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.066.tyrogue.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.071.computer_search.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.074.item_finder.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.075.lass_.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.085.energy_charge.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.093.gold_berry.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.061.healing_field.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.099.grass_energy.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.019.metal_energy.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.105.recycle_energy.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Elaine Chase',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/sneasel.png',
    sprite2: '../../../assets/sprites/wigglytuff.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      // {
      //   cardImg: '../../../assets/cards/base-fossil/n1.025.sneasel.jpg',
      //   numImg: '../../../assets/02.png',
      //   oldCard: true
      // },
      // {
      //   cardImg: '../../../assets/cards/base-fossil/n1.014.slowking.jpg',
      //   numImg: '../../../assets/04.png',
      //   oldCard: true
      // },
      // {
      //   cardImg: '../../../assets/cards/base-fossil/n1.014.slowking.jpg',
      //   numImg: '../../../assets/04.png',
      //   oldCard: true
      // },
      // {
      //   cardImg: '../../../assets/cards/base-fossil/n1.024.murkrow.jpg',
      //   numImg: '../../../assets/02.png',
      //   oldCard: true
      // },
      // {
      //   cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
      //   numImg: '../../../assets/03.png',
      //   oldCard: true
      // },
      // {
      //   cardImg: '../../../assets/cards/base-fossil/n2.066.tyrogue.jpg',
      //   numImg: '../../../assets/02.png',
      //   oldCard: true
      // },
      // {
      //   cardImg: '../../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
      //   numImg: '../../../assets/04.png',
      //   oldCard: true
      // },
      // {
      //   cardImg: '../../../assets/cards/base-fossil/bs.071.computer_search.jpg',
      //   numImg: '../../../assets/04.png',
      //   oldCard: true
      // },
      // {
      //   cardImg: '../../../assets/cards/base-fossil/bs.074.item_finder.jpg',
      //   numImg: '../../../assets/03.png',
      //   oldCard: true
      // },
      // {
      //   cardImg: '../../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
      //   numImg: '../../../assets/03.png',
      //   oldCard: true
      // },
      // {
      //   cardImg: '../../../assets/cards/base-fossil/bs.075.lass_.jpg',
      //   numImg: '../../../assets/03.png',
      //   oldCard: true
      // },
      // {
      //   cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
      //   numImg: '../../../assets/02.png',
      //   oldCard: true
      // },
      // {
      //   cardImg: '../../../assets/cards/base-fossil/n1.085.energy_charge.jpg',
      //   numImg: '../../../assets/02.png',
      //   oldCard: true
      // },
      // {
      //   cardImg: '../../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
      //   numImg: '../../../assets/02.png',
      //   oldCard: true
      // },
      // {
      //   cardImg: '../../../assets/cards/base-fossil/bs.095.switch.jpg',
      //   numImg: '../../../assets/02.png',
      //   oldCard: true
      // },
      // {
      //   cardImg: '../../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
      //   numImg: '../../../assets/01.png',
      //   oldCard: true
      // },
      // {
      //   cardImg: '../../../assets/cards/base-fossil/n1.086.focus_band.jpg',
      //   numImg: '../../../assets/03.png',
      //   oldCard: true
      // },
      // {
      //   cardImg: '../../../assets/cards/base-fossil/n1.097.sprout_tower.jpg',
      //   numImg: '../../../assets/02.png',
      //   oldCard: true
      // },
      // {
      //   cardImg: '../../../assets/cards/base-fossil/n1.104.darkness_energy.jpg',
      //   numImg: '../../../assets/04.png',
      //   oldCard: true
      // },
      // {
      //   cardImg: '../../../assets/cards/base-fossil/ro.080.rainbow_energy.jpg',
      //   numImg: '../../../assets/04.png',
      //   oldCard: true
      // },
      // {
      //   cardImg: '../../../assets/cards/base-fossil/n1.105.recycle_energy.jpg',
      //   numImg: '../../../assets/04.png',
      //   oldCard: true
      // },
    ]
  },
  {
    firstName: 'Heidi Craig',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Dakota Williams',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Jeremy Borchardt',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Jason Grabher-Meyer',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Mike Boozer',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Dallas Dalton',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Jeffery Mermelstein',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Jason Klaczynski',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Chris Fulop',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'John Chimento',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Matthew Yuen',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Wai-Lam Wong',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Eskil Vestre',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Julia Sprenz',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Bobby Darien',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Chao Lei',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Gordon Fong',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Damon Edmondson',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Kevin Lee',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Craig Ting',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Terry Kamm',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Brian Fulop',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Erich Dela Cruz',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Michael Gills',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Craig Simpson',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Jesus Cortez',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Jonathan Smith',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'David Brooks',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Roy Robertson',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Richard Langenstein',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Steve Perucca',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Bob Paxon',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Richard Walkowski',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
  },
  {
    firstName: 'Jeff Reynolds',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: []
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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2002 Worlds";
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

          if (deck.oldCard === true) {
            pokeCard.classList.add('old-card')
          }
          if (deck.oldCard === true) {
            pokeCard.classList.add('radius-card')
          }
          // if (deck.semioldCard === true) {
          //   pokeCard.classList.add('semi-radius-card')

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2002 Worlds";

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

          if (deck.oldCard === true) {
            pokeCard.classList.add('old-card')
          }
          if (deck.oldCard === true) {
            pokeCard.classList.add('radius-card')
          }
          // if (deck.semioldCard === true) {
          //   pokeCard.classList.add('semi-radius-card')

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2002 Worlds";

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

          if (deck.oldCard === true) {
            pokeCard.classList.add('old-card')
          }
          if (deck.oldCard === true) {
            pokeCard.classList.add('radius-card')
          }
          // if (deck.semioldCard === true) {
          //   pokeCard.classList.add('semi-radius-card')

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
