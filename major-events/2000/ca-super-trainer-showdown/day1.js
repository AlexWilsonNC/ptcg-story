const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Andrew Marshall',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/hitmonchan.png',
    sprite2: '../../../assets/sprites/mewtwo.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/base-fossil/wizards_black_star_promos.014.mewtwo.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/ju.038.lickitung.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/ju.026.scyther.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/fo.018.ditto_.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/wizards_black_star_promos.008.mew_.jpg',
                numImg: '../../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.091.bill_.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.071.computer_search.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.074.item_finder.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.084.pluspower.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.095.switch.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.075.lass_.jpg',
                numImg: '../../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.101.psychic_energy.jpg',
                numImg: '../../../assets/07.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
                numImg: '../../../assets/06.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
    ]
  },
  {
    firstName: 'William Lieu',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/wigglytuff.png',
    sprite2: '../../../assets/sprites/hitmonchan.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/base-fossil/ju.032.wigglytuff.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/ju.054.jigglypuff.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/ju.026.scyther.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.091.bill_.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.071.computer_search.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.084.pluspower.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.074.item_finder.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.075.lass_.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.081.energy_retrieval.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
                numImg: '../../../assets/12.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
    ]
  },
  {
    firstName: 'Chris Neathery',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/hitmonchan.png',
    sprite2: '../../../assets/sprites/magmar.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/fo.039.magmar.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/ju.026.scyther.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/ju.038.lickitung.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.091.bill_.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.074.item_finder.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.075.lass_.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.071.computer_search.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.081.energy_retrieval.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
                numImg: '../../../assets/07.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.098.fire_energy.jpg',
                numImg: '../../../assets/06.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
    ]
  },
  {
    firstName: 'Alvin Osborn',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/hitmonchan.png',
    sprite2: '../../../assets/sprites/electabuzz.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.020.electabuzz.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/ju.026.scyther.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/fo.018.ditto_.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.003.chansey.jpg',
                numImg: '../../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.027.farfetchd.jpg',
                numImg: '../../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.084.pluspower.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.071.computer_search.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.074.item_finder.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.075.lass_.jpg',
                numImg: '../../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/ro.076.imposter_oaks_revenge.jpg',
                numImg: '../../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.095.switch.jpg',
                numImg: '../../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.081.energy_retrieval.jpg',
                numImg: '../../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
                numImg: '../../../assets/08.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.100.lightning_energy.jpg',
                numImg: '../../../assets/06.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
    ]
  },
  {
    firstName: 'Marcus Abreu',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/wigglytuff.png',
    sprite2: '../../../assets/sprites/mewtwo.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
          cardImg: '../../../assets/cards/base-fossil/ju.032.wigglytuff.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ju.054.jigglypuff.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/wizards_black_star_promos.014.mewtwo.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ju.022.mr_mime.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.091.bill_.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ro.074.challenge.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.074.item_finder.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.101.psychic_energy.jpg',
          numImg: '../../../assets/08.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
          numImg: '../../../assets/07.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
    ]
  },
  {
    firstName: 'Darren Guiao',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/hitmonchan.png',
    sprite2: '../../../assets/sprites/magmar.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
          cardImg: '../../../assets/cards/base-fossil/fo.039.magmar.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.003.chansey.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/fo.018.ditto_.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.091.bill_.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.074.item_finder.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.098.fire_energy.jpg',
          numImg: '../../../assets/10.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
          numImg: '../../../assets/08.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
    ]
  },
  {
    firstName: 'Jarod Stein',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/wigglytuff.png',
    sprite2: '../../../assets/sprites/mewtwo.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
          cardImg: '../../../assets/cards/base-fossil/ju.032.wigglytuff.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ju.054.jigglypuff.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/wizards_black_star_promos.014.mewtwo.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/fo.033.gastly.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.091.bill_.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.074.item_finder.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ro.078.goop_gas_attack.jpg',
          numImg: '../../../assets/01.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.101.psychic_energy.jpg',
          numImg: '../../../assets/06.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          numImg: '../../../assets/03.png',
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
    firstName: 'Jay Yu',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/wigglytuff.png',
    sprite2: '../../../assets/sprites/electabuzz.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
          cardImg: '../../../assets/cards/base-fossil/ju.032.wigglytuff.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ju.054.jigglypuff.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.020.electabuzz.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ju.026.scyther.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.074.item_finder.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.100.lightning_energy.jpg',
          numImg: '../../../assets/09.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ro.081.full_heal_energy.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Jack Savage',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/electabuzz.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
          cardImg: '../../../assets/cards/base-fossil/ju.026.scyther.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/wizards_black_star_promos.014.mewtwo.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.020.electabuzz.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.003.chansey.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/fo.018.ditto_.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.074.item_finder.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.100.lightning_energy.jpg',
          numImg: '../../../assets/06.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.101.psychic_energy.jpg',
          numImg: '../../../assets/06.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
    ]
  },
  {
    firstName: 'Kody Barret',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/wigglytuff.png',
    sprite2: '../../../assets/sprites/scyther.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
          cardImg: '../../../assets/cards/base-fossil/ju.032.wigglytuff.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ju.054.jigglypuff.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ju.026.scyther.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.003.chansey.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/fo.018.ditto_.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.074.item_finder.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.091.bill_.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.075.lass_.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.099.grass_energy.jpg',
          numImg: '../../../assets/06.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ro.081.full_heal_energy.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
    ]
  },
  {
    firstName: 'Daniel Nino',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/hitmonchan.png',
    sprite2: '../../../assets/sprites/electabuzz.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
    },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.020.electabuzz.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ju.026.scyther.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/fo.018.ditto_.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.074.item_finder.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.081.energy_retrieval.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.095.switch.jpg',
          numImg: '../../../assets/01.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.100.lightning_energy.jpg',
          numImg: '../../../assets/07.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
          numImg: '../../../assets/07.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
    ]
  },
  {
    firstName: 'Zach Froelich',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/wigglytuff.png',
    sprite2: '../../../assets/sprites/electabuzz.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
          cardImg: '../../../assets/cards/base-fossil/ju.032.wigglytuff.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ju.054.jigglypuff.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.020.electabuzz.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/fo.018.ditto_.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ju.026.scyther.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.091.bill_.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
    },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.074.item_finder.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.081.energy_retrieval.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.071.computer_search.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.095.switch.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.075.lass_.jpg',
        numImg: '../../../assets/02.png',
        oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.100.lightning_energy.jpg',
          numImg: '../../../assets/09.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
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
    firstName: 'Derek Bowling',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/hitmonchan.png',
    sprite2: '../../../assets/sprites/electabuzz.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
          cardImg: '../../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.020.electabuzz.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ju.026.scyther.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.081.energy_retrieval.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.074.item_finder.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/fo.059.energy_search.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.095.switch.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.100.lightning_energy.jpg',
          numImg: '../../../assets/06.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
          numImg: '../../../assets/06.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
    ]
  },
  {
    firstName: 'Ben Ferguson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/wigglytuff.png',
    sprite2: '../../../assets/sprites/mewtwo.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
          cardImg: '../../../assets/cards/base-fossil/ju.032.wigglytuff.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ju.054.jigglypuff.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/wizards_black_star_promos.014.mewtwo.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ju.026.scyther.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.074.item_finder.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.091.bill_.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ro.078.goop_gas_attack.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.075.lass_.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.101.psychic_energy.jpg',
          numImg: '../../../assets/12.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
    ]
  },
  {
    firstName: 'John Pratt',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/wigglytuff.png',
    sprite2: '../../../assets/sprites/hitmonchan.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
          cardImg: '../../../assets/cards/base-fossil/ju.032.wigglytuff.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ju.054.jigglypuff.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
        numImg: '../../../assets/03.png',
        oldCard: true
    },
      {
          cardImg: '../../../assets/cards/base-fossil/fo.039.magmar.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ju.026.scyther.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/fo.018.ditto_.jpg',
          numImg: '../../../assets/01.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.095.switch.jpg',
          numImg: '../../../assets/01.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.098.fire_energy.jpg',
          numImg: '../../../assets/10.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
          numImg: '../../../assets/10.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.099.grass_energy.jpg',
          numImg: '../../../assets/01.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
    ]
  },
  {
    firstName: 'Matt Townend',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/wigglytuff.png',
    sprite2: '../../../assets/sprites/mewtwo.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
          cardImg: '../../../assets/cards/base-fossil/ju.032.wigglytuff.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ju.054.jigglypuff.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/wizards_black_star_promos.014.mewtwo.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ju.026.scyther.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
        cardImg: '../../../assets/cards/base-fossil/bs.071.computer_search.jpg',
        numImg: '../../../assets/04.png',
        oldCard: true
    },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.074.item_finder.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.091.bill_.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.075.lass_.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.101.psychic_energy.jpg',
          numImg: '../../../assets/12.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Joseph Viray',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blastoise.png',
    sprite2: '../../../assets/sprites/articuno.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
          cardImg: '../../../assets/cards/base-fossil/bs.002.blastoise.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.063.squirtle.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/fo.002.articuno.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/fo.025.lapras.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.091.bill_.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.076.pokemon_breeder.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.077.pokemon_trader.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.080.defender.jpg',
          numImg: '../../../assets/02.png',
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
    firstName: 'Dean Bartlett',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/electabuzz.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/base-fossil/bs.020.electabuzz.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/fo.039.magmar.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/wizards_black_star_promos.014.mewtwo.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/ju.026.scyther.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.091.bill_.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.084.pluspower.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.095.switch.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.085.pokemon_center.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.101.psychic_energy.jpg',
                numImg: '../../../assets/08.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.098.fire_energy.jpg',
                numImg: '../../../assets/07.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.100.lightning_energy.jpg',
                numImg: '../../../assets/05.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/ro.080.rainbow_energy.jpg',
                numImg: '../../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
                numImg: '../../../assets/01.png',
                oldCard: true
            },
    ]
  },
  {
    firstName: 'Brock Christianson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/hitmonchan.png',
    sprite2: '../../../assets/sprites/mewtwo.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
          cardImg: '../../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/wizards_black_star_promos.014.mewtwo.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ju.026.scyther.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.003.chansey.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.074.item_finder.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.081.energy_retrieval.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.090.super_potion.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ro.071.here_comes_team_rocket.jpg',
          numImg: '../../../assets/01.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.101.psychic_energy.jpg',
          numImg: '../../../assets/07.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
          numImg: '../../../assets/05.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ro.080.rainbow_energy.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ro.081.full_heal_energy.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
    ]
  },
  {
    firstName: 'Mitch Morris',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/electabuzz.png',
    sprite2: '../../../assets/sprites/mr-mime.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
          cardImg: '../../../assets/cards/base-fossil/bs.020.electabuzz.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ju.022.mr_mime.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ju.026.scyther.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/fo.039.magmar.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/fo.018.ditto_.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.074.item_finder.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.091.bill_.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.081.energy_retrieval.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          numImg: '../../../assets/01.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.075.lass_.jpg',
          numImg: '../../../assets/01.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/fo.060.gambler.jpg',
          numImg: '../../../assets/01.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.100.lightning_energy.jpg',
          numImg: '../../../assets/06.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.101.psychic_energy.jpg',
          numImg: '../../../assets/06.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.098.fire_energy.jpg',
          numImg: '../../../assets/05.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
    ]
  },
  {
    firstName: 'Gilbert Manquez',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/wigglytuff.png',
    sprite2: '../../../assets/sprites/hitmonchan.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
          cardImg: '../../../assets/cards/base-fossil/ju.032.wigglytuff.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ju.054.jigglypuff.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/fo.039.magmar.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ju.026.scyther.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/fo.018.ditto_.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.091.bill_.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.081.energy_retrieval.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.074.item_finder.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
          numImg: '../../../assets/09.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.098.fire_energy.jpg',
          numImg: '../../../assets/08.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
    ]
  },
  {
    firstName: 'Chris Graham',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/hitmonchan.png',
    sprite2: '../../../assets/sprites/electabuzz.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
          cardImg: '../../../assets/cards/base-fossil/ju.026.scyther.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.020.electabuzz.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/fo.018.ditto_.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.091.bill_.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.081.energy_retrieval.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.100.lightning_energy.jpg',
          numImg: '../../../assets/09.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
          numImg: '../../../assets/09.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          numImg: '../../../assets/04.png',
          oldCard: true
      },
    ]
  },
  {
    firstName: 'Ken Knight',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/clefable.png',
    sprite2: '../../../assets/sprites/hitmonchan.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/ju.026.scyther.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.020.electabuzz.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/ju.017.clefable.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.005.clefairy.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.091.bill_.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
                numImg: '../../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
                numImg: '../../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.071.computer_search.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.084.pluspower.jpg',
                numImg: '../../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
                numImg: '../../../assets/12.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.100.lightning_energy.jpg',
                numImg: '../../../assets/08.png',
                oldCard: true
            },
            {
                cardImg: '../../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
                numImg: '../../../assets/01.png',
                oldCard: true
            },
    ]
  },
  {
    firstName: 'Devin Diamond',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/articuno.png',
    sprite2: '../../../assets/sprites/hitmonchan.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
          cardImg: '../../../assets/cards/base-fossil/fo.002.articuno.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/ju.026.scyther.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.052.machop.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.003.chansey.jpg',
          numImg: '../../../assets/01.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.091.bill_.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/fo.059.energy_search.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.081.energy_retrieval.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.095.switch.jpg',
          numImg: '../../../assets/03.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          numImg: '../../../assets/02.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.102.water_energy.jpg',
          numImg: '../../../assets/13.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
          numImg: '../../../assets/09.png',
          oldCard: true
      },
      {
          cardImg: '../../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          numImg: '../../../assets/02.png',
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2000 CA STS";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2000 CA STS";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2000 CA STS";

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
