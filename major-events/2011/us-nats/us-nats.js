const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Justin Sanchez',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yanmega.png',
    sprite2: '../../../assets/sprites/magnezone.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012/yanmega.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/yanma.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/magnezone-prime.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/magneton.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/magnemite.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/cleffa-col.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/tyrogue.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pachirisu.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/judge-hgss.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/poke-collector.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/copycat.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/elm-training-method.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/flower-shop-lady.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pokemon-communication-bw.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/rare-candy-hgss.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/poke-reversal.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/switch-bw.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/super-scoop-up.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pluspower.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/poke-circulator.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/bw-energy-lightning.png',
        numImg: '../../../assets/10.png'
      },
      {
        cardImg: '../../../assets/cards/energy/rescue-energy.png',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Kyle Sucevich',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/donphan.png',
    sprite2: '../../../assets/sprites/zoroark.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jayson Harry',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yanmega.png',
    sprite2: '../../../assets/sprites/magnezone.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Dylan Lefavour',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kingdra.png',
    sprite2: '../../../assets/sprites/yanmega.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
                 cardImg: '../../../assets/cards/2010-2012/kingdra.png',
                numImg: '../../../assets/04.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/seadra.png',
                numImg: '../../../assets/02.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/horsea.png',
                numImg: '../../../assets/04.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/yanmega.png',
                numImg: '../../../assets/04.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/yanma.png',
                numImg: '../../../assets/04.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/jirachi.png',
                numImg: '../../../assets/02.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/blissey-prime.png',
                numImg: '../../../assets/01.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/chansey.png',
                numImg: '../../../assets/01.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/cleffa-hgss.png',
                numImg: '../../../assets/02.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/tyrogue.png',
                numImg: '../../../assets/01.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/poke-collector.png',
                numImg: '../../../assets/04.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/copycat.png',
                numImg: '../../../assets/04.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/judge-hgss.png',
                numImg: '../../../assets/04.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/professor-juniper.png',
                numImg: '../../../assets/02.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/rare-candy-hgss.png',
                numImg: '../../../assets/04.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/pokemon-communication-hgss.png',
                numImg: '../../../assets/04.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/poke-reversal.png',
                numImg: '../../../assets/03.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/junk-arm.png',
                numImg: '../../../assets/02.png',
            },
            {
                 cardImg: '../../../assets/cards/energy/hgss-energy-psychic.png',
                numImg: '../../../assets/03.png',
            },
            {
                 cardImg: '../../../assets/cards/energy/rainbow-energy-hgss.png',
                numImg: '../../../assets/03.png',
            },
            {
                 cardImg: '../../../assets/cards/energy/rescue-energy.png',
                numImg: '../../../assets/02.png',
            },
    ]
  },
  {
    firstName: 'Karl Kitchin',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yanmega.png',
    sprite2: '../../../assets/sprites/magnezone.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alex Frezza',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yanmega.png',
    sprite2: '../../../assets/sprites/magnezone.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'James Arnold',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/tyranitar.png',
    sprite2: '../../../assets/sprites/serperior.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
                cardImg: '../../../assets/cards/2010-2012/tyranitar-prime.webp',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2010-2012/ul.038.pupitar.jpg',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2010-2012/ul.051.larvitar.jpg',
                numImg: '../../../assets/04.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/serperior.png',
                numImg: '../../../assets/02.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/servine.png',
                numImg: '../../../assets/02.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/snivy.png',
                numImg: '../../../assets/02.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/cleffa-hgss.png',
                numImg: '../../../assets/03.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/tyrogue.png',
                numImg: '../../../assets/01.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/jirachi.png',
                numImg: '../../../assets/01.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/shaymin.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2010-2012/ud.040.unown_.jpg',
                numImg: '../../../assets/01.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/poke-collector.png',
                numImg: '../../../assets/04.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/pont.png',
                numImg: '../../../assets/04.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/twins.png',
                numImg: '../../../assets/03.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/elm-training-method.png',
                numImg: '../../../assets/03.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/rare-candy-hgss.png',
                numImg: '../../../assets/04.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/pokemon-communication-bw.png',
                numImg: '../../../assets/04.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/switch-bw.png',
                numImg: '../../../assets/02.png',
            },
            {
                 cardImg: '../../../assets/cards/energy/darkness-energy-hgss.png',
                numImg: '../../../assets/04.png',
            },
            {
                 cardImg: '../../../assets/cards/energy/rainbow-energy-hgss.png',
                numImg: '../../../assets/04.png',
            },
            {
                 cardImg: '../../../assets/cards/energy/hgss-energy-dce.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Tom Dolezal',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/reshiram.png',
    sprite2: '../../../assets/sprites/typhlosion.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Evan Mitchell',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yanmega.png',
    sprite2: '../../../assets/sprites/magnezone.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Christopher Orr',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mew.png',
    sprite2: '../../../assets/sprites/vileplume.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Evan Baker',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/reshiram.png',
    sprite2: '../../../assets/sprites/emboar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Andrew Spencer',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kingdra.png',
    sprite2: '../../../assets/sprites/yanmega.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Austin Zettel',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mew.png',
    sprite2: '../../../assets/sprites/yanmega.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012/mew-prime.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/yanmega.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/yanma.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/zoroark.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/zorua.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/crobat-prime.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/jirachi.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/tyrogue-col.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/poke-collector.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pont.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/copycat.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/judge-hgss.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/black-belt.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pokemon-communication-bw.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/poke-reversal.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/dual-ball.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pluspower.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/defender.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/revive.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/energy-exchanger.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/bw-energy-psychic.png',
        numImg: '../../../assets/07.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-bw.png',
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Jason Schelin',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/magnezone.png',
    sprite2: '../../../assets/sprites/emboar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Curran Hill',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kingdra.png',
    sprite2: '../../../assets/sprites/yanmega.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Paarth Shah',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/donphan.png',
    sprite2: '../../../assets/sprites/zoroark.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'David Richard',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/donphan.png',
    sprite2: '../../../assets/sprites/zoroark.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jimmy McClure',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yanmega.png',
    sprite2: '../../../assets/sprites/magnezone.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'David S',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yanmega.png',
    sprite2: '../../../assets/sprites/magnezone.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Grafton Roll',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yanmega.png',
    sprite2: '../../../assets/sprites/magnezone.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jason M ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yanmega.png',
    sprite2: '../../../assets/sprites/vileplume.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Daniel A',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kingdra.png',
    sprite2: '../../../assets/sprites/yanmega.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Anthony O',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yanmega.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Adler Pierce',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yanmega.png',
    sprite2: '../../../assets/sprites/magnezone.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ty Wheeler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yanmega.png',
    sprite2: '../../../assets/sprites/magnezone.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Eli M',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kingdra.png',
    sprite2: '../../../assets/sprites/yanmega.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ryan M ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/magnezone.png',
    sprite2: '../../../assets/sprites/emboar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Robbie W',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/donphan.png',
    sprite2: '../../../assets/sprites/zoroark.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Noah Y',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yanmega.png',
    sprite2: '../../../assets/sprites/magnezone.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Simon B',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/donphan.png',
    sprite2: '../../../assets/sprites/machamp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Summer P',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/donphan.png',
    sprite2: '../../../assets/sprites/zoroark.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Toby N ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kingdra.png',
    sprite2: '../../../assets/sprites/yanmega.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Xander Pero',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/ursaring.png',
    sprite2: '../../../assets/sprites/yanmega.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
                 cardImg: '../../../assets/cards/2010-2012/ursaring-prime.png',
                numImg: '../../../assets/02.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/teddiursa.png',
                numImg: '../../../assets/03.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/yanmega.png',
                numImg: '../../../assets/04.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/yanma.png',
                numImg: '../../../assets/04.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/sunflora.png',
                numImg: '../../../assets/02.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/sunkern.png',
                numImg: '../../../assets/02.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/vileplume.png',
                numImg: '../../../assets/02.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/bellossom.png',
                numImg: '../../../assets/01.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/gloom.png',
                numImg: '../../../assets/02.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/oddish.png',
                numImg: '../../../assets/03.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/roserade.png',
                numImg: '../../../assets/01.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/roselia.png',
                numImg: '../../../assets/01.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/jirachi.png',
                numImg: '../../../assets/01.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/poke-collector.png',
                numImg: '../../../assets/04.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/copycat.png',
                numImg: '../../../assets/04.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/judge-hgss.png',
                numImg: '../../../assets/04.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/pont.png',
                numImg: '../../../assets/02.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/professor-juniper.png',
                numImg: '../../../assets/02.png',
            },
            {
                 cardImg: '../../../assets/cards/2010-2012/pokemon-communication-bw.png',
                numImg: '../../../assets/04.png',
            },
            {
                 cardImg: '../../../assets/cards/energy/hgss-energy-grass.png',
                numImg: '../../../assets/04.png',
            },
            {
                 cardImg: '../../../assets/cards/energy/hgss-energy-dce.png',
                numImg: '../../../assets/04.png',
            },
            {
                 cardImg: '../../../assets/cards/energy/rainbow-energy-hgss.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Sydney Morisoli',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/reshiram.png',
    sprite2: '../../../assets/sprites/typhlosion.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Juan Arenas',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/magnezone.png',
    sprite2: '../../../assets/sprites/emboar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Luke S',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/reshiram.png',
    sprite2: '../../../assets/sprites/typhlosion.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012',
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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2011 US Nats";

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

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2011 US Nats";

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

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2011 US Nats";

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
