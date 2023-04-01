const pokemonCard = [blackWhite, boundariesCrossed];
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
  
  const searchResults = pokemonCard.filter(poke => {
      return poke.name.toLowerCase().includes(e.target.value.toLowerCase());
  });
  
  setsOl.innerHTML = '';
  
  searchResults.forEach((element, index) => {
     const p = document.createElement('p');
     p.textContent = (index + 1) + '. ' + element.name;
     setsOl.appendChild(p);
  });
//   searchResults.forEach((poke) => {
//       let meep = document.createElement('img');
//       meep.classList.add('database-card-in-list');
//       meep.setAttribute('src', pokemonCard.img);
//       setsOl.appendChild(poke);
//   });
});