import React, {useReducer, useMemo} from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

import Stars from '../../../components/Stars';

const getDistance = distance => {
  console.log('Original distance: ' + distance);
  return `${distance}mt`;
};

export default function Farmer({name, image, distance, stars}) {
  const [selected, invertSelected] = useReducer(select => !select, false);
  const dist = useMemo(() => getDistance(distance), [distance]);

  return (
    <TouchableOpacity style={styles.card} onPress={invertSelected}>
      <Image source={image} style={styles.image} acessibilityLabel={name} />
      <View style={styles.informations}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Stars quantity={stars} editable={selected} big={selected} />
        </View>
        <Text style={styles.distance}>{dist}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    /* android */
    elevation: 8,
    /* iOS */
    shadownColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 12,
    marginVertical: 16,
    marginLeft: 16,
  },
  informations: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  name: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distance: {
    fontSize: 12,
    lineHeight: 19,
  },
});
