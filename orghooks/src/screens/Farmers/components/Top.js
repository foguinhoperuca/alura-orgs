import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import {loadTop} from '../../../services/loadData';
import logo from '../../../assets/logo.png';
import CustomText from '../../../components/CustomText';

class Top extends React.Component {
  state = {
    top: {
      greetings: '',
      legend: '',
    },
  };

  updateTop() {
    const returnTop = loadTop();
    this.setState({top: returnTop});
  }

  componentDidMount() {
    this.updateTop();
  }

  render() {
    return (
      <View style={styles.top}>
        <Image source={logo} style={styles.image} />
        <Text style={styles.greentings}>{this.state.top.greetings}</Text>
        <Text style={styles.legend}>{this.state.top.legend}</Text>
        <CustomText style={styles.name}>All Rank</CustomText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  image: {
    width: 70,
    height: 28,
  },
  greetings: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  legend: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3',
  },
  name: {
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
});

export default Top;
