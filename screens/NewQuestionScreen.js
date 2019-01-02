import React from 'react';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default class NewQuestionScreen extends React.Component {
  static navigationOptions = {
    title: 'Add Card',
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder='Question'/>
        <TextInput placeholder='Answer'/>
        <View style={styles.buttonWrapper}>
          <Button
            title='Submit & Back'
            onPress={this.submitAndBack}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title='Submit & Create Another'
            onPress={this.submitAndCreateAnother}
          />
        </View>
      </View>
    );
  }

  submitAndBack = () => {
    this.submit();
    this.props.navigation.goBack();
  };

  submitAndCreateAnother = () => {
    this.submit();
    // TODO: Clear form.
  };

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
