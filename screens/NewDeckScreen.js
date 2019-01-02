import React from 'react';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

export default class NewDeckScreen extends React.Component {
  static navigationOptions = {
    title: 'New Deck',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          What is the title of your new deck?
        </Text>
        <TextInput placeholder='Deck Title'/>

        <View style={styles.buttonWrapper}>
          <Button
            title='Submit'
            onPress={this.submit}
          />
        </View>
      </View>
    );
  }

  submit = () => {
    // TODO: Dispatch new card action with data.
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
