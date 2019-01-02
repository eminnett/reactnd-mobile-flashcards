import React from 'react';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

export default class QuestionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAnswer: false,
    };
  }

  static navigationOptions = {
    title: 'Quiz',
  };

  render() {
    const displayAnswer = this.state.displayAnswer;
    let body;

    if (displayAnswer) {
      body = <View style={styles.body}>
        <Text style={styles.title}>
          Yes!
        </Text>
        <View style={styles.buttonWrapper}>
          <Button
            title='Question'
            onPress={this.showQuestion}
          />
        </View>
      </View>;
    } else {
      body = <View style={styles.body}>
        <Text style={styles.title}>
          Does React Native work with Android?
        </Text>
        <View style={styles.buttonWrapper}>
          <Button
            title='Answer'
            onPress={this.showAnswer}
          />
        </View>
      </View>;
    }

    return (
      <View style={styles.container}>
        <View>
          <Text>
            2 / 2
          </Text>
        </View>
        {body}
        <View>
          <View style={styles.buttonWrapper}>
            <Button
              title='Correct'
              color='green'
              onPress={this.answerCorrectly}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              title='Incorrect'
              color='red'
              onPress={this.answerIncorrectly}
            />
          </View>
        </View>
      </View>
    );
  }

  showAnswer = () => {
    this.setState({displayAnswer: true})
  };

  showQuestion = () => {
    this.setState({displayAnswer: false})
  };

  answerCorrectly = () => {

  };

  answerIncorrectly = () => {

  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  body: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
  buttonWrapper: {
    marginTop: 20,
    width: 100
  },
});
