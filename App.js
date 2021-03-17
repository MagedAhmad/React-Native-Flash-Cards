import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import AddDeck from './components/AddDeck'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/decks'
import Ionicons from '@expo/vector-icons/Ionicons';

function Decks() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Home />
    </View>
  );
}

function Deck() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <AddDeck />
    </View>
  );
}
const Tab = createBottomTabNavigator();

function App() {
  return (
    
    <Provider store={createStore(reducer)}>
      <View style={{flex: 1}}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Decks') {
              iconName = 'ios-list';
            } else if (route.name === 'Add Deck') {
              iconName = 'ios-add';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
            <Tab.Screen name="Decks" component={Decks} />
            <Tab.Screen name="Add Deck" component={Deck} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

export default App;