import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";

class Deck extends React.Component {
    componentDidMount() {
        const {deck} = this.props.route.params

        this.props.navigation.setOptions({ title: deck.title })
    }
    
    render() {
        const { route, navigation }  = this.props
        const { deck } = route.params;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{deck.title}</Text>
                <Text>{deck.questions != null && deck.questions != undefined && deck.questions.length > 0 ? deck.questions.length : 0} cards</Text>
                <TouchableOpacity style={ styles.button } onPress={() => navigation.navigate('AddCard', {deck : deck})}>
                    <Text style={styles.text}>Add card</Text>
                </TouchableOpacity>
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
        padding:10,
        backgroundColor: '#fff'
    },
    deck: {
        backgroundColor: 'purple',
        padding:30,
        margin:5
    },
    button: {
        backgroundColor: '#dddd',
        padding:10,
        margin:10   
    }
});
export default Deck;