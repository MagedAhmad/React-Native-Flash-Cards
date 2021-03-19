import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
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

        this.props.dispatch(addDeckAction(this.state.title))
        
        addDeck(this.state.title).then(() => {
            console.log("done")
        }).catch((e) => {
            console.log(e)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Add a deck</Text>
                <TextInput style={styles.input} value={this.state.title} onChange={this.changeTitle} placeholder="deck title"></TextInput>
                <Button title="Add" onPress={this.submitForm} />
            </View>
        )
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
        paddingHorizontal:100,
        paddingVertical:30,
        backgroundColor: '#fff',
        
    }
});

export default connect()(AddDeck)