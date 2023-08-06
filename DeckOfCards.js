// // 1. Request a single card from a newly shuffled deck
// axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`)
//     .then(card => {console.log(`${card.data.cards[0].value} of ${card.data.cards[0].suit}`)})
//     .catch(err => {console.log(err)});

// // 2. 
// axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=2`)
//     .then(card => {console.log(`First Card: ${card.data.cards[0].value} of ${card.data.cards[0].suit}, Second Card: ${card.data.cards[1].value} of ${card.data.cards[1].suit}`)})
//     .catch(err => {console.log(err)});

// 3.
// Draw one card from a new deck when page loads.
// Show a button that lets user draw a card
// Every time button is clicked, display drawn card until there are no cards left in deck (52)

// API: Shuffle the Cards. Draw a Card. Adding to Piles. Listing Cards in Piles.

// const baseHTML = 'https://deckofcardsapi.com/api/deck/'

// for(i=1; i<53; i++) {
    
// }



// // Shuffle deck
// axios.get(`${baseHTML}new/shuffle/?deck_count=1`)
//     .then(deck => {
//         console.log(deck);
//         console.log(`Deck ID: ${deck.data.deck_id}, Remaining: ${deck.data.remaining}`);
//         // Draw one card
//         return axios.get(`${baseHTML}${deck.data.deck_id}/draw/?count=1`)
//     })
//     .then(c1 => {
//         console.log(c1);
//         console.log(`Drawn Card: ${c1.data.cards[0].value} of ${c1.data.cards[0].suit}, Remaining cards: ${c1.data.remaining}`)
//         // Put card into pile
//         return axios.get(`${baseHTML}${c1.data.deck_id}/pile/discard/add/?cards=${c1.data.cards[0].code}`)
//     })
//     .then(discardPile => {
//         console.log(discardPile);
//         // List Cards in Pile
//         return axios.get(`${baseHTML}${discardPile.data.deck_id}/pile/discard/list/`);
//     })
//     .then(discardCard => {
//         console.log(discardCard);
//         console.log(`Discarded Card: ${discardCard.data.piles.discard.cards[0].value} of ${discardCard.data.piles.discard.cards[0].suit}, Image: ${discardCard.data.piles.discard.cards[0].image}`);
//         // Draw second card
//         return axios.get(`${baseHTML}${discardCard.data.deck_id}/draw/?count=1`)
//     })


    

//     .then(c2 => {
//         console.log(c2);
//         console.log(`Drawn Card: ${c2.data.cards[0].value} of ${c2.data.cards[0].suit}, Remaining cards: ${c2.data.remaining}`)
//         // Put card into pile
//         return axios.get(`${baseHTML}${c2.data.deck_id}/pile/discard/add/?cards=${c2.data.cards[0].code}`)
//     })
//     .then(discardPile => {
//         console.log(discardPile);
//         // List Cards in Pile
//         return axios.get(`${baseHTML}${discardPile.data.deck_id}/pile/discard/list/`);
//     })
//     .then(discardCard => {
//         console.log(discardCard);
//         console.log(`Discarded Card: ${discardCard.data.piles.discard.cards[1].value} of ${discardCard.data.piles.discard.cards[1].suit}, Image: ${discardCard.data.piles.discard.cards[1].image}`);
//         // // Draw third card
//         // return axios.get(`${baseHTML}${discardCard.data.deck_id}/draw/?count=1`)
//     })

//     .catch(err => {
//         console.log(err);
//     });

// const baseHTML = 'https://deckofcardsapi.com/api/deck/'
// let drawnCardPromises = [];

// // Shuffle Deck
// axios.get(`${baseHTML}new/shuffle/?deck_count=1`)
//     .then(deck => {
//         console.log(deck);
//         console.log(`Deck ID: ${deck.data.deck_id}, Remaining: ${deck.data.remaining}`);
//         return deck.data.deck_id;
//     })
//     .then(deckID => {
//         for (let i=1; i<=52; i++) {
//             drawnCardPromises.push(
//                 // Draw one card
//                 axios.get(`${baseHTML}${deck.data.deck_id}/draw/?count=1`)
//                     .then(c1 => {
//                         console.log(c1);
//                         console.log(`Drawn Card: ${c1.data.cards[0].value} of ${c1.data.cards[0].suit}, Remaining cards: ${c1.data.remaining}`)
//                         // Put card into pile
//                         return axios.get(`${baseHTML}${c1.data.deck_id}/pile/discard/add/?cards=${c1.data.cards[0].code}`)
//                     })
//                     .then(discardPile => {
//                         console.log(discardPile);
//                         // List Cards in Pile
//                         return axios.get(`${baseHTML}${discardPile.data.deck_id}/pile/discard/list/`);
//                     })
//                     .then(discardCard => {
//                         console.log(discardCard);
//                         console.log(`Discarded Card: ${discardCard.data.piles.discard.cards[0].value} of ${discardCard.data.piles.discard.cards[0].suit}, Image: ${discardCard.data.piles.discard.cards[0].image}`)
//                         return discardCard;
//                     })
//             )
//         }
//         return Promise.all(drawnCardPromises);
//     })
//     .then(cardArr => (
//         cardArr.forEach(card => console.log(`Discarded Card: ${card.data.piles.discard.cards[0].value} of ${card.data.piles.discard.cards[0].suit}, Image: ${card.data.piles.discard.cards[0].image}`))
//     ))
//     .catch(err => console.log(err));



// const baseHTML = 'https://deckofcardsapi.com/api/deck/'
// let deckID = null;
// let btn = document.querySelector('button');
// let cardArea = document.querySelector('.card-area');

// btn.onclick = function() {
//     axios.get(`${baseHTML}new/shuffle/?deck_count=1`)
//     .then(deck => {
//         console.log(deck);
//         deckID = deck.data.deck_id;
//         console.log(`Deck ID: ${deckID}, Remaining: ${deck.data.remaining}`);
//         // Draw card
//         return axios.get(`${baseHTML}${deckID}/draw/?count=1`)
//     })
//     .then(card => {
//         console.log(card);
//         console.log(`Drawn Card: ${card.data.cards[0].value} of ${card.data.cards[0].suit}, Remaining cards: ${card.data.remaining}, ImageURL: ${card.data.cards[0].image}`);
//         let cardImg = card.data.cards[0].image;
//         cardArea.append(`<img src=${cardImg}>`);
//     })
// };



const baseHTML = 'https://deckofcardsapi.com/api/deck/'
const btn = document.querySelector('button');
const cardArea = document.querySelector('.card-area');
const newImg = document.createElement('img');
// Shuffle deck
axios.get(`${baseHTML}new/shuffle/?deck_count=1`)
    .then(deck => {
        console.log(deck);
        console.log(`Deck ID: ${deck.data.deck_id}, Remaining: ${deck.data.remaining}`);
        // Draw one card
        btn.onclick = function() {
            axios.get(`${baseHTML}${deck.data.deck_id}/draw/?count=1`)
                .then(c1 => {
                    console.log(c1);
                    console.log(`Drawn Card: ${c1.data.cards[0].value} of ${c1.data.cards[0].suit}, Remaining cards: ${c1.data.remaining}`);
                    newImg.src = c1.data.cards[0].image;
                    cardArea.append(newImg);
                    if (c1.data.remaining === 0) {
                        btn.remove();
                    }
                })
                .catch(err => {console.log(err)});
        }
    });
   
    


