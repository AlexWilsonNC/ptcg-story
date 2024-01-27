const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Tom Hanley',
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
    firstName: 'Jason Klaczynski',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/typhlosion.png',
    sprite2: '../../../assets/sprites/arcanine.png',
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
        cardImg: '../../../assets/cards/base-fossil/g2.001.blaines_arcanine.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g2.062.blaines_growlithe.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g2.075.giovannis_nidoran_female.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.067.brocks_mankey.jpg',
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
        cardImg: '../../../assets/cards/base-fossil/g2.116.master_ball.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g2.017.blaine.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g2.113.cinnabar_city_gym.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.098.fire_energy.jpg',
        numImg: '../../../assets/15.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.019.metal_energy.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Rudy Rodriquez',
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
    firstName: 'Matt Tyler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
    firstName: 'Frank Moore',
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
    firstName: 'David Nishijimu',
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
    firstName: 'Chris Fulop',
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
    firstName: 'Bruce Long',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/arcanine.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/g2.001.blaines_arcanine.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g2.062.blaines_growlithe.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.022.elekid.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.067.brocks_mankey.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g2.017.blaine.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.118.secret_mission.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.089.super_energy_retrieval.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g2.116.master_ball.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.093.gold_berry.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g2.113.cinnabar_city_gym.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.098.fire_energy.jpg',
        numImg: '../../../assets/16.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.105.recycle_energy.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
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
    firstName: 'Johnny Burton',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/sandslash.png',
    sprite2: '../../../assets/sprites/dugtrio.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/base-fossil/g2.036.brocks_sandslash.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/g1.071.brocks_sandshrew.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/ro.006.dark_dugtrio.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/ro.052.diglett.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/g1.011.rockets_hitmonchan.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/n1.059.gligar.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/n1.023.magby_.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
                numImg: '../../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/n1.082.wooper.jpg',
                numImg: '../../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/g1.019.the_rockets_trap.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/g1.100.erika_.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/ro.076.imposter_oaks_revenge.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/g2.109.resistance_gym.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
                numImg: '../../../assets/20.png',
                oldCard: true
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
    firstName: '--',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
    firstName: '--',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
    firstName: '--',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
    firstName: '--',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
    firstName: 'Tom Z',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/typhlosion.png',
    sprite2: '../../../assets/sprites/charizard.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/base-fossil/n1.017.typhlosion.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/n1.047.quilava.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/n1.057.cyndaquil.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/g2.002.blaines_charizard.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/g2.031.blaines_charmeleon.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/g1.061.blaines_charmander.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/n1.040.magmar.jpg',
                numImg: '../../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/n1.023.magby_.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/n1.033.electabuzz.jpg',
                numImg: '../../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/n1.022.elekid.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
                numImg: '../../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/g2.116.master_ball.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/n1.093.gold_berry.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/g2.113.cinnabar_city_gym.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.098.fire_energy.jpg',
                numImg: '../../../assets/17.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/ro.081.full_heal_energy.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
    ]
  },
]

let seniors = [
  {
    firstName: 'Tom Liesegang',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/typhlosion.png',
    sprite2: '../../../assets/sprites/arcanine.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n1.017.typhlosion.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.047.quilava.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.057.cyndaquil.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.024.murkrow.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.076.erikas_bellsprout.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.022.elekid.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.023.magby_.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.048.porygon.jpg',
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
        cardImg: '../../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.076.imposter_oaks_revenge.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.090.time_capsule.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/sabrinas-psychic-control.png',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g2.116.master_ball.jpg',
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
        cardImg: '../../../assets/cards/base-fossil/bs.098.fire_energy.jpg',
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
    firstName: 'Aaron Gerardo',
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
        cardImg: '../../../assets/cards/base-fossil/g1.067.brocks_mankey.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.022.elekid.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.023.magby_.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.118.secret_mission.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.126.trash_exchange.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g2.118.mistys_tears.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.093.gold_berry.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.124.narrow_gym.jpg',
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
    firstName: 'Phil Mondiello',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/slowking.png',
    sprite2: '../../../assets/sprites/steelix.png',
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
    firstName: 'Robert Frac',
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
    firstName: 'Devin P-Robson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/typhlosion.png',
    sprite2: '../../../assets/sprites/arcanine.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n1.017.typhlosion.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.046.quilava.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.057.cyndaquil.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
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
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g2.017.blaine.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.089.super_energy_retrieval.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.118.secret_mission.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g2.116.master_ball.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.100.erika_.jpg',
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
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g2.113.cinnabar_city_gym.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.098.fire_energy.jpg',
        numImg: '../../../assets/17.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Alex Brosseau',
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
    firstName: 'Dylan Austin',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
    firstName: 'Brian Six',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
    firstName: '--',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
    firstName: 'Colin Hu',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/typhlosion.png',
    sprite2: '../../../assets/sprites/arcanine.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/n1.017.typhlosion.jpg',
        numImg: '../../../assets/03.png',
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
        cardImg: '../../../assets/cards/base-fossil/g2.001.blaines_arcanine.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g2.062.blaines_growlithe.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.040.magmar.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g2.017.blaine.jpg',
        numImg: '../../../assets/04.png',
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
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.100.erika_.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.093.gold_berry.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g2.113.cinnabar_city_gym.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.098.fire_energy.jpg',
        numImg: '../../../assets/19.png',
        oldCard: true
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Jonathan Brooks',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blastoise.png',
    sprite2: '../../../assets/sprites/steelix.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/ro.003.dark_blastoise.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/lc.039.dark_wartortle.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/ro.068.squirtle.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.015.steelix.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.069.onix_.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.020.cleffa.jpg',
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
        cardImg: '../../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.090.time_capsule.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.126.trash_exchange.jpg',
        numImg: '../../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.093.gold_berry.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/g1.124.narrow_gym.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.102.water_energy.jpg',
        numImg: '../../../assets/15.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/n1.019.metal_energy.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Mindy Lambkee',
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
    firstName: 'John Nhuyen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
    firstName: 'Stephanie Borchardt',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/dewgong.png',
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
    firstName: 'Ryan Lucero',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
    firstName: 'Nathan Kessel',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
    firstName: 'Joshua Cartagena',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2001 NJ STS";

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

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2001 NJ STS";

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

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2001 NJ STS";

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
