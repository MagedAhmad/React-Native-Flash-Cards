export const ADD_CARD_ACTION = 'ADD_CARD_ACTION'

export function addCardAction(title , card) {
    return {
        type: ADD_CARD_ACTION ,
        title,
        card
    }
}