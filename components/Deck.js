import React from "react";
import {TouchableOpacity, Text} from "react-native";

class Deck extends React.Component {
    render() {
        const { deck } = this.props
        // const cards = deck.questions.length > 0 ? deck.questions.length : 0
        return (
                <Text>{deck.title}</Text>
        )
    }
}
export default Deck;