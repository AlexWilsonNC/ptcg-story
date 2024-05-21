const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Chris Fulop',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/absol.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jay Hornung',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/scizor.png',
    sprite2: '../../../assets/sprites/metagross.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/metagross-psychic.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/metang-lightning.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/beldum-lightning.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/scizor-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/scyther-twin-play.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/nidoqueen-metal.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/nidorina.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/nidoran-metal.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2004-2006/latios-star.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/castform.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holons-magnemite.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/elms-training-method.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/copycat.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-mentor.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-researcher.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-scientist.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-adventurer.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-transceiver.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/rare-candy-2006.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/pokemon-reversal.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/pluspower.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/strangth-charm.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/old-energy/psychic-energy-power-keepers.png',
        numImg: '../../../assets/08.png',
      },
      {
        cardImg: '../../../assets/cards/old-energy/special-metal-energy-2006.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'John Silvestro',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flareon.png',
    sprite2: '../../../assets/sprites/ariados.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/flareon-ex.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/jolteon-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/umbreon-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/eevee-2007.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/ariados.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/spinarak.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-electrode.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/elms-training-method.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-mentor.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/marys-request.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-adventurer.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holons-farmer.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-scientist.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-transceiver.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/super-scoop-up.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/windstorm.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/giant-stump.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/old-energy/grass-energy-power-keepers.png',
        numImg: '../../../assets/06.png',
      },
      {
        cardImg: '../../../assets/cards/old-energy/fire-energy-power-keepes.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/old-energy/lightning-energy-power-keepers.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/old-energy/2007-multi-energy.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Rob Downs',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/rayquaza.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/raqyuaza-ex-lightning.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/latios-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/latias.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/lickitung.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/mew-star.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/espeon.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/eevee-e-evolution.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2004-2006/lunatone.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/solrock-fighting.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/castaway.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/marys-request.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/copycat.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/lanette-net-search.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/scott.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/energy-removal-2.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/pokemon-reversal.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/warp-point-2007.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/cessation-crystal.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/strangth-charm.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/balloon-berry.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2004-2006/em.080.oran_berry.jpg',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/crystal-beach.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/cursed-stone.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/giant-stump.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/old-energy/lightning-energy-power-keepers.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/old-energy/water-energy-power-keepers.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/old-energy/fire-energy-power-keepes.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/old-energy/psychic-energy-power-keepers.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/old-energy/2007-multi-energy.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/old-energy/delta-rainbow-energy.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Shawn Gettys',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/electivire.png',
    sprite2: '../../../assets/sprites/dragonite.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ian Brander',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/machamp.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/machamp.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/machoke-karate-chop.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/machop.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/gligar.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/nidoqueen-metal.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/nidoran-metal.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/absol-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/castaway.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/copycat.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-mentor.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-scientist.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/rare-candy-2006.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-transceiver.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/pluspower.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/crystal-shard-2007.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/strangth-charm.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/old-energy/fighting-energy-power-keepers.png',
        numImg: '../../../assets/11.png',
      },
      {
        cardImg: '../../../assets/cards/old-energy/double-rainbow-energy.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Alex Brosseau',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/banette.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/banette-ex.png',
        numImg: '../../../assets/04.png',
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/2007-2008/banette.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/shuppet.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/solrock-fighting.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/lunatone-fighting.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/jolteon-star.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-mentor.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/tv-reporter.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/elms-training-method.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/castaway.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/scott.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-adventurer.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-scientist.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-transceiver.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/pokemon-reversal.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/buffer-peice.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/strangth-charm.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/crystal-beach.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/old-energy/psychic-energy-power-keepers.png',
        numImg: '../../../assets/11.png',
      },
      {
        cardImg: '../../../assets/cards/old-energy/rainbow-energy-2006.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/old-energy/cyclone-energy.png',
        numImg: '../../../assets/02.png',
      },
    ]
  },
  {
    firstName: 'Eric Craig',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/absol.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Michael Chin',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/marowak.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/empoleon-ice-blade.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/prinplup.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/piplup.png',
        numImg: '../../../assets/04.png',
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/2007-2008/marowak-delta.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/cubone.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/roselia.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-magneton.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/wally-training.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/castaway.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/copycat.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-mentor.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-adventurer.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-scientist.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/scott.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-transceiver.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/warp-point-2007.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/cessation-crystal.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/strangth-charm.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/uf.080.curse_powder.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2007-2008/cursed-stone.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/old-energy/water-energy-power-keepers.png',
        numImg: '../../../assets/11.png',
      },
      {
        cardImg: '../../../assets/cards/old-energy/scramble-energy-promo.png',
        numImg: '../../../assets/03.png',
      },
    ]
  },
  {
    firstName: 'Nick K',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lucario.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Adam Capriola',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/banette.png',
    sprite2: '../../../assets/sprites/vaporeon.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Aaron Curry',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/marowak.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/empoleon-ice-blade.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/prinplup.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/piplup.png',
        numImg: '../../../assets/04.png',
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/2007-2008/marowak-delta.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/cubone.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/roselia.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-magneton.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/wally-training.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/castaway.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-mentor.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/copycat.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-adventurer.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-scientist.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/scott.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-transceiver.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/warp-point-2007.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/cessation-crystal.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/uf.080.curse_powder.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2007-2008/cursed-stone.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/old-energy/water-energy-power-keepers.png',
        numImg: '../../../assets/11.png',
      },
      {
        cardImg: '../../../assets/cards/old-energy/scramble-energy-promo.png',
        numImg: '../../../assets/03.png',
      },
    ]
  },
  {
    firstName: 'Adam Vernola',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/infernape.png',
    sprite2: '../../../assets/sprites/delcatty.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [

      {
        cardImg: '../../../assets/cards/2007-2008/diamond_pearl_promos.DP10.infernape_lv_x.jpg',
        numImg: '../../../assets/01.png',
        exCard: true
      },
      {
        cardImg: '../../../assets/cards/2007-2008/infernape.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/monferno.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/chimchar.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/cg.091.delcatty_ex.jpg',
        numImg: '../../../assets/01.png',
        exCard: true
      },
      {
        cardImg: '../../../assets/cards/2007-2008/delcatty-power.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/skitty.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/budew.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/lm.026.spinda.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-mentor.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-adventurer.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-lass.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-scientist.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holons-farmer.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-transceiver.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/rare-candy-2006.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/windstorm.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/old-energy/fire-energy-power-keepes.png',
        numImg: '../../../assets/12.png',
      },
      {
        cardImg: '../../../assets/cards/old-energy/double-rainbow-energy.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Jayson Harry',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/castform.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tom W ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/machamp.png',
    sprite2: '../../../assets/sprites/lucario.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Emmanuel Divens',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/machamp.png',
    sprite2: '../../../assets/sprites/lucario.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Brian J',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/lucario.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jey J',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/raichu.png',
    sprite2: '../../../assets/sprites/kingler.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Paul J',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/marowak.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jimmy Ballard',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/marowak.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/empoleon-ice-blade.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/prinplup.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/piplup.png',
        numImg: '../../../assets/04.png',
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/2007-2008/marowak-delta.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/cubone.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/roselia.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-magneton.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/wally-training.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/castaway.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-mentor.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-adventurer.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/copycat.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-scientist.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/scott.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-transceiver.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/warp-point-2007.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/cessation-crystal.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/cursed-stone.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/old-energy/water-energy-power-keepers.png',
        numImg: '../../../assets/11.png',
      },
      {
        cardImg: '../../../assets/cards/old-energy/scramble-energy-promo.png',
        numImg: '../../../assets/03.png',
      },
    ]
  },
  {
    firstName: 'Peter Ortiz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/flygon.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alex W ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/marowak.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
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
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'James R',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/latias.png',
    sprite2: '../../../assets/sprites/latios.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Pedro G',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/rhyperior.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Michael B',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/marowak.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Leo O',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/rhyperior.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'David C',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/absol.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Chris S',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/infernape.png',
    sprite2: '../../../assets/sprites/delcatty.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Heidi Craig',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/banette.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tom Dolezal',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/infernape.png',
    sprite2: '../../../assets/sprites/delcatty.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Glen Priest',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/banette.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Daniel Chin',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/infernape.png',
    sprite2: '../../../assets/sprites/delcatty.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
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
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/marowak.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jeremy S-Kim',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/marowak.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
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
    sprite1: '../../../assets/sprites/raichu.png',
    sprite2: '../../../assets/sprites/exeggutor.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'James Ballard',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/infernape.png',
    sprite2: '../../../assets/sprites/delcatty.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Andy M',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/metagross.png',
    sprite2: '../../../assets/sprites/dragonite.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Joe G ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/medicham.png',
    sprite2: '../../../assets/sprites/banette.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Justin C',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/raichu.png',
    sprite2: '../../../assets/sprites/exeggutor.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Patrick T ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/machamp.png',
    sprite2: '../../../assets/sprites/lucario.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/machamp.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/machamp-body.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/machoke-steady-punch.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/machop.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/lucario.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/riolu.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/castaway.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-adventurer.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-mentor.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-scientist.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-lass.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/mr-briney-compassion.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/holon-transceiver.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/pluspower.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/rare-candy-2006.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/cessation-crystal.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/crystal-shard-2007.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/cursed-stone.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/old-energy/fighting-energy-power-keepers.png',
        numImg: '../../../assets/13.png',
      },
      {
        cardImg: '../../../assets/cards/old-energy/double-rainbow-energy.png',
        numImg: '../../../assets/02.png',
      },
    ]
  },
  {
    firstName: 'Christian L',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/flygon.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Forrest G',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/shiftry.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'John H ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kevin White',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png', four corners?
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nicholas K',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/raichu.png',
    sprite2: '../../../assets/sprites/exeggutor.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Zane N',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/shiftry.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Wesley B',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/shiftry.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Tristan Robinson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/castform.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jason Peirce',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/castform.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Steven Roberto',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/shiftry.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Thomas Arena',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tim Hornung',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jason C',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/castform.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'David S',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/castform.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ty Wheeler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ben D',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/infernape.png',
    sprite2: '../../../assets/sprites/delcatty.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tad M',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'David R',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Daniel A',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Mason C',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Brian H',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jason D',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Miranda E',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/flygon.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008',
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
    if (item.banned === true) {
      playerName.classList.add('crossed-out');
    }

    let flagImg = document.createElement('img');
        flagImg.classList.add('flag-size');
        flagImg.setAttribute('src', item.flag);

        let countryName = document.createElement('div');
        countryName.classList.add('country-name');
        countryName.style.display = 'none';

        flagImg.addEventListener('mouseover', function() {
            if (flagImg.getAttribute('src').includes('argentina')) {
                countryName.textContent = 'Argentina (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('australia')) {
                countryName.textContent = 'Australia (Oceania)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('austria')) {
                countryName.textContent = 'Austria (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('belarus')) {
                countryName.textContent = 'Belarus (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('belgium')) {
                countryName.textContent = 'Belgium (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('brazil')) {
                countryName.textContent = 'Brazil (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('canada')) {
                countryName.textContent = 'Canada (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('chile')) {
                countryName.textContent = 'Chile (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('china')) {
                countryName.textContent = 'China (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('colombia')) {
                countryName.textContent = 'Colombia (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('croatia')) {
                countryName.textContent = 'Croatia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('czech-republic')) {
                countryName.textContent = 'Czechia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('denmark')) {
                countryName.textContent = 'Denmark (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('el-salvador')) {
                countryName.textContent = 'El Salvador (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('finland')) {
                countryName.textContent = 'Finland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('france')) {
                countryName.textContent = 'France (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('germany')) {
                countryName.textContent = 'Germany (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('greece')) {
                countryName.textContent = 'Greece (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('hong-kong')) {
                countryName.textContent = 'Hong Kong (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('indonesia')) {
                countryName.textContent = 'Indonesia (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('ireland')) {
                countryName.textContent = 'Ireland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('isreal')) {
                countryName.textContent = 'Israel (Middle East-South Africa)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('italy')) {
                countryName.textContent = 'Italy (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('japan')) {
                countryName.textContent = 'Japan (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('korea')) {
                countryName.textContent = 'South Korea (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('malaysia')) {
                countryName.textContent = 'Malaysia (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('malta')) {
                countryName.textContent = 'Malta (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('mexico')) {
                countryName.textContent = 'Mexico (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('moroco')) {
                countryName.textContent = 'Moroco (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('netherlands')) {
                countryName.textContent = 'Netherlands (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('new-zealand')) {
                countryName.textContent = 'New Zealand (Oceania)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('nicaragua')) {
                countryName.textContent = 'Nicaragua (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('norway')) {
                countryName.textContent = 'Norway (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('peru')) {
                countryName.textContent = 'Peru (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('philippines')) {
                countryName.textContent = 'Philippines (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('poland')) {
                countryName.textContent = 'Poland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('portugal')) {
                countryName.textContent = 'Portugal (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('puerto-rico')) {
                countryName.textContent = 'Puerto Rico (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('russia')) {
                countryName.textContent = 'Russia (Russia)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('singapore')) {
                countryName.textContent = 'Singapore (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('slovakia')) {
                countryName.textContent = 'Slovakia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('south-africa')) {
                countryName.textContent = 'South Africa (Middle East-South Africa)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('spain')) {
                countryName.textContent = 'Spain (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('sweden')) {
                countryName.textContent = 'Sweden (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('switzerland')) {
                countryName.textContent = 'Switzerland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('taiwan')) {
                countryName.textContent = 'Taiwan (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('thailand')) {
                countryName.textContent = 'Thailand (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('uk')) {
                countryName.textContent = 'United Kingdom (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('usa')) {
                countryName.textContent = 'USA (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('unknown')) {
                countryName.textContent = 'Unknown';
                countryName.style.display = 'block';
            }
        });

        flagImg.addEventListener('mouseout', function() {
            countryName.style.display = 'none';
        });

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
        playerName.appendChild(countryName); // Append the country name element
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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2007 US Nats";

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
    if (item.banned === true) {
      playerName.classList.add('crossed-out');
    }

    let flagImg = document.createElement('img');
        flagImg.classList.add('flag-size');
        flagImg.setAttribute('src', item.flag);

        let countryName = document.createElement('div');
        countryName.classList.add('country-name');
        countryName.style.display = 'none';

        flagImg.addEventListener('mouseover', function() {
            if (flagImg.getAttribute('src').includes('argentina')) {
                countryName.textContent = 'Argentina (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('australia')) {
                countryName.textContent = 'Australia (Oceania)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('austria')) {
                countryName.textContent = 'Austria (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('belarus')) {
                countryName.textContent = 'Belarus (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('belgium')) {
                countryName.textContent = 'Belgium (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('brazil')) {
                countryName.textContent = 'Brazil (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('canada')) {
                countryName.textContent = 'Canada (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('chile')) {
                countryName.textContent = 'Chile (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('china')) {
                countryName.textContent = 'China (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('colombia')) {
                countryName.textContent = 'Colombia (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('croatia')) {
                countryName.textContent = 'Croatia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('czech-republic')) {
                countryName.textContent = 'Czechia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('denmark')) {
                countryName.textContent = 'Denmark (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('el-salvador')) {
                countryName.textContent = 'El Salvador (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('finland')) {
                countryName.textContent = 'Finland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('france')) {
                countryName.textContent = 'France (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('germany')) {
                countryName.textContent = 'Germany (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('greece')) {
                countryName.textContent = 'Greece (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('hong-kong')) {
                countryName.textContent = 'Hong Kong (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('indonesia')) {
                countryName.textContent = 'Indonesia (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('ireland')) {
                countryName.textContent = 'Ireland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('isreal')) {
                countryName.textContent = 'Israel (Middle East-South Africa)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('italy')) {
                countryName.textContent = 'Italy (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('japan')) {
                countryName.textContent = 'Japan (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('korea')) {
                countryName.textContent = 'South Korea (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('malaysia')) {
                countryName.textContent = 'Malaysia (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('malta')) {
                countryName.textContent = 'Malta (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('mexico')) {
                countryName.textContent = 'Mexico (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('moroco')) {
                countryName.textContent = 'Moroco (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('netherlands')) {
                countryName.textContent = 'Netherlands (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('new-zealand')) {
                countryName.textContent = 'New Zealand (Oceania)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('nicaragua')) {
                countryName.textContent = 'Nicaragua (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('norway')) {
                countryName.textContent = 'Norway (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('peru')) {
                countryName.textContent = 'Peru (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('philippines')) {
                countryName.textContent = 'Philippines (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('poland')) {
                countryName.textContent = 'Poland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('portugal')) {
                countryName.textContent = 'Portugal (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('puerto-rico')) {
                countryName.textContent = 'Puerto Rico (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('russia')) {
                countryName.textContent = 'Russia (Russia)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('singapore')) {
                countryName.textContent = 'Singapore (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('slovakia')) {
                countryName.textContent = 'Slovakia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('south-africa')) {
                countryName.textContent = 'South Africa (Middle East-South Africa)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('spain')) {
                countryName.textContent = 'Spain (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('sweden')) {
                countryName.textContent = 'Sweden (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('switzerland')) {
                countryName.textContent = 'Switzerland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('taiwan')) {
                countryName.textContent = 'Taiwan (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('thailand')) {
                countryName.textContent = 'Thailand (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('uk')) {
                countryName.textContent = 'United Kingdom (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('usa')) {
                countryName.textContent = 'USA (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('unknown')) {
                countryName.textContent = 'Unknown';
                countryName.style.display = 'block';
            }
        });

        flagImg.addEventListener('mouseout', function() {
            countryName.style.display = 'none';
        });

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
        playerName.appendChild(countryName); // Append the country name element
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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2007 US Nats";

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
    if (item.banned === true) {
      playerName.classList.add('crossed-out');
    }

    let flagImg = document.createElement('img');
        flagImg.classList.add('flag-size');
        flagImg.setAttribute('src', item.flag);

        let countryName = document.createElement('div');
        countryName.classList.add('country-name');
        countryName.style.display = 'none';

        flagImg.addEventListener('mouseover', function() {
            if (flagImg.getAttribute('src').includes('argentina')) {
                countryName.textContent = 'Argentina (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('australia')) {
                countryName.textContent = 'Australia (Oceania)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('austria')) {
                countryName.textContent = 'Austria (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('belarus')) {
                countryName.textContent = 'Belarus (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('belgium')) {
                countryName.textContent = 'Belgium (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('brazil')) {
                countryName.textContent = 'Brazil (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('canada')) {
                countryName.textContent = 'Canada (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('chile')) {
                countryName.textContent = 'Chile (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('china')) {
                countryName.textContent = 'China (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('colombia')) {
                countryName.textContent = 'Colombia (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('croatia')) {
                countryName.textContent = 'Croatia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('czech-republic')) {
                countryName.textContent = 'Czechia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('denmark')) {
                countryName.textContent = 'Denmark (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('el-salvador')) {
                countryName.textContent = 'El Salvador (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('finland')) {
                countryName.textContent = 'Finland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('france')) {
                countryName.textContent = 'France (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('germany')) {
                countryName.textContent = 'Germany (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('greece')) {
                countryName.textContent = 'Greece (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('hong-kong')) {
                countryName.textContent = 'Hong Kong (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('indonesia')) {
                countryName.textContent = 'Indonesia (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('ireland')) {
                countryName.textContent = 'Ireland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('isreal')) {
                countryName.textContent = 'Israel (Middle East-South Africa)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('italy')) {
                countryName.textContent = 'Italy (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('japan')) {
                countryName.textContent = 'Japan (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('korea')) {
                countryName.textContent = 'South Korea (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('malaysia')) {
                countryName.textContent = 'Malaysia (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('malta')) {
                countryName.textContent = 'Malta (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('mexico')) {
                countryName.textContent = 'Mexico (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('moroco')) {
                countryName.textContent = 'Moroco (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('netherlands')) {
                countryName.textContent = 'Netherlands (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('new-zealand')) {
                countryName.textContent = 'New Zealand (Oceania)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('nicaragua')) {
                countryName.textContent = 'Nicaragua (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('norway')) {
                countryName.textContent = 'Norway (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('peru')) {
                countryName.textContent = 'Peru (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('philippines')) {
                countryName.textContent = 'Philippines (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('poland')) {
                countryName.textContent = 'Poland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('portugal')) {
                countryName.textContent = 'Portugal (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('puerto-rico')) {
                countryName.textContent = 'Puerto Rico (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('russia')) {
                countryName.textContent = 'Russia (Russia)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('singapore')) {
                countryName.textContent = 'Singapore (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('slovakia')) {
                countryName.textContent = 'Slovakia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('south-africa')) {
                countryName.textContent = 'South Africa (Middle East-South Africa)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('spain')) {
                countryName.textContent = 'Spain (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('sweden')) {
                countryName.textContent = 'Sweden (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('switzerland')) {
                countryName.textContent = 'Switzerland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('taiwan')) {
                countryName.textContent = 'Taiwan (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('thailand')) {
                countryName.textContent = 'Thailand (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('uk')) {
                countryName.textContent = 'United Kingdom (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('usa')) {
                countryName.textContent = 'USA (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('unknown')) {
                countryName.textContent = 'Unknown';
                countryName.style.display = 'block';
            }
        });

        flagImg.addEventListener('mouseout', function() {
            countryName.style.display = 'none';
        });

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
        playerName.appendChild(countryName); // Append the country name element
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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2007 US Nats";

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
