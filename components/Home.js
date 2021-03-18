import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
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

    render() {
        const { decks, navigation } = this.props
        if(Object.keys(decks).length == 0) {
            return <View style={styles.container}>
                <Text style={styles.text}>No decks</Text>
            </View>
        }else {
            return (
                <View style={styles.container}>
                    {Object.keys(decks).map( function(title){
                        return <TouchableOpacity
                            style={styles.deck} 
                            onPress={() => navigation.navigate('Deck', {deck :decks[title]})}
                            key={title}>
                            <DeckDetails deck={decks[title]}/>
                        </TouchableOpacity>
                        
                    })}
                </View>
            )
        }

    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      alignItems:'center',
      justifyContent: 'center'
    },
    text: {
        fontSize: 30,
        color: '#000'
    },
    input: {
        padding:10,
        backgroundColor: '#fff'
    },
    deck: {
        backgroundColor: 'purple',
        padding:30,
        margin:5
    }
});


function mapStateToProps (decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Home)