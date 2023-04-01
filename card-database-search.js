const pokemonCard = [
   ...sv1,
   ...promoSv,
   ...crownZenith,
   ...silverTempest,
   ...lostOrigin,
   ...pokemonGo,
   ...astralRadiance,
   ...brilliantStars,
   ...fusionStrike,
   ...celebrations,
   ...evolvingSkies,
   ...chillingReign,
   ...battleStyles,
   ...shiningFates,
   ...vividVoltage,
   ...championsPath,
   ...futsal,
   ...darknessAblaze,
   ...rebelClash,
   ...swordShield,
   ...promoSwSh,
   ...cosmicEclipse,
   ...hiddenFates,
   ...unifiedMinds,
   ...unbrokenBonds,
   ...detectivePikachu,
   ...teamUp,
   ...lostThunder,
   ...dragonMajesty,
   ...celestialStorm,
   ...forbiddenLight,
   ...ultraPrism,
   ...crimsonInvasion,
   ...shiningLegends,
   ...burningShadows,
   ...guardiansRising,
   ...sunMoon,
   ...promoSm,
   ...evolutions,
   ...steamSiege,
   ...fatesCollide,
   ...generations,
   ...breakpoint,
   ...breakthrough,
   ...ancientOrigins,
   ...roaringSkies,
   ...doubleCrisis,
   ...primalClash,
   ...phantomForces,
   ...furiousFists,
   ...flashfire,
   ...xySet,
   ...kalos,
   ...promoXy,
   ...legendaryTreasures,
   ...plasmaBlast,
   ...plasmaFreeze,
   ...plasmaStorm,
   ...boundariesCrossed,
   ...dragonVault,
   ...dragonsExalted,
   ...darkExplorers,
   ...nextDestinies,
   ...nobleVictories,
   ...emergingPowers,
   ...blackWhite,
   ...promoBw,
   ...callOfLegends,
   ...triumphant,
   ...undaunted,
   ...unleashed,
   ...heartgoldSoulsilver,
   ...promoHgSs,
   ...rumble,
   ...arceus,
   ...supremeVictors,
   ...risingRivals,
   ...pop9,
   ...platinum,
   ...stormfront,
   ...legendsAwakened,
   ...pop8,
   ...majesticDawn,
   ...pop7,
   ...greatEncounters,
   ...secretWonders,
   ...pop6,
   ...mysteriousTreasures,
   ...diamondPearl,
   ...promoDp,
   ...pop5,
   ...powerKeepers,
   ...dragonFrontiers,
   ...crystalGuardians,
   ...pop4,
   ...holonPhantoms,
   ...pop3,
   ...legendMaker,
   ...deltaSpecies,
   ...pop2,
   ...unseenForces,
   ...emerald,
   ...deoxys,
   ...teamRocketReturns,
   ...pop1,
   ...fireredLeafgreen,
   ...hiddenLegends,
   ...magmaAqua,
   ...dragon,
   ...sandstorm,
   ...rubySapphire,
   ...promoRs,
   ...skyridge,
   ...aquapolis,
   ...expedition,
   ...legendaryCollection,
   ...destiny,
   ...revelation,
   ...southernIslands,
   ...discovery,
   ...genesis,
   ...gymChallenge,
   ...gymHeroes,
   ...teamRocket,
   ...baseSet2,
   ...fossil,
   ...jungle,
   ...baseSet,
   ...promoWotc
];

const searchField = document.querySelector('#search');
// const setsOl = document.querySelector('.all-cards'); // where cards get displayed

searchField.addEventListener('input', (e) => {

   if (e.target.value === '') {
      setsOl.innerHTML = '';
      return;
   }

   const searchResults = pokemonCard.filter(poke => poke.name?.toLowerCase().includes(e.target.value.toLowerCase()));

   setsOl.innerHTML = '';

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