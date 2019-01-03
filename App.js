import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import { setLocalNotification } from './utils/notifications'

import { createStore } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import reducer from './reducers';
import middleware from './middleware';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';




const persistConfig = {
  key: 'b3e1b4f4-1f49-4a53-a443-3c8c47d640a9',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
          </PersistGate>
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
