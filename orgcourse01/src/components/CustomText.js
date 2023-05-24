import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function CustomText({ children, style }) {
  let _style = styles.text;

  if (style?.fontWeight === 'bold') {
	_style = styles.boldText;
  }

  return <Text style={[style, _style]}>{ children }</Text>;
};

const styles = StyleSheet.create({
  text: {
	fontFamily: "MontserratRegular",
	fontWeight: "normal"
  },
  boldText: {
	fontFamily: 'MontserratBold',
	fontWeight: 'bold'
  }
});
