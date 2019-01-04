import React from 'react';
import { connect } from 'react-redux';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DeckPreview from '../components/DeckPreview';

class DeckListScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          { this.props.decks.length === 0 &&
            <Text style={styles.title}>
              You don't have any decks yet. Please create one.
            </Text>
          }
          { this.props.decks.map(deck =>
            <DeckPreview key={deck.id} deck={deck} navigation={this.props.navigation} />
          )}
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const decks = state.decks.map((deck) => (
    { id: deck.id, name: deck.name, cardCount: state.cards.filter(c => c.deckId === deck.id).length }
  ));
  console.log(state);
  return { decks };
}

export default connect(mapStateToProps)(DeckListScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    padding: 30,
    textAlign: 'center'
  },
});
