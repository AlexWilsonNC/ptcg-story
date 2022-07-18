const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Tsuguyoshi Yamato',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/groudon.png',
    list: '../../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-groudon.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-zangoose.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-claydol.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-baltoy.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-camerupt.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-numel.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/team-magma-conspirator.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/tv-reporter-e-reader.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/underground-expedition.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/copycat-e-reader.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/maxie.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/mr-briney-compassion-e-reader.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/pokemon reversal.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/team-magma-ball.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/switch.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/desert-ruins.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/fighting-energy.jpg',
        numImg: '../../../assets/06.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/psychic-energy.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/darkness-energy.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/old-energy/magma-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/rainbow-energy.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      }
    ]
  },
  {
    firstName: 'Chris Fulop',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blaziken.png',
    list: '../../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/blaziken.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/blaziken-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/combusken.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/torchic.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/delcatty.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/skitty.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/aquas-manectric.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/aquas-electrike.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/bellossom.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/oddish.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dunsparce.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rayquaza-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/copycat-e-reader.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/oracle.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/nurse.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/elm-training-method.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/fan-club.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rare-candy-e-reader.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/friend-ball.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/switch.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/fire-energy.jpg',
        numImg: '../../../assets/10.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/lightning-energy.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/old-energy/multi-energy-e-reader.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/rainbow-energy.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      }
    ]
  },
  {
    firstName: 'Go Miyamoto',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/groudon.png',
    list: '../../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-groudon.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-zangoose.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-claydol.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-baltoy.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-camerupt.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-numel.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/team-magma-conspirator.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/tv-reporter-e-reader.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/underground-expedition.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/copycat-e-reader.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/maxie.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/team-magma-schemer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/mr-briney-compassion-e-reader.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/team-magma-ball.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/pokemon reversal.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/strength-charm.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/desert-ruins.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/fighting-energy.jpg',
        numImg: '../../../assets/06.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/psychic-energy.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/darkness-energy.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/old-energy/magma-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/rainbow-energy.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      }
    ]
  },
  {
    firstName: 'Yuki Fujimori',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/groudon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Yuichi Murakami',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/groudon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Drew Holton',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blaziken.png',
    list: '../../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/blaziken.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/blaziken-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/combusken-flare.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/combusken.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/torchic-e-reader.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/delcatty.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/skitty.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dunsparce.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/bellossom.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/oddish.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magneton.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magnemite.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rayquaza-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/oracle.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/copycat-e-reader.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/elm-training-method.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/desert-shaman.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rare-candy-e-reader.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/switch.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/friend-ball.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/fire-energy.jpg',
        numImg: '../../../assets/12.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/lightning-energy.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/old-energy/multi-energy-e-reader.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/warp-energy.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Kenneth Wong',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/shiftry.png',
    list: '../../../assets/list-icon.png',
    type: 'grass',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/shiftry-dark.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/nuzleaf-dark.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/seedot.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/furret.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/sentret.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/delcatty.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/skitty.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dunsparce.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/jirachi.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/copycat-e-reader.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/desert-shaman.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/oracle.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/town-volunteers.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/warp-point.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/desert-ruins.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/grass-energy.jpg',
        numImg: '../../../assets/06.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/darkness-energy.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/old-energy/double-rainbow-old.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/boost-energy.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      }
    ]
  },
  {
    firstName: 'Colin Moll',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/wailord.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/wailord-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/wailmer.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/bellossom.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/vileplume.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/gloom.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/gloom.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/oddish.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/oracle.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/copycat-e-reader.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/oaks-research.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/elm-training-method.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/desert-shaman.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/root-fossil.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/claw-fossil.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/mysterious-fossil.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/switch.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/mystery-zone.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/island-cave.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/water-energy.jpg',
        numImg: '../../../assets/12.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/old-energy/multi-energy-e-reader.png',
        numImg: '../../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'J.R. Palumbo',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blaziken.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Evens Cheung',
    flag: '../../../assets/flags/norway.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Koji Kanno',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/groudon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kyle Sucevich',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/walrein.png',
    sprite2: '../../../assets/sprites/milotic.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/walrein.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/sealeo.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/spheal.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/milotic.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/feebas-ascension.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dunsparce.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/oracle.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/copycat-e-reader.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/tv-reporter-e-reader.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/mr-briney-compassion-e-reader.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/town-volunteers.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rare-candy-e-reader.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/fast-ball.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/warp-point.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/crystal-shard.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/desert-ruins.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/water-energy.jpg',
        numImg: '../../../assets/14.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/old-energy/double-rainbow-old.png',
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Kevin Jackson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/gardevoir-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/gardevoir.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/kirlia.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ralts.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/delcatty.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/skitty.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magneton.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magnemite.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dunsparce.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/wobbuffet-safegaurd.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/oracle.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/copycat-e-reader.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/elm-training-method.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rare-candy-e-reader.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/warp-point.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/switch.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/pokemon reversal.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/crystal-shard.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magnetic-storm.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ancient-tomb.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/psychic-energy.jpg',
        numImg: '../../../assets/12.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/lightning-energy.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/boost-energy.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      }
    ]
  },
  {
    firstName: 'Eric Craig',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/shiftry.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nick Caporelli',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/crobat.png',
    sprite2: '../../../assets/sprites/gorebyss.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Charles Collinsworth',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Levi Canfield',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blaziken.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Andrew Newman',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/groudon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jacob Burt',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kyogre.png',
    sprite2: '../../../assets/sprites/manectric.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/aquas-kyogre.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/aquas-manectric.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/aquas-electrike.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/aquas-seviper.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/ditto.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/team-aqua-conspirator.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/mr-briney-compassion-e-reader.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/copycat-e-reader.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/town-volunteers.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/fast-ball.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/warp-point.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/desert-ruins.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/water-energy.jpg',
        numImg: '../../../assets/08.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/lightning-energy.jpg',
        numImg: '../../../assets/06.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/darkness-energy.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/grass-energy.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Alexis Diaz',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blaziken.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Che Keen Yau',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/groudon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Matt Gillespie',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/jumpluff.png',
    sprite2: '../../../assets/sprites/gorebyss.png',
    list: '../../../assets/list-icon.png',
    type: 'grass',
    deck: [
      {
        cardImg: '../../../assets/cards/e-reader/jumpluff.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/skiploom.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/hoppip.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/gorebyss.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/clamperl.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dunsparce.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/tv-reporter-e-reader.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/copycat-e-reader.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/oaks-research.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/nurse.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rare-candy-e-reader.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/warp-point.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/crystal-shard.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/desert-ruins.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/psychic-energy.jpg',
        numImg: '../../../assets/05.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/rainbow-energy.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/old-energy/multi-energy-e-reader.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/double-rainbow-old.png',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Evan Bennett',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Koujiro Tsuruta',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blaziken.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Oliver Dürr',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/sceptile.png',
    sprite2: '../../../assets/sprites/muk.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kevin De Mooij',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/crobat.png',
    sprite2: '../../../assets/sprites/gorebyss.png',
    list: '../../../assets/list-icon.png',
    type: 'grass',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/crobat.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/golbat.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/zubat.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/gorebyss.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/clamperl.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dunsparce.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/igglybuff.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/jirachi.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/ditto.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/oaks-research.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/copycat-e-reader.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/wallys-training-e-reader.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/desert-shaman.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/lanette-net-search-e-reader.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rare-candy-e-reader.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/warp-point.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/life-herb.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/pokemon reversal.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/lure-ball.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/fast-ball.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/desert-ruins.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ancient-tomb.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/psychic-energy.jpg',
        numImg: '../../../assets/07.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/grass-energy.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/old-energy/double-rainbow-old.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/multi-energy-e-reader.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/rainbow-energy.jpg',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/question-mark.png',
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Adam Capriola',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/medicham.png',
    sprite2: '../../../assets/sprites/lanturn.png',
    list: '../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/medicham.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/meditite-e-reader.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/lanturn.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/chinchou-pounf.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/chinchou-random.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dunsparce.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/tv-reporter-e-reader.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/copycat-e-reader.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/oracle.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/pokemon reversal.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/strength-charm.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/desert-ruins.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/lightning-energy.jpg',
        numImg: '../../../assets/07.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/fighting-energy.jpg',
        numImg: '../../../assets/06.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/old-energy/double-rainbow-old.png',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Eric Richard',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gorebyss.png',
    sprite2: '../../../assets/sprites/banette.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/gorebyss.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/clamperl.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/banette.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/shuppet-selfie.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/medicham.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/meditite-jab.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dunsparce.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/copycat-e-reader.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/oracle.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/tv-reporter-e-reader.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/mr-briney-compassion-e-reader.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/elm-training-method.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/oaks-research.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/desert-ruins.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/psychic-energy.jpg',
        numImg: '../../../assets/06.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/fighting-energy.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/old-energy/multi-energy-e-reader.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/double-rainbow-old.png',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Shigeru Kanda',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/groudon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Te Awhi Woon',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/claydol.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jimmy Ballard',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/gorebyss.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/mewtwo-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/gorebyss.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/clamperl.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magneton.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magnemite.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/delcatty.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/skitty.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/juggler.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/tv-reporter-e-reader.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/oracle.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/elm-training-method.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/town-volunteers.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/warp-point.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dual-ball-old.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/crystal-shard.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/strength-charm.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/mystery-zone.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/psychic-energy.jpg',
        numImg: '../../../assets/09.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/old-energy/double-rainbow-old.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/multi-energy-e-reader.png',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Tom Dolezal',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blaziken.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  }
]

let seniors = [
  {
    firstName: 'Takuya Yoneda',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/groudon.png',
    list: '../../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-groudon.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-zangoose.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-claydol.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-baltoy.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-camerupt.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-numel.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/team-magma-conspirator.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/underground-expedition.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/tv-reporter-e-reader.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/copycat-e-reader.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/maxie.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/mr-briney-compassion-e-reader.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/team-magma-ball.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/warp-point.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/strength-charm.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/desert-ruins.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/fighting-energy.jpg',
        numImg: '../../../assets/07.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/psychic-energy.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/darkness-energy.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/old-energy/magma-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/rainbow-energy.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      }
    ]
  },
  {
    firstName: 'Kevin Nguyen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/gardevoir-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/gardevoir.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/kirlia.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ralts.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/delcatty.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/skitty.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magneton.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magnemite.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dunsparce.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/oracle.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/elm-training-method.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/desert-shaman.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/town-volunteers.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/pokemon reversal.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rare-candy-e-reader.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/warp-point.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/switch.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/weakness-guard.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magnetic-storm.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ancient-tomb.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/psychic-energy.jpg',
        numImg: '../../../assets/10.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/lightning-energy.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/boost-energy.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      }
    ]
  },
  {
    firstName: 'Takayuke Nishide',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/gorebyss.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/gorebyss.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/clamperl.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/gardevoir.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/gardevoir-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/kirlia.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ralts.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ralts-e-reader.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dunsparce.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/bellossom.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/oddish.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/underground-expedition.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/copycat-e-reader.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/elm-training-method.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/bills-maintenance.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rare-candy-e-reader.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/warp-point.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/psychic-energy.jpg',
        numImg: '../../../assets/08.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/old-energy/double-rainbow-old.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/multi-energy-e-reader.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/boost-energy.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      }
    ]
  },
  {
    firstName: 'Sebastian Crema',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blaziken.png',
    list: '../../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/blaziken.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/blaziken-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/combusken.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/torchic.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/delcatty.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/skitty.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dunsparce.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rayquaza-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/oracle.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/copycat-e-reader.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/nurse.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/town-volunteers.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/oaks-research.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/tv-reporter-e-reader.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rare-candy-e-reader.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/switch.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/warp-point.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ancient-tomb.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/high-pressure-system.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/fire-energy.jpg',
        numImg: '../../../assets/11.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/lightning-energy.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/old-energy/multi-energy-e-reader.png',
        numImg: '../../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Jeroen Robert',
    flag: '../../../assets/flags/belgium.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blaziken.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Andrew Knaack',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/swampert.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Patrick Kewley',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/walrein.png',
    sprite2: '../../../assets/sprites/arcanine.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/walrein.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/sealeo.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/spheal.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/arcanine.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/growlith-body.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dunsparce.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/jirachi-dual.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/oracle.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/copycat-e-reader.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/town-volunteers.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/switch.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/desert-ruins.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/water-energy.jpg',
        numImg: '../../../assets/14.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/fire-energy.jpg',
        numImg: '../../../assets/06.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Daniel Mermelstein',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gorebyss.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Yutaka Sato',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/groudon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Heather Lynch',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Miyuki Fukuda',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Steve Davis',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blaziken.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jason Chen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/medicham.png',
    sprite2: '../../../assets/sprites/lanturn.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Frank Diaz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/groudon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Daniel Richard',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/shiftry.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Taylor Davis',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jesse Poms',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/metagross.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sami Sekkoum',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blaziken.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'William Chen',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Aaron Curry',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blaziken.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Matthew Leblanc',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
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
    sprite1: '../../../assets/sprites/jumpluff.png',
    sprite2: '../../../assets/sprites/gorebyss.png',
    list: '../../../assets/list-icon.png',
    type: 'grass',
    deck: [
      {
        cardImg: '../../../assets/cards/e-reader/jumpluff.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/skiploom.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/hoppip.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/gorebyss.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/clamperl.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dunsparce.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/tv-reporter-e-reader.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/copycat-e-reader.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/oaks-research.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/nurse.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rare-candy-e-reader.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/warp-point.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/crystal-shard.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/desert-ruins.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/psychic-energy.jpg',
        numImg: '../../../assets/05.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/rainbow-energy.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/old-energy/multi-energy-e-reader.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/double-rainbow-old.png',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Behrad Hosseini',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/swampert.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Dylan Langenstein',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alex Macri',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/machamp.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/machamp.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/machoke-body.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/machop-knuckle-punch.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dunsparce.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/delcatty.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/skitty.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magneton.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magnemite-rollout.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/oracle.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/oaks-research.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/copycat-e-reader.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/tv-reporter-e-reader.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/wallys-training-e-reader.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rare-candy-e-reader.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/switch.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ancient-tomb.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/desert-ruins.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/fighting-energy.jpg',
        numImg: '../../../assets/08.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/boost-energy.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/old-energy/double-rainbow-old.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Stuart Benson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Cristian Vidal',
    flag: '../../../assets/flags/chile.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Michael Stevens',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
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
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Spencer Barth',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/machamp.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Atsushi Katsumata',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Christopher Roberts',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  }
]

let juniors = [
  {
    firstName: 'Hayato Sato',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/groudon.png',
    list: '../../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-groudon.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-zangoose.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-claydol.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-baltoy.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-camerupt.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-numel.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/underground-expedition.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/team-magma-conspirator.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/tv-reporter-e-reader.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/copycat-e-reader.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/team-magma-schemer.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/mr-briney-compassion-e-reader.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/maxie.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/team-magma-ball.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/switch.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/warp-point.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/desert-ruins.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/fighting-energy.jpg',
        numImg: '../../../assets/06.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/psychic-energy.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/old-energy/magma-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/darkness-energy.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/rainbow-energy.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      }
    ]
  },
  {
    firstName: 'Reed Weichler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/swampert.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/swampert-water.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/swampert-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/marshtomp.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/mudkip.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/delcatty.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/skitty.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magneton.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magnemite.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dunsparce.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/wobbuffet-safegaurd.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/suicune-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/oracle.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/elm-training-method.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/copycat-e-reader.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/underground-expedition.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/wallys-training-e-reader.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/fan-club.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/oaks-research.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rare-candy-e-reader.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/switch.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/potion.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/water-energy.jpg',
        numImg: '../../../assets/13.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/old-energy/multi-energy-e-reader.png',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Akira Miyazaki',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/groudon.png',
    list: '../../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-groudon.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-zangoose.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-claydol.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-baltoy.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-camerupt.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magmas-numel.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/tv-reporter-e-reader.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/underground-expedition.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/team-magma-conspirator.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/maxie.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/copycat-e-reader.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/bills-maintenance.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/team-magma-schemer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/mr-briney-compassion-e-reader.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/pokemon reversal.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/team-magma-ball.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/switch.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/warp-point.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/desert-ruins.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/fighting-energy.jpg',
        numImg: '../../../assets/07.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/psychic-energy.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/old-energy/magma-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/darkness-energy.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/rainbow-energy.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      }
    ]
  },
  {
    firstName: 'Taylor Mitchell',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/swampert.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/swampert-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/swampert-water.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/marshtomp.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/mudkip.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dunsparce.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/oracle.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/tv-reporter-e-reader.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/oaks-research.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/copycat-e-reader.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/fisherman.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rare-candy-e-reader.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/fast-ball.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/master-ball.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/warp-point.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2004-2006/island-cave.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/e-reader/water-energy.jpg',
        numImg: '../../../assets/16.png',
        oldCard: true
      }
    ]
  },
  {
    firstName: 'Takashi Yoneda',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ukyo Kurashita',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'José Steven Eguia',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kyle Lathem',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Curran Hill',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Andrew Krekeler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kevin White',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jasper Van Bemmelen',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gorebyss.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tim Hornung',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kyogre.png',
    sprite2: '../../../assets/sprites/walrein.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jake Arnold',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jacob Burnside',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jasa Goonjov',
    flag: '../../../assets/flags/slovakia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Dale Lynch',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'David Correale',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Arnoud Van Bemmelen',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/metagross.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jeffrey Wang',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Martina Canto',
    flag: '../../../assets/flags/italy.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Donovan Roybal-Archuleta',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Enrique Cross',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nathan Crawford',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jefre Robert',
    flag: '../../../assets/flags/belgium.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Michael Diaz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nathan Dalton',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Austin Cook',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
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
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Arron Sanyer',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
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
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jeremy Scharff-Kim',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
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

              if (deck.oldCard === true) {
                pokeCard.classList.add('old-card')
              }

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

          if (deck.oldCard === true) {
            pokeCard.classList.add('old-card')
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

          if (deck.oldCard === true) {
            pokeCard.classList.add('old-card')
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
