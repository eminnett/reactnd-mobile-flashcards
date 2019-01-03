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
            title='Question'
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
            {`Question ${this.props.card.position + 1} / ${this.props.numCardsInDeck}`}
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
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  body: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
  previouslyAnswered: {

  },
  previousAnswerMessage: {

  },
  buttonWrapper: {
    marginTop: 20,
    width: 100
  },
});
