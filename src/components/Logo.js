import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';

const Logo = () => {
  return (
    <View style={styles.mainContainer}>
      <Image
        style={{height: 120, width: 120}}
        resizeMode="contain"
        source={require('../../assets/images/jobItWhite.png')}
      />
      <Text style={styles.title}>Job It</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.white,
    fontSize: 32,
    fontFamily: 'Oswald-Bold',
    marginTop: 4,
  },
});
