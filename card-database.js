// fetch('https://api.pokemontcg.io/v2/sets').then(res => { console.log('List of All Sets', res.json()) })
// /* set */ fetch('https://api.pokemontcg.io/v2/cards?q=set.id:mcd11').then(res => { console.log('Download New Set', res.json()) })
// /* card */ fetch('https://api.pokemontcg.io/v2/cards/sv2-1').then(res => { console.log('Download New Card', res.json()) })

// sv3.forEach(cardObject => {
//     delete cardObject.tcgplayer;
//     delete cardObject.cardmarket;
// })
// console.log('Edited Set Object 2 - Removing Values', sv3)

// const allStandardLegalCards = [];
// let page = 2;

// const getCards = () => {
//     const url = 'https://api.pokemontcg.io/v2/cards?q=set.id:swshp';
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
//             console.log('meeeeeeeep', allStandardLegalCards, data, page);
//         });
// };
// getCards();

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}
