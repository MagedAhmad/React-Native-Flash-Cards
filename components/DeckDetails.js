import React from "react";
import {Text, View} from "react-native";

class DeckDetails extends React.Component {
    render() {
        const { deck }  = this.props
        return (
            <View>
                <Text>{deck.title}</Text>
                <Text>{deck.questions != null && deck.questions != undefined && deck.questions.length > 0 ? deck.questions.length : 0}</Text>
            </View>
        )
    }
}

export default DeckDetails;