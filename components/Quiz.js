import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import {clearLocalNotification, setLocalNotification} from "../utils/helpers";

class Quiz extends React.Component {
    state = {
        pageCount: 0,
        previewAnswer: false,
        correct: 0,
        max: 0,
        finished: false,
    }
    componentDidMount() {
        const {deck} = this.props.route.params
        console.log(deck)
        this.setState({max: deck.questions.length})

        this.props.navigation.setOptions({ title: 'Quiz' })
    }
    showAnswer = () => {
        this.setState({previewAnswer: true})
    }
    hideAnswer = () => {
        this.setState({previewAnswer: false})
    }
    addAnswer = (answer) => {
        if(answer == 'correct') {
            this.setState((state) => {
                return {correct: state.correct + 1}
            })
        }

        if(this.state.pageCount === this.state.max - 1) {
            this.setState({finished: true})
            clearLocalNotification()
                .then(setLocalNotification)

        }else {
            this.setState((state) => {
                return {pageCount: state.pageCount + 1}
            })
        }
    }
    render() {
        const { route, navigation }  = this.props
        const { deck } = route.params;
        const questions = deck.questions
        const question = questions[this.state.pageCount]
        if(questions.length === 0) {
            return <View style={styles.container}>
                <Text style={styles.text}>No questions available</Text>
            </View>
        }
        if(this.state.finished === true) {
            return <View style={styles.container}>
                <Text  style={styles.text}>Your score : </Text>
                <Text  style={styles.text}>{this.state.correct}/{this.state.max} </Text>
                <TouchableOpacity style={ styles.button } onPress={() => {navigation.navigate('Deck', {deck : deck});navigation.navigate('Quiz', {deck : deck})}}>
                    <Text style={styles.text}>Restart quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.button } onPress={() => navigation.navigate('Deck', {deck : deck})}>
                    <Text style={styles.text}>Go to deck</Text>
                </TouchableOpacity>
            </View>
        }

        if(this.state.previewAnswer) {
            return <View style={styles.container}>
                <Text  style={styles.text}>{question.answer}</Text>
                <TouchableOpacity onPress={() => this.hideAnswer()}>
                    <Text style={styles.text}>Question</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.successButton } onPress={() => this.addAnswer('correct')}>
                    <Text style={styles.text}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.dangerButton } onPress={() => this.addAnswer('incorrect')}>
                    <Text style={styles.text}>Incorrect</Text>
                </TouchableOpacity>
            </View>
        }else {
            return (
                <View style={styles.container}>
                    <Text style={styles.text}>{question.question}</Text>
                    <TouchableOpacity onPress={() => this.showAnswer()}>
                        <Text style={styles.text}>Answer</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ styles.successButton } onPress={() => this.addAnswer('correct')}>
                        <Text style={styles.text}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.dangerButton } onPress={() => this.addAnswer('incorrect')}>
                        <Text style={styles.text}>Incorrect</Text>
                    </TouchableOpacity>
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
    },
    button: {
        backgroundColor: '#dddd',
        padding:10,
        margin:10   
    },
    successButton: {
        backgroundColor: 'green',
        color: 'white',
        padding:10,
        margin:10   
    },
    dangerButton: {
        backgroundColor: 'red',
        color: 'white',
        padding:10,
        margin:10   
    },
});
export default Quiz;