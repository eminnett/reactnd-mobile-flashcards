import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import DeckListScreen from '../screens/DeckListScreen';
import NewDeckScreen from '../screens/NewDeckScreen';

const DeckListStack = createStackNavigator({
  Decks: DeckListScreen,
});

DeckListStack.navigationOptions = {
  tabBarLabel: 'Decks',
};

const NewDeckStack = createStackNavigator({
  NewDeck: NewDeckScreen,
});

NewDeckStack.navigationOptions = {
  tabBarLabel: 'New Deck',
};

export default createBottomTabNavigator({
  DeckListStack,
  NewDeckStack
});
