const pokemonCard = [...pop1, ...pop2, ...pop3, ...pop4, ...pop5, ...pop6, ...pop7, ...pop8, ...pop9, ...southernIslands, ...rumble, ...kalos, ...futsal, ...promoWotc, ...baseSet, ...jungle, ...fossil, ...baseSet2, ...teamRocket, ...gymHeroes, ...gymChallenge, ...genesis, ...discovery, ...revelation, ...destiny, ...legendaryCollection, ...expedition, ...aquapolis, ...skyridge, ...promoRs, ...rubySapphire, ...sandstorm, ...dragon, ...magmaAqua, ...hiddenLegends, ...fireredLeafgreen, ...teamRocketReturns, ...deoxys, ...emerald, ...unseenForces, ...deltaSpecies, ...legendMaker, ...holonPhantoms, ...crystalGuardians, ...dragonFrontiers, ...powerKeepers, ...promoDp, ...diamondPearl, ...mysteriousTreasures, ...secretWonders, ...greatEncounters, ...majesticDawn, ...legendsAwakened, ...stormfront, ...platinum, ...risingRivals, ...supremeVictors, ...arceus, ...promoHgSs, ...heartgoldSoulsilver, ...unleashed, ...undaunted, ...triumphant, ...callOfLegends, ...blackWhite, ...promoBw, ...emergingPowers, ...nobleVictories, ...nextDestinies, ...darkExplorers, ...dragonsExalted, ...dragonVault, ...boundariesCrossed, ...plasmaStorm, ...plasmaFreeze, ...plasmaBlast, ...legendaryTreasures, ...promoXy, ...xySet, ...flashfire, ...furiousFists, ...phantomForces, ...primalClash, ...doubleCrisis, ...roaringSkies, ...ancientOrigins, ...breakthrough, ...breakpoint, ...generations, ...fatesCollide, ...steamSiege, ...evolutions, ...promoSm, ...sunMoon, ...guardiansRising, ...burningShadows, ...shiningLegends, ...crimsonInvasion, ...ultraPrism, ...forbiddenLight, ...celestialStorm, ...dragonMajesty, ...lostThunder, ...teamUp, ...detectivePikachu, ...unbrokenBonds, ...unifiedMinds, ...hiddenFates, ...cosmicEclipse, ...promoSwSh, ...swordShield, ...rebelClash, ...darknessAblaze, ...championsPath, ...vividVoltage, ...shiningFates, ...battleStyles, ...chillingReign, ...evolvingSkies, ...celebrations, ...fusionStrike, ...brilliantStars, ...astralRadiance, ...pokemonGo, ...lostOrigin, ...silverTempest, ...crownZenith, ...sv1, ...promoSv];
   // const pokemonCard = [...blackWhite, ...sv1]
// const pokemonCard = [
//     {
//       id: 1,
//       name: 'Pikachu',
//       img: 'https://images.pokemontcg.io/sm3/40.png',
//     },
 
//     {
//       id: 2,
//       name: 'Charmander',
//       img: 'https://images.pokemontcg.io/sm3/18a.png',
//     }
//  ];

const searchField = document.querySelector('#search');
// const setsOl = document.querySelector('.all-cards'); // where cards get displayed

searchField.addEventListener('input', (e) => {
  
  if(e.target.value === '') {
     setsOl.innerHTML = '';
     return;
  }
  
  const searchResults = pokemonCard.filter(poke => poke.name?.toLowerCase().includes(e.target.value.toLowerCase()));
  
  setsOl.innerHTML = '';
  
//   searchResults.forEach((element, index) => {
//      const p = document.createElement('p');
//      p.textContent = (index + 1) + '. ' + element.name;
//      setsOl.appendChild(p);
//   });
  searchResults.forEach((poke) => {
      let meep = document.createElement('img');
      meep.classList.add('database-card-in-list');
      meep.setAttribute('src', poke.images.small);
      setsOl.appendChild(meep);
      meep.onclick = () => {
         zoomedImg.setAttribute('src', poke.images.large);
         zoombox.className = "show";
      };
      zoombox.onclick = () => {
         zoombox.className = "";
      };
  });
});