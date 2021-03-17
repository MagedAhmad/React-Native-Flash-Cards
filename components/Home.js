import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native';
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
        console.log(this.props.decks)
        const { decks } = this.props
        const { ready } = this.state
        return (
            <Text>{ready}</Text>
        )
    }

}

function mapStateToProps (decks) {
    return {
      decks
    }
  }

export default connect(mapStateToProps)(Home)