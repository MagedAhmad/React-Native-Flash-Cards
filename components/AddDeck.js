import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput, Button } from 'react-native';
import {addDeck} from '../api'
import { addDeckAction } from '../actions/decks';

class AddDeck extends Component {
    state = {
        title: ''
    }
    changeTitle = (e) => {
        e.preventDefault()

        this.setState({title : e.nativeEvent.text})
    }
    submitForm = (e) => {
        e.preventDefault()

        let deck = {
            title : this.state.title,
            cards: {}
        }
        this.props.dispatch(addDeckAction(deck))
        
        addDeck(deck).then(() => {
            alert("ok")
        }).catch(() => {
            alert("error")
        })
    }

    render() {
        return (
            <View>
                <Text>Add a deck</Text>
                <TextInput value={this.state.title} onChange={this.changeTitle} placeholder="deck title"></TextInput>
                <Button title="Add" onPress={this.submitForm} />
            </View>
        )
    }

}

export default connect()(AddDeck)