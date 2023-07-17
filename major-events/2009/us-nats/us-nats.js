const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Kyle Sucevich',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/infernape.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
                cardImg: '../../../assets/cards/2008-2010/luxray-lvx.png',
            numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/luxray.jpg',
            numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/infernape-lvx.png',
            numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/infernape-sp.png',
            numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/uxie-lvx.png',
            numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/uxie.png',
            numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/azelf.png',
            numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/unown-guard.png',
            numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/bronzong.png',
            numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/crobat.png',
            numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/lucario.png',
            numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/ninetales.png',
            numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/pl.102.vulpix.jpg',
            numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/claydol.png',
            numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/baltoy-fighting.png',
            numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/la.014.rayquaza.jpg',
            numImg: '../../../assets/01.png',
            oldCard: true
            },
            {
                cardImg: '../../../assets/cards/2008-2010/chatot.png',
            numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/roseannes-research.png',
            numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/cyrus-conspiracy.png',
            numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/bebes-search.png',
            numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/poke-turn.png',
            numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/sp-radar.png',
            numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/power-spray.png',
            numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/night-maintenance.png',
            numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/premier-ball.png',
            numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/luxury-ball.png',
            numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/energy-gain.png',
            numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/stark-mountain.png',
            numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/energy/fire-energy-capsule.png',
            numImg: '../../../assets/06.png',
            },
            {
                cardImg: '../../../assets/cards/energy/lightning-energy-capsule.png',
            numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/energy/call-energy.png',
            numImg: '../../../assets/03.png',
            },
    ]
  },
  {
    firstName: 'Darrell Moreno',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/manectric.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
                cardImg: '../../../assets/cards/2008-2010/luxray-lvx.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/luxray.jpg',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/manectric.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/electrike.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/crobat.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/uxie.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/azelf.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/giratina.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/unown-guard.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/cyrus-conspiracy.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/roseannes-research.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/bebes-search.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/cynthias-feelings.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/looker.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/aarons-collection.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/poke-turn.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/pluspower.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/power-spray.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/sp-radar.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/luxury-ball.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/energy-gain.png',
                numImg: '../../../assets/03.png',
            },
            {
            cardImg: '../../../assets/cards/2008-2010/rr.094.sunyshore_city_gym.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/energy/lightning-energy-capsule.png',
                numImg: '../../../assets/08.png',
            },
            {
                cardImg: '../../../assets/cards/energy/call-energy.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Anthony Eason',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/palkia.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Karl Kitchin',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/dialga.png',
    sprite2: '../../../assets/sprites/palkia.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Benjamin Angee',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/dialga.png',
    sprite2: '../../../assets/sprites/palkia.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Matthew Lambou',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gengar.png',
    sprite2: '../../../assets/sprites/starmie.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Dillon M',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gengar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jayson Harry',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/palkia.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alex Brosseau',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/kingdra.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
                cardImg: '../../../assets/cards/2008-2010/la.007.kingdra.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/2008-2010/la.070.seadra.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/2008-2010/la.102.horsea.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/2008-2010/claydol.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/baltoy-fighting.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/crobat.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/uxie.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/roseannes-research.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/bebes-search.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/cynthias-feelings.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/rare-candy-2008.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/super-scoop-up-2007.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/poke-turn.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/luxury-ball.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/pluspower.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/night-maintenance.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2008-2010/broken-time-space.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/energy/water-energy-capsule.png',
                numImg: '../../../assets/05.png',
            },
            {
                cardImg: '../../../assets/cards/energy/multi-energy-dp.png',
                numImg: '../../../assets/02.png',
            },
    ]
  },
  {
    firstName: 'Adam Vernola',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/dialga.png',
    sprite2: '../../../assets/sprites/palkia.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Breton Brander',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/palkia.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kason Day',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/beedrill.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Adrian Montoya',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/palkia.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Will Stevens',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/infernape.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Seena Ghaziaskar',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/dialga.png',
    sprite2: '../../../assets/sprites/palkia.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Steven B',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/toxicroak.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Robert Lozada',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/palkia.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sean Connelly',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/dialga.png',
    sprite2: '../../../assets/sprites/palkia.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jay Hornung',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/infernape.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Emily Elsner',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/palkia.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Stephen Silvestro',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/beedrill.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Drew Holton',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/dialga.png',
    sprite2: '../../../assets/sprites/palkia.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Martin S',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/beedrill.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'James Arnold',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/toxicroak.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tracy Key',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/honchkrow.png',
    sprite2: '../../../assets/sprites/toxicroak.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Michael Young',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kingdra.png',
    sprite2: '../../../assets/sprites/flygon.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: '--',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: '--',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: '--',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: '--',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: '--',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: '--',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Aylam Rosenthal',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gengar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Lloyd Wenger',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gallade.png',
    sprite2: '../../../assets/sprites/dialga.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nathaniel Lawson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/nidoqueen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jacob Tamm',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/dialga.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Samuel L',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gengar.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010/gengar-fainting-spell.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/haunter-smog.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/gastly.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/nidoqueen.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/nidorina-2008.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/nidoran-f.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/claydol.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/crobat.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/uxie.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/looker.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/rare-candy-2008.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/broken-time-space.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/energy/call-energy.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Alexander B ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jonathon B ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gengar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ankur P',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/dialga.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Justin Whitaker',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/machamp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Austin Hanna',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/beedrill.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Noah Lawson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Daniel Tran',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/beedrill.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nadia B',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gengar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Joshua S',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/beedrill.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kenneth A',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Drew F',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gengar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2009 US Nats";

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

          if (deck.oldCard === true) {
            pokeCard.classList.add('old-card')
          }
          if (deck.oldCard === true) {
            pokeCard.classList.add('radius-card')
          }
          if (deck.exCard === true) {
            pokeCard.classList.add('ex-era-card')
          }
          if (deck.radiusCard === true) {
            pokeCard.classList.add('radius-card')
          }

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2009 US Nats";

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

          if (deck.oldCard === true) {
            pokeCard.classList.add('old-card')
          }
          if (deck.oldCard === true) {
            pokeCard.classList.add('radius-card')
          }
          if (deck.exCard === true) {
            pokeCard.classList.add('ex-era-card')
          }
          if (deck.radiusCard === true) {
            pokeCard.classList.add('radius-card')
          }

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2009 US Nats";

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

          if (deck.oldCard === true) {
            pokeCard.classList.add('old-card')
          }
          if (deck.oldCard === true) {
            pokeCard.classList.add('radius-card')
          }
          if (deck.exCard === true) {
            pokeCard.classList.add('ex-era-card')
          }
          if (deck.radiusCard === true) {
            pokeCard.classList.add('radius-card')
          }

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
