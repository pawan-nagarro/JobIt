import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import AppNavigation from './src/navigation';
import store from './src/redux/store.js';
import {Provider} from 'react-redux';
import Colors from './src/utils/Colors';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
      <AppNavigation />
    </Provider>
  );
};

export default App;
