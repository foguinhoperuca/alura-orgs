import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

import star from '../assets/star.png';
import greyStar from '../assets/grey-star.png';

export default function Star({onPress, disabled = true, filled, big = false}) {
  const styles = stylesFn(big);

  const getImage = () => {
    let choosedStar = greyStar;

    if (filled) {
      choosedStar = star;
    }

    return choosedStar;
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Image source={getImage()} style={styles.star} />
    </TouchableOpacity>
  );
}

const stylesFn = big =>
  StyleSheet.create({
    star: {
      width: big ? 36 : 12,
      height: big ? 36 : 12,
      marginRight: 2,
    },
  });
