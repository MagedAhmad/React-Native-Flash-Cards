import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput, Button } from 'react-native';
import { addCardAction } from '../actions/cards';
import { addCard, getDecks } from '../api';
import { getDecksAction } from '../actions/decks';

class AddCard extends Component {
    componentDidMount() {
        const {deck} = this.props.route.params
        this.setState({deck})
        this.props.navigation.setOptions({ title: 'Add question' })
    }

    state = {
        question: '',
        answer: '',
        deck : {}
    }
    changeQuestion = (e) => {
        e.preventDefault()

        this.setState({question : e.nativeEvent.text})
    }
    changeAnswer = (e) => {
        e.preventDefault()

        this.setState({answer : e.nativeEvent.text})
    }
    submitForm = (e) => {
        e.preventDefault()
        const deck = this.state.deck

        let card = {
            question : this.state.question,
            answer: this.state.answer
        }
        this.props.dispatch(addCardAction(deck.title, card))
        addCard(deck.title, card).then(() => {
            getDecks().then((decks) => this.props.dispatch(getDecksAction(decks)))
            this.props.navigation.navigate('Home')
        })
    }

    render() {
        const { deck } = this.props
        return (
            <View>
                <TextInput value={this.state.question} onChange={this.changeQuestion} placeholder="card question"></TextInput>
                <TextInput value={this.state.answer} onChange={this.changeAnswer} placeholder="card answer"></TextInput>
                <Button title="Add" onPress={this.submitForm} />
            </View>
        )
    }

}

export default connect()(AddCard)