import React from 'react';
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';

import CustomText from '../components/CustomText';
import topImage from '../../assets/top.png';
import logo from '../../assets/logo.png'

const width = Dimensions.get('screen').width;

export default function Basket() {
  return <>
	<Image source={topImage} style={styles.topImage} />
	<CustomText style={styles.title}>Basket Details:</CustomText>
	<View style={styles.basket}>
	  <CustomText style={styles.name}>Basket of Vegetables</CustomText>
	  <View style={styles.farm}>
		<Image source={logo} style={styles.farmImage} />
		<CustomText style={styles.farmName}>XXXJenny & Jack - an Oliveira & Campos's farm.</CustomText>
	  </View>
	  <CustomText style={styles.description}>A basket with carefully selected products from the farm straight to your kitchen.</CustomText>
	  <CustomText style={styles.price}>$40.00</CustomText>
	</View>
  </>;
}

const styles = StyleSheet.create({
  topImage: {
	width: "100%",
	height: 578 / 768 * width,
  },
  title: {
	width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
  basket: {
	paddingVertical: 8,
	paddingHorizontal: 16
  },
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
  }
});
