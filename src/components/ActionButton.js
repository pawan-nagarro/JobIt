import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';

const ActionButton = ({actionText, onPress}) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={() => onPress()}>
      <Text style={styles.text}>{actionText}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.actionBlue,
    height: 48,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  text: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Helvetica-Bold',
  },
});
