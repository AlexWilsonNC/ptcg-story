const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');
const fourList = document.querySelector('.four-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Matthew Moss',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/feraligatr.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n1.005.feraligatr.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.032.croconaw.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.081.totodile.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.023.magby_.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.030.smeargle.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.012.pichu_.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.076.erikas_bellsprout.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.126.trash_exchange.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.118.secret_mission.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.090.time_capsule.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.104.the_rockets_training_gym.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.124.narrow_gym.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.102.water_energy.jpg',
        numImg: '../../../assets/16.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Robert Fischer',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/crobat.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n3.004.crobat.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.029.golbat.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.059.zubat_.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.024.murkrow.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.036.yanma_.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.030.smeargle.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.049.unown_m.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.100.erika_.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.076.imposter_oaks_revenge.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.090.time_capsule.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.093.gold_berry.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g2.102.chaos_gym.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g2.109.resistance_gym.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.099.grass_energy.jpg',
        numImg: '../../../assets/10.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.104.darkness_energy.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Josue Rojano',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/feraligatr.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n1.005.feraligatr.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.032.croconaw.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.081.totodile.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.012.pichu_.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.023.magby_.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.066.tyrogue.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.030.smeargle.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.126.trash_exchange.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.124.narrow_gym.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.061.healing_field.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.102.water_energy.jpg',
        numImg: '../../../assets/17.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Dale Hunter',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/feraligatr.png',
    sprite2: '../../../assets/sprites/qwilfish.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n1.005.feraligatr.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.032.croconaw.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.081.totodile.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.049.qwilfish.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.022.elekid.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.126.trash_exchange.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.121.blaines_gamble.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.062.pokemon_breeder_fields.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.061.healing_field.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.102.water_energy.jpg',
        numImg: '../../../assets/19.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Vincent Barone',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/steelix.png',
    sprite2: '../../../assets/sprites/slowking.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n1.014.slowking.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.073.slowpoke.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.015.steelix.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.069.onix_.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.040.igglybuff.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.024.murkrow.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.100.erika_.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.076.imposter_oaks_revenge.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g2.126.warp_point.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.093.gold_berry.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.099.berry_.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.061.healing_field.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g2.102.chaos_gym.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.019.metal_energy.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.104.darkness_energy.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.105.recycle_energy.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.081.full_heal_energy.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Andres Rodríguez',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/crobat.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n3.004.crobat.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.029.golbat.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.059.zubat_.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.024.murkrow.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.012.pichu_.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.100.erika_.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.076.imposter_oaks_revenge.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g2.102.chaos_gym.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.104.the_rockets_training_gym.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.099.grass_energy.jpg',
        numImg: '../../../assets/12.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.104.darkness_energy.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Ngoc Cang Dinh',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/feraligatr.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n1.005.feraligatr.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.032.croconaw.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.081.totodile.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.030.smeargle.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.012.pichu_.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.023.magby_.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.022.elekid.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.126.trash_exchange.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.118.secret_mission.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.124.narrow_gym.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.061.healing_field.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.102.water_energy.jpg',
        numImg: '../../../assets/17.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Doug Bui',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arcanine.png',
    sprite2: '../../../assets/sprites/entei.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/g2.001.blaines_arcanine.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g2.062.blaines_growlithe.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.006.entei_.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.017.entei_.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g2.017.blaine.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.090.time_capsule.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g2.113.cinnabar_city_gym.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.098.fire_energy.jpg',
        numImg: '../../../assets/30.png',
        oldCard: true
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Robert Frac',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/feraligatr.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n1.005.feraligatr.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.032.croconaw.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.081.totodile.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.023.magby_.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.022.elekid.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.030.smeargle.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.126.trash_exchange.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.090.time_capsule.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.061.healing_field.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.102.water_energy.jpg',
        numImg: '../../../assets/18.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Dylan Austin',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/feraligatr.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n1.005.feraligatr.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.032.croconaw.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.081.totodile.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.012.pichu_.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.023.magby_.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.027.suicune.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.030.smeargle.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.126.trash_exchange.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.118.secret_mission.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.061.healing_field.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.124.narrow_gym.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.104.the_rockets_training_gym.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.102.water_energy.jpg',
        numImg: '../../../assets/17.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Jonathan Recktenwald',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/umbreon.png',
    sprite2: '../../../assets/sprites/slowking.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n1.014.slowking.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.073.slowpoke.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.013.umbreon.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.038.eevee_.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/wizards_black_star_promos.012.mewtwo.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.030.smeargle.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.024.murkrow.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.062.pokemon_breeder_fields.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g2.126.warp_point.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.118.secret_mission.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.060.balloon_berry.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.093.gold_berry.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.104.the_rockets_training_gym.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.101.psychic_energy.jpg',
        numImg: '../../../assets/08.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.104.darkness_energy.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.080.rainbow_energy.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Robert Francis',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/feraligatr.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n1.005.feraligatr.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.032.croconaw.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.081.totodile.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.027.suicune.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.012.pichu_.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.023.magby_.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.030.smeargle.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.126.trash_exchange.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.118.secret_mission.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.061.healing_field.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.104.the_rockets_training_gym.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.102.water_energy.jpg',
        numImg: '../../../assets/16.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Chris Wilms',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/feraligatr.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n1.005.feraligatr.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.032.croconaw.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.081.totodile.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.027.suicune.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.040.igglybuff.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.067.brocks_mankey.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.126.trash_exchange.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.118.secret_mission.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.061.healing_field.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.102.water_energy.jpg',
        numImg: '../../../assets/17.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Levi Canfield',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/feraligatr.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n1.005.feraligatr.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.032.croconaw.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.081.totodile.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.012.pichu_.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.023.magby_.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.027.suicune.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.030.smeargle.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.126.trash_exchange.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.118.secret_mission.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.061.healing_field.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.124.narrow_gym.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.102.water_energy.jpg',
        numImg: '../../../assets/17.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Vincent Shek',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/feraligatr.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n1.005.feraligatr.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.032.croconaw.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.081.totodile.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.040.igglybuff.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.022.elekid.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.126.trash_exchange.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.118.secret_mission.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.104.the_rockets_training_gym.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.124.narrow_gym.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.102.water_energy.jpg',
        numImg: '../../../assets/18.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Steven Bearzi',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/feraligatr.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n1.005.feraligatr.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.032.croconaw.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.081.totodile.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.040.igglybuff.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.030.smeargle.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.126.trash_exchange.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.118.secret_mission.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.061.healing_field.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.102.water_energy.jpg',
        numImg: '../../../assets/17.png',
        oldCard: true
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Seena Ghaziaskar',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/crobat.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n3.004.crobat.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.029.golbat.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.059.zubat_.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.012.pichu_.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.024.murkrow.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g2.102.chaos_gym.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g2.109.resistance_gym.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.099.grass_energy.jpg',
        numImg: '../../../assets/12.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.104.darkness_energy.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Bryson Bonham',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/crobat.png',
    sprite2: '../../../assets/sprites/umbreon.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n3.004.crobat.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.029.golbat.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.059.zubat_.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.013.umbreon.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.038.eevee_.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.024.murkrow.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.012.pichu_.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.076.imposter_oaks_revenge.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.062.pokemon_breeder_fields.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.118.secret_mission.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.111.good_manners.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.125.sabrinas_gaze.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.061.healing_field.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.099.grass_energy.jpg',
        numImg: '../../../assets/11.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.104.darkness_energy.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.080.rainbow_energy.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Adam Falconi',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/feraligatr.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n1.005.feraligatr.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.032.croconaw.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.081.totodile.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.023.magby_.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.022.elekid.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.012.pichu_.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.126.trash_exchange.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.118.secret_mission.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.061.healing_field.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.102.water_energy.jpg',
        numImg: '../../../assets/18.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Gustavo Patricio ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/steelix.png',
    sprite2: '../../../assets/sprites/slowking.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Raul Stern',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/crobat.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Devon Mancini',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/feraligatr.png',
    sprite2: '../../../assets/sprites/suicune.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Tommy Derian',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/feraligatr.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Chris Cartagena',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/crobat.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
]

let fourEvent = [
  {
    firstName: 'David Bui',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/feraligatr.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Jonathan Brooks',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/feraligatr.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Joseph Barone',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/typhlosion.png',
    sprite2: '../../../assets/sprites/arcanine.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Luke Waruszewski',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/typhlosion.png',
    sprite2: '../../../assets/sprites/houndoom.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n1.017.typhlosion.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.046.quilava.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.057.cyndaquil.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.004.houndoom.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.008.houndoom.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/e-reader/n2.024.houndour.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.012.rockets_moltres.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n2.047.unown_d.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.090.time_capsule.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.093.gold_berry.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g2.102.chaos_gym.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n3.061.healing_field.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.098.fire_energy.jpg',
        numImg: '../../../assets/15.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.104.darkness_energy.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Martin Charest',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/feraligatr.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Nicholas Chimento',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/typhlosion.png',
    sprite2: '../../../assets/sprites/arcanine.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Stuart Benson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/steelix.png',
    sprite2: '../../../assets/sprites/hitmonchan.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Wesley Bartlett',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/steelix.png',
    sprite2: '../../../assets/sprites/slowking.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil',
        numImg: '../../../assets/04.png',
        oldCard: true
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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2001 CA STS";

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

          if (meep.length > 0) {
            for (let i of meep) {
              i.onclick = () => {
                let clone = i.cloneNode();
                clone.className = "";
                zoombox.innerHTML = "";
                zoombox.appendChild(clone);
                zoombox.className = "show";
              };
            }
          }

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2001 CA STS";

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

          if (meep.length > 0) {
            for (let i of meep) {
              i.onclick = () => {
                let clone = i.cloneNode();
                clone.className = "";
                zoombox.innerHTML = "";
                zoombox.appendChild(clone);
                zoombox.className = "show";
              };
            }
          }

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2001 CA STS";

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

          if (meep.length > 0) {
            for (let i of meep) {
              i.onclick = () => {
                let clone = i.cloneNode();
                clone.className = "";
                zoombox.innerHTML = "";
                zoombox.appendChild(clone);
                zoombox.className = "show";
              };
            }
          }

          zoombox.onclick = () => {
            zoombox.className = "";
          };
        });
      })
    }
    juniorList.appendChild(item_element);
  }
}

// four
function displayList4(array = []) {
  fourList.innerHTML = '';

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2001 CA STS";

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

          if (meep.length > 0) {
            for (let i of meep) {
              i.onclick = () => {
                let clone = i.cloneNode();
                clone.className = "";
                zoombox.innerHTML = "";
                zoombox.appendChild(clone);
                zoombox.className = "show";
              };
            }
          }

          zoombox.onclick = () => {
            zoombox.className = "";
          };
        });
      })
    }

    fourList.appendChild(item_element);
  }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
displayList2(seniors);
displayList3(juniors);
displayList4(fourEvent);
