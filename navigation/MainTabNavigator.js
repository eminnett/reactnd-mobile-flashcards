import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
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

const NewDeckStack = createStackNavigator({
  NewDeck: NewDeckScreen,
});

DeckListStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: 'Decks',
  };
};

NewDeckStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: 'New Deck',
  };
};

const tabBarOptions = {
  style: {
    paddingTop: 25,
  },
}

export default createMaterialTopTabNavigator({
  DeckListStack,
  NewDeckStack
}, { tabBarOptions });
