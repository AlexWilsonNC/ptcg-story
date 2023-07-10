const masterList = document.querySelector('.uk-masters-ol');
const seniorList = document.querySelector('.uk-seniors-ol');
const juniorList = document.querySelector('.uk-juniors-ol');
const tenList = document.querySelector('.ten-ol');
const fiveList = document.querySelector('.five-ol');
const sixList = document.querySelector('.six-ol');
const sevenList = document.querySelector('.seven-ol');
const eightList = document.querySelector('.eight-ol');
const nineList = document.querySelector('.nine-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
    {
        firstName: 'Faisal Khan',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/blaziken.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
              cardImg: '../../assets/cards/2004-2006/blaziken.png',
              numImg: '../../assets/03.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/blaziken-ex.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/combusken.png',
              numImg: '../../assets/03.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/torchic.png',
              numImg: '../../assets/04.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/delcatty.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/skitty.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/ss.060.dunsparce.jpg',
              numImg: '../../assets/04.png',
              oldCard: true
            },
            {
              cardImg: '../../assets/cards/2004-2006/rayquaza-ex.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/e-reader/oracle.jpg',
              numImg: '../../assets/04.png',
              oldCard: true
            },
            {
              cardImg: '../../assets/cards/2004-2006/tv-reporter-e-reader.png',
              numImg: '../../assets/03.png',
              radiusCard: true
            },
            {
              cardImg: '../../assets/cards/e-reader/copycat-e-reader.jpg',
              numImg: '../../assets/03.png',
              oldCard: true
            },
            {
                cardImg: '../../assets/cards/2004-2006/hl.092.stevens_advice.png',
                numImg: '../../assets/02.png',
                radiusCard: true
              },
            {
              cardImg: '../../assets/cards/e-reader/desert-shaman.jpg',
              numImg: '../../assets/01.png',
              oldCard: true
            },
            {
              cardImg: '../../assets/cards/e-reader/aq.136.town_volunteers.jpg',
              numImg: '../../assets/01.png',
              oldCard: true
            },
            {
              cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
              numImg: '../../assets/03.png'
            },
            {
              cardImg: '../../assets/cards/e-reader/switch.jpg',
              numImg: '../../assets/01.png',
              oldCard: true
            },
            {
              cardImg: '../../assets/cards/2004-2006/warp-point.png',
              numImg: '../../assets/01.png',
              oldCard: true
            },
            {
              cardImg: '../../assets/cards/2004-2006/hl.085.ancient_technical_machine_rock.jpg',
              numImg: '../../assets/01.png',
              oldCard: true
            },
            {
              cardImg: '../../assets/cards/2004-2006/high-pressure-system.png',
              numImg: '../../assets/01.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/sk.137.mystery_zone.jpg',
              numImg: '../../assets/01.png',
              oldCard: true
            },
            {
              cardImg: '../../assets/cards/e-reader/fire-energy.jpg',
              numImg: '../../assets/11.png',
              oldCard: true
            },
            {
              cardImg: '../../assets/cards/e-reader/lightning-energy.jpg',
              numImg: '../../assets/02.png',
              oldCard: true
            },
            {
              cardImg: '../../assets/cards/old-energy/multi-energy-e-reader.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/old-energy/warp-energy.png',
              numImg: '../../assets/01.png'
            },
          ]
    },
    {
        firstName: 'Ian Fotheringham',
        sprite1: '../../assets/sprites/kyogre.png',
        sprite2: '../../assets/sprites/manectric.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2004-2006',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'John Hawkins',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/swampert.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2004-2006',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2004-2006',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

let seniors = [
    {
        firstName: 'Elsina Mantzel',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/blaziken.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
              cardImg: '../../assets/cards/2004-2006/blaziken.png',
              numImg: '../../assets/03.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/blaziken-ex.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/combusken.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/torchic.png',
              numImg: '../../assets/04.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/delcatty.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/skitty.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/ma.004.team_aquas_manectric.jpg',
              numImg: '../../assets/02.png',
              radiusCard: true
            },
            {
              cardImg: '../../assets/cards/2004-2006/aquas-electrike.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/ss.060.dunsparce.jpg',
              numImg: '../../assets/02.png',
              oldCard: true
            },
            {
              cardImg: '../../assets/cards/2004-2006/rayquaza-ex.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/prof-oaks-research-old.png',
              numImg: '../../assets/04.png'
            },
            {
              cardImg: '../../assets/cards/e-reader/oracle.jpg',
              numImg: '../../assets/03.png',
              oldCard: true
            },
            {
              cardImg: '../../assets/cards/e-reader/copycat-e-reader.jpg',
              numImg: '../../assets/02.png',
              oldCard: true
            },
            {
                cardImg: '../../assets/cards/2004-2006/tv-reporter-e-reader.png',
                numImg: '../../assets/01.png',
                radiusCard: true
              },
            {
              cardImg: '../../assets/cards/e-reader/elm-training-method.jpg',
              numImg: '../../assets/01.png',
              oldCard: true
            },
            {
              cardImg: '../../assets/cards/e-reader/aq.136.town_volunteers.jpg',
              numImg: '../../assets/01.png',
              oldCard: true
            },
            {
              cardImg: '../../assets/cards/2004-2006/rs.089.professor_birch.jpg',
              numImg: '../../assets/01.png',
              oldCard: true
            },
            {
              cardImg: '../../assets/cards/2004-2006/ma.071.archie.jpg',
              numImg: '../../assets/01.png',
              radiusCard: true
            },
            {
              cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
              numImg: '../../assets/04.png'
            },
            {
              cardImg: '../../assets/cards/e-reader/switch.jpg',
              numImg: '../../assets/01.png',
              oldCard: true
            },
            {
              cardImg: '../../assets/cards/2004-2006/hl.085.ancient_technical_machine_rock.jpg',
              numImg: '../../assets/01.png',
              oldCard: true
            },
            {
              cardImg: '../../assets/cards/e-reader/fire-energy.jpg',
              numImg: '../../assets/13.png',
              oldCard: true
            },
            {
              cardImg: '../../assets/cards/e-reader/lightning-energy.jpg',
              numImg: '../../assets/04.png',
              oldCard: true
            },
          ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // // list../../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2004-2006',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

let juniors = [
    {
        firstName: 'Steven Widlic',
        sprite1: '../../assets/sprites/sceptile.png',
        sprite2: '../../assets/sprites/muk.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2004-2006/sceptile-ex.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/rs.020.sceptile.jpg',
                numImg: '../../assets/02.png',
                radiusCard: true
            },
            {
                cardImg: '../../assets/cards/2004-2006/rs.032.grovyle.jpg',
                numImg: '../../assets/04.png',
                radiusCard: true
            },
            {
                cardImg: '../../assets/cards/2004-2006/treecko-e-reader.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/dr.096.muk_ex.jpg',
                numImg: '../../assets/03.png',
                radiusCard: true
            },
            {
                cardImg: '../../assets/cards/2004-2006/dr.057.grimer.jpg',
                numImg: '../../assets/03.png',
                radiusCard: true
            },
            {
                cardImg: '../../assets/cards/2004-2006/ss.060.dunsparce.jpg',
                numImg: '../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/e-reader/marill.jpg',
                numImg: '../../assets/01.png',
                radiusCard: true
            },
            {
                cardImg: '../../assets/cards/e-reader/copycat-e-reader.jpg',
                numImg: '../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/e-reader/oracle.jpg',
                numImg: '../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/e-reader/elm-training-method.jpg',
                numImg: '../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2004-2006/tv-reporter-e-reader.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/e-reader/nurse.jpg',
                numImg: '../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/e-reader/town-volunteers.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2004-2006/switch-e-reader.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/warp-point.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/e-reader/grass-energy.jpg',
                numImg: '../../assets/14.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/e-reader/boost-energy.jpg',
                numImg: '../../assets/03.png',
                oldCard: true
            },
        ]
    },
    {
        firstName: 'Evens Cheung',
        sprite1: '../../assets/sprites/blaziken.png',
        sprite2: '../../assets/sprites/claydol.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2004-2006/blaziken-ex.png',
                numImg: '../../assets/02.png'
              },
            {
              cardImg: '../../assets/cards/2004-2006/blaziken.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/combusken.png',
              numImg: '../../assets/03.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/torchic.png',
              numImg: '../../assets/04.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/linoone.png',
              numImg: '../../assets/03.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/zigzagoon.png',
              numImg: '../../assets/03.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/ma.008.team_magmas_claydol.jpg',
              numImg: '../../assets/02.png',
              radiusCard: true
            },
            {
              cardImg: '../../assets/cards/2004-2006/magmas-baltoy.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/wobbuffet-safegaurd.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/jirachi-dual.png',
              numImg: '../../assets/01.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/prof-oaks-research-old.png',
              numImg: '../../assets/04.png'
            },
            {
              cardImg: '../../assets/cards/e-reader/copycat-e-reader.jpg',
              numImg: '../../assets/02.png',
              oldCard: true
            },
            {
                cardImg: '../../assets/cards/e-reader/nurse.jpg',
                numImg: '../../assets/02.png',
                oldCard: true
              },
            {
              cardImg: '../../assets/cards/e-reader/aq.126.juggler.jpg',
              numImg: '../../assets/01.png',
              oldCard: true
            },
            {
              cardImg: '../../assets/cards/2004-2006/life-herb.png',
              numImg: '../../assets/03.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/e-reader/warp-point.jpg',
              numImg: '../../assets/02.png',
              oldCard: true
            },
            {
              cardImg: '../../assets/cards/2004-2006/hl.085.ancient_technical_machine_rock.jpg',
              numImg: '../../assets/01.png',
              oldCard: true
            },
            {
              cardImg: '../../assets/cards/2004-2006/ancient-tomb.png',
              numImg: '../../assets/01.png'
            },
            {
              cardImg: '../../assets/cards/e-reader/fire-energy.jpg',
              numImg: '../../assets/12.png',
              oldCard: true
            },
            {
              cardImg: '../../assets/cards/e-reader/psychic-energy.jpg',
              numImg: '../../assets/06.png',
              oldCard: true
            },
          ]
    },
    {
        firstName: 'Matr Frid',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2004-2006',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2004-2006',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

let tenEvent = [
    {
        firstName: 'Dennis Draheim',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/swampert.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2004-2006/rs.013.swampert.jpg',
                numImg: '../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2004-2006/ma.095.swampert_ex.jpg',
                numImg: '../../assets/01.png',
                exCard: true
            },
            {
                cardImg: '../../assets/cards/2004-2006/marshtomp.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/mudkip.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/ss.060.dunsparce.jpg',
                numImg: '../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2004-2006/delcatty.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/skitty.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/suicune-ex.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/hl.094.kyogre_ex.jpg',
                numImg: '../../assets/01.png',
                radiusCard: true
            },
            {
                cardImg: '../../assets/cards/e-reader/oracle.jpg',
                numImg: '../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/e-reader/desert-shaman.jpg',
                numImg: '../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2004-2006/prof-oaks-research-old.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/e-reader/fisherman.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/pokemon-reversal-e-reader.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/energy-restore.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/warp-point.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/switch-e-reader.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/e-reader/crystal-shard.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2004-2006/island-cave.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/e-reader/water-energy.jpg',
                numImg: '../../assets/15.png',
                oldCard: true
            },
        ]
    },
    {
        firstName: 'Max Benczek',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/swampert.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2004-2006',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

let fiveEvent = [
    {
        firstName: 'Andy Cheung',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/gardevoir.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
              cardImg: '../../assets/cards/2004-2006/gardevoir-ex.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/gardevoir.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/kirlia.png',
              numImg: '../../assets/04.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/ralts.png',
              numImg: '../../assets/04.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/ma.008.team_magmas_claydol.jpg',
              numImg: '../../assets/03.png',
              oldCard: true
            },
            {
              cardImg: '../../assets/cards/2004-2006/magmas-baltoy.png',
              numImg: '../../assets/03.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/wobbuffet-safegaurd.png',
              numImg: '../../assets/03.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/ss.060.dunsparce.jpg',
              numImg: '../../assets/02.png',
              oldCard: true
            },
            {
              cardImg: '../../assets/cards/e-reader/copycat-e-reader.jpg',
              numImg: '../../assets/02.png',
              oldCard: true
            },
            {
              cardImg: '../../assets/cards/2004-2006/prof-oaks-research-old.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/bills-maintenance.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/e-reader/ex.155.moo_moo_milk.jpg',
              numImg: '../../assets/04.png',
              oldCard: true
            },
            {
              cardImg: '../../assets/cards/2004-2006/switch-e-reader.png',
              numImg: '../../assets/03.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/energy-restore.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2004-2006/rg.101.potion.jpg',
              numImg: '../../assets/02.png',
              radiusCard: true
            },
            {
              cardImg: '../../assets/cards/2004-2006/hl.085.ancient_technical_machine_rock.jpg',
              numImg: '../../assets/01.png',
              radiusCard: true
            },
            {
              cardImg: '../../assets/cards/2004-2006/magnetic-storm.png',
              numImg: '../../assets/01.png'
            },
            {
              cardImg: '../../assets/cards/e-reader/psychic-energy.jpg',
              numImg: '../../assets/14.png',
              oldCard: true
            },
            {
              cardImg: '../../assets/cards/e-reader/boost-energy.jpg',
              numImg: '../../assets/04.png',
              oldCard: true
            },
          ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // // list../../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2004-2006',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

let sixEvent = [
    {
        firstName: 'André Moshellen',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/kyogre.png',
        list: '../../assets/list-icon.png',
        type: 'water',
        deck: [
            {
                cardImg: '../../assets/cards/2004-2006/aquas-kyogre.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/aquas-walrein.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/aquas-sealeo.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/aquas-spheal.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/aquas-sharpedo.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/aquas-carvanha.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/aquas-mightyena.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/aquas-poocheyena.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/e-reader/bills-maintenance.jpg',
                numImg: '../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/e-reader/copycat-e-reader.jpg',
                numImg: '../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2004-2006/ma.069.team_aqua_schemer.jpg',
                numImg: '../../assets/03.png',
                radiusCard: true
            },
            {
                cardImg: '../../assets/cards/2004-2006/ma.077.team_aqua_conspirator.jpg',
                numImg: '../../assets/02.png',
                radiusCard: true
            },
            {
                cardImg: '../../assets/cards/2004-2006/ma.071.archie.jpg',
                numImg: '../../assets/02.png',
                radiusCard: true
            },
            {
                cardImg: '../../assets/cards/2004-2006/tv-reporter-e-reader.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/lanette-net-search-e-reader.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2004-2006/hl.092.stevens_advice.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/e-reader/ex.149.professor_oaks_research.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/e-reader/aq.136.town_volunteers.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/e-reader/ex.155.moo_moo_milk.jpg',
                numImg: '../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2004-2006/ma.075.team_aqua_ball.jpg',
                numImg: '../../assets/02.png',
                radiusCard: true
            },
            {
                cardImg: '../../assets/cards/2004-2006/warp-point.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/e-reader/water-energy.jpg',
                numImg: '../../assets/14.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/e-reader/ex.158.darkness_energy.jpg',
                numImg: '../../assets/04.png',
                oldCard: true
            },
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // // list../../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2004-2006',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

let sevenEvent = [
    {
        firstName: 'Ivan Grixti',
        sprite1: '../../assets/sprites/espeon.png',
        sprite2: '../../assets/sprites/hitmonchan.png',
        // // list../../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        // list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2004-2006',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Carlos Cachia',
        sprite1: '../../assets/sprites/aerodactyl.png',
        sprite2: '../../assets/sprites/egg.png',
        // // list../../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        // list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2004-2006',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Alexander Farrugia', //https://www.pojo.com/KillerDecks/2004/National%20Malta%20Pokemon%20Tournament.htm
        sprite1: '../../assets/sprites/wigglytuff.png',
        sprite2: '../../assets/sprites/scyther.png',
        list: '../../assets/list-icon.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/base-fossil/ju.032.wigglytuff.jpg',
                numImg: '../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/base-fossil/ju.054.jigglypuff.jpg',
                numImg: '../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/base-fossil/ju.026.scyther.jpg',
                numImg: '../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/base-fossil/n1.020.cleffa.jpg',
                numImg: '../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/base-fossil/g2.069.erikas_jigglypuff.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/base-fossil/g1.042.erikas_dratini.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/base-fossil/n1.012.pichu_.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/base-fossil/n2.066.tyrogue.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
                numImg: '../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/base-fossil/bs.071.computer_search.jpg',
                numImg: '../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/base-fossil/bs.074.item_finder.jpg',
                numImg: '../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
                numImg: '../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/base-fossil/bs.084.pluspower.jpg',
                numImg: '../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
                numImg: '../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/e-reader/aq.130.pokemon_fan_club.jpg',
                numImg: '../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/base-fossil/n1.085.energy_charge.jpg',
                numImg: '../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/base-fossil/bs.095.switch.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/e-reader/town-volunteers.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/base-fossil/n1.086.focus_band.jpg',
                numImg: '../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/base-fossil/n1.093.gold_berry.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2004-2006/dr.086.low_pressure_system.jpg',
                numImg: '../../assets/01.png',
                radiusCard: true
            },
            {
                cardImg: '../../assets/cards/base-fossil/bs.099.grass_energy.jpg',
                numImg: '../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
                numImg: '../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/base-fossil/n1.105.recycle_energy.jpg',
                numImg: '../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/e-reader/boost-energy.jpg',
                numImg: '../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/e-reader/warp-energy.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
        ]
    },
    {
        firstName: 'Glenn Steer',
        sprite1: '../../assets/sprites/swampert.png',
        sprite2: '../../assets/sprites/wailord.png',
        // // list../../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        // list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2004-2006',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

let eightEvent = [
    {
        firstName: 'eeee',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
        // // list../../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        // list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2004-2006',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

let nineEvent = [
    {
        firstName: 'eeee',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
        // // list../../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        // list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2004-2006',
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

        if (item.list === '../../assets/list-icon.png') {
            console.log('hey')
            item_element.addEventListener('click', function () {
                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2004 UK Nats";

                if (item.type == 'psychic') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/psychic-bg.png)";
                } else if (item.type == 'fire') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fire-bg.png)";
                } else if (item.type == 'fairy') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fairy-bg.png)";
                } else if (item.type == 'normal') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/normal-bg.png)";
                } else if (item.type == '') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/-bg.png)";
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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2004 Germany Nats";

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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2004 Norway Nats";

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

// ten
function displayList4(array = []) {
    tenList.innerHTML = '';

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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2004 Germany Nats";

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

        tenList.appendChild(item_element);
    }
}

// five
function displayList5(array = []) {
    fiveList.innerHTML = '';

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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2004 Norway Nats";

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

        fiveList.appendChild(item_element);
    }
}

// six
function displayList6(array = []) {
    sixList.innerHTML = '';

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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 Norway Nats";

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

        sixList.appendChild(item_element);
    }
}

// seven
function displayList7(array = []) {
    sevenList.innerHTML = '';

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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2004 Malta Nats";

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

        sevenList.appendChild(item_element);
    }
}

// eight
function displayList8(array = []) {
    eightList.innerHTML = '';

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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 Denmark Nats";

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

        eightList.appendChild(item_element);
    }
}

// nine
function displayList9(array = []) {
    nineList.innerHTML = '';

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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 Brazil Nats";

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

        nineList.appendChild(item_element);
    }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
displayList2(seniors);
displayList3(juniors);
displayList4(tenEvent);
displayList5(fiveEvent);
displayList6(sixEvent);
displayList7(sevenEvent);
displayList8(eightEvent);
displayList9(nineEvent);