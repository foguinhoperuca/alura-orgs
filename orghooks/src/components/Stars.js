import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import Star from './Star';

export default function Stars({quantity: old, editable = false, big = false}) {
  const [quantity, setQuantity] = useState(old);

  const RenderStars = () => {
    const listStars = [];
    for (let i = 0; i < 5; i++) {
      listStars.push(
        <Star
          key={i}
          onPress={() => setQuantity(i + 1)}
          disabled={!editable}
          filled={i < quantity}
          big={big}
        />,
      );
    }

    return listStars;
  };

  return (
    <View style={styles.stars}>
      <RenderStars />
    </View>
  );
}

const styles = StyleSheet.create({
  stars: {
    flexDirection: 'row',
  },
});
