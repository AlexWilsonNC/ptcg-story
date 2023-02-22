const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Yuta Komatsuda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/garchomp-lvx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/garchomp-c.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/dialga-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/dialga-g.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/dragonite.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucario.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/pont.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-lightning.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-metal.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
        numImg: '../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Michael Pramawat',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/gardevoir-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/gardevoir-psychic-lock.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/gallade.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/kirlia.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/ralts-future-sight.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/machamp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/machop-kick.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/dusknoir.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/dusclops.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/duskull.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/spiritomb.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/looker.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucians-assignment.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/moonlight-stadium.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../assets/05.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-fighting.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Frank Diaz',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gengar.png',
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/gengar-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/gengar-fainting-spell.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/gengar-curse.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/haunter-hypnosis.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/gastly.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/spiritomb.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoqueen.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidorina.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoran-f.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/dusknoir.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/duskull-shiny.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/felicitys-drawing.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/moonlight-stadium.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../assets/05.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Miguel Garcia',
    flag: '../../assets/flags/switzerland.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/garchomp-lvx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/garchomp-c.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/entei-raikou-top.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/entei-raikou-bottom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/ambipom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucario.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roserade.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        numImg: '../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/chatot.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/vs-seeker.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-lightning.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-fire.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Yasmin Kiss',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gyarados.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Curtis Lyon',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/gardevoir-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/gardevoir-psychic-lock.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/gallade.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/kirlia.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/ralts-future-sight.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoqueen.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoran-f.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/spiritomb.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/giratina.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-quick.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/palmers-contribution.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucians-assignment.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokehealer-plus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/moonlight-stadium.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../assets/05.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Sami Sekkoum',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Wai Kit Lam',
    flag: '../../assets/flags/hong-kong.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Con Le',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/sableye.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/sableye-overgear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/garchomp-lvx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/garchomp-c.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/honchkrow-ability.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/honchkrow-sp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/murkrow.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        numImg: '../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/dragonite.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/chatot-sp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-quick.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-initiative.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/felicitys-drawing.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/vs-seeker.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dark.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/dp-darkness-energy.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Gordon Coates',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/gardevoir-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/gardevoir-psychic-lock.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/gallade.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/kirlia.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/ralts-future-sight.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/dusknoir.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/duskull-shiny.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/spiritomb.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-quick.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucians-assignment.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../assets/05.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Yee Wei Chun',
    flag: '../../assets/flags/liberia-malaysia.png',
    sprite1: '../../assets/sprites/dialga.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/list-icon.png',
    type: 'metal',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/dialga-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/dialga-g.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/garchomp-lvx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/garchomp-c.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        numImg: '../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/drifblim-sp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/felicitys-drawing.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/vs-seeker.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-metal.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-special-dp.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Tomi Sjöblom',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/regigigas.png',
    sprite2: '../../assets/sprites/abomasnow.png',
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/regigigas-lvx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/regigigas.jpg',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/abomasnow.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/snover.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf-downer-aterial.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/relicanth.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/regice.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/giratina.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-quick.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/felicitys-drawing.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/super-scoop-up-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/time-space-distortion.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/vs-seeker.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-water.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-metal.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-fighting.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Tsuguyoshi Yamato',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/garchomp-lvx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/garchomp-c.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/gardevoir-psychic-lock.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/kirlia.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/ralts-future-sight.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/ambipom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/dragonite.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/purugly.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        numImg: '../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/absol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-quick.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-lightning.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Morten Gundesen',
    flag: '../../assets/flags/denmark.png',
    sprite1: '../../assets/sprites/abomasnow.png',
    sprite2: '../../assets/sprites/ampharos.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/abomasnow.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/snover.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/ampharos.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/flaafy.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mareep.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/spiritomb.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/chatot.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-quick.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/underground-expedition.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/copycat.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-water.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-lightning.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Colin Stromberg',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Takuya Yoneda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/dialga.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/list-icon.png',
    type: 'metal',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/dialga-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/dialga-g.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/garchomp-lvx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/garchomp-c.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sableye-overgear.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/ambipom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/dragonite.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/froslass.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/honchkrow-sp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roserade.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        numImg: '../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-quick.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-initiative.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-metal.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dark.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Erik Nance',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/steelix.png',
    sprite2: '../../assets/sprites/blissey.png',
    list: '../../assets/list-icon.png',
    type: 'metal',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/steelix-prime.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/onix.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/blissey.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/chansey.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/pachirisu.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/pont.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/engineers-adjustments.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/volkner.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/life-herb.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/moomoo-milk.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/pluspower.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-metal.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-special-dp.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Aziz Al-Yami',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/sableye.png',
    sprite2: '../../assets/sprites/blaziken.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/sableye-overgear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/garchomp-lvx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/garchomp-c.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/blaziken-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/blaziken.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/02.png'
      },
        {
          cardImg: '../../assets/cards/2008-2010/azelf.png',
          numImg: '../../assets/01.png'
        },
      {
        cardImg: '../../assets/cards/2008-2010/ambipom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        numImg: '../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-quick.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-initiative.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/looker.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/vs-seeker.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-fire.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dark.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/dp-darkness-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Toni Taitto',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/donphan.png',
    sprite2: '../../assets/sprites/manectric.png',
    list: '../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/donphan-prime.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/phanpy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/manectric.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/electrike.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/regirock.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/relicanth.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/entei-raikou-top.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/entei-raikou-bottom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/felicitys-drawing.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/super-scoop-up-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bench-shield.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/stark-mountain.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-fighting.png',
        numImg: '../../assets/07.png'
      },
      {
        cardImg: '../../assets/cards/energy/multi-energy-dp.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Justin Bokhari',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gengar.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Matthew Koo',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'David Booij',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/garchomp-lvx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/garchomp-c.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/ambipom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucario.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        numImg: '../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/chatot.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-quick.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-lightning.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Christophe Caron',
    flag: '../../assets/flags/france.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gyarados.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Lorenzo Pieri',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Leandro Cerisola',
    flag: '../../assets/flags/argentina.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'David Sturm',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/torterra.png',
    list: '../../assets/list-icon.png',
    type: 'grass',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/flygon-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/flygon.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/vibrava.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/trapinch.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/torterra-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/torterra-hgss-grass.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/torterra-fighting.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/grotle.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/turtwig.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoqueen.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidorina.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoran-f.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/spiritomb.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-grass.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-fighting.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Denny Rodriguez',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Drew Guritzky',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/garchomp.png',
    sprite2: '../../assets/sprites/dusknoir.png',
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/garchomp.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/gabite.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/gible.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/dusknoir.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/duskull-shiny.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/ambipom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-quick.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
        numImg: '../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Sho Sasaki',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Stephan Norregaard',
    flag: '../../assets/flags/denmark.png',
    sprite1: '../../assets/sprites/gengar.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tom Hall',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sergio Ortiz',
    flag: '../../assets/flags/mexico.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  }
]

let seniors = [
  {
    firstName: 'Jacob Lesage',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/garchomp-lvx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/garchomp-c.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mismagius.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/misdreavus.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/ambipom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucario.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        numImg: '../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/chatot.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-lightning.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Mychael Bryan',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gyarados.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/gyarados.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/magikarp.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sableye-overgear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mesprit-body.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf-downer-aterial.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/combee.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-quick.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/felicitys-drawing.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-rescue.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/super-scoop-up-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/vs-seeker.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/cyclone-energy-dp.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
        numImg: '../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Ann-Marie Thompson',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gengar.png',
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/gengar-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/gengar-fainting-spell.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/gengar-curse.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/haunter-smog.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/gastly.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/spiritomb.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/manectric.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/electrike.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/dusknoir.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/duskull-shiny.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/palmers-contribution.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/moonlight-stadium.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../assets/06.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-lightning.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Hiroki Yano',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/garchomp-lvx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/garchomp-c.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/honchkrow-ability.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/murkrow.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/ambipom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/dragonite.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        numImg: '../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-quick.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/vs-seeker.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-lightning.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dark.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Michael Diaz',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kaia Hovland Jensen',
    flag: '../../assets/flags/norway.png',
    sprite1: '../../assets/sprites/sableye.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Toya Nishimaki',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/donphan.png',
    sprite2: '../../assets/sprites/entei.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Edmund Kuras',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/gardevoir-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/gardevoir-psychic-lock.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/gallade.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/kirlia.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/ralts-future-sight.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoqueen.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidorina.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoran-f.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/spiritomb.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-quick.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucians-assignment.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/palmers-contribution.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokehealer-plus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../assets/05.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Aaron Choong',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/dialga.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/list-icon.png',
    type: 'metal',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/dialga-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/dialga-g.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/garchomp-lvx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/garchomp-c.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        numImg: '../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/drifblim-sp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/vs-seeker.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-metal.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-special-dp.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Brandon Jones',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/gardevoir-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/gardevoir-psychic-lock.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/gardevoir-psychic-connect.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/gallade.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/kirlia.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/ralts-future-sight.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mesprit-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf-downer-aterial.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/spiritomb.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-quick.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/palmers-contribution.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/moonlight-stadium.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../assets/07.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Karri Makela',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Takuto Itagaki',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ojvind Svinhufvud',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/donphan.png',
    sprite2: '../../assets/sprites/manectric.png',
    list: '../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/donphan-prime.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/phanpy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/manectric.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/electrike.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/regirock.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/relicanth.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/entei-raikou-top.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/entei-raikou-bottom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/felicitys-drawing.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/super-scoop-up-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bench-shield.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/stark-mountain.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-fighting.png',
        numImg: '../../assets/07.png'
      },
      {
        cardImg: '../../assets/cards/energy/multi-energy-dp.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Michael Bergerac',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Andrew Krekeler',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ty Wheeler',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  }
]

let juniors = [
  {
    firstName: 'Yuka Furusawa',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/jumpluff.png',
    list: '../../assets/list-icon.png',
    type: 'grass',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/jumpluff.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/skiploom.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/hoppip-bounce.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/hoppip-body.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-retire.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-quick.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/pluspower.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-grass.png',
        numImg: '../../assets/06.png'
      }
    ]
  },
  {
    firstName: 'Juan Arenas',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/garchomp-lvx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/garchomp-c.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mismagius.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/misdreavus.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/ambipom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucario.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        numImg: '../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/looker.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/palmers-contribution.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-lightning.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Simon Taylor',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gyarados.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/gyarados.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/magikarp.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sableye-overgear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/combee.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/regice.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/felicitys-drawing.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/looker.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-rescue.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/super-scoop-up-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-reversal.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/cyclone-energy-dp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Thomas Harle',
    flag: '../../assets/flags/france.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gyarados.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/gyarados.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/magikarp.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sableye-overgear.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf-downer-aterial.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/regice.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/rapidash-sp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/felicitys-drawing.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/super-scoop-up-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-rescue.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/time-space-distortion.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/vs-seeker.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dark.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Toshimi Yamazaki',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Koichi Nishida',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Henry Chao',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Hiroki Masuda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sota Horikawa',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Gustavo Wada',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tsubasa Nakamura',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nao Kawamura',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nathan Sweet',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Micah Olton',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Titouan Vannay',
    flag: '../../assets/flags/switzerland.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/shuppet.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sumika Yanagida',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
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
                        document.querySelector('.playerName').innerHTML = item.firstName + " - 2010 Worlds";

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

    if (item.list === '../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2010 Worlds";

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

    if (item.list === '../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2010 Worlds";

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
