import React from 'react';
import {
  Animated,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class DeckPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(1), // init opacity 0
    };
  }

  render() {
    return (
      <TouchableOpacity style={styles.deck} onPress={this.navigateToDeck}>
        <Animated.View
          style={{opacity: this.state.fadeAnim}}
        >
          <Text style={styles.title}>
            {this.props.deck.name}
          </Text>
          <Text style={styles.subTitle}>
            {`${this.props.deck.cardCount} cards`}
          </Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }

  navigateToDeck = () => {
    const {navigate} = this.props.navigation;
    Animated.timing(
      this.state.fadeAnim,
      {toValue: 0},
    ).start(() => {
      this.state.fadeAnim.setValue(1);
      navigate('Deck', {deckId: this.props.deck.id, deckName: this.props.deck.name});
    });
  };
}

const styles = StyleSheet.create({
  deck: {
    padding: 20,
    alignItems: 'center',
    borderBottomColor: 'blue',
    borderBottomWidth: 3
  },
  title: {
    fontSize: 28,
  },
  subTitle: {
    fontSize: 18,
  },
});
