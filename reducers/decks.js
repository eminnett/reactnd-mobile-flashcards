import { ADD_DECK } from '../actions/decks';
const uuidv4 = require('uuid/v4');

export default function decks(state = [], action) {
  switch (action.type) {
    case ADD_DECK:
      return state.concat([{
        id: uuidv4(),
        name: action.name
      }]);
    default:
      return state;
  }
}
