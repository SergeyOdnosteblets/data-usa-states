import React from 'react';
import {SafeAreaView} from 'react-native';
import {Navigator} from './src/navigation/Navigator';
import {Provider} from 'react-redux';
import store from './src/store';

export const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <Navigator />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
