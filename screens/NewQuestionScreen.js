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
import { addCard } from '../actions/cards';

class NewQuestionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: '',
      position: props.position,
    };
  }

  static navigationOptions = {
    title: 'Add Card',
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Question'
          onChangeText={(value) => this.setState({question: value})}
          value={this.state.question}
        />
        <TextInput
          placeholder='Answer'
          onChangeText={(value) => this.setState({answer: value})}
          value={this.state.answer}
        />
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
    this.setState({question: '', answer: '', position: this.state.position + 1});
  };

  submit = () => {
    this.props.dispatch(
      addCard(
        this.props.deckId,
        this.state.question,
        this.state.answer,
        this.state.position
      )
    );
  };
}

function mapStateToProps(state, ownProps) {
  const deckId = ownProps.navigation.getParam('deckId');
  const position = state.cards.filter(c => c.deckId === deckId).length;

  return { deckId, position, navigation: ownProps.navigation};
}

export default connect(mapStateToProps)(NewQuestionScreen);

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
