/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import Home from './src/screens/Home';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text>Welcome to Alura</Text>
      <Home />
    </SafeAreaView>
  );
}

export default App;
