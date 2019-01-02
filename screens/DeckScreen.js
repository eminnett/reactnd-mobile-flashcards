import React from 'react';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

export default class DeckScreen extends React.Component {
  static navigationOptions = {
    title: 'udacicards Deck',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          udacicards
        </Text>
        <Text>
          3 cards
        </Text>
        <View style={styles.buttonWrapper}>
          <Button
            title='Add Card'
            onPress={this.addCard}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title='Start Quiz'
            onPress={this.startQuiz}
          />
        </View>
      </View>
    );
  }

  addCard = () => {
    this.props.navigation.navigate('NewQuestion')
  };

  startQuiz = () => {
    this.props.navigation.navigate('Question')
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
  },
  buttonWrapper: {
    marginTop: 20,
    width: 100
  },
});
