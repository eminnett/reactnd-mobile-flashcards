import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { addDeckAndNavigate } from '../actions/decks';

class NewDeckScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  static navigationOptions = {
    title: 'New Deck',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          What is the title of your new deck?
        </Text>
        <TextInput
          placeholder='Deck Title'
          onChangeText={(value) => this.setState({name: value})}
          value={this.state.name}
        />

        <View style={styles.buttonWrapper}>
          <Button
            title='Create Deck'
            onPress={this.submit}
          />
        </View>
      </View>
    );
  }

  submit = () => {
    this.props.dispatch(addDeckAndNavigate(this.state.name, this.props.navigation));
  }
}

export default connect()(NewDeckScreen);

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
