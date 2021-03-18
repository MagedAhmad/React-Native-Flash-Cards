import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native';
import {getDecks} from '../api'
import { getDecksAction } from '../actions/decks';
import DeckDetails from './DeckDetails'

class Home extends Component {
    state = {
        decks: {},
    }
    componentDidMount () {
        getDecks()
            .then((decks) => this.props.dispatch(getDecksAction(decks))
    )}
    seeDeck = (deck) => {
        alert(deck.title)
        // this.props.navigation.navigate('Deck', {deck})
    }

    render() {
        const { decks, navigation } = this.props
        if(Object.keys(decks).length == 0) {
            return <Text>No decks</Text>
        }else {
            return (
                <View>
                    {Object.keys(decks).map( function(title){
                        return <TouchableOpacity 
                            onPress={() => navigation.navigate('Deck', {deck :decks[title]})}
                            key={title}>
                            {/* <Text>{decks[title].title}</Text> */}
                            <DeckDetails deck={decks[title]}/>
                        </TouchableOpacity>
                        
                    })}
                </View>
            )
        }

    }

}

function mapStateToProps (decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Home)