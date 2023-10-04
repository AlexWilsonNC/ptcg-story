const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');
const extrasList2 = document.querySelector('.extras-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Hampus Eriksson',
    flag: '../../../assets/flags/sweden.png',
    sprite1: '../../../assets/sprites/altaria.png',
    sprite2: '../../../assets/sprites/munchlax.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/altaria.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/swablu.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/munchlax.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/aipom.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bunnelby.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/giratina.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mew-bench-barrier.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/zacian-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cynthia-caitlin.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bird-keeper.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/lt-surge.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/bills-analysis.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bruno.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/will.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/lillies-poke-doll.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/crushing-hammer-swsh.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/poke-communication.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/scoop-up-net.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/tool-scrapper.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/yell-horn.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/camping-gear.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/ordinary-rod.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/reset-stamp.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/galar-mine.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/wondrous-lab.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/twin-energy.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/recycle-energy.png',
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Leonardo Martins',
    flag: '../../../assets/flags/portugal.png',
    sprite1: '../../../assets/sprites/mewtwo-mew-tagteam.png',
    sprite2: '../../../assets/sprites/rillaboom.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/mewtwo-mew-tagteam.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/rillaboom.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/thwachy-taunt.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/grookey.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/rowlett-exeggcutor-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/pheromosa-buzzwole-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/vileplume-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/dargonite-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/incineroar-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/eldegoss-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/oranguru-primate-wisdom.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/guzma-hala.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mallow-lana.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cynthia-caitlin.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/tag-call.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cherish-ball.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/ordinary-rod.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/chaotic-swell.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/wondrous-lab.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-grass-energy.jpg',
        numImg: '../../../assets/10.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/weakness-gaurd-energy.png',
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Pascal Lohrer',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/mewtwo-mew-tagteam.png',
    sprite2: '../../../assets/sprites/rillaboom.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/mewtwo-mew-tagteam.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/rillaboom.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/thwackey-ability.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/grookey-fury-swipes.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/rowlett-exeggcutor-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/pheromosa-buzzwole-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/vileplume-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/dargonite-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/incineroar-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/kricketune-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/eldegoss-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/guzma-hala.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cynthia-caitlin.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mallow-lana.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/tag-call.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cherish-ball.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/ordinary-rod.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/chaotic-swell.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/wondrous-lab.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-grass-energy.jpg',
        numImg: '../../../assets/09.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/weakness-gaurd-energy.png',
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Pedro Eugenio Torres',
    flag: '../../../assets/flags/spain.png',
    sprite1: '../../../assets/sprites/urshifu-rapid-strike-gmax.png',
    sprite2: '../../../assets/sprites/cinccino.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/rs-urshifu-vmax.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/rs-urshifu-v.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/cinccino.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/minccino.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/jirachi-stellar-wish.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/farfetchd.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/zigzagoon.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mewtwo.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mew-bench-barrier.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/mimikyu-shadow-box.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bird-keeper.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cheryl.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/phoebe.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/poke-communication.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/scoop-up-net.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/level-ball.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/reset-stamp.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/ordinary-rod.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-swsh.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/rapid-strike-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy.png',
        numImg: '../../../assets/03.png'
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Angel Aranibar Huamaní',
    flag: '../../../assets/flags/peru.png',
    sprite1: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
    sprite2: '../../../assets/sprites/mewtwo-mew-tagteam.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/boltund-v.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mewtwo-mew-tagteam.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/raichu-alolan-raichu.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/crobat-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/eldegoss-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/crushing-hammer-swsh.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/switch.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cherish-ball.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/reset-stamp.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/electromagnetic-radar.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/big-charm.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/chaotic-swell.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/lightning-energy-swsh.png',
        numImg: '../../../assets/10.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/speed-energy.png',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Bruno Sermann',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/polteageist.png',
    sprite2: '../../../assets/sprites/bunnelby.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/polteageist-mad-party.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/sinistea-furtuve-drop.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bunnelby-mad-party.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mr-rime-mad-party.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-mad-party.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/crobat-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mew-bench-barrier.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/giovannis-exile.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/level-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/great-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/great-catcher.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/poke-communication.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/pal-pad.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/ordinary-rod.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/uturn-board.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/chaotic-swell.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/twin-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/triple-acceleration.png',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Dalton Acchetta',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/eternatus-eternamax.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/eternatus-vmax.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/eternatus-v.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/crobat-v.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/zigzagoon.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/spiritomb.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/yveltal.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/phoebe.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/great-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/crushing-hammer-swsh.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/poke-communication.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/switch.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/escape-rope.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/tool-jammer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-swsh.png',
        numImg: '../../../assets/08.png'
      },
      {
        cardImg: '../../../assets/cards/energy/weakness-gaurd-energy.png',
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'João Pedro Medeiros Zambrano',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
    sprite2: '../../../assets/sprites/mewtwo-mew-tagteam.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/boltund-v.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mewtwo-mew-tagteam.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/raichu-alolan-raichu.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/crobat-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/eldegoss-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/team-yell-grunt.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/crushing-hammer-swsh.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/switch.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cherish-ball.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/reset-stamp.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/chaotic-swell.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/lightning-energy-swsh.png',
        numImg: '../../../assets/10.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/speed-energy.png',
        numImg: '../../../assets/03.png'
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Aaron Friedman',
    flag: '../../../assets/flags/usa.png',
    sprite2: '../../../assets/sprites/urshifu-rapid-strike-gmax.png',
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/rs-urshifu-vmax.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/rs-urshifu-v.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/jirachi-stellar-wish.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/crobat-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/jirachi-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/zigzagoon.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mewtwo.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mew-bench-barrier.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/mimikyu-shadow-box.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/phoebe.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/poke-communication.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/scoop-up-net.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/switch.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/great-catcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/martial-arts-dojo.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-swsh.png',
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/rapid-strike-energy.png',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alex Schemanske',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/polteageist.png',
    sprite2: '../../../assets/sprites/bunnelby.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/polteageist-mad-party.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/sinistea-furtuve-drop.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bunnelby-mad-party.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mr-rime-mad-party.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-mad-party.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/crobat-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mew-bench-barrier.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/giovannis-exile.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/level-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/great-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/great-catcher.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/evolution-incense.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/pal-pad.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/ordinary-rod.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/uturn-board.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/chaotic-swell.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/twin-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/triple-acceleration.png',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Dan Hugar',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
    sprite2: '../../../assets/sprites/mewtwo-mew-tagteam.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/boltund-v.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mewtwo-mew-tagteam.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/raichu-alolan-raichu.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/crobat-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/eldegoss-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/team-yell-grunt.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/crushing-hammer-swsh.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/switch.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cherish-ball.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/reset-stamp.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/big-charm.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/stealthy-hood.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/chaotic-swell.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/lightning-energy-swsh.png',
        numImg: '../../../assets/10.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/speed-energy.png',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Isaac Troan',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/mewtwo-mew-tagteam.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/mewtwo-mew-tagteam.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/jirachi-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/giratina-garchomp-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/gengar-and-mimikyu-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/reshiram-charizard-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/trevenant-dusknoir-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/greninja-gx-detective-pikachu.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/vileplume-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/incineroar-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/latios-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/crobat-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/eldegoss-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/guzma-hala.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mallow-lana.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cherish-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/switch.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/tag-call.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/reset-stamp.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/stealthy-hood.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/chaotic-swell.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-swsh.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/horror-energy.png',
        numImg: '../../../assets/04.png'
      },
    ]
  },
]

let extras = [
  {
    firstName: 'Christian Hasbani',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
    sprite2: '../../../assets/sprites/mewtwo-mew-tagteam.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/boltund-v.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mewtwo-mew-tagteam.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/raichu-alolan-raichu.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/crobat-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/eldegoss-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/crushing-hammer-swsh.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/switch.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cherish-ball.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/reset-stamp.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/chaotic-swell.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/lightning-energy-swsh.png',
        numImg: '../../../assets/10.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/speed-energy.png',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Peter Lo',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/mewtwo-mew-tagteam.png',
    sprite2: '../../../assets/sprites/rillaboom.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/mewtwo-mew-tagteam.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/rillaboom.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/thwackey-ability.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/grookey.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/rowlett-exeggcutor-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/pheromosa-buzzwole-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/vileplume-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/dargonite-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/incineroar-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/kricketune-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/eldegoss-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/guzma-hala.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mallow-lana.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cynthia-caitlin.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/tag-call.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cherish-ball.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/ordinary-rod.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/chaotic-swell.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/wondrous-lab.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-grass-energy.jpg',
        numImg: '../../../assets/09.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/weakness-gaurd-energy.png',
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Ting Chan',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/adp-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/zacian-v.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/mawile-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/crobat-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/eldegoss-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mew-bench-barrier.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cherish-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/switch.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/energy-switch-ssh.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/energy-spinner.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/great-catcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/rusted-sword.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/chaotic-swell.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../../assets/08.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-swsh.png',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Zyad Afiza',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/mewtwo-mew-tagteam.png',
    sprite2: '../../../assets/sprites/urshifu-rapid-strike-gmax.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/mewtwo-mew-tagteam.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/rs-urshifu-vmax.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/rs-urshifu-v.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/giratina-garchomp-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/gengar-mimikyu-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/reshiram-charizard-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/trevenant-dusknoir-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/greninja-gx-detective-pikachu.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/vileplume-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/latios-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/jirachi-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/eldegoss-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/crobat-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/guzma-hala.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mallow-lana.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/switch.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cherish-ball.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/tag-call.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/lanas-fishing-rod.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/poke-communication.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/stealthy-hood.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/chaotic-swell.png',
        numImg: '../../../assets/02.png'
      },
            {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-swsh.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/horror-energy.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/rapid-strike-energy.png',
        numImg: '../../../assets/03.png'
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - Players Cup IV";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - Players Cup IV";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - Players Cup IV";

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

// extras
function displayList4(array = []) {
  extrasList2.innerHTML = '';

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - Players Cup IV";

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
    extrasList2.appendChild(item_element);
  }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
displayList2(seniors);
displayList3(juniors);
displayList4(extras);
