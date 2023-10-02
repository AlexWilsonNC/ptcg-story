const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'David Cohen',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/magnezone.png',
    sprite2: '../../assets/sprites/emboar.png',
    list: '../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012/magnezone-prime.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/magneton.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnemite.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/emboar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pignite.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/tepig.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/reshiram.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/rayquaza-deoxys-top.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/rayquaza-deoxys-bottom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/twins.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/fisherman.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/energy-retrieval-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fire.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/rescue-energy.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Ross Cawthon',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/vileplume.png',
    sprite2: '../../assets/sprites/reuniclus.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012/vileplume.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/gloom.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/oddish.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/reuniclus.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/duosion.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/solosis.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/donphan-prime.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/phanpy.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/zekrom.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pichu.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/blissey-prime.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/chansey.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/suicune-entei-top.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/suicune-entei-bottom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/twins.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/seeker.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/tropical-beach.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fire.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tom Dolezal',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012/reshiram.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/typhlosion-prime.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/quilava.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/cyndaquil-col.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/ninetales.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/vulpix.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/twins.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/revive.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/energy-retrieval-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fire.png',
        numImg: '../../assets/13.png'
      }
    ]
  },
  {
    firstName: 'Josue Palomino',
    flag: '../../assets/flags/mexico.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012/reshiram.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/typhlosion-prime.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/quilava.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/cyndaquil-col.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/ninetales.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/vulpix.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/samurott.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/oshawott.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/engineers-adjustments.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/revive.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/energy-retrieval-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fire.png',
        numImg: '../../assets/12.png'
      },
      {
        cardImg: '../../assets/cards/energy/rescue-energy.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Josh Wittenkeller',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/yanmega.png',
    sprite2: '../../assets/sprites/magnezone.png',
    list: '../../assets/list-icon.png',
    type: 'grass',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012/yanmega.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/yanma.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnezone-prime.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/magneton.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnemite.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/kingdra.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/horsea.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/jirachi.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/judge-hgss.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/twins.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        numImg: '../../assets/05.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-psychic.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Jeremy Jallen',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012/reshiram.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/typhlosion-prime.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/quilava.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/cyndaquil-col.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/ninetales.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/vulpix.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/tyrogue-col.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/revive.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fire.png',
        numImg: '../../assets/12.png'
      }
    ]
  },
  {
    firstName: 'Lorenzo Voltolina',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/magnezone.png',
    sprite2: '../../assets/sprites/emboar.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Dylan Lefavour',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012/reshiram.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/typhlosion-prime.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/quilava.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/cyndaquil-col.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/ninetales.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/vulpix.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokegear.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/revive.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fire.png',
        numImg: '../../assets/11.png'
      },
      {
        cardImg: '../../assets/cards/energy/rescue-energy.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Sami Sekkoum',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/yanmega.png',
    sprite2: '../../assets/sprites/magnezone.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Dylan Bryan',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/donphan.png',
    sprite2: '../../assets/sprites/zoroark.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Luke Reed',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'David Meulenbroeks',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Filipp Lausch',
    flag: '../../assets/flags/austria.png',
    sprite1: '../../assets/sprites/yanmega.png',
    sprite2: '../../assets/sprites/magnezone.png',
    list: '../../assets/list-icon.png',
    type: 'grass',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012/yanmega.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/yanma.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnezone-prime.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/magneton.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnemite.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/kingdra.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/horsea.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/absol-prime.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pachirisu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/judge-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        numImg: '../../assets/10.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-water.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Mitchel Silva',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jay Hornung',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/yanmega.png',
    sprite2: '../../assets/sprites/magnezone.png',
    list: '../../assets/list-icon.png',
    type: 'grass',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012/yanmega.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/yanma.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnezone-prime.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/magneton.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnemite.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/kingdra.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/horsea.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/manaphy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pachirisu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/judge-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/twins.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        numImg: '../../assets/10.png'
      },
      {
        cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Miska Saari',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012/reshiram.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/typhlosion-prime.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/quilava.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/cyndaquil-col.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/manaphy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokegear.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-circulator.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/lost-remover.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/revive.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/energy-retrieval-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fire.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/energy/rescue-energy.png',
        numImg: '../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Nelson Chua',
    flag: '../../assets/flags/singapore.png',
    sprite1: '../../assets/sprites/donphan.png',
    sprite2: '../../assets/sprites/zoroark.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Aaron Choong',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Simone Soldo',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/kingdra.png',
    sprite2: '../../assets/sprites/yanmega.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Gabriel Arriola',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alessandro Cremascoli',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/yanmega.png',
    sprite2: '../../assets/sprites/magnezone.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'David Booij',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Michael Pramawat',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Matt Souerby',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/donphan.png',
    sprite2: '../../assets/sprites/zoroark.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Simon Eriksen',
    flag: '../../assets/flags/denmark.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Yacine Sekkoum',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/yanmega.png',
    sprite2: '../../assets/sprites/magnezone.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Marco Escher',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/magnezone.png',
    sprite2: '../../assets/sprites/emboar.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Matius Hurskainen',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ulises Santamria',
    flag: '../../assets/flags/mexico.png',
    sprite1: '../../assets/sprites/donphan.png',
    sprite2: '../../assets/sprites/zoroark.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jayson Harry',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/yanmega.png',
    sprite2: '../../assets/sprites/magnezone.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ricardo Garcia',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alex Fields',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/yanmega.png',
    sprite2: '../../assets/sprites/zoroark.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  }
]

let seniors = [
  {
    firstName: 'Christopher Kan',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012/reshiram.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/typhlosion-prime.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/quilava.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/cyndaquil-col.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/engineers-adjustments.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/elm-training-method.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokegear.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/revive.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/energy-retrieval-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fire.png',
        numImg: '../../assets/10.png'
      },
      {
        cardImg: '../../assets/cards/energy/rescue-energy.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Marco Facchin',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/yanmega.png',
    sprite2: '../../assets/sprites/magnezone.png',
    list: '../../assets/list-icon.png',
    type: 'grass',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012/yanmega.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/yanma.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnezone-prime.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/magneton.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnemite.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/kingdra.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/horsea.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/jirachi.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pachirisu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/manaphy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/judge-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/twins.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        numImg: '../../assets/07.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-psychic.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/rescue-energy.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Grafton Roll',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/yanmega.png',
    sprite2: '../../assets/sprites/magnezone.png',
    list: '../../assets/list-icon.png',
    type: 'grass',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012/yanmega.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/yanma.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnezone-prime.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/magneton.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnemite.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/kingdra.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/seadra.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/horsea.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pachirisu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/judge-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/seeker.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        numImg: '../../assets/07.png'
      },
      {
        cardImg: '../../assets/cards/energy/rescue-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Luke Burke',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012/reshiram.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/typhlosion-prime.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/quilava.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/cyndaquil-col.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokegear.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/revive.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/lost-remover.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fire.png',
        numImg: '../../assets/11.png'
      }
    ]
  },
  {
    firstName: 'Ryan McGregor',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jacob Lesage',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/yanmega.png',
    sprite2: '../../assets/sprites/magnezone.png',
    list: '../../assets/list-icon.png',
    type: 'grass',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012/yanmega.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/yanma.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnezone-prime.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/magneton.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnemite.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/absol-prime.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pachirisu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/judge-hgss.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokegear.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/super-scoop-up-hgss.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        numImg: '../../assets/10.png'
      }
    ]
  },
  {
    firstName: 'Kay Lüdecke',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Brian Hathaway',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/mew.png',
    sprite2: '../../assets/sprites/vileplume.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Fares Sekkoum',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/donphan.png',
    sprite2: '../../assets/sprites/zoroark.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Niko Kivimäki',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/donphan.png',
    sprite2: '../../assets/sprites/zoroark.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Johannes Martikkala',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Miloslav Poslední',
    flag: '../../assets/flags/czech-republic.png',
    sprite1: '../../assets/sprites/donphan.png',
    sprite2: '../../assets/sprites/zoroark.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012/yanmega.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/yanma.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/zoroark.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/zorua.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/donphan-prime.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/phanpy.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/phanpy-col.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/bouffalant.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/tyrogue-col.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/judge-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokegear.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-circulator.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
        numImg: '../../assets/05.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Adler Pierce',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'William Boatman',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Yuka Furusawa',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Xavier Delfosse',
    flag: '../../assets/flags/switzerland.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  }
]

let juniors = [
  {
    firstName: 'Gustavo Wada',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/yanmega.png',
    sprite2: '../../assets/sprites/magnezone.png',
    list: '../../assets/list-icon.png',
    type: 'grass',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012/yanmega.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/yanma.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnezone-prime.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/magneton.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnemite.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/kingdra.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/seadra.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/horsea.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/tyrogue-col.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pachirisu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/judge-hgss.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        numImg: '../../assets/10.png'
      }
    ]
  },
  {
    firstName: 'Kohei Takenaka',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012/reshiram.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/typhlosion-prime.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/quilava.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/cyndaquil-col.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokegear.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fire.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/energy/rescue-energy.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Alex Krekeler',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/donphan.png',
    sprite2: '../../assets/sprites/zoroark.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012/yanmega.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/yanma.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/zoroark.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/zorua.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/donphan-prime.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/phanpy.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/reshiram.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/bouffalant.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/judge-hgss.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/potion-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
        numImg: '../../assets/06.png'
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Joseph Nawal',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/yanmega.png',
    sprite2: '../../assets/sprites/magnezone.png',
    list: '../../assets/list-icon.png',
    type: 'grass',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012/yanmega.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/yanma.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnezone-prime.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/magneton.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnemite.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/kingdra.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/seadra.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/horsea.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/tyrogue-col.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/judge-hgss.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/flower-shop-lady.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        numImg: '../../assets/08.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-grass.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/rescue-energy.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Ethan Christopher',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/magnezone.png',
    sprite2: '../../assets/sprites/emboar.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Klein Houmani',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Devon Roth',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/magnezone.png',
    sprite2: '../../assets/sprites/emboar.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jonas Rasmussen',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/magnezone.png',
    sprite2: '../../assets/sprites/emboar.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Colter Decker',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/donphan.png',
    sprite2: '../../assets/sprites/zoroark.png',
    list: '../../assets/sprites/blank.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Martin Guillemet',
    flag: '../../assets/flags/france.png',
    sprite1: '../../assets/sprites/magnezone.png',
    sprite2: '../../assets/sprites/emboar.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Patrick Martinez',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/emboar.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sydney Morisoli',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012/reshiram.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/typhlosion-prime.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/quilava.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/cyndaquil-col.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/ninetales.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/vulpix.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/tyrogue-col.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/flower-shop-lady.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/energy-retrieval-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fire.png',
        numImg: '../../assets/12.png'
      },
    ]
  },
  {
    firstName: 'Thomas Guillemet',
    flag: '../../assets/flags/france.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jan Zimmer',
    flag: '../../assets/flags/czech-republic.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Simon Taylor',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Keito Arai',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
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
                        document.querySelector('.playerName').innerHTML = item.firstName + " - 2011 Worlds";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2011 Worlds";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2011 Worlds";

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
