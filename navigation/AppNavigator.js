import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import DeckListScreen from '../screens/DeckListScreen';
import DeckScreen from '../screens/DeckScreen';
import NewQuestionScreen from '../screens/NewQuestionScreen';
import QuestionScreen from '../screens/QuestionScreen';

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  Stack: createStackNavigator({
    DeckList: {screen: DeckListScreen},
    Deck: {screen: DeckScreen},
    NewQuestion: {screen: NewQuestionScreen},
    Question: {screen: QuestionScreen}
  },
  {
    initialRouteName: "DeckList"
  })
});
