import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native';
import {getDecks} from '../api'
import { getDecksAction } from '../actions/decks';

class Home extends Component {
    state = {
        decks: {},
        ready: false
    }
    componentDidMount () {
        getDecks()
            .then((decks) => this.props.dispatch(getDecksAction(decks))
    )}

    render() {
        const { decks } = this.props
        const { ready } = this.state
        console.log(decks)
        return (
            <View>
                {Object.keys(decks).map( function(title){
                    return title ===null ? <Text>No decks</Text> :
                    <Text key={title}>
                        {decks[title].title}
                    </Text>
                })}
            </View>
        )
        
    }

}

function mapStateToProps (decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Home)