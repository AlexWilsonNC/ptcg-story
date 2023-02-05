const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Jason Klaczynski',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/seismitoad.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Enrique Avila',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/wailord.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Grant Manley',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/manectric-mega.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Ben Moskow',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/bronzong.png',
    sprite2: '../../../../assets/sprites/aegislash.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Dylan Bryan',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/bronzong.png',
    sprite2: '../../../../assets/sprites/klinklang.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Eduardo Gonzalez',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/hippowdon.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Kristy Britton',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/seismitoad.png',
    sprite2: '../../../../assets/sprites/manectric.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Geoffrey Sauk',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/rayquaza-mega.png',
    sprite2: '../../../../assets/sprites/bronzong.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Brandon Zettel',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/wailord.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Omar Reyhan',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/kyogre-primal.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Dustin Zimmerman',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/bronzong.png',
    sprite2: '../../../../assets/sprites/aegislash.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Stefan Tabaco',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/groudon-primal.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Jake Jensen',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/seismitoad.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Michael Lesky',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/kyogre-primal.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Steve Guthrie',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../../../assets/sprites/blastoise.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Kolton Day',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/seismitoad.png',
    sprite2: '../../../../assets/sprites/crobat.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Austin Baggs',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/raichu.png',
    sprite2: '../../../../assets/sprites/crobat.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Dean Nezam',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/manectric-mega.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Sam Chen',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/manectric-mega.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Andrew Krekeler',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/manectric-mega.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Benjamin Sauk',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/rayquaza-mega.png',
    sprite2: '../../../../assets/sprites/bronzong.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Omar Izaguirre',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/seismitoad.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Chris Derocher',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/seismitoad.png',
    sprite2: '../../../../assets/sprites/crobat.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Steven Bates',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/landorus-therian.png',
    sprite2: '../../../../assets/sprites/raichu.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Brandon Salazar',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/seismitoad.png',
    sprite2: '../../../../assets/sprites/crobat.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Jason Annichiarico',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/flareon.png',
    sprite2: '../../../../assets/sprites/empoleon.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Frank Diaz',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/raichu.png',
    sprite2: '../../../../assets/sprites/crobat.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Daniel Lynch',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/seismitoad.png',
    sprite2: '../../../../assets/sprites/crobat.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Ramon Miranda',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/landorus-therian.png',
    sprite2: '../../../../assets/sprites/raichu.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Alexander Hill',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/rayquaza-mega.png',
    sprite2: '../../../../assets/sprites/bronzong.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'David Vidal',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/rayquaza-mega.png',
    sprite2: '../../../../assets/sprites/bronzong.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Brandon Cantu',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/bronzong.png',
    sprite2: '../../../../assets/sprites/aegislash.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Maximilian Armitage',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/seismitoad.png',
    sprite2: '../../../../assets/sprites/crobat.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Chris Siakala',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/joltik.png',
    sprite2: '../../../../assets/sprites/pumpkaboo.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Henry Ross-Clunis',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/crobat.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Tristan Lackey',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/manectric-mega.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Vance Kelley',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/seismitoad.png',
    sprite2: '../../../../assets/sprites/crobat.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Azul Griego',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/seismitoad.png',
    sprite2: '../../../../assets/sprites/manectric.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Jeremy Gibson',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/joltik.png',
    sprite2: '../../../../assets/sprites/pumpkaboo.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Zach Elliott',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/manectric-mega.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Kevin Baxter',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/groudon-primal.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Stephan Blake',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/donphan.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Ryan Sabelhaus',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/manectric-mega.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Dane Schussler',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/manectric-mega.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Michael Lux',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/wailord.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Jason Martinez',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/seismitoad.png',
    sprite2: '../../../../assets/sprites/manectric.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Daniel Altavilla',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/rayquaza-mega.png',
    sprite2: '../../../../assets/sprites/bronzong.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Matt Marusik',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'William Herrmann',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/bronzong.png',
    sprite2: '../../../../assets/sprites/klinklang.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Mark Garcia',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/seismitoad.png',
    sprite2: '../../../../assets/sprites/manectric.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Ryan Grant',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/seismitoad.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Pearce Blend',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/gengar.png',
    sprite2: '../../../../assets/sprites/trevenant.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Zack Martin',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/manectric-mega.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Brit Pybas',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/seismitoad.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Aaron Wang',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/seismitoad.png',
    sprite2: '../../../../assets/sprites/crobat.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Charles L-Leach',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/joltik.png',
    sprite2: '../../../../assets/sprites/pumpkaboo.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Jeff Garrison',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/crobat.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Toby Nelson',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/bronzong.png',
    sprite2: '../../../../assets/sprites/aegislash.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Jimmy McClure',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/crobat.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'David Richard',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/manectric-mega.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Joshua Sutherland',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/seismitoad.png',
    sprite2: '../../../../assets/sprites/manectric-mega.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Jacob Van Wagner',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/rayquaza-mega.png',
    sprite2: '../../../../assets/sprites/bronzong.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Harrison Leven',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/bunnelby.png',
    sprite2: '../../../../assets/sprites/slurpuff.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Andrew Jackson',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/crobat.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'eeeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'eeeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'eeeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'eeeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'eeeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'eeeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'eeeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'eeeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'eeeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'eeeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'eeeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'eeeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'eeeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'eeeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'eeeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'eeeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 US Nats";

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

    if (item.list === '../../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 US Nats";

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

    if (item.list === '../../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 US Nats";

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
