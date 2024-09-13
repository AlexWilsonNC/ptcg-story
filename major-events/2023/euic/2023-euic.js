const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

"masters": [
  {
    "name": "Alex Schemanske",
    "flag": "US",
    "sprite1": "arceus",
    "sprite2": "duraludon-gmax",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/duraludon-vmax-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/duraludon-v-ss",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/vulpix-vstar",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/vulpix-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-gardevoir",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-turo",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cherens-care",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-city",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-metal-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-fighting-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/02",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Tord Reklev",
    "flag": "NO",
    "sprite1": "blank",
    "sprite2": "gardevoir",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/scvi-2024/gardevoir-ex",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/gardevoir",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/kirlia",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ralts",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ralts-memory-skip",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zacian-v-psychic",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cresselia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-turo",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/worker",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/miriam",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/penny",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/rare-candy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sky-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/12",
        radiusCard:true
      },
    ]
  },
  {
    "name": "Pablo Meza",
    "flag": "MX",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/genesct-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/avery",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/feather-ball",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fan-of-waves",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Pedro Torres",
    "flag": "ES",
    "sprite1": "charizard-shiny",
    "sprite2": "comfey",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sableye",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pidgeot-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mawile",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/miltank",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/hawlucha",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pokegear30",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-fire-energy.jpg",
        numImg: '../../../assets/02",
        radiusCard:true
      },
    ]
  },
  {
    "name": "Aiden Khus",
    "flag": "US",
    "sprite1": "goodra-hisui",
    "sprite2": "comfey",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pokegear30",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crystal-cave",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/06",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-metal-energy.jpg",
        numImg: '../../../assets/05",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Trevore Read",
    "flag": "CA",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/duraludon-vmax-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/duraludon-v-ss",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tyranitar-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stonjourner",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/yveltal-ss",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-tsareena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-sada",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/thorton",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/prof-burnet",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/capturing-aroma",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/urn-of-vitality",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/mesagoza",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/single-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/impact-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/gift-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Eric Rodriguez",
    "flag": "US",
    "sprite1": "lugia",
    "sprite2": "duraludon-gmax",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/duraludon-vmax-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/duraludon-v-ss",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tyranitar-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stonjourner",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/yveltal-ss",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-tsareena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-sada",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/prof-burnet",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/capturing-aroma",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/urn-of-vitality",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tower-of-darkness",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/single-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/impact-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/gift-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/regenerative-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Robert Kinbrum",
    "flag": "UK",
    "sprite1": "miraidon",
    "sprite2": "regieliki-vmax",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/scvi-2024/miraidon-ex",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/regieliki-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/regieliki-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raikou-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-turo",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/elctric-generator",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-lightning-energy.jpg",
        numImg: '../../../assets/15",
        radiusCard:true
      },
    ]
  },
  {
    "name": "Hermanni Hietalahti",
    "flag": "FI",
    "sprite1": "goodra-hisui",
    "sprite2": "comfey",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/articuno",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/07",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-metal-energy.jpg",
        numImg: '../../../assets/05",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Michael Bergerac",
    "flag": "US",
    "sprite1": "arceus",
    "sprite2": "duraludon-gmax",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/duraludon-vmax-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/duraludon-v-ss",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/vulpix-vstar",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/vulpix-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-gardevoir",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-turo",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cherens-care",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-city",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-metal-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-fighting-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/02",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Tobias Strømdahl",
    "flag": "NO",
    "sprite1": "inteleon-vmax",
    "sprite2": "urshifu-rapid-strike-gmax",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-vstar",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/octillery",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/remoraid",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/medicham-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-alakazam",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-turo",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/irida",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/korrinas-focus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/energy-retrieval",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tower-of-waters",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/06",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/energy/rapid-strike-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Braiden Elfert",
    "flag": "US",
    "sprite1": "arceus",
    "sprite2": "pikachu-gmax",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/flying-pikachu-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/flying-pikachu-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/vulpix-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/vulpix-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/espeon-vmax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/espeon-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-gardevoir",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-turo",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/capturing-aroma",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/leafy-camo-poncho",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-lightning-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/02",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Paulo Mimoso",
    "flag": "PT",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/genesct-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/aerodactyl-vstar",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/aerodactyl-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oricorio",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/arven",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/feather-ball",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-city",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Pedro Pertusi",
    "flag": "BR",
    "sprite1": "gardevoir",
    "sprite2": "mewtwo",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/scvi-2024/gardevoir-ex",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/gardevoir",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/kirlia",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ralts",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mewtwo-v-unvion-topleft",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mewtwo-v-unvion-topright",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mewtwo-v-unvion-bottomleft",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mewtwo-v-unvion-bottomright",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zacian-v-psychic",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-turo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/worker",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/peonia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rescue-carrier-crv",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sky-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/defiance-band",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/11",
        radiusCard:true
      },
    ]
  },
  {
    "name": "Tyler Mathews",
    "flag": "US",
    "sprite1": "comfey",
    "sprite2": "sableye",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sableye",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raikou-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dragonite-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cross-switcher",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/canceling-cologne",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-lightning-energy.jpg",
        numImg: '../../../assets/02",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Nicholas Moffitt",
    "flag": "US",
    "sprite1": "comfey",
    "sprite2": "sableye",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sableye",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/moltres",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/kyogre",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax-unfazed-fat",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/hawlucha",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pokegear30",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pokestop",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-dark-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Phillip de Sousa",
    "flag": "UK",
    "sprite1": "gardevoir",
    "sprite2": "mewtwo",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/scvi-2024/gardevoir-ex",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/gardevoir",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/kirlia",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ralts",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ralts-memory-skip",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mewtwo-v-unvion-topleft",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mewtwo-v-unvion-topright",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mewtwo-v-unvion-bottomleft",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mewtwo-v-unvion-bottomright",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zacian-v-psychic",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-turo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/miriam",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/peonia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/rare-candy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sky-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/11",
        radiusCard:true
      },
    ]
  },
  {
    "name": "Yoann Barszezak",
    "flag": "FR",
    "sprite1": "goodra-hisui",
    "sprite2": "comfey",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pokegear30",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/05",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-metal-energy.jpg",
        numImg: '../../../assets/05",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Nathaniel Kaplan",
    "flag": "US",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tyranitar-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/duraludon-vmax-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/duraludon-v-ss",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stonjourner",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-tsareena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-sada",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/thorton",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/prof-burnet",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/capturing-aroma",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/urn-of-vitality",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/mesagoza",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/single-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/impact-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/gift-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Ole Stognief",
    "flag": "DE",
    "sprite1": "comfey",
    "sprite2": "sableye",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sableye",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raikou-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dragonite-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/hawlucha",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/05",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-lightning-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/02",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Sami Sekkoum",
    "flag": "UK",
    "sprite1": "arceus",
    "sprite2": "giratina-origin",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/giratina-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/giratina-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bibarel",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bidoof-carefree",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/skwovet",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-sada",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cherens-care",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-grass-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Haru Nishikawa",
    "flag": "JP",
    "sprite1": "goodra-hisui",
    "sprite2": "comfey",
     
    type: 'dark", 
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mawile",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/05",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-metal-energy.jpg",
        numImg: '../../../assets/05",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Piper Lepine",
    "flag": "US",
    "sprite1": "goodra-hisui",
    "sprite2": "comfey",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/articuno",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pokegear30",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/05",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-metal-energy.jpg",
        numImg: '../../../assets/05",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Andrew Martin",
    "flag": "US",
    "sprite1": "gardevoir",
    "sprite2": "mewtwo",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/scvi-2024/gardevoir-ex",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/gardevoir",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/gallade",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/kirlia",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ralts",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ralts-memory-skip",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mewtwo-v-unvion-topleft",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mewtwo-v-unvion-topright",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mewtwo-v-unvion-bottomleft",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mewtwo-v-unvion-bottomright",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zacian-v-psychic",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-turo",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/peonia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sky-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/11",
        radiusCard:true
      },
    ]
  },
  {
    "name": "Ryan Pang",
    "flag": "UK",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/genesct-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pidgeot-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dreepy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/penny",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/feather-ball",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/full-face-helmet",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-city",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Robin Schulz",
    "flag": "DE",
    "sprite1": "blank",
    "sprite2": "gardevoir",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/scvi-2024/gardevoir-ex",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/gardevoir",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/kirlia",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ralts",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ralts-memory-skip",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zacian-v-psychic",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cresselia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-turo",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/worker",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/miriam",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/penny",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/rare-candy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sky-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/12",
        radiusCard:true
      },
    ]
  },
  {
    "name": "Simone Fiorito",
    "flag": "IT",
    "sprite1": "arceus",
    "sprite2": "giratina-origin",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/giratina-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/giratina-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-gardevoir",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bibarel",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bidoof-carefree",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-sada",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-grass-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Nofoume Ben Ahmed",
    "flag": "FR",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/genesct-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pidgeot-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dreepy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oricorio",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/feather-ball",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Alessandro Cremascoli",
    "flag": "IT",
    "sprite1": "goodra-hisui",
    "sprite2": "comfey",
     
    type: 'dark", 
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pokegear30",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/06",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-metal-energy.jpg",
        numImg: '../../../assets/05",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Jonathan Lanciano",
    "flag": "AR",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tyranitar-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stonjourner",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-tsareena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-sada",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/prof-burnet",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/penny",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/capturing-aroma",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/great-ball",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/urn-of-vitality",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/mesagoza",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/single-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/gift-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/impact-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Sander Wojcik",
    "flag": "NL",
    "sprite1": "ursaluna",
    "sprite2": "mimikyu",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/rotom-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mimikyu-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ursaluna-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crabonminal-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/calyrex-v-shadow-rider",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/yveltal",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/kirlia",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ralts-memory-skip",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mawile",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/regieliki-astr",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/miltank",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ditto-go",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy-pulling-currents",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pyukumuku",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/penny",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/acerola-premonition",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zinnia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/flannery",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cyllene",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/peonia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/team-yell-cheer",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pal-pad",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/crushing-hammer",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/trekking-shoes-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pot-helmet",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stormy-mountain",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/02",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/01",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Cain Greene",
    "flag": "US",
    "sprite1": "giratina-origin",
    "sprite2": "comfey",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/giratina-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/giratina-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sableye",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-grass-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard:true
      },
    ]
  },
  {
    "name": "Gilbert McLaughlin",
    "flag": "UK",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/genesct-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oricorio",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cross-switcher",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Gustavo Wada",
    "flag": "BR",
    "sprite1": "comfey",
    "sprite2": "sableye",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sableye",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raikou-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dragonite-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/hawlucha",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-lightning-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Murilo Mercadante",
    "flag": "BR",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tyranitar-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stonjourner",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/yveltal-ss",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-tsareena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-sada",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/prof-burnet",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/capturing-aroma",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/urn-of-vitality",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/mesagoza",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/single-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/gift-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/regenerative-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Nathan Brower",
    "flag": "US",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tyranitar-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/articuno-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stonjourner",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/yveltal-ss",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-tsareena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-sada",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/prof-burnet",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/capturing-aroma",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/urn-of-vitality",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/mesagoza",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/single-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/gift-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    "name": "Vaughn O'Brien",
    "flag": "US",
    "sprite1": "comfey",
    "sprite2": "sableye",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sableye",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raikou-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dragonite-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/hawlucha",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sky-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-lightning-energy.jpg",
        numImg: '../../../assets/02",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Mauro Wandoloh",
    "flag": "BE",
    "sprite1": "comfey",
    "sprite2": "sableye",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sableye",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax-unfazed-fat",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raikou-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dragonite-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/hawlucha",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/05",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-lightning-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Sackett Brehmer",
    "flag": "US",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/genesct-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oricorio",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/penny",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cyllene",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/feather-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-city",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Ithiel Arki",
    "flag": "FR",
    "sprite1": "comfey",
    "sprite2": "sableye",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sableye",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/kyogre",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dragonite-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raikou-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pokegear30",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/05",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-lightning-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Calvin Connor",
    "flag": "US",
    "sprite1": "lugia",
    "sprite2": "archeops",
         
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tyranitar-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stonjourner",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/yveltal-ss",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-tsareena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-sada",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/penny",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/prof-burnet",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/capturing-aroma",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/urn-of-vitality",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/mesagoza",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/single-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/gift-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/regenerative-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Jacob Kendrick",
    "flag": "UK",
    "sprite1": "goodra-hisui",
    "sprite2": "comfey",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sableye",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zamazenta",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/thorton",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-metal-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/02",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Fabio Spanò",
    "flag": "IT",
    "sprite1": "goodra-hisui",
    "sprite2": "comfey",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pokegear30",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/05",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-metal-energy.jpg",
        numImg: '../../../assets/05",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Thomas Happel",
    "flag": "US",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tyranitar-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stonjourner",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/yveltal-ss",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-tsareena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-sada",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/penny",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/prof-burnet",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/capturing-aroma",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/urn-of-vitality",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/great-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/mesagoza",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/single-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/gift-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    "name": "Piotr Orleański",
    "flag": "PL",
    "sprite1": "comfey",
    "sprite2": "sableye",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sableye",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/kyogre",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zamazenta",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/hawlucha",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pokegear30",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/05",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-metal-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Angelo Falchi",
    "flag": "IT",
    "sprite1": "giratina-origin",
    "sprite2": "comfey",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/giratina-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/giratina-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sableye",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/thorton",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/05",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-grass-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard:true
      },
    ]
  },
  {
    "name": "Connor Bird",
    "flag": "UK",
    "sprite1": "goodra-hisui",
    "sprite2": "comfey",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/07",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-metal-energy.jpg",
        numImg: '../../../assets/05",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Joshua Frink",
    "flag": "US",
    "sprite1": "arceus",
    "sprite2": "duraludon-gmax",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/duraludon-vmax-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/duraludon-v-ss",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/vulpix-vstar",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/vulpix-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-gardevoir",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-turo",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cherens-care",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-city",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-metal-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-fighting-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/02",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Andres Torres",
    "flag": "CO",
    "sprite1": "blank",
    "sprite2": "gardevoir",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/scvi-2024/gardevoir-ex",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/gardevoir",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/kirlia",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ralts",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ralts-memory-skip",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/klefki",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zacian-v-psychic",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cresselia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/worker",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/avery",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-turo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/miriam",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/rare-candy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sky-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/11",
        radiusCard:true
      },
    ]
  },
  {
    "name": "Oscar Rivas",
    "flag": "ES",
    "sprite1": "comfey",
    "sprite2": "sableye",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sableye",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/moltres",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax-unfazed-fat",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/hawlucha",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pokegear30",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-dark-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Hiroki Nakashima",
    "flag": "CA",
    "sprite1": "charizard-shiny",
    "sprite2": "comfey",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sableye",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mawile",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cross-switcher",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pokegear30",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/defiance-band",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-fire-energy.jpg",
        numImg: '../../../assets/02",
        radiusCard:true
      },
    ]
  },
  {
    "name": "Julius Brunfeldt",
    "flag": "FI",
    "sprite1": "goodra-hisui",
    "sprite2": "comfey",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/articuno",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/07",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-metal-energy.jpg",
        numImg: '../../../assets/05",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Carlo del Vescovo",
    "flag": "IT",
    "sprite1": "arceus",
    "sprite2": "giratina-origin",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/giratina-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/giratina-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/flying-pikachu-vmax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/flying-pikachu-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bibarel",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bidoof-carefree",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-gardevoir",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-sada",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cherens-care",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-city",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-grass-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-lightning-energy.jpg",
        numImg: '../../../assets/02",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Tony Yates",
    "flag": "UK",
    "sprite1": "goodra-hisui",
    "sprite2": "comfey",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pokegear30",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/06",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-metal-energy.jpg",
        numImg: '../../../assets/05",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Andreas Møller",
    "flag": "DK",
    "sprite1": "blank",
    "sprite2": "gardevoir",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/scvi-2024/gardevoir-ex",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/gardevoir",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/kirlia",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ralts",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ralts-memory-skip",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zacian-v-psychic",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cresselia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/worker",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/miriam",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/arven",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/rare-candy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sky-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/emergency-jelly",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/11",
        radiusCard:true
      },
    ]
  },
  {
    "name": "Brandon Salazar",
    "flag": "US",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tyranitar-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stonjourner",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-tsareena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-sada",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/prof-burnet",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/great-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/urn-of-vitality",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/single-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/gift-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/regenerative-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Antonio Distefano",
    "flag": "UK",
    "sprite1": "goodra-hisui",
    "sprite2": "comfey",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pokegear30",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/defiance-band",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/06",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-metal-energy.jpg",
        numImg: '../../../assets/05",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Grant Hays",
    "flag": "US",
    "sprite1": "goodra-hisui",
    "sprite2": "comfey",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pokegear30",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crystal-cave",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/06",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-metal-energy.jpg",
        numImg: '../../../assets/05",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Ian Buck",
    "flag": "US",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/genesct-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oricorio",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/penny",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/trekking-shoes-crz",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/feather-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pokemon-catcher",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-city",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Jose Marrero",
    "flag": "US",
    "sprite1": "lugia",
    "sprite2": "duraludon-gmax",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/duraludon-vmax-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/duraludon-v-ss",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tyranitar-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stonjourner",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/yveltal-ss",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-tsareena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-sada",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/prof-burnet",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/capturing-aroma",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/urn-of-vitality",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tower-of-darkness",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/single-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/impact-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/gift-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/regenerative-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Frank Mintmire",
    "flag": "US",
    "sprite1": "gardevoir",
    "sprite2": "mewtwo",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/scvi-2024/gardevoir-ex",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/gardevoir",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/kirlia",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ralts",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ralts-memory-skip",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/klefki",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mewtwo-v-unvion-topleft",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mewtwo-v-unvion-topright",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mewtwo-v-unvion-bottomleft",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mewtwo-v-unvion-bottomright",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zacian-v-psychic",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-sada",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/peonia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rescue-carrier-crv",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sky-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/11",
        radiusCard:true
      },
    ]
  },
  {
    "name": "Alex Lonnecker",
    "flag": "UK",
    "sprite1": "goodra-hisui",
    "sprite2": "comfey",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pokegear30",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/06",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-metal-energy.jpg",
        numImg: '../../../assets/05",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Bolly Olufon",
    "flag": "UK",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tyranitar-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ss-urshifu-vmax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ss-urshifu-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stonjourner",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-gardevoir",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-sada",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/thorton",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/prof-burnet",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/capturing-aroma",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/urn-of-vitality",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/mesagoza",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/single-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/gift-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Andrew Mahone",
    "flag": "US",
    "sprite1": "goodra-hisui",
    "sprite2": "comfey",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pokegear30",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/06",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-metal-energy.jpg",
        numImg: '../../../assets/05",
        radiusCard: true
      },
    ]
  },
  // {
  //   "name": "65 leonel orozco", @lorozco04 on twitter
  //   "flag": "../../assets/flags",
  //   "sprite1": "../../../assets/sprites",
  //   "sprite2": "sprites",
  //    
  //   type: 'dark",
  //   deck: [
  //     {
  //       cardImg: '../../../assets/cards/2022-2023",
  //       numImg: '../../../assets/04.png'
  //     },
  //   ]
  // },
]

"seniors": [
  {
    "name": "Rune Heiremans",
    "flag": "BE",
    "sprite1": "gardevoir",
    "sprite2": "mewtwo",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/scvi-2024/gardevoir-ex",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/gardevoir",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/kirlia",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ralts",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ralts-memory-skip",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/klefki",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mewtwo-v-unvion-topleft",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mewtwo-v-unvion-topright",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mewtwo-v-unvion-bottomleft",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mewtwo-v-unvion-bottomright",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zacian-v-psychic",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-turo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/peonia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rescue-carrier-crv",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sky-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/11",
        radiusCard:true
      },
    ]
  },
  {
    "name": "Drew Stephenson",
    "flag": "UK",
    "sprite1": "giratina-origin",
    "sprite2": "comfey",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/giratina-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/giratina-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sableye",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax-unfazed-fat",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/hawlucha",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pokegear30",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-grass-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard:true
      },
    ]
  },
  {
    "name": "Eli Maclean",
    "flag": "UK",
    "sprite1": "goodra-hisui",
    "sprite2": "comfey",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pokegear30",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/06",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-metal-energy.jpg",
        numImg: '../../../assets/05",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Nicholas Calder",
    "flag": "UK",
    "sprite1": "giratina-origin",
    "sprite2": "comfey",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/giratina-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/giratina-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sableye",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/05",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-grass-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard:true
      },
    ]
  },
  {
    "name": "Xander Brown",
    "flag": "UK",
    "sprite1": "miraidon",
    "sprite2": "regieliki-vmax",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/scvi-2024/miraidon-ex",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/regieliki-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/regieliki-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/magnezone-vstar",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/magnezone-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raikou-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pachirisu",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-turo",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/arven",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/elctric-generator",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pokegear30",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/exp-share",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-lightning-energy.jpg",
        numImg: '../../../assets/13",
        radiusCard:true
      },
    ]
  },
  {
    "name": "Evan Pavelski",
    "flag": "US",
    "sprite1": "arceus",
    "sprite2": "pikachu-gmax",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/flying-pikachu-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/flying-pikachu-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/vulpix-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/vulpix-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/espeon-vmax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/espeon-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-gardevoir",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-turo",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/capturing-aroma",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/leafy-camo-poncho",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-lightning-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/02",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Nathan Osterkatz",
    "flag": "US",
    "sprite1": "comfey",
    "sprite2": "sableye",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sableye",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raikou-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dragonite-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/articuno",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/hawlucha",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/05",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-lightning-energy.jpg",
        numImg: '../../../assets/02",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Riccardo Corino",
    "flag": "IT",
    "sprite1": "comfey",
    "sprite2": "sableye",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sableye",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pidgeot-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/moltres",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tropius",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax-unfazed-fat",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/hawlucha",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/energy-retrieval",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-dark-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/02",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-grass-energy.jpg",
        numImg: '../../../assets/01",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Joah Wiegner",
    "flag": "DE",
    "sprite1": "charizard-shiny",
    "sprite2": "comfey",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sableye",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pidgeot-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/hawlucha",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mawile",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pokegear30",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-fire-energy.jpg",
        numImg: '../../../assets/02",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Théo Melo Pacca",
    "flag": "ES",
    "sprite1": "blank",
    "sprite2": "../../../assets/hyphen",
    // list: '../../../assets/list-icon",
    list: '../../../assets/sprites/blank",
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Daniel Magda",
    "flag": "CZ",
    "sprite1": "comfey",
    "sprite2": "sableye",
    // list: '../../../assets/list-icon",
    list: '../../../assets/sprites/blank",
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Tristan Tse",
    "flag": "CA",
    "sprite1": "blank",
    "sprite2": "../../../assets/hyphen",
    // list: '../../../assets/list-icon",
    list: '../../../assets/sprites/blank",
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Kamil Bidzinski",
    "flag": "CA",
    "sprite1": "blank",
    "sprite2": "../../../assets/hyphen",
    // list: '../../../assets/list-icon",
    list: '../../../assets/sprites/blank",
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Elias Næss",
    "flag": "NO",
    "sprite1": "blank",
    "sprite2": "../../../assets/hyphen",
    // list: '../../../assets/list-icon",
    list: '../../../assets/sprites/blank",
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Ziyao Qu",
    "flag": "US",
    "sprite1": "lugia",
    "sprite2": "duraludon-gmax",
    // list: '../../../assets/list-icon",
    list: '../../../assets/sprites/blank",
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Arthur De Nardi",
    "flag": "BR",
    "sprite1": "blank",
    "sprite2": "../../../assets/hyphen",
    // list: '../../../assets/list-icon",
    list: '../../../assets/sprites/blank",
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Lucas Oldale",
    "flag": "CA",
    "sprite1": "inteleon-gmax",
    "sprite2": "urshifu-rapid-strike-gmax",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/octillery",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/remoraid",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/medicham-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-alakazam",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mawile",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-turo",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cheryl",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/peonia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/korrinas-focus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/energy-retrieval",
        numImg: '../../../assets/02.png'
      },
            {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tower-of-waters",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/07",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/energy/rapid-strike-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Cerys Jones",
    "flag": "US",
    "sprite1": "blank",
    "sprite2": "gardevoir",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/scvi-2024/gardevoir-ex",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/gardevoir",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/kirlia",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ralts",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ralts-memory-skip",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zacian-v-psychic",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cresselia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-turo",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/worker",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/miriam",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/penny",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/rare-candy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sky-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/12",
        radiusCard:true
      },
    ]
  },
  {
    "name": "Noah Brown",
    "flag": "UK",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tyranitar-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stonjourner",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/yveltal-ss",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-tsareena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-sada",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/thorton",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/prof-burnet",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/capturing-aroma",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/urn-of-vitality",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/mesagoza",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/single-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/gift-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/regenerative-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Alessandro Vezzoni",
    "flag": "IT",
    "sprite1": "blank",
    "sprite2": "../../../assets/hyphen",
    // list: '../../../assets/list-icon",
    list: '../../../assets/sprites/blank",
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Justin Templer",
    "flag": "US",
    "sprite1": "comfey",
    "sprite2": "sableye",
    // list: '../../../assets/list-icon",
    list: '../../../assets/sprites/blank",
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Benny Billinger",
    "flag": "CA",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tyranitar-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stonjourner",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/yveltal-ss",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-tsareena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-sada",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/thorton",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/prof-burnet",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/capturing-aroma",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/urn-of-vitality",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/mesagoza",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/single-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/gift-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/regenerative-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Aarni Karjala",
    "flag": "FI",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/genesct-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oricorio",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cyllene",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/feather-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Simon Belanyi",
    "flag": "SK",
    "sprite1": "blank",
    "sprite2": "../../../assets/hyphen",
    // list: '../../../assets/list-icon",
    list: '../../../assets/sprites/blank",
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Damian Gregorczuk",
    "flag": "PL",
    "sprite1": "blank",
    "sprite2": "../../../assets/hyphen",
    // list: '../../../assets/list-icon",
    list: '../../../assets/sprites/blank",
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Sebastian Lashmet",
    "flag": "US",
    "sprite1": "blank",
    "sprite2": "gardevoir",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/scvi-2024/gardevoir-ex",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/gardevoir",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/kirlia",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ralts",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ralts-memory-skip",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zacian-v-psychic",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cresselia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-turo",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/worker",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/miriam",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/penny",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/rare-candy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sky-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/12",
        radiusCard:true
      },
    ]
  },
  {
    "name": "Sönke Ringel",
    "flag": "DE",
    "sprite1": "blank",
    "sprite2": "../../../assets/hyphen",
    // list: '../../../assets/list-icon",
    list: '../../../assets/sprites/blank",
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Daniele Rosati",
    "flag": "IT",
    "sprite1": "blank",
    "sprite2": "../../../assets/hyphen",
    // list: '../../../assets/list-icon",
    list: '../../../assets/sprites/blank",
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "João Penteado",
    "flag": "BR",
    "sprite1": "gardevoir",
    "sprite2": "mewtwo",
    // list: '../../../assets/list-icon",
    list: '../../../assets/sprites/blank",
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Luka Levain",
    "flag": "FR",
    "sprite1": "blank",
    "sprite2": "../../../assets/hyphen",
    // list: '../../../assets/list-icon",
    list: '../../../assets/sprites/blank",
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Daniel Rosas",
    "flag": "US",
    "sprite1": "blank",
    "sprite2": "../../../assets/hyphen",
    // list: '../../../assets/list-icon",
    list: '../../../assets/sprites/blank",
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Owen Dalgard",
    "flag": "US",
    "sprite1": "gardevoir",
    "sprite2": "mewtwo",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/scvi-2024/gardevoir-ex",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/gardevoir",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/kirlia",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ralts",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ralts-memory-skip",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/klefki",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mewtwo-v-unvion-topleft",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mewtwo-v-unvion-topright",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mewtwo-v-unvion-bottomleft",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mewtwo-v-unvion-bottomright",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zacian-v-psychic",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-turo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/peonia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rescue-carrier-crv",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sky-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/11",
        radiusCard:true
      },
    ]
  },
]

"juniors": [
  {
    "name": "Remi Lorenz",
    "flag": "US",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tyranitar-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ss-urshifu-vmax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ss-urshifu-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stonjourner",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/yveltal-ss",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-tsareena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-sada",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/penny",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/prof-burnet",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/capturing-aroma",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/urn-of-vitality",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/mesagoza",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/single-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/gift-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/regenerative-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Drake Zhu",
    "flag": "NZ",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tyranitar-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stonjourner",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/yveltal-ss",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-sada",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/prof-burnet",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/capturing-aroma",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/urn-of-vitality",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/mesagoza",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/single-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/gift-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    "name": "Yohann C",
    "flag": "CA",
    "sprite1": "giratina-origin",
    "sprite2": "comfey",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/giratina-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/giratina-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sableye",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax-unfazed-fat",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tropius",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-grass-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard:true
      },
    ]
  },
  {
    "name": "Gregory V",
    "flag": "FR",
    "sprite1": "giratina-origin",
    "sprite2": "comfey",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/giratina-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/giratina-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sableye",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax-unfazed-fat",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raikou-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/canceling-cologne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-grass-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-lightning-energy.jpg",
        numImg: '../../../assets/01",
        radiusCard:true
      },
    ]
  },
  {
    "name": "Naël E",
    "flag": "ES",
    "sprite1": "giratina-origin",
    "sprite2": "comfey",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/giratina-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/giratina-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sableye",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/05",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-grass-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard:true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard:true
      },
    ]
  },
  {
    "name": "Prince Williams",
    "flag": "US",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tyranitar-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stonjourner",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-tsareena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/professors-research-sada",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/prof-burnet",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/penny",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/capturing-aroma",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/urn-of-vitality",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/mesagoza",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/single-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/gift-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/regenerative-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Aiden F",
    "flag": "UK",
    "sprite1": "comfey",
    "sprite2": "sableye",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sableye",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax-unfazed-fat",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raikou-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zapdos-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pokegear30",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sky-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/beach-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-lightning-energy.jpg",
        numImg: '../../../assets/02",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-fighting-energy.jpg",
        numImg: '../../../assets/01",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Jan J",
    "flag": "PL",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/genesct-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/judge",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cross-switcher",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/feather-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/scvi-2024/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
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

    let flagImg = document.createElement('img');
        flagImg.classList.add('flag-size');
        flagImg.setAttribute('src", item.flag);

        let countryName = document.createElement('div');
        countryName.classList.add('country-name');
        countryName.style.display = 'none';

        flagImg.addEventListener('mouseover", function() {
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

        flagImg.addEventListener('mouseout", function() {
            countryName.style.display = 'none';
        });

        let deck = document.createElement('div');
        deck.classList.add('player-deck-icons');

    let firstSprite = document.createElement('img');
    firstSprite.classList.add('sprite');
    firstSprite.setAttribute('src", item.sprite1);
    let secondSprite = document.createElement('img');
    secondSprite.classList.add('sprite');
    secondSprite.classList.add('second-sprite');
    secondSprite.setAttribute('src", item.sprite2);
    let listIcon = document.createElement('img');
    listIcon.classList.add('list-icon');
    listIcon.setAttribute('src", item.list);

     
    
    item_element.appendChild(title);
    title.appendChild(playerName);
        playerName.appendChild(countryName); // Append the country name element
        playerName.appendChild(flagImg);
    playerName.append(item."name");
    title.appendChild(deck);
    deck.appendChild(firstSprite);
    deck.appendChild(secondSprite);
    deck.appendChild(listIcon);

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click", function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item."name" + " - 2023 EUIC";

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
          pokeCard.setAttribute('src", deck.cardImg);

          if (deck.radiusCard === true) {
            pokeCard.classList.add('radius-card')
        }

          let numberCounter = document.createElement('img');
          numberCounter.classList.add('num-1')
          numberCounter.setAttribute('src", deck.numImg);

          cardSpace.appendChild(pokeCard);
          cardSpace.appendChild(numberCounter);
          modalBottom.appendChild(cardSpace);

          modalX.addEventListener('click", () => {
            modal.style.display = 'none';
            behind.style.display = 'none';
            cardSpace.remove();
          })
          behind.addEventListener('click", () => {
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
        flagImg.setAttribute('src", item.flag);

        let countryName = document.createElement('div');
        countryName.classList.add('country-name');
        countryName.style.display = 'none';

        flagImg.addEventListener('mouseover", function() {
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

        flagImg.addEventListener('mouseout", function() {
            countryName.style.display = 'none';
        });

        let deck = document.createElement('div');
        deck.classList.add('player-deck-icons');

    let firstSprite = document.createElement('img');
    firstSprite.classList.add('sprite');
    firstSprite.setAttribute('src", item.sprite1);
    let secondSprite = document.createElement('img');
    secondSprite.classList.add('sprite');
    secondSprite.classList.add('second-sprite');
    secondSprite.setAttribute('src", item.sprite2);
    let listIcon = document.createElement('img');
    listIcon.classList.add('list-icon');
    listIcon.setAttribute('src", item.list);

     
    
    item_element.appendChild(title);
    title.appendChild(playerName);
        playerName.appendChild(countryName); // Append the country name element
        playerName.appendChild(flagImg);
    playerName.append(item."name");
    title.appendChild(deck);
    deck.appendChild(firstSprite);
    deck.appendChild(secondSprite);
    deck.appendChild(listIcon);

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click", function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item."name" + " - 2023 EUIC";

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
          pokeCard.setAttribute('src", deck.cardImg);
          if (deck.radiusCard === true) {
            pokeCard.classList.add('radius-card')
        }
          let numberCounter = document.createElement('img');
          numberCounter.classList.add('num-1')
          numberCounter.setAttribute('src", deck.numImg);

          cardSpace.appendChild(pokeCard);
          cardSpace.appendChild(numberCounter);
          modalBottom.appendChild(cardSpace);

          modalX.addEventListener('click", () => {
            modal.style.display = 'none';
            behind.style.display = 'none';
            cardSpace.remove();
          })
          behind.addEventListener('click", () => {
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
        flagImg.setAttribute('src", item.flag);

        let countryName = document.createElement('div');
        countryName.classList.add('country-name');
        countryName.style.display = 'none';

        flagImg.addEventListener('mouseover", function() {
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

        flagImg.addEventListener('mouseout", function() {
            countryName.style.display = 'none';
        });

        let deck = document.createElement('div');
        deck.classList.add('player-deck-icons');

    let firstSprite = document.createElement('img');
    firstSprite.classList.add('sprite');
    firstSprite.setAttribute('src", item.sprite1);
    let secondSprite = document.createElement('img');
    secondSprite.classList.add('sprite');
    secondSprite.classList.add('second-sprite');
    secondSprite.setAttribute('src", item.sprite2);
    let listIcon = document.createElement('img');
    listIcon.classList.add('list-icon');
    listIcon.setAttribute('src", item.list);

     
    
    item_element.appendChild(title);
    title.appendChild(playerName);
        playerName.appendChild(countryName); // Append the country name element
        playerName.appendChild(flagImg);
    playerName.append(item."name");
    title.appendChild(deck);
    deck.appendChild(firstSprite);
    deck.appendChild(secondSprite);
    deck.appendChild(listIcon);

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click", function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item."name" + " - 2023 EUIC";

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
          pokeCard.setAttribute('src", deck.cardImg);
          if (deck.radiusCard === true) {
            pokeCard.classList.add('radius-card')
        }
          let numberCounter = document.createElement('img');
          numberCounter.classList.add('num-1')
          numberCounter.setAttribute('src", deck.numImg);

          cardSpace.appendChild(pokeCard);
          cardSpace.appendChild(numberCounter);
          modalBottom.appendChild(cardSpace);

          modalX.addEventListener('click", () => {
            modal.style.display = 'none';
            behind.style.display = 'none';
            cardSpace.remove();
          })
          behind.addEventListener('click", () => {
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
