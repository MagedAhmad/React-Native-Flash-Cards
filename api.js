import AsyncStorage from '@react-native-async-storage/async-storage';

export async function addDeck(title){
  try {
    await AsyncStorage.mergeItem('application_decks' , JSON.stringify({
      [title]:{
          title ,
          questions:[]
      }
    }))
  }catch(error) {
    console.log(error)
  }
    // return AsyncStorage.getItem('application_decks').then(data => {
    //     const decks = data ? JSON.parse(data) : [];
    //     try {
    //       decks.push(deck);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //     return AsyncStorage.setItem('application_decks', JSON.stringify(decks));
    // });
}

export async function getDecks(){
  return AsyncStorage.getItem('application_decks').then(decks => {
    return JSON.parse(decks)
  })
}

export async function addCard(title , card) {
  try {
    const decks = await AsyncStorage.getItem('application_decks');
    const deck = JSON.parse(decks)[title]
    await AsyncStorage.mergeItem('application_decks' , JSON.stringify({
        [title]:{
            questions:[...deck.questions].concat(card)
        }
    }))

    return AsyncStorage.getItem('application_decks').then(decks => {
      console.log(decks)
    })

  }
  catch(error) {
      console.log(error)
  }
  // AsyncStorage.getItem('application_decks').then((decks) => {
  //   console.log(JSON.parse(decks))
  //   // JSON.parse(decks)[title].questions.concat(card)
  //   // console.log(JSON.parse(decks))
  //   // if(JSON.parse(decks)[0].title == title) {
  //   //   console.log(JSON.parse(decks)[title])
  //   // }
  //   // AsyncStorage.setItem('application_decks', JSON.stringify( decks ))
  // })
  // // AsyncStorage.getItem('application_decks').then(data => {
  // //   console.log(data)
  // // })
  //   // AsyncStorage.mergeItem('application_decks', JSON.stringify({
  //   //     [title]: {
  //   //       ...[title],
  //   //       questions: [...[card]]
  //   //     }
  //   // }))
  //   // AsyncStorage.getItem('application_decks').then(data => {
  //   //   console.log(data)
  //   // })
  //   // return 
}

export async function clear() {
  AsyncStorage.clear()
}

export default {getDecks, addDeck, addCard}