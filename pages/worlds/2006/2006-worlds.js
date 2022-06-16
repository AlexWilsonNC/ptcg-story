const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Jason Klaczynski',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mew.png',
    sprite2: '../../../assets/sprites/manectric.png',
    list: '../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/mew-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/manectric-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/electrike.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/deoxys-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/regirock-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/roselia.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/girafarig.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-magneton.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rockets-admin.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/elms-training-method.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/tv-reporter.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/scott.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/marys-request.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dual-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/pow-hand-extension.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/switch.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/battle-fronteir.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/cursed-stone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/lightning-energy-holon-phantoms.png',
        numImg: '../../../assets/11.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/2007-multi-energy.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Jimmy Ballard',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/eevee-no-heart.png',
    sprite2: '../../../assets/sprites/pidgeot.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/flareon-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/umbreon-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/espeon-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/vaporeon-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/jolteon-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/eevee-2007.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/pidgeot.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/pidgeotto.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/pidgey.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-electrode.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rockets-admin.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/elms-training-method.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/celios-network.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/bills-maintenance.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/copycat.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/surprise-time-machine.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rare-candy-2006.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/pokemon-retriever.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/strength-charm.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/giant-stump.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/full-flame.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/water-energy-holon-phantoms.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/fire-energy-holon-phantoms.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/holon-energy-wp.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/holon-energy-ff.png',
        numImg: '../../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Jeremy Maron',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/nidoqueen.png',
    sprite2: '../../../assets/sprites/houndoom.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/nidoqueen-fighting.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/nidorina-grass.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/nidoran-f-grass.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/pidgeot.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/pidgeot-delta.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/pidgeotto.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/pidgey.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/houndoom.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/houndour.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-electrode.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/celios-network.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/copycat.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/02.png'
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
        cardImg: '../../../assets/cards/2004-2006/holon-scientist.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/scott.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rare-candy-2006.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-transeiver.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/spcae-center.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/grass-energy-holon-phantoms.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/double-rainbow-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/holon-energy-gl.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/heal-energy.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/warp-energy.png',
        numImg: '../../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Yuta Komatsuda',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/metagross.png',
    sprite2: '../../../assets/sprites/dragonite.png',
    list: '../../../assets/list-icon.png',
    type: 'metal',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/metagross-delta.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/metagross-psychic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/metang.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/beldum.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dragonite-delta.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dragonair.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dratini.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/jirachi.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/celios-network.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/copycat.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rockets-admin.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rare-candy-2006.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/pokemon-reversal.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/pokemon-retriever.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/warp-point.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/switch.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-ruins.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/lightning-energy-holon-phantoms.png',
        numImg: '../../../assets/10.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/psychic-energy-holon-phantoms.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/special-metal-energy-2006.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Alex Brosseau',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/dragonite.png',
    sprite2: '../../../assets/sprites/electrode.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/sneasel-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dark-dragonite.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dark-dragonair.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dratini-dragon-song.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dark-electrode.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/voltorb.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/scyther-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/solrock.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/lunatone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-mentor.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rockets-admin.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/scott.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/mr-briney-compassion.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-adventurer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-scientist.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-transeiver.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rockets-poke-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/desert-ruins.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rockets-hideout.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/2007-darkness-energy-special.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/r-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/dark-metal-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/rainbow-energy-2006.png',
        numImg: '../../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Eric Craig',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mew.png',
    sprite2: '../../../assets/sprites/manectric.png',
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
    firstName: 'Takuya Yoneda',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/metagross.png',
    sprite2: '../../../assets/sprites/dragonite.png',
    list: '../../../assets/list-icon.png',
    type: 'metal',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/metagross-delta.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/metang-lightning.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/beldum-lightning.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dragonite-delta.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dragonair.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dratini.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/castform.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rockets-admin.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-researcher.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-mentor.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-adventurer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-farmer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rare-candy-2006.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-transeiver.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/pokemon-reversal.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/warp-point.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/switch.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/desert-ruins.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/island-cave.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/lightning-energy-holon-phantoms.png',
        numImg: '../../../assets/10.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/special-metal-energy-2006.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Tom Dolezal',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/ludicolo.png',
    sprite2: '../../../assets/sprites/magcargo.png',
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
    firstName: 'Jaime Guerrero',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/tyranitar.png',
    sprite2: '../../../assets/sprites/ampharos.png',
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
    firstName: 'Stephen Silvestro',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flareon.png',
    sprite2: '../../../assets/sprites/ariados.png',
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
    firstName: 'Tomohisa Kanda',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/tyranitar.png',
    sprite2: '../../../assets/sprites/electrode.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/dark-tyranitar.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dark-tyranitar-body.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dark-pupitar.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/larvitar.png',
        numImg: '../../../assets/04.png'
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
        cardImg: '../../../assets/cards/2004-2006/electrode-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/voltorb-thunder-wave.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/jirachi.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/celios-network.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rockets-admin.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-mentor.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-adventurer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-scientist.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-transeiver.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rare-candy-2006.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/pokemon-retriever.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/pow-hand-extension.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/desert-ruins.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/cursed-stone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/fighting-energy-holon-phantoms.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/2007-darkness-energy-special.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/warp-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/scramble-energy.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/rainbow-energy-2006.png',
        numImg: '../../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Erik Nance',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/metagross.png',
    sprite2: '../../../assets/sprites/dragonite.png',
    list: '../../../assets/list-icon.png',
    type: 'metal',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/metagross-delta.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/metagross-psychic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/metang-lightning.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/metang-psychic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/beldum-lightning.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dragonite-delta.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dragonair.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dratini.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/castform.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rayquaza-star.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/mewtwo-delta.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rockets-admin.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-mentor.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-adventurer.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-researcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-farmer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-scientist.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rare-candy-2006.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-transeiver.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/pokemon-reversal.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/pow-hand-extension.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/fluffy-berry.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/desert-ruins.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/lightning-energy-holon-phantoms.png',
        numImg: '../../../assets/07.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/special-metal-energy-2006.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Yohei Takeda',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
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
    firstName: 'Yacine Sekkoum',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/arcanine.png',
    list: '../../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/arcanine-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/growlith.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/lunatone.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/solrock.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-electrode.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/elms-training-method.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/marys-request.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rockets-admin.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/stevens-advice.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/scott.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/copycat.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/pokemon-reversal.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/energy-removal-2.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/swoop-teleporter.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/cursed-stone.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/battle-fronteir.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/fire-energy-holon-phantoms.png',
        numImg: '../../../assets/09.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/react-energy.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Aurelien Delambre',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/arcanine.png',
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
    firstName: 'Ian Ryave',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
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
    firstName: 'Sebastian Crema',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/tyranitar.png',
    sprite2: '../../../assets/sprites/electrode.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006/dark-tyranitar.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/dark-pupitar.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/larvitar-fire.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/electrode-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/voltorb-thunder-wave.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/magmar.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/lunatone.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/solrock.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/castform.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rayquaza-star.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rockets-admin.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/elms-training-method.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-mentor.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-lass.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-adventurer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/holon-transeiver.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/pow-hand-extension.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rare-candy-2006.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/swoop-teleporter.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/rockets-poke-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/pokemon-retriever.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2004-2006/protective-orb.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/fire-energy-holon-phantoms.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/lightning-energy-holon-phantoms.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/2007-darkness-energy-special.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/scramble-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/heal-energy.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/old-energy/holon-energy-ff.png',
        numImg: '../../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Chris Fulop',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    list: '../../../assets/list-icon.png',
    type: '',
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
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Gordon Coates',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/dragonite.png',
    sprite2: '../../../assets/sprites/electrode.png',
    list: '../../../assets/list-icon.png',
    type: '',
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
    sprite1: '../../../assets/sprites/banette.png',
    sprite2: '../../../assets/sprites/medicham.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kevin Nance',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/metagross.png',
    sprite2: '../../../assets/sprites/dragonite.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Bin Xiu',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Mike Fouchet',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/tyranitar.png',
    sprite2: '../../../assets/sprites/electrode.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Gino Lombardi',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/machamp.png',
    list: '../../../assets/list-icon.png',
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
    sprite1: '../../../assets/sprites/metagross.png',
    sprite2: '../../../assets/sprites/dragonite.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Yuichiro Kataoka',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/tyranitar.png',
    sprite2: '../../../assets/sprites/electrode.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Drew Gruitzky',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ivan Zaldivar',
    flag: '../../../assets/flags/mexico.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alex Wooton',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/nidoqueen.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'John Kettler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/ludicolo.png',
    sprite2: '../../../assets/sprites/magcargo.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ken Yukuhiro',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/eevee-no-heart.png',
    sprite2: '../../../assets/sprites/pidgeot.png',
    list: '../../../assets/list-icon.png',
    type: '',
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
    firstName: 'Miska Saari',
    flag: '../../../assets/flags/finland.png',
    sprite1: '../../../assets/sprites/lunatone.png',
    sprite2: '../../../assets/sprites/solrock.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'David Booij',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/flareon.png',
    sprite2: '../../../assets/sprites/ariados.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tad Wheeler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Austin Reed',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/ludicolo.png',
    sprite2: '../../../assets/sprites/magcargo.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Matthew Lambou',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kit Wai Lim',
    flag: '../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/nidoqueen.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Wesley Bartlett',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/banette.png',
    sprite2: '../../../assets/sprites/medicham.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Elissa Hill',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Joe Getsy',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/banette.png',
    sprite2: '../../../assets/sprites/medicham.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Bobby Malec',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jeff Sharp',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/tyranitar.png',
    sprite2: '../../../assets/sprites/ampharos.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Keaton Gill',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/raichu.png',
    sprite2: '../../../assets/sprites/exeggutor.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Antoine Nicolle',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/mew.png',
    sprite2: '../../../assets/sprites/manectric.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Will Berry',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/nidoqueen.png',
    list: '../../../assets/list-icon.png',
    type: '',
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
    sprite1: '../../../assets/sprites/raichu.png',
    sprite2: '../../../assets/sprites/exeggutor.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jesus Fernandez',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mew.png',
    sprite2: '../../../assets/sprites/manectric.png',
    list: '../../../assets/list-icon.png',
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
    firstName: 'Hiroki Yano',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Spencer Duncan',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    list: '../../../assets/list-icon.png',
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
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
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
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Henry Leaming',
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
    firstName: 'James Ballard',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Matthew Kimmerer',
    flag: '../../../assets/flags/canada.png',
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
    firstName: 'Troy Officer',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/raichu.png',
    sprite2: '../../../assets/sprites/exeggutor.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kazuho Mizuta',
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
    firstName: 'Tad Miller',
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
    firstName: 'Shakil Bhuiyan',
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
    firstName: 'Spencer Brown',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/exeggutor.png',
    sprite2: '../../../assets/sprites/electrode.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Joona Kuusrainen',
    flag: '../../../assets/flags/finland.png',
    sprite1: '../../../assets/sprites/arcanine.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sanne Van der Vis',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/flygon.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2004-2006',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Phillip Yarbrough',
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
    firstName: 'Jon Siu',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    list: '../../../assets/list-icon.png',
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
