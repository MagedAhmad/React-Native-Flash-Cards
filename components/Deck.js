import React from "react";
import {Text, View} from "react-native";

class Deck extends React.Component {
    render() {
        const { route }  = this.props
        const { deck } = route.params;
        return (
            <View>
                <Text>{deck.title}</Text>
                <Text>ops</Text>

            </View>
        )
    }
}
export default Deck;