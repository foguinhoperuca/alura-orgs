import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

/* import Home from './src/screens/Home'; */
import AppRoute from './src/routes/AppRoute';

function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar />
      {/* <Home /> */}
      <AppRoute />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
