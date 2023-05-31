import React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';

import Farmer from './Farmer';
import useFarmers from '../../../hooks/useFarmers';

export default function Farmers({top: Top}) {
  const [title, list] = useFarmers();

  /* TODO move it to a specific component */
  const TopList = () => {
    return (
      <>
        <Top />
        <Text style={styles.title}>{title}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={list}
      renderItem={({item}) => <Farmer {...item} />}
      keyExtractor={({name}) => name}
      ListHeaderComponent={TopList}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
