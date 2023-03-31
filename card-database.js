fetch('https://api.pokemontcg.io/v2/sets').then(res => { console.log('List of All Sets', res.json()) })
fetch('https://api.pokemontcg.io/v2/cards?q=set.id:np').then(res => { console.log('Download New Set', res.json()) })

promoRs.forEach(cardObject => {
    delete cardObject.tcgplayer;
    delete cardObject.cardmarket;
    delete cardObject.level;
    delete cardObject.retreatCost;
    delete cardObject.set.updatedAt;
})
console.log('Edited Set Object - Removing Values', promoRs)

// const allStandardLegalCards = [];
// let page = 1;

// const getCards = () => {
//     const url = 'https://api.pokemontcg.io/v2/cards?q=set.id:sm12';
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

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}
