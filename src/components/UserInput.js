import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Colors from '../utils/Colors';

const UserInput = ({placeHolder, value, setValue, isPassword}) => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder={placeHolder}
        placeholderTextColor={'#e5e5e5'}
        secureTextEntry={isPassword}
      />
    </View>
  );
};

export default UserInput;

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 8,
    borderRadius: 4,
    borderColor: Colors.white,
    borderRadius: 8,
    padding: 4,
    width: '100%',
    borderWidth: 1,
  },
  input: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
});
