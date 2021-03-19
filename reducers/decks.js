import { ADD_DECK_ACTION, GET_DECKS_ACTION } from "../actions/decks";

function decks (state = {}, action) {
  switch (action.type) {
    case ADD_DECK_ACTION:
      const {title} = action;
      return {
        ...state ,
        [title]: {
            title,
            questions: []
        }
    }
    case GET_DECKS_ACTION:
      return {
        ...state,
        ...action.decks
    }
    default:
      return state;
  }
}

export default decks
