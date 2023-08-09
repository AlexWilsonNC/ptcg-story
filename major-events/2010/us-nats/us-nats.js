const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Con Le',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010/sableye-overgear.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/garchomp-lvx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/garchomp-c.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/crobat.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/uxie-lvx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/uxie.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/azelf.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/honchkrow-ability.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/honchkrow-sp.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/murkrow.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2008-2010/unown-quick.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/cyrus-initiative.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/judge-hgss.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/felicitys-drawing.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/aarons-collection.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/premier-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/vs-seeker.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-dark.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/darkness-energy-hgss.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Erik Nance',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010/luxray-lvx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/luxray.jpg',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/garchomp-lvx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/garchomp-c.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/uxie-lvx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/uxie.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/azelf.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/crobat.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/banette.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/shuppet.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/ambipom.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/bronzong.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/lucario.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/aarons-collection.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-lightning.png',
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kyle Sucevich',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/dialga.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    list: '../../../assets/list-icon.png',
    type: 'metal',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010/dialga-lvx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/dialga-g.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/garchomp-lvx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/garchomp-c.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/crobat.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2008-2010/bronzong.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/drifblim-sp.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/ambipom.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/chatot.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/claydol.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/uxie.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/azelf.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/aarons-collection.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-metal.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/metal-energy-special-dp.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/call-energy.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/warp_energy.jpg',
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Kyle St Charles',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kingdra.png',
    sprite2: '../../../assets/sprites/donphan.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012/kingdra.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/la.007.kingdra.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2008-2010/la.070.seadra.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2008-2010/la.102.horsea.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2008-2010/donphan-prime.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/phanpy.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/dusknoir.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/duskull-shiny.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/claydol.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/uxie.png',
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
        cardImg: '../../../assets/cards/2008-2010/judge-hgss.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/palmers-contribution.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/rare-candy-hgss.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/broken-time-space.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-water.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-fighting.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/multi-energy-dp.png',
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Gino Lombardi',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/jumpluff.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Stefan Tabaco',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/dialga.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    list: '../../../assets/list-icon.png',
    type: 'metal',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010/dialga-lvx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/dialga-g.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/garchomp-lvx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/garchomp-c.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/uxie-lvx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/uxie.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/azelf.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/crobat.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2008-2010/bronzong.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/drifblim-sp.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/dragonite.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/spiritomb.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/claydol.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/unown-quick.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/judge-hgss.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/aarons-collection.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/switch-hgss.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-metal.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/metal-energy-special-dp.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/warp_energy.jpg',
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Mark Garcia',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010/md.097.garchomp_lv_x.jpg',
        numImg: '../../../assets/01.png',
        exCard: true
      },
      {
        cardImg: '../../../assets/cards/2008-2010/garchomp.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/gabite.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/gible.png',
        numImg: '../../../assets/04.png'
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
        cardImg: '../../../assets/cards/2008-2010/dusknoir.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/duskull-shiny.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/chatot.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/uxie.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/azelf.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/judge-hgss.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/palmers-contribution.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/rare-candy-hgss.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/poke-reversal.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/broken-time-space.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/call-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/cyclone-energy-dp.png',
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Murat Gursoz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kingdra.png',
    sprite2: '../../../assets/sprites/machamp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Joseph Sanchez',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010/luxray-lvx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/luxray.jpg',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/garchomp-lvx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/garchomp-c.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/donphan-prime.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/phanpy-sw.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/uxie-lvx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/uxie.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/claydol.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/giratina.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/crobat.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/azelf.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/mesprit-pbind.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/mt.115.team_galactics_wager.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/super-scoop-up-hgss.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/broken-time-space.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-fighting.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-lightning.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/warp_energy.jpg',
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Alex Fields',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Brad Curcio',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kyle Morris',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Chas McLin',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alex Frezza',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Mike Fouchet',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010/gardevoir-lvx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/gardevoir-psychic-lock.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/gallade.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/kirlia.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/kirlia.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/ralts-future-sight.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/spiritomb.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/dusknoir.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/duskull-shiny.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/claydol.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/mewtwo-lvx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/mewtwo.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/azelf-lvx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/azelf.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/uxie.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/giratina.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/crobat.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/unown-quick.png',
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2008-2010/palmers-contribution.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/rare-candy-hgss.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/call-energy.png',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Omar Izaguirre',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Benjamin Sauk',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010/gardevoir-lvx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/gardevoir-psychic-lock.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/gallade.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/kirlia.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/kirlia.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/ralts-future-sight.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/spiritomb.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/dusknoir.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/duskull-shiny.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/claydol.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/mewtwo-lvx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/mewtwo.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/azelf-lvx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/azelf.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/uxie.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/giratina.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/crobat.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/unown-quick.png',
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2008-2010/palmers-contribution.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/rare-candy-hgss.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/call-energy.png',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Jason Chen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010/sableye-overgear.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/garchomp-lvx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/garchomp-c.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/blaziken-lvx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/blaziken.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/chatot-sp.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/ambipom.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/crobat.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2008-2010/sv.044.shedinja.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2008-2010/sv.117.nincada.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2008-2010/uxie.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/unown-quick.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/cyrus-initiative.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/looker.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/judge-hgss.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/aarons-collection.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/vs-seeker.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-fire.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-dark.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'James Fontes',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Frank Diaz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gengar.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010/gengar-lvx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/gengar-fainting-spell.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/gengar-curse.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/haunter-hypnosis.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/gastly.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/spiritomb.png',
        numImg: '../../../assets/04.png'
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
        cardImg: '../../../assets/cards/2008-2010/nidoqueen.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/nidorina.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/nidoran-f.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/dusknoir.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/duskull-shiny.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/uxie.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/azelf.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/judge-hgss.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/felicitys-drawing.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/rare-candy-hgss.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/pokemon-communication-hgss.png',
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
        cardImg: '../../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/moonlight-stadium.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/call-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/warp_energy.jpg',
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Benjamin Angee',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alexander Daus',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/machamp.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010/machamp-lvx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/machamp.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/machoke.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/machop-low-kick.png',
        numImg: '../../../assets/04.png'
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
        cardImg: '../../../assets/cards/2008-2010/regirock.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/uxie.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/azelf.png',
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2008-2010/rare-candy-hgss.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/poke-radar.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/pokedex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/premier-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/stark-mountain.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-fighting.png',
        numImg: '../../../assets/10.png'
      },
      {
        cardImg: '../../../assets/cards/energy/upper-energy.png',
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Adam Garcia',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Andrew Murray',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Craig Abley',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Paul Wells III',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/palkia.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jason Schelin',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010/luxray-lvx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/luxray.jpg',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/garchomp-lvx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/garchomp-c.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/uxie-lvx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/uxie.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/azelf.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/crobat.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/ambipom.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/bronzong.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/lucario.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/aarons-collection.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-lightning.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-metal.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Aaron Curry',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/tyranitar.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010/tyranitar-prime.webp',
                numImg: '../../../assets/03.png',
                radiusCard: true
            },
            {
                cardImg: '../../../assets/cards/2008-2010/sf.047.pupitar.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/2008-2010/larvitar.png',
                numImg: '../../../assets/03.png'
            },
            {
                cardImg: '../../../assets/cards/2008-2010/machamp.png',
                numImg: '../../../assets/02.png'
            },
            {
                cardImg: '../../../assets/cards/2008-2010/machoke.png',
                numImg: '../../../assets/01.png'
            },
            {
                cardImg: '../../../assets/cards/2008-2010/machop-kick.png',
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
                cardImg: '../../../assets/cards/2008-2010/nidoqueen.png',
                numImg: '../../../assets/01.png'
            },
            {
                cardImg: '../../../assets/cards/2008-2010/nidorina.png',
                numImg: '../../../assets/01.png'
            },
            {
                cardImg: '../../../assets/cards/2008-2010/nidoran-f.png',
                numImg: '../../../assets/01.png'
            },
            {
                cardImg: '../../../assets/cards/2008-2010/spiritomb.png',
                numImg: '../../../assets/01.png'
            },
            {
                cardImg: '../../../assets/cards/2008-2010/uxie.png',
                numImg: '../../../assets/01.png'
            },
            {
                cardImg: '../../../assets/cards/2008-2010/azelf.png',
                numImg: '../../../assets/01.png'
            },
            {
                cardImg: '../../../assets/cards/2008-2010/unown-quick.png',
                numImg: '../../../assets/01.png'
            },
            {
                cardImg: '../../../assets/cards/2008-2010/poke-collector.png',
                numImg: '../../../assets/04.png'
            },
            {
                cardImg: '../../../assets/cards/2008-2010/judge-hgss.png',
                numImg: '../../../assets/04.png'
            },
            {
                cardImg: '../../../assets/cards/2008-2010/bebes-search.png',
                numImg: '../../../assets/03.png'
            },
            {
                cardImg: '../../../assets/cards/2008-2010/rare-candy-hgss.png',
                numImg: '../../../assets/04.png'
            },
            {
                cardImg: '../../../assets/cards/2008-2010/pokemon-communication-hgss.png',
                numImg: '../../../assets/04.png'
            },
            {
                cardImg: '../../../assets/cards/2008-2010/warp-point.png',
                numImg: '../../../assets/02.png'
            },
            {
                cardImg: '../../../assets/cards/2008-2010/broken-time-space.png',
                numImg: '../../../assets/02.png'
            },
            {
                cardImg: '../../../assets/cards/energy/hgss-energy-dark.png',
                numImg: '../../../assets/01.png'
            },
            {
                cardImg: '../../../assets/cards/energy/darkness-energy-hgss.png',
                numImg: '../../../assets/04.png'
            },
            {
                cardImg: '../../../assets/cards/energy/rainbow-energy-hgss.png',
                numImg: '../../../assets/04.png'
            },
            {
                cardImg: '../../../assets/cards/energy/hgss-energy-dce.png',
                numImg: '../../../assets/04.png'
            },
    ]
  },
  {
    firstName: 'Johnny Rabus',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gyarados.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010/gyarados.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/magikarp.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/sableye-overgear.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/ge.076.lunatone.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2008-2010/sv.032.lunatone.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2008-2010/sv.045.solrock.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2008-2010/entei-raikou-top.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/entei-raikou-bottom.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/crobat.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/combee.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/ditto-dna.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/uxie.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/azelf.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/felicitys-drawing.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/cynthias-feelings.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/poke-rescue.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/broken-time-space.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-fire.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-lightning.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-dark.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/call-energy.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/warp_energy.jpg',
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Alex Brosseau',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/dialga.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Emmanuel Divens',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kingdra.png',
    sprite2: '../../../assets/sprites/machamp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jeff Prasad',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/regigigas.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Vincent B',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jason F',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kristopher G ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Marc P',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/dialga.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kevin N',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/palkia.png',
    sprite2: '../../../assets/sprites/mesprit.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Colin S',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
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
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Igor D',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tracy K',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Adam Capriola',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gyarados.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ryan M',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Harrison Leven',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Joshua H',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Quin D',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Stephen M',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ian R',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tom D',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/jumpluff.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Robert A (1)',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Roberto A (2)',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Matt A',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Paarth S ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'James H',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jose M',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/donphan.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Zachary M',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Hanaan R',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gengar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Brian V',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/tyranitar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Gabriel A',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Chris A',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gengar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Clint A',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/jumpluff.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Stephan D',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gyarados.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Gregory C',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jim T',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/machamp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kevin W',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Paul W',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/palkia.png',
    sprite2: '../../../assets/sprites/mesprit.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Justin C',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/machamp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Michael P',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/machamp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tad W',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blaziken.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Justin P',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/jumpluff.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Omar F',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gengar.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Yehoshua T',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Azul C',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/shuppet.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Emre A',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Josh Wittenkeller',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sebastian M',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gengar.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Colin Moll',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/dialga.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Orion Craig',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/jumpluff.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Andy M',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'James S',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Steven H',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Eric A',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gyarados.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alex O',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gengar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Bryan V',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/donphan.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Collan B',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gengar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tyler K',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Luke R',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/machamp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Stephen S',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/tyranitar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Daniel C',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Peter O',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tyler N',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Zach Z',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gliscor.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Taylor D',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gengar.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Vikas P',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gyarados.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Samantha B',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gyarados.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Dane S',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jason B',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/manectric.png',
    sprite2: '../../../assets/sprites/entei-raikou.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Brent S',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jason Klaczynski',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
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
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Colin P',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/tyranitar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nick K',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Franco P',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Dylan P',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gengar.png',
    sprite2: '../../../assets/sprites/nidoqueen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ryan K',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Austin B',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Troy L',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/torterra.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Timothy M ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/tyranitar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tim B',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/tyranitar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Eddie M',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gengar.png',
    sprite2: '../../../assets/sprites/nidoqueen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kenton A',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ryan G',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jeffrey A',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Justin M',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/jumpluff.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Josh R',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/jumpluff.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Carson R',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gengar.png',
    sprite2: '../../../assets/sprites/machamp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Andrew W ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kingdra.png',
    sprite2: '../../../assets/sprites/machamp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'MK C',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Matthew L',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/donphan.png',
    sprite2: '../../../assets/sprites/manectric.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Edwin L',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/jumpluff.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Dustin Zimmerman',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Stephon R',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jose S',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jon N',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Derrick K',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/torterra.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Andrew M',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nicholas K',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/jumpluff.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Pedro G',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/shuppet.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
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
    firstName: 'Michael Diaz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Spencer Brown',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sam Glassett',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Aylam R.',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gengar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Chuck L.',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/jumpluff.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Isaiah Rufus',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gengar.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010/gengar-lvx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/gengar-fainting-spell.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/haunter-hypnosis.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/gastly.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/garchomp-lvx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/garchomp-c.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/crobat.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/giratina.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/mewtwo-lvx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/mewtwo.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/claydol.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/uxie.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/azelf.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/palmers-contribution.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/judge-hgss.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/looker.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/rare-candy-hgss.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/call-energy.png',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Andrew Krekeler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/azelf.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010/gardevoir-lvx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/gardevoir-psychic-lock.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/gallade.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/kirlia.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/ralts-future-sight.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/spiritomb.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/azelf-lvx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/azelf.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/azelf-downer-aterial.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/uxie.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/mesprit-pbind.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/dusknoir.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/duskull-shiny.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/claydol.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/unown-quick.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/judge-hgss.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/palmers-contribution.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/rare-candy-hgss.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-fighting.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/call-energy.png',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Eric Wu',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Geoffrey Sauk',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gyarados.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jeffrey H.',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Thomas Arena',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gengar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kyle M.',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Brandon Jones',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/azelf.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tim H.',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kingdra.png',
    sprite2: '../../../assets/sprites/machamp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'George W.',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
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
    type: '',
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
    firstName: 'Victor Aung',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gengar.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010/gengar-lvx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/gengar-fainting-spell.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/ar.041.haunter.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/2008-2010/haunter-smog.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/gastly.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/nidoqueen.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/nidorina-2008.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/nidoran-f.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/mewtwo-lvx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/mewtwo.png',
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2008-2010/azelf.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/looker.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/rare-candy-hgss.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        numImg: '../../../assets/03.png'
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
        cardImg: '../../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../../assets/07.png'
      },
      {
        cardImg: '../../../assets/cards/energy/call-energy.png',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Patrick Lane',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/tyranitar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Henry S.',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/blaziken.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
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
    type: '',
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
    type: '',
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
    type: '',
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
    type: '',
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
    type: '',
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
    type: '',
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
    type: '',
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
    type: '',
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
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Maximilian Armitage',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/machamp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jeremiah Williams',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ian Whiton',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
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
    type: '',
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

    const enableDarkMode = () => {
      title.classList.add('darkon');
      item_element.classList.add('darkon');
      if (item.list === '../../../assets/list-icon.png') {
        listIcon.setAttribute('src', '../../../assets/list-icon-white.png');
      }
      localStorage.setItem('darkMode', 'enabled');
    };
    const disableDarkMode = () => {
      title.classList.remove('darkon');
      item_element.classList.remove('darkon');
      listIcon.setAttribute('src', item.list);
      localStorage.setItem('darkMode', null);
    };
    if(darkMode === 'enabled') {
      enableDarkMode();
    };
    toggle.addEventListener('click', () => {
      darkMode = localStorage.getItem('darkMode');
      if (darkMode !== 'enabled') {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    });
    
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2010 US Nats";

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

    const enableDarkMode = () => {
      title.classList.add('darkon');
      item_element.classList.add('darkon');
      if (item.list === '../../../assets/list-icon.png') {
        listIcon.setAttribute('src', '../../../assets/list-icon-white.png');
      }
      localStorage.setItem('darkMode', 'enabled');
    };
    const disableDarkMode = () => {
      title.classList.remove('darkon');
      item_element.classList.remove('darkon');
      listIcon.setAttribute('src', item.list);
      localStorage.setItem('darkMode', null);
    };
    if(darkMode === 'enabled') {
      enableDarkMode();
    };
    toggle.addEventListener('click', () => {
      darkMode = localStorage.getItem('darkMode');
      if (darkMode !== 'enabled') {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    });
    
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2010 US Nats";

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

    const enableDarkMode = () => {
      title.classList.add('darkon');
      item_element.classList.add('darkon');
      if (item.list === '../../../assets/list-icon.png') {
        listIcon.setAttribute('src', '../../../assets/list-icon-white.png');
      }
      localStorage.setItem('darkMode', 'enabled');
    };
    const disableDarkMode = () => {
      title.classList.remove('darkon');
      item_element.classList.remove('darkon');
      listIcon.setAttribute('src', item.list);
      localStorage.setItem('darkMode', null);
    };
    if(darkMode === 'enabled') {
      enableDarkMode();
    };
    toggle.addEventListener('click', () => {
      darkMode = localStorage.getItem('darkMode');
      if (darkMode !== 'enabled') {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    });
    
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2010 US Nats";

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
