const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Martin Moreno',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/raichu.png',
    sprite2: '../../../assets/sprites/exeggutor.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
                cardImg: '../../../assets/cards/2004-2006/raichu-metal.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2004-2006/pikachu-metal.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2004-2006/exeggutor.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2004-2006/exeggcute.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2004-2006/castform.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2004-2006/holon-magnemite.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2004-2006/latios-water.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2004-2006/latias-fire-body.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2004-2006/holon-mentor.png',
                numImg: '../../../assets/03.png',
            },
            {
              cardImg: '../../../assets/cards/2004-2006/tr.086.rockets_admin.jpg',
                numImg: '../../../assets/02.png',
                radiusCard: true
            },
            {
                cardImg: '../../../assets/cards/2004-2006/marys-request.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2004-2006/holon-researcher.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2004-2006/holon-adventurer.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2004-2006/holon-scientist.png',
                numImg: '../../../assets/01.png',
            },
            {
              cardImg: '../../../assets/cards/2004-2006/scott.png',
              numImg: '../../../assets/01.png',
          },
            {
                cardImg: '../../../assets/cards/2004-2006/holon-transeiver.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2004-2006/pokemon-retriever.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2004-2006/swoop-teleporter.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2004-2006/protective-orb.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2004-2006/cursed-stone.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/old-energy/metal-energy-e-reader.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/old-energy/scramble-energy.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/old-energy/double-rainbow-energy.png',
                numImg: '../../../assets/02.png',
            },
    ]
  },
  {
    firstName: 'Eric Ennocenti',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/raichu.png',
    sprite2: '../../../assets/sprites/exeggutor.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Seena Ghaziaskhar',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mew.png',
    sprite2: '../../../assets/sprites/manectric.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tom Dolezal',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/tyranitar.png',
    sprite2: '../../../assets/sprites/ampharos.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Stephen Silvestro',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flareon.png',
    sprite2: '../../../assets/sprites/ariados.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ian Ryave',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ryan Borgmann',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blastoise.png',
    sprite2: '../../../assets/sprites/mew.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Chris Fulop',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
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
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jordan Dupuis',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/nidoqueen.png',
    sprite2: '../../../assets/sprites/nidoking.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Shawn Gettys',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flareon.png',
    sprite2: '../../../assets/sprites/ariados.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
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
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/arcanine.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
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
    sprite1: '../../../assets/sprites/dragonite.png',
    sprite2: '../../../assets/sprites/electrode.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Michael Reynolds',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/lugia-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/blastoise-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/wartortle.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/squirtle.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/steelix-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/onix-tunneling.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/pidgeot.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/pidgeotto.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/pidgey.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/jirachi.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/jirachi-dual.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/mew-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/latias-star.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/castform.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-magneton.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-magnemite.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/celios-network.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rockets-admin.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-mentor.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-scientist.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-farmer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rare-candy-2006.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-transeiver.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/swoop-teleporter.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/pokemon-retriever.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/warp-point.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/power-tree.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/island-cave.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/giant-stump.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/water-energy-holon-phantoms.png',
        numImg: '../../../assets/08.png'
      }
    ]
  },
  {
    firstName: 'Michael Kendle',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kingdra.png',
    sprite2: '../../../assets/sprites/pidgeot.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/tr.012.kingdra.jpg',
                numImg: '../../../assets/02.png',
                radiusCard: true
            },
            {
              cardImg: '../../../assets/cards/2004-2006/hp.010.kingdra.jpg',
                numImg: '../../../assets/02.png',
                exCard: true
            },
            {
                cardImg: '../../../assets/cards/2004-2006/seadra-fire.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2004-2006/horsea-fire.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2004-2006/pidgeot-delta.png',
                numImg: '../../../assets/03.png',
            },
            {
              cardImg: '../../../assets/cards/2004-2006/hp.049.pidgeotto.jpg',
                numImg: '../../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/2004-2006/pidgey-lightning.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2004-2006/pidgey.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2004-2006/mew-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2004-2006/castform.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2004-2006/rg.088.celios_network.jpg',
                numImg: '../../../assets/03.png',
                radiusCard: true
            },
            {
                cardImg: '../../../assets/cards/2004-2006/hl.092.stevens_advice.png',
                numImg: '../../../assets/02.png',
            },
            {
              cardImg: '../../../assets/cards/2004-2006/tr.086.rockets_admin.jpg',
                numImg: '../../../assets/02.png',
                radiusCard: true
            },
            {
                cardImg: '../../../assets/cards/2004-2006/holon-mentor.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2004-2006/holon-adventurer.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2004-2006/holon-scientist.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2004-2006/holon-researcher.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2004-2006/dr.087.mr_brineys_compassion.jpg',
                numImg: '../../../assets/01.png',
                radiusCard: true
            },
            {
                cardImg: '../../../assets/cards/2004-2006/holon-transeiver.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2004-2006/rare-candy-2006.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2004-2006/warp-point.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2004-2006/switch.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2004-2006/pokemon-retriever.png',
                numImg: '../../../assets/01.png',
            },
              {
                cardImg: '../../../assets/cards/2004-2006/hl.085.ancient_technical_machine_rock.jpg',
                numImg: '../../../assets/01.png',
                radiusCard: true
            },
            {
                cardImg: '../../../assets/cards/old-energy/water-energy-holon-phantoms.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/old-energy/holon-energy-wp.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/old-energy/double-rainbow-energy.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/old-energy/special-metal-energy-2006.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/old-energy/holon-energy-gl.png',
                numImg: '../../../assets/01.png',
            },
    ]
  },
  {
    firstName: 'Brad Petty',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/arcanine.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jonathan Anderson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/dragonite.png',
    sprite2: '../../../assets/sprites/electrode.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kyle Sabelhaus',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ryan Rosenberg',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Michael Pramawat',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mew.png',
    sprite2: '../../../assets/sprites/jynx.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jin Wang',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Arjay Sridhar',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Gregory Dollar',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/dragonite.png',
    sprite2: '../../../assets/sprites/electrode.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Eric Craig',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Drew Guritzky',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nancy Lynch',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/tyranitar.png',
    sprite2: '../../../assets/sprites/ampharos.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'David Anderson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/shedinja.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
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
    sprite1: '../../../assets/sprites/dragonite.png',
    sprite2: '../../../assets/sprites/electrode.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tara Mattingly',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lunatone.png',
    sprite2: '../../../assets/sprites/solrock.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tom Stahnke',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Matt Rollins',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Chris Berkemer',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Bobby Malec',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jonathan Bristow',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flareon.png',
    sprite2: '../../../assets/sprites/ariados.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
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
    sprite2: '../../../assets/sprites/nidoqueen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Blaine Dollar',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/dragonite.png',
    sprite2: '../../../assets/sprites/electrode.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jeff V',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/tyranitar.png',
    sprite2: '../../../assets/sprites/ampharos.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Wes B ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/dragonite.png',
    sprite2: '../../../assets/sprites/electrode.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Clint A',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Zane N',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lunatone.png',
    sprite2: '../../../assets/sprites/solrock.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Patrick T',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/metagross.png',
    sprite2: '../../../assets/sprites/electrode.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Melody A',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/nidoqueen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Pam C ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/ludicolo.png',
    sprite2: '../../../assets/sprites/magcargo.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Dylan L',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/politoed.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ben S',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/tyranitar.png',
    sprite2: '../../../assets/sprites/ampharos.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Andy M',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/weezing.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Santiago Rodriguez',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Matt L',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flareon.png',
    sprite2: '../../../assets/sprites/ariados.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
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
    firstName: 'Andrew Krekeler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Dave Richard',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/banette.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ben Capriola',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lunatone.png',
    sprite2: '../../../assets/sprites/solrock.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Matt Sbaa',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flareon.png',
    sprite2: '../../../assets/sprites/ariados.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Michael D',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Spencer D',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
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
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jill D',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mew.png',
    sprite2: '../../../assets/sprites/manectric.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Demi R',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/medicham.png',
    sprite2: '../../../assets/sprites/houndoom.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Grafton Roll',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flareon.png',
    sprite2: '../../../assets/sprites/ariados.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jason D',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arcanine.png',
    sprite2: '../../../assets/sprites/ninetales.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Henry L',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Daniel A',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sirajj H',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Peter O.S.',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jacqui D',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2006 US Nats";

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2006 US Nats";

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2006 US Nats";

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
