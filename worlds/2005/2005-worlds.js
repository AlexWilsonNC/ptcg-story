const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Jeremy Maron',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/nidoqueen.png',
    list: '../../assets/list-icon.png',
    type: 'grass',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006/nidoqueen-fighting.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/nidorina-grass.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/nidoran-f-grass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeot.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeotto.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgey.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/milotic.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/feebas-ascension.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/celios-network.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/copycat.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/mr-briney-compassion-e-reader.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/great-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/desert-ruins.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/grass-energy-emerald.png',
        numImg: '../../assets/06.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/fighting-energy-emerald.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-old.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/heal-energy.png',
        numImg: '../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Ross Cawthon',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/tyranitar.png',
    sprite2: '../../assets/sprites/electrode.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006/dark-tyranitar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/dark-pupitar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/larvitar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/electrode-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/voltorb-ram.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/dunsparce.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeot.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeotto.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgey.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/magcargo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/slugma.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/magmar.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/jirachi.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/celios-network.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/copycat.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/tv-reporter-e-reader.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pow-hand-extension.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/swoop-teleporter.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/darkness-energy-e-reader.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/heal-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/scramble-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/rainbow-energy-e-reader.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Pablo Meza',
    flag: '../../assets/flags/mexico.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/nidoqueen.png',
    list: '../../assets/list-icon.png',
    type: 'grass',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006/nidoqueen-fighting.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/nidorina-grass.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/nidoran-f-grass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeot.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeotto.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgey.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/milotic.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/feebas-ascension.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/celios-network.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/copycat.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/mr-briney-compassion-e-reader.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/great-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/desert-ruins.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/grass-energy-emerald.png',
        numImg: '../../assets/06.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/fighting-energy-emerald.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-old.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/heal-energy.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Ken Yukuhiro',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/tyranitar.png',
    sprite2: '../../assets/sprites/magcargo.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006/dark-tyranitar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/dark-tyranitar-body.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/dark-pupitar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/larvitar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/magcargo.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/slugma.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/dunsparce.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/tv-reporter-e-reader.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/celios-network.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/mr-briney-compassion-e-reader.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/vs-seeker.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/warp-point.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/desert-ruins.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/fighting-energy-emerald.png',
        numImg: '../../assets/06.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/darkness-energy-e-reader.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/r-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/scramble-energy.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-old.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/heal-energy.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Jaime Guerrero',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/tyranitar.png',
    sprite2: '../../assets/sprites/ampharos.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sami Sekkoum',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/medicham.png',
    sprite2: '../../assets/sprites/ninetales.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Eric Permenter',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/steelix.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tsuguyoshi Yamato',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/ludicolo.png',
    sprite2: '../../assets/sprites/magcargo.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006/ludicolo.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/lombre.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/lotad.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/magcargo.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/slugma.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/dunsparce.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/wobbuffet-safegaurd.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/celios-network.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/tv-reporter-e-reader.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/mr-briney-compassion-e-reader.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/strength-charm.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/crystal-shard.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/exp-all.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tomb.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/desert-ruins.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/water-energy-emerald.png',
        numImg: '../../assets/06.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/psychic-energy-emerald.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-old.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/heal-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/scramble-energy-promo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/multi-energy-e-reader.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Yuki Fujimori',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/zapdos.png',
    sprite2: '../../assets/sprites/rayquaza.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jason Klaczynski',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/medicham.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Chris Schell',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blaziken.png',
    list: '../../assets/list-icon.png',
    type: 'fire',
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
        cardImg: '../../assets/cards/2004-2006/dunsparce.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeot.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeotto.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgey.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rayquaza-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/moltres-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/jirachi-dual.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/celios-network.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/tv-reporter-e-reader.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/copycat.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/switch-e-reader.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/warp-point.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/high-pressure-system.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/fire-energy-emerald.png',
        numImg: '../../assets/10.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/multi-energy-e-reader.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Jordan Hill',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/ludicolo.png',
    sprite2: '../../assets/sprites/magcargo.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Adam Vernola',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/tyranitar.png',
    sprite2: '../../assets/sprites/ampharos.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ashley Bennett',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/steelix.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Adam Maldonado',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/steelix.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Faisal Khan',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/ludicolo.png',
    sprite2: '../../assets/sprites/magcargo.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Go Miyamoto',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/zapdos.png',
    sprite2: '../../assets/sprites/rayquaza.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'William Hung',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/sharpedo.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006/sharpedo-ex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/carvanha.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/jirachi.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/wobbuffet-safegaurd.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/tv-reporter-e-reader.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/wallys-training-e-reader.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/scott-old.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/energy-removal-2-e-reader.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-reversal-e-reader.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/swoop-teleporter.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/crystal-shard.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/battle-fronteir.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/darkness-energy-e-reader.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/metal-energy-e-reader.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/dark-metal-energy-rocket.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/rainbow-energy-e-reader.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Yohei Takeda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/electrode.png',
    sprite2: '../../assets/sprites/delcatty.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Bin Xiu',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/tyranitar.png',
    sprite2: '../../assets/sprites/ampharos.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006/dark-tyranitar-body.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/dark-tyranitar.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/dark-pupitar-explosive.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/larvitar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/dark-ampharos.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/dark-flaaffy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/mareep.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/dunsparce.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/jirachi.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeot.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeotto.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgey.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/celios-network.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/copycat.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/scott-old.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/switch-e-reader.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/tr.089.rockets_poke_ball.jpg',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-tricky-gym.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/desert-ruins.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/fighting-energy-emerald.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/lightning-energy-emerald.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/darkness-energy-e-reader.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/heal-energy.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-old.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/rainbow-energy-e-reader.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/scramble-energy.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Anna Schipper',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/ludicolo.png',
    sprite2: '../../assets/sprites/grumpig.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Patrick Kennedy',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/moltres.png',
    sprite2: '../../assets/sprites/zapdos.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Shigeru Kanda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/ludicolo.png',
    sprite2: '../../assets/sprites/magcargo.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Matthew Yuen',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/zapdos.png',
    sprite2: '../../assets/sprites/rayquaza.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Martin Moreno',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/medicham.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nicholas Caporelli',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/medicham.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Brent Siebenkittel',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/ludicolo.png',
    sprite2: '../../assets/sprites/magcargo.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jeroen Robert',
    flag: '../../assets/flags/belgium.png',
    sprite1: '../../assets/sprites/slowking.png',
    sprite2: '../../assets/sprites/magcargo.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Matthew Moss',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/medicham.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Steve Perucca',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/zapdos.png',
    sprite2: '../../assets/sprites/rayquaza.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Hideki Sano',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/machamp.png',
    sprite2: '../../assets/sprites/pidgeot.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Gregory Cresswell',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/sharpedo.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
      },
    ]
  }
]

let seniors = [
  {
    firstName: 'Stuart Benson',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/medicham.png',
    list: '../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006/medicham-ex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/meditite.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/meditite-e-reader.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/jirachi.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/wobbuffet-safegaurd.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/tv-reporter-e-reader.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/wallys-training-e-reader.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/scott-old.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/swoop-teleporter.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pow-hand-extension.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/energy-removal-2-e-reader.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/team-aqua-hideout.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/magnetic-storm.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/fighting-energy-emerald.png',
        numImg: '../../assets/08.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/psychic-energy-emerald.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/metal-energy-e-reader.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Takashi Yoneda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/tyranitar.png',
    sprite2: '../../assets/sprites/pidgeot.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006/dark-tyranitar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/dark-tyranitar-body.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/dark-pupitar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/larvitar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeot.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeotto.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgey.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/dunsparce.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/jirachi.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/bills-maintenance.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/celios-network.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/copycat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/scott-old.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/desert-ruins.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tomb.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/fighting-energy-emerald.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/darkness-energy-e-reader.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/scramble-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/heal-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/r-energy.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/metal-energy-e-reader.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Daniel Richard',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/ludicolo.png',
    sprite2: '../../assets/sprites/magcargo.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006/ludicolo.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/ludicolo-happy-dance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/lombre-e-reader.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/lotad-e-reader.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/magcargo.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/slugma.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/ninetales.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/vulpix.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/dunsparce.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/jirachi.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/celios-network.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/tv-reporter-e-reader.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/copycat.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/mr-briney-compassion-e-reader.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/swoop-teleporter.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/desert-ruins.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/water-energy-emerald.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-old.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/rainbow-energy-e-reader.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/heal-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/scramble-energy-promo.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Andrew Knaack',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/zapdos.png',
    sprite2: '../../assets/sprites/rayquaza.png',
    list: '../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006/zapdos-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/moltres-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rayquaza-ex-dragon-burst.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rayquaza-star.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/magmar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/electrode-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/voltorb-recharge.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/tv-reporter-e-reader.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-mission.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/copycat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/master-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/super-scoop-up-2004.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pow-hand-extension.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/switch-e-reader.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/battle-fronteir.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/spcae-center.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/lightning-energy-emerald.png',
        numImg: '../../assets/10.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/fire-energy-emerald.png',
        numImg: '../../assets/07.png'
      }
    ]
  },
  {
    firstName: 'Steve Davis',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blastoise.png',
    sprite2: '../../assets/sprites/deoxys.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006/blastoise-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/squirtle.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/delcatty.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/skitty.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/magneton.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/magnemite.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/dunsparce.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/plusle.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/deoxys-ex-normal.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/deoxys-ex-attack.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/celios-network.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/tv-reporter-e-reader.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/copycat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/mr-stones-project.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/scott-old.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/swoop-teleporter.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/high-pressure-system.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/island-cave.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/water-energy-emerald.png',
        numImg: '../../assets/11.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/lightning-energy-emerald.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/psychic-energy-emerald.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Keaton Gill',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Bobby Malec',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/steelix.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
      },
    ]
  },
    {
      firstName: 'Jeffrey Vernola',
      flag: '../../assets/flags/usa.png',
      sprite1: '../../assets/sprites/tyranitar.png',
      sprite2: '../../assets/sprites/ampharos.png',
      list: '../../assets/sprites/blank.png',
      type: '',
      deck: [
        {
          cardImg: '../../assets/cards/2004-2006',
          numImg: '../../assets/04.png'
        },
      ]
    },
    {
      firstName: 'Paris Garavaglia', //www.pojo.com/KillerDecks/2004/Worlds%202004%20Tourney%20Report%20for%20Hedge.htm
      flag: '../../assets/flags/usa.png',
      sprite1: '../../assets/sprites/blastoise.png',
      sprite2: '../../assets/sprites/deoxys.png',
      list: '../../assets/list-icon.png',
      type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006/blastoise-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/wartortle.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/squirtle.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/delcatty.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/skitty.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/magneton.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/magnemite.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/dunsparce.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/plusle.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/deoxys-ex-normal.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/deoxys-ex-attack.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/celios-network.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/tv-reporter-e-reader.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/copycat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/mr-stones-project.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/scott-old.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/swoop-teleporter.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/high-pressure-system.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/island-cave.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/water-energy-emerald.png',
        numImg: '../../assets/11.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/lightning-energy-emerald.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/psychic-energy-emerald.png',
        numImg: '../../assets/02.png'
      }
    ]
    },
    {
      firstName: 'Daniel Mermelstein',
      flag: '../../assets/flags/usa.png',
      sprite1: '../../assets/sprites/blank.png',
      sprite2: '../../assets/hyphen.png',
      list: '../../assets/sprites/blank.png',
      type: '',
      deck: [
        {
          cardImg: '../../assets/cards/2004-2006',
          numImg: '../../assets/04.png'
        },
      ]
    },
    {
      firstName: 'Miranda Craig',
      flag: '../../assets/flags/usa.png',
      sprite1: '../../assets/sprites/blank.png',
      sprite2: '../../assets/sprites/steelix.png',
      list: '../../assets/sprites/blank.png',
      type: '',
      deck: [
        {
          cardImg: '../../assets/cards/2004-2006',
          numImg: '../../assets/04.png'
        },
      ]
    },
    {
      firstName: 'Joe Getsy',
      flag: '../../assets/flags/usa.png',
      sprite1: '../../assets/sprites/blank.png',
      sprite2: '../../assets/hyphen.png',
      list: '../../assets/sprites/blank.png',
      type: '',
      deck: [
        {
          cardImg: '../../assets/cards/2004-2006',
          numImg: '../../assets/04.png'
        },
      ]
    },
    {
      firstName: 'Nicholas Hatchel',
      flag: '../../assets/flags/usa.png',
      sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
      type: '',
      deck: [
        {
          cardImg: '../../assets/cards/2004-2006',
          numImg: '../../assets/04.png'
        },
      ]
    },
    {
      firstName: 'Joel Anderson',
      flag: '../../assets/flags/usa.png',
      sprite1: '../../assets/sprites/swampert.png',
      sprite2: '../../assets/sprites/articuno.png',
      list: '../../assets/sprites/blank.png',
      type: '',
      deck: [
        {
          cardImg: '../../assets/cards/2004-2006',
          numImg: '../../assets/04.png'
        },
      ]
    },
    {
      firstName: 'Zachary Krekeler',
      flag: '../../assets/flags/usa.png',
      sprite1: '../../assets/sprites/tyranitar.png',
      sprite2: '../../assets/sprites/ampharos.png',
      list: '../../assets/sprites/blank.png',
      type: '',
      deck: [
        {
          cardImg: '../../assets/cards/2004-2006',
          numImg: '../../assets/04.png'
        },
      ]
    },
    {
      firstName: 'Kevin Bennett',
      flag: '../../assets/flags/usa.png',
      sprite1: '../../assets/sprites/blank.png',
      sprite2: '../../assets/sprites/vileplume.png',
      list: '../../assets/list-icon.png',
      type: 'grass',
      deck: [
        {
          cardImg: '../../assets/cards/2004-2006/vileplume-ex.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2004-2006/bellossom.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2004-2006/gloom.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2004-2006/oddish.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2004-2006/jirachi.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2004-2006/tv-reporter-e-reader.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
          numImg: '../../assets/03.png'
        },
        {
          cardImg: '../../assets/cards/2004-2006/copycat.png',
          numImg: '../../assets/02.png'
        },
        {
          cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2004-2006/pokemon-reversal-e-reader.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2004-2006/swoop-teleporter.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2004-2006/energy-removal-2-e-reader.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2004-2006/master-ball.png',
          numImg: '../../assets/03.png'
        },
        {
          cardImg: '../../assets/cards/2004-2006/battle-fronteir.png',
          numImg: '../../assets/02.png'
        },
        {
          cardImg: '../../assets/cards/2004-2006/team-aqua-hideout.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/old-energy/grass-energy-emerald.png',
          numImg: '../../assets/11.png'
        },
        {
          cardImg: '../../assets/cards/old-energy/metal-energy-e-reader.png',
          numImg: '../../assets/03.png'
        }
      ]
    },
]

let juniors = [
  {
    firstName: 'Curran Hill',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/medicham.png',
    list: '../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006/medicham-ex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/meditite.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/jirachi.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/wobbuffet-safegaurd.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/tv-reporter-e-reader.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/wallys-training-e-reader.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/scott-old.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/energy-removal-2-e-reader.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/swoop-teleporter.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pow-hand-extension.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-reversal-e-reader.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/team-aqua-hideout.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/island-cave.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/fighting-energy-emerald.png',
        numImg: '../../assets/08.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/psychic-energy-emerald.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/metal-energy-e-reader.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Geoffrey Sauk',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/zapdos.png',
    sprite2: '../../assets/sprites/electrike.png',
    list: '../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006/zapdos-ex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/manectric.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/electrike.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/electrode.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/voltorb-recharge.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/mr-stones-project.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/scott-old.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/lanette-net-search-e-reader.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/prof-oaks-research-old.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/dual-ball-old.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-reversal-e-reader.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/super-scoop-up-2004.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/master-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/switch-e-reader.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/vs-seeker.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/battle-fronteir.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/spcae-center.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/lightning-energy-emerald.png',
        numImg: '../../assets/17.png'
      }
    ]
  },
  {
    firstName: 'Michael Gonzalez',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/ludicolo.png',
    sprite2: '../../assets/sprites/magcargo.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006/ludicolo.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/lombre-e-reader.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/lotad-e-reader.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/lotad-splash-wave.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/magcargo.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/slugma.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rhydon.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rhyhorn.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/dunsparce.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/jirachi.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/celios-network.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/copycat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-reversal-e-reader.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/swoop-teleporter.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/crystal-shard.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/strength-charm.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/desert-ruins.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/water-energy-emerald.png',
        numImg: '../../assets/07.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/heal-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-old.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/scramble-energy-promo.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Jefre Robert',
    flag: '../../assets/flags/belgium.png',
    sprite1: '../../assets/sprites/dragonite.png',
    sprite2: '../../assets/sprites/electrode.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006/dark-dragonite.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/dark-dragonair.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/dratini-dragon-song.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/sneasel-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/dark-electrode.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/voltorb-recharge.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/dunsparce.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/prof-oaks-research-old.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-mission.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/mr-briney-compassion-e-reader.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/copycat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/celios-network.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/wallys-training-e-reader.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/scott-old.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/swoop-teleporter.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-reversal-e-reader.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/switch-e-reader.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/warp-point.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-hideout.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/darkness-energy-e-reader.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/dark-metal-energy-rocket.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/rainbow-energy-e-reader.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/old-energy/r-energy.png',
        numImg: '../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Andy Cheung',
    flag: '../../assets/flags/norway.png',
     sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'James Ballard',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/tyranitar.png',
    sprite2: '../../assets/sprites/ampharos.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jon Siu',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Pablo Kingsley',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        numImg: '../../assets/04.png'
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

        if (item.list === '../../assets/list-icon.png') {
          item_element.addEventListener('click', function () {
            document.querySelector('#modal-section').style.display = "flex";
            document.querySelector('.modal').style.display = 'block';
            document.querySelector('.behind-modal').style.display = 'block';
            document.querySelector('.playerName').innerHTML = item.firstName + " - 2005 Worlds";

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2005 Worlds";

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2005 Worlds";

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
