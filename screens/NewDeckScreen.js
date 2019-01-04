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
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title} >
          What is the title of this new deck?
        </Text>
        <TextInput
          style={styles.input}
          placeholder='Deck Title'
          onChangeText={(value) => this.setState({name: value})}
          value={this.state.name}
        />

        <View style={styles.buttonWrapper}>
          <Button
            containerViewStyle={styles.button}
            title='Create Deck'
            onPress={this.submit}
          />
        </View>
      </View>
    );
  }

  submit = () => {
    this.props.dispatch(addDeckAndNavigate(this.state.name, this.props.navigation));
    this.setState({name: ''});
  }
}

export default connect()(NewDeckScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    padding: 30
  },
  input: {
    height: 40,
    width: 300,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10
  },
  buttonWrapper: {
    marginTop: 30,
    width: 150,
  },
  button: {
    alignSelf: 'stretch',
  },
});
