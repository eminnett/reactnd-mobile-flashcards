import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { answerCard } from '../actions/cards';
import { clearLocalNotification, setLocalNotification } from '../utils/notifications'

class QuestionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAnswer: false,
    };
  }

  static navigationOptions = {
    title: 'Quiz Results',
  };

  componentDidMount() {
    // The user has completed a quiz so clear the notification for today and queue
    // the next one for tomorrow.
    clearLocalNotification().then(setLocalNotification);
  }

  render() {
    let {correct, total} = this.props;
    let resultsMessage = `You answered ${correct} out of ${total} questions correctly.\n`;

    if (correct === total) {
      resultsMessage += 'Nicely Done!'
    } else if (correct === total - 1) {
      resultsMessage += "So close! You'll get it next time."
    } else if (correct / total >= 0.6) {
      resultsMessage += "Nearly there. You'll get those last few questions next time around."
    } else {
      resultsMessage += "A bit more studying and you'll get there.";
    }

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>
            {resultsMessage}
          </Text>
        </View>
        <View>
          <View style={styles.buttonWrapper}>
            <Button
              containerViewStyle={styles.button}
              title='Restart the Quiz'
              onPress={this.navigateToQuiz}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              containerViewStyle={styles.button}
              title='Back to Deck'
              onPress={this.navigateToDeck}
            />
          </View>
        </View>
      </View>
    );
  }

  navigateToQuiz = () => {
    this.props.navigation.navigate('Question', {cardId: this.props.firstCardId})
  };

  navigateToDeck = () => {
    this.props.navigation.navigate('Deck', {deckId: this.props.deck.id, deckName: this.props.deck.name});
  };
}

function mapStateToProps(state, ownProps) {
  const deckId = ownProps.navigation.getParam('deckId');
  const deck = state.decks.filter(d => d.id === deckId)[0];
  const cards = state.cards.filter(c => c.deckId === deckId);
  const total = cards.length;
  const correct = cards.filter(c => c.correct).length;
  const firstCardId = cards.filter(c => c.position === 0)[0].id;

  return { deck, correct, total, firstCardId, navigation: ownProps.navigation};
}

export default connect(mapStateToProps)(QuestionScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  body: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    padding: 30,
    textAlign: 'center'
  },
  buttonWrapper: {
    marginTop: 30,
    width: 150,
  },
  button: {
    alignSelf: 'stretch',
  },
});
