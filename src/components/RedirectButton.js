import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';

const RedirectButton = ({text, action}) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={action}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default RedirectButton;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  text: {
    color: Colors.white,
    fontWeight: 'bold',
  },
});
