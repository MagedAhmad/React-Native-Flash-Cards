export const ADD_DECK_ACTION = 'ADD_DECK_ACTION'
export const GET_DECKS_ACTION = 'GET_DECKS_ACTION'

export function addDeckAction(title) {
    return {
      type: ADD_DECK_ACTION,
      title
    }
}

export function getDecksAction(decks) {
    return {
      type: GET_DECKS_ACTION,
      decks
    }
}
  