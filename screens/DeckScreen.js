import React from 'react';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

class DeckScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.getParam('deckName')} Deck`,
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.props.deck.name}
        </Text>
        <Text>
          {`${this.props.deck.cardCount} cards`}
        </Text>
        <View style={styles.buttonWrapper}>
          <Button
            title='Add Card'
            onPress={this.addCard}
          />
        </View>
        { this.props.deck.cardCount > 0 &&
          <View style={styles.buttonWrapper}>
            <Button
              title='Start Quiz'
              onPress={this.startQuiz}
            />
          </View>
        }
      </View>
    );
  }

  addCard = () => {
    this.props.navigation.navigate('NewQuestion', {deckId: this.props.deck.id})
  };

  startQuiz = () => {
    this.props.navigation.navigate('Question', {cardId: this.props.firstCardId})
  };
}

function mapStateToProps(state, ownProps) {
  const deckId = ownProps.navigation.getParam('deckId');
  const deck = state.decks.filter(d => d.id === deckId)[0];
  const cardsInDeck = state.cards.filter(c => c.deckId === deck.id);
  const cardCount = cardsInDeck.length;
  let firstCardId = null;
  if (cardCount > 0) {
    firstCardId = cardsInDeck.filter(c => c.position === 0)[0].id;
  }

  return {
    navigation: ownProps.navigation,
    deck: {
      id: deck.id,
      name: deck.name,
      cardCount
    },
    firstCardId
  };
}

export default connect(mapStateToProps)(DeckScreen);

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
