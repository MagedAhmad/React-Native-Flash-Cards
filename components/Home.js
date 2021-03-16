import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native';

class Home extends Component {
    render() {
        return (
            <Text>Maged</Text>
        )
    }

}

export default connect()(Home)