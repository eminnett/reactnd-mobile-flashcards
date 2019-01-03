import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import DeckListScreen from '../screens/DeckListScreen';
import DeckScreen from '../screens/DeckScreen';
import NewQuestionScreen from '../screens/NewQuestionScreen';
import QuestionScreen from '../screens/QuestionScreen';
import ResultsScreen from '../screens/ResultsScreen';
import NewDeckScreen from '../screens/NewDeckScreen';

const DeckListStack = createStackNavigator({
  Decks: DeckListScreen,
  Deck: DeckScreen,
  NewQuestion: NewQuestionScreen,
  Question: QuestionScreen,
  Results: ResultsScreen
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
