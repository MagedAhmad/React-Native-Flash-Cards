import AsyncStorage from '@react-native-async-storage/async-storage';

export async function addDeck(deck){
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

export async function getDecks(){
    try {
      const value = await AsyncStorage.getItem('decks')
      if(value !== null) {
        return value
      }
    } catch(e) {
      alert(e)
    }
}

export async function addCard(title , card) {

  try {
      const decks = await getDecks();

      await AsyncStorage.mergeItem('app::decks' , JSON.stringify({
          [title]:{
              questions:[...decks[title].questions].concat(card)
          }
      }))
  }
  catch(e) {
      console.log(e)
  }
}

export default {getDecks, addDeck, addCard}