import { ADD_DECK_ACTION, GET_DECKS_ACTION } from "../actions/decks";

function decks (state = {}, action) {
  switch (action.type) {
    case ADD_DECK_ACTION:
      const { decks } = state;
      return {
        decks: {
          ...decks,
          [action.deck.name]: action.deck
        }
    }
    case GET_DECKS_ACTION:
      return {
        decks: action.decks
    }
    default:
      return state;
  }
}

export default decks
