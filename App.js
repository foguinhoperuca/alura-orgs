/* import { StatusBar } from 'expo-status-bar'; */
import React from 'react';
import { StatusBar, StyleSheet, SafeAreaView, View } from 'react-native';
import {useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';

import Basket from './src/screens/Basket';

export default function App() {
  const [fontLoaded] = useFonts({
	"MontserratRegular": Montserrat_400Regular,
	"MontserratBold": Montserrat_700Bold
  });

  if (!fontLoaded) {
	return  <View />
  }

  return (
	<SafeAreaView>
	  <StatusBar />
	  <Basket />
	</SafeAreaView>
  );
}
