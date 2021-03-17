import AsyncStorage from '@react-native-async-storage/async-storage';

export function addDeck(deck){
    return AsyncStorage.getItem('app::decks').then(data => {
        const decks = data ? JSON.parse(data) : [];
        try {
          decks.push(deck);
        } catch (error) {
          console.log(error);
        }
        return AsyncStorage.setItem('app::decks', JSON.stringify(decks));
    });
}

export function getDecks(){
    try {
      const value = AsyncStorage.getItem('decks')
      if(value !== null) {
        return value
      }
    } catch(e) {
      
    }
}

export default {getDecks, addDeck}