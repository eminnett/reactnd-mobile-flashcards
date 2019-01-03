import { ADD_CARD, ANSWER_CARD } from '../actions/cards';
const uuidv4 = require('uuid/v4');

export default function cards(state = [], action) {
  switch (action.type) {
    case ADD_CARD:
      return state.concat([{
        id: uuidv4(),
        deckId: action.deckId,
        question: action.question,
        answer: action.answer,
        position: action.position,
        answered: false,
        correct: false,
      }]);
    case ANSWER_CARD:
      const index = state.findIndex(c => c.id == action.id);
      let card = state[index];
      card.answered = true;
      card.correct = action.answeredCorrectly;
      state[index] = card;
      return [...state];
    default:
      return state;
  }
}
