const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Tom Roos',
    flag: '../../../assets/flags/finland.png',
    sprite1: '../../../assets/sprites/absol.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/absol-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/raqyuaza-ex-lightning.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/mew-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/jolteon-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/espeon-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/vaporeon-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/eevee-2007.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/jirachi-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/jolteon-star.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/lickitung.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/castform.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-voltorb.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/elms-training-method.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/marys-request.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-mentor.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-scientist.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-adventurer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/scott.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-transceiver.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/super-scoop-up.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/windstorm.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/giant-stump.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/lightning-energy-power-keepers.png',
        numImg: '../../../assets/07.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/psychic-energy-power-keepers.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/2007-darkness-energy-special.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/2007-multi-energy.png',
        numImg: '../../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Steffen From',
    flag: '../../../assets/flags/denmark.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/magcargo.png',
    list: '../../../assets/list-icon.png',
    type: 'metal',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/flygon-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/vibrava-grass.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/trapinch-grass.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/magcargo.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/slugma.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/nidoqueen-metal.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/nidoran-metal.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/castform.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holons-magnemite.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/tv-reporter.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-mentor.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-scientist.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-adventurer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holons-farmer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-researcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-transceiver.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/rare-candy-2006.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/windstorm.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/pluspower.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/warp-point-2007.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/switch.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/giant-stump.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/lightning-energy-power-keepers.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/boost-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/react-energy.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/rainbow-energy-2006.png',
        numImg: '../../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Tsuguyoshi Yamato',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/empoleon.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/empoleon-ice-blade.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/prinplup.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/piplup.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/corsola.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/infernape.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/chimchar.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-electrode.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/castaway.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-mentor.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-adventurer.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-scientist.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holons-farmer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/mr-briney-compassion.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-transceiver.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/rare-candy-2006.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/cessation-crystal.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/cursed-stone.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/water-energy-power-keepers.png',
        numImg: '../../../assets/11.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/scramble-energy-promo.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/double-rainbow-energy.png',
        numImg: '../../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Yuki Akimura',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/scizor.png',
    list: '../../../assets/list-icon.png',
    type: 'metal',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/scizor-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/scyther-twin-play.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/copycat.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/elms-training-method.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/oaks-research.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/castaway.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/pokedex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/pluspower.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/energy-removal-2.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/pokemon-reversal.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/strangth-charm.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/crystal-shard-2007.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/cursed-stone.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/metal-energy-capsule.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/special-metal-energy-2006.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/boost-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/cyclone-energy.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Go Miyamoto',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/empoleon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Austin Reed',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/castform.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Diego Cassiraga',
    flag: '../../../assets/flags/argentina.png',
    sprite1: '../../../assets/sprites/banette.png',
    sprite2: '../../../assets/sprites/vaporeon.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/banette-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/banette.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/shuppet.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/vaporeon-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/umbreon-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/eevee-pop3.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/jolteon-star.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/elms-training-method.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/tv-reporter.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-mentor.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/castaway.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-scientist.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-adventurer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/scott.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-transceiver.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/crystal-shard-2007.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/buffer-peice.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/crystal-beach.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/battle-fronteir.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/psychic-energy-power-keepers.png',
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/water-energy-power-keepers.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/rainbow-energy-2006.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/2007-multi-energy.png',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Sami Sekkoum',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/absol.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Takuya Yoneda',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/lucario.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jeroen Robert',
    flag: '../../../assets/flags/belgium.png',
    sprite1: '../../../assets/sprites/electivire.png',
    sprite2: '../../../assets/sprites/dragonite.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Cristian Vidal',
    flag: '../../../assets/flags/chile.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/castform.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Steffen Eriksen',
    flag: '../../../assets/flags/denmark.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/magcargo.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ross Cawthon',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/castform.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/flygon-ex-psychic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/flygon-grass.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/vibrava-psychic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/trapinch-grass.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/castform.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/exeggutor-fighting.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/exeggcute-fighting.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/sceptile-ex-psychic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/treecko-psychic.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/mew-fire.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/mew-star.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/raqyuaza-ex-lightning.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/chimecho-metal.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holons-magnemite.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/lanette-net-search.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-mentor.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-researcher.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-scientist.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holons-farmer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-adventurer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/mr-briney-compassion.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-transceiver.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/rare-candy-2006.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/windstorm.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/pluspower.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/strangth-charm.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/giant-stump.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/lightning-energy-power-keepers.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/grass-energy-power-keepers.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/fire-energy-power-keepes.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/metal-energy-capsule.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/delta-rainbow-energy.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Alex Brosseau',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/banette.png',
    sprite2: '../../../assets/sprites/lucario.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Eric Craig',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/absol.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Yee Wei Chun',
    flag: '../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/raichu.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jeffrey Young',
    flag: '../../../assets/flags/new-zealand.png',
    sprite1: '../../../assets/sprites/lucario.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Miguel Bernal',
    flag: '../../../assets/flags/mexico.png',
    sprite1: '../../../assets/sprites/banette.png',
    sprite2: '../../../assets/sprites/vaporeon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Pablo Meza',
    flag: '../../../assets/flags/mexico.png',
    sprite1: '../../../assets/sprites/banette.png',
    sprite2: '../../../assets/sprites/vaporeon.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/banette-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/banette.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/shuppet.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/vaporeon-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/umbreon-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/eevee-pop3.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/jolteon-star.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/elms-training-method.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/tv-reporter.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-mentor.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/castaway.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-scientist.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-adventurer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/scott.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-transceiver.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/crystal-shard-2007.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/buffer-peice.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/crystal-beach.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/battle-fronteir.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/psychic-energy-power-keepers.png',
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/water-energy-power-keepers.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/rainbow-energy-2006.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/2007-multi-energy.png',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Tatsuya Kadowaki',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/empoleon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Gino Lombardi',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/lucario.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/lucario.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/riolu.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/gligar.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/roselia.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/latios-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/jirachi-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/mew-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/castform.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/castaway.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-mentor.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/copycat.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-adventurer.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-scientist.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/scott.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-transceiver.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/pluspower.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/warp-point-2007.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/cessation-crystal.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/strangth-charm.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/buffer-peice.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/crystal-shard-2007.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/cursed-stone.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/fighting-energy-power-keepers.png',
        numImg: '../../../assets/09.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/psychic-energy-power-keepers.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/2007-multi-energy.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Simone Soldo',
    flag: '../../../assets/flags/italy.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/delcatty.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'John Kettler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/delcatty.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Gerardo Ángeles',
    flag: '../../../assets/flags/mexico.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/raichu.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Yuta Komatsuda',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/banette.png',
    sprite2: '../../../assets/sprites/solrock.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jason Windham',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/castform.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Liz Reed',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/infernape.png',
    sprite2: '../../../assets/sprites/delcatty.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Daniel Cohen',
    flag: '../../../assets/flags/austria.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/rhyperior.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Evens Cheung',
    flag: '../../../assets/flags/norway.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/kingdra.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jason Klaczynski',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/banette.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jeremy Maron',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/metagross.png',
    sprite2: '../../../assets/sprites/dragonite.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Max Benczek',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/absol.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  }
]

let seniors = [
  {
    firstName: 'Jeremy Scharff-Kim',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/banette.png',
    sprite2: '../../../assets/sprites/solrock.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/banette-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/banette.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/shuppet.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/solrock-fighting.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/solrock-psychic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/lunatone-fighting.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-electrode.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/elms-training-method.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/tv-reporter.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/castaway.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/scott.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-mentor.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-adventurer.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-scientist.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-transceiver.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/pokemon-reversal.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/warp-point-2007.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/energy-switch.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/buffer-peice.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/crystal-shard-2007.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/strangth-charm.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/crystal-beach.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/phoebes-stadium.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/psychic-energy-power-keepers.png',
        numImg: '../../../assets/08.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/fighting-energy-power-keepers.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/rainbow-energy-2006.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/cyclone-energy.png',
        numImg: '../../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Akira Miyazaki',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/empoleon.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/empoleon-ice-blade.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/prinplup.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/piplup.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/corsola.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-electrode.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/castaway.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-mentor.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-adventurer.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-scientist.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holons-farmer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/copycat.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/mr-briney-compassion.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-transceiver.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/rare-candy-2006.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/cessation-crystal.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/cursed-stone.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/water-energy-power-keepers.png',
        numImg: '../../../assets/11.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/scramble-energy-promo.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/double-rainbow-energy.png',
        numImg: '../../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Wataru Hasegawa',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/marowak.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/empoleon-ice-blade.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/prinplup.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/piplup.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/marowak-delta.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/cubone.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/roselia.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-electrode.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/absol-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/wally-training.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/castaway.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/copycat.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-mentor.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-adventurer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-scientist.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/scott.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-transceiver.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/warp-point-2007.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/cessation-crystal.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/strangth-charm.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/cursed-stone.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/water-energy-power-keepers.png',
        numImg: '../../../assets/11.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/scramble-energy-promo.png',
        numImg: '../../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Alexander DaCosta',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/castform.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/flygon-ex-psychic.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/flygon-grass.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/vibrava-psychic.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/trapinch-grass.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/castform.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/exeggutor-fighting.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/exeggcute-fighting.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/sceptile-ex-psychic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/treecko-psychic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/mew-fire.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/mew-star.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/raqyuaza-ex-lightning.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/fearow-lightning.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/spearow.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/chimecho-metal.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-voltorb.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-mentor.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-researcher.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/castaway.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-scientist.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-adventurer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-transceiver.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/rare-candy-2006.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/windstorm.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/strangth-charm.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/grass-energy-power-keepers.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/lightning-energy-power-keepers.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/metal-energy-capsule.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/delta-rainbow-energy.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Tomas Beltrame',
    flag: '../../../assets/flags/argentina.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/delcatty.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Miska Saari',
    flag: '../../../assets/flags/finland.png',
    sprite1: '../../../assets/sprites/absol.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jeffrey Vernola',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/absol.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Geoffrey Sauk',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flareon.png',
    sprite2: '../../../assets/sprites/ariados.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Bobby Malec',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/metagross.png',
    sprite2: '../../../assets/sprites/meganium.png',
    list: '../../../assets/list-icon.png',
    type: 'metal',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/metagross-psychic.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/metang-lightning.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/beldum-lightning.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/meganium-fightning.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/meganium.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/bayleef-fighting.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/chikorita-fighting.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/castform.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/sceptile-ex-psychic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/treecko-psychic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/mew-fire.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/mew-star.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holons-magnemite.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-mentor.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-researcher.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-adventurer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-scientist.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holons-farmer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-transceiver.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/rare-candy-2006.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/windstorm.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/pluspower.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/strangth-charm.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/psychic-energy-power-keepers.png',
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/energy/metal-energy-capsule.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Riona Doi',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Peter Lind',
    flag: '../../../assets/flags/denmark.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/magcargo.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tais Andersen',
    flag: '../../../assets/flags/denmark.png',
    sprite1: '../../../assets/sprites/sceptile.png',
    sprite2: '../../../assets/sprites/metagross.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Breton Bradner',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/machamp.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Keaton Gill',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lucario.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Benjamin Sauk',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/medicham.png',
    sprite2: '../../../assets/sprites/banette.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Garrett Farrington',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flareon.png',
    sprite2: '../../../assets/sprites/ariados.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  }
]

let juniors = [
  {
    firstName: 'Jun Hasebe',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/flygon-ex-psychic.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/flygon-grass.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/vibrava-psychic.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/trapinch-grass.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/jolteon-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/vaporeon-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/eevee-metal.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/absol-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/fearow-lightning.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/spearow.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/budew.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/castform.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-voltorb.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/elms-training-method.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/copycat.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-mentor.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-adventurer.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-scientist.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-researcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/fieldworker.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-transceiver.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/rare-candy-2006.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/windstorm.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/warp-point-2007.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/crystal-shard-2007.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/power-tree.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/psychic-energy-power-keepers.png',
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/lightning-energy-power-keepers.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Hiroki Yano',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/scizor.png',
    list: '../../../assets/list-icon.png',
    type: 'metal',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/scizor-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/scyther-twin-play.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/copycat.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/elms-training-method.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/oaks-research.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/castaway.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/pokedex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/pluspower.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/energy-removal-2.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/pokemon-reversal.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/strangth-charm.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/crystal-shard-2007.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/cursed-stone.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/metal-energy-capsule.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/special-metal-energy-2006.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/boost-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/cyclone-energy.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Andrew Lin Sun Choong',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/machamp.png',
    sprite2: '../../../assets/sprites/lucario.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Paul Atanassov',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/flareon.png',
    sprite2: '../../../assets/sprites/ariados.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Arnoud Van Bemmelen',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Vy Le',
    flag: '../../../assets/flags/norway.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/scizor.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Anna Reimer',
    flag: '../../../assets/flags/sweden.png',
    sprite1: '../../../assets/sprites/machamp.png',
    sprite2: '../../../assets/sprites/lucario.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Maito Nakai',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Fares Sekkoum',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/flareon.png',
    sprite2: '../../../assets/sprites/ariados.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
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
