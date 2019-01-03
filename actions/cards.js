export const ADD_CARD = 'ADD_CARD';
export const ANSWER_CARD = 'ANSWER_CARD';

export function addCard(deckId, question, answer, position) {
  return {
    type: ADD_CARD,
    deckId,
    question,
    answer,
    position
  };
}

export function answerCard(id, answeredCorrectly) {
  return {
    type: ANSWER_CARD,
    id,
    answeredCorrectly,
  };
}
