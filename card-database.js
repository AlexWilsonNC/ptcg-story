// fetch('https://api.pokemontcg.io/v2/sets').then(res => { console.log('List of All Sets', res.json()) })

// const allStandardLegalCards = [];
// let page = 1;

// const getCards = () => {
//     const url = 'https://api.pokemontcg.io/v2/cards?q=set.id:swsh12tg';
//     fetch(url, {
//         headers: {
//             "X-Api-key": "c7d98093-9347-4504-92d8-0387131ab03b",
//         },
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             allStandardLegalCards.push(...data.data);
//             if (data.count === 250) {
//                 page++;
//                 getCards();
//                 console.log(allStandardLegalCards, data);
//             } else {
//                 window.localStorage.setItem(
//                     "allStandardLegalCards",
//                     JSON.stringify(allStandardLegalCards)
//                 );
//             }
//             console.log('download set', allStandardLegalCards, data, page);
//         });
// };
// getCards();
