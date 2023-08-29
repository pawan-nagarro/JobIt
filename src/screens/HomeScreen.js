import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Colors from '../utils/Colors';
import Dimensions from '../utils/Dimensions';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleSearch = searchText => {
    console.log('Home screen search text', searchText);
    navigation.navigate('Details');
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('home screen has focus');
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Header searchPress={handleSearch} />
      <View style={styles.categories}></View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: Dimensions.defaultPadding,
  },
  categories: {
    flex: 1,
    backgroundColor: Colors.transparentGrey,
  },
});
