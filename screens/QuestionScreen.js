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

class QuestionScreen extends React.Component {
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
    let body, previouslyAnswered;

    if (this.props.card.answered) {
      let previousAnswerMessage = 'You previously answered this question ';
      if (this.props.card.correct) {
        previousAnswerMessage += 'correctly. Can you repeat your success?';
      } else {
        previousAnswerMessage += 'incorrectly. Keep working at it.';
      }
      previouslyAnswered = <View style={styles.previouslyAnswered}>
        <Text style={styles.previousAnswerMessage}>
          {previousAnswerMessage}
        </Text>
      </View>;
    }

    if (displayAnswer) {
      body = <View style={styles.body}>
        <Text style={styles.title}>
          {this.props.card.answer}
        </Text>
        {previouslyAnswered}
        <View style={styles.buttonWrapper}>
          <Button
            title='View Question'
            onPress={this.showQuestion}
          />
        </View>
      </View>;
    } else {
      body = <View style={styles.body}>
        <Text style={styles.title}>
          {this.props.card.question}
        </Text>
        {previouslyAnswered}
        <View style={styles.buttonWrapper}>
          <Button
            title='View Answer'
            onPress={this.showAnswer}
          />
        </View>
      </View>;
    }

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.counter}>
            {`Question ${this.props.card.position + 1} / ${this.props.numCardsInDeck}`}
          </Text>
        </View>
        {body}
        <View style={styles.answerOptions}>
          <View style={styles.buttonWrapper}>
            <Button
              containerViewStyle={styles.button}
              title='Correct'
              color='green'
              onPress={this.answerCorrectly}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              containerViewStyle={styles.button}
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
    this.props.dispatch(answerCard(this.props.card.id, true));
    this.navigateAway();
  };

  answerIncorrectly = () => {
    this.props.dispatch(answerCard(this.props.card.id, false));
    this.navigateAway();
  };

  navigateAway = () => {
    const {navigate} = this.props.navigation;
    if (this.props.lastCard) {
      navigate('Results', {deckId: this.props.deck.id});
    } else {
      this.showQuestion();
      navigate('Question', {cardId: this.props.nextCardId});
    }
  }
}

function mapStateToProps(state, ownProps) {
  const cardId = ownProps.navigation.getParam('cardId');
  const card = state.cards.filter(c => c.id === cardId)[0];
  const deck = state.decks.filter(d => d.id === card.deckId)[0];
  const numCardsInDeck = state.cards.filter(c => c.deckId === card.deckId).length;
  const lastCard = card.position + 1 === numCardsInDeck;
  let nextCardId = null;

  if (!lastCard) {
    nextCardId = state.cards.filter(c => c.deckId === deck.id && c.position === card.position + 1)[0].id;
  }

  return { deck, card, numCardsInDeck, lastCard, nextCardId, navigation: ownProps.navigation};
}

export default connect(mapStateToProps)(QuestionScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  counter: {
    padding: 10,
  },
  body: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    margin: 30,
  },
  previouslyAnswered: {
    width: 250,
  },
  previousAnswerMessage: {
    fontSize: 18,
  },
  answerOptions: {
    marginTop: 30
  },
  buttonWrapper: {
    marginTop: 30,
    width: 150,
  },
  button: {
    alignSelf: 'stretch',
  },
});
