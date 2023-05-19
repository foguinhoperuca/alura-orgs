import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';

import CustomText from '../../../components/CustomText';

export default function Details({ name, logoFarm, nameFarm, description, price, button }) {
  return <>
	<CustomText style={styles.name}>{ name }</CustomText>
	<View style={styles.farm}>
	  <Image source={logoFarm} style={styles.farmImage} />
	  <CustomText style={styles.farmName}>{ nameFarm }</CustomText>
	</View>
	<CustomText style={styles.description}>{ description }</CustomText>
	<CustomText style={styles.price}>{ price }</CustomText>

	<TouchableOpacity style={styles.button} onPress={() => {} }>
	  <CustomText style={styles.textButton}>{ button }</CustomText>
	</TouchableOpacity>
  </>;
};

const styles = StyleSheet.create({
  name: {
	color: "#464646",
	fontSize: 26,
	lineHeight: 42,
	fontWeight: "bold"
	/* , fontFamily: "MontserratBold" */
  },
  farm: {
	flexDirection: "row",
	paddingVertical: 12
  },
  farmImage: {
	width: 32,
	height: 32
  },
  farmName: {
	fontSize: 16,
	lineHeight: 26,
	marginLeft: 12
	/* , fontFamily: "MontserratRegular" */
  },
  description: {
	color: "#A3A3A3",
	fontSize: 16,
	lineHeight: 26
  },
  price: {
	color: "#2A9F85",
	fontWeight: "bold",
	fontSize: 26,
	lineHeight: 42,
	marginTop: 8
  },
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
