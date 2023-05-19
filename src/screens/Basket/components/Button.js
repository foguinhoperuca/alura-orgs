import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import CustomText from '../../../components/CustomText';

export default function Button({ label }) {
  return <>
	<TouchableOpacity style={styles.button} onPress={() => {} }>
	  <CustomText style={styles.textButton}>{ label }</CustomText>
	</TouchableOpacity>
  </>;
};

const styles = StyleSheet.create({
  button: {
	marginTop: 16,
	backgroundColor: "#2A9F85",
	paddingVertical: 16,
	borderRadius: 6
  },
  textButton: {
	textAlign: "center",
	color: "#ffffff",
	fontSize: 32,
	lineHeight: 32,
	fontWeight: "bold"
  }
});
