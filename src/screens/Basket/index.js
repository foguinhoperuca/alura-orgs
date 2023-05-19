import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import CustomText from '../../components/CustomText';
import Top from './components/Top';
import Details from './components/Details';
import Item from './components/Item'

export default function Basket({ top, details, itens }) {
  return <>
	<FlatList
	  data={itens.list}
	  renderItem={Item}
	  keyExtractor={({ name }) => name }
	  ListHeaderComponent={() => {
		return <>
		  <Top {...top} />
		  <View style={styles.basket}>
			<Details {...details} />
			<CustomText style={styles.title}>{ itens.title }</CustomText>
		  </View>
		</>
	  }}
	/>
  </>;
};

const styles = StyleSheet.create({
  basket: {
	paddingVertical: 8,
	paddingHorizontal: 16
  }
});
