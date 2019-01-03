export const ADD_DECK = 'ADD_DECK';

export function addDeck(name) {
  return {
    type: ADD_DECK,
    name,
  };
}

const addDeckPromise = (dispatch, getState, name) => {
  return new Promise(function(resolve, reject) {
    dispatch(addDeck(name));
    const decks = getState().decks;
    const deck = decks[decks.length - 1];
    if (deck) {
      resolve(deck);
    }
  });
};

export function addDeckAndNavigate(name, navigation) {
  return (dispatch, getState) => {
    return addDeckPromise(dispatch, getState, name).then((deck) => {
      navigation.navigate('Deck', {deckId: deck.id, deckName: deck.name});
    });
  };
}
