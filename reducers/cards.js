import { ADD_CARD_ACTION } from "../actions/cards";

function cards (state = {}, action) {
  switch (action.type) {
    case ADD_CARD_ACTION:
        const {title, card} = action;
        return {
            ...state ,
            [title]: {
                ...state[title],
                questions: [...state[title].questions].concat(card)
            }
        } 
    default:
      return state;
  }
}

export default cards