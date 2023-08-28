import sInfo from 'react-native-sensitive-info';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveItem = async (key, value) => {
  await sInfo.setItem(key, value, {});
};

export const getItem = async key => {
  return await sInfo.getItem(key, {});
};

export const asyncSetItem = async (key, value) => {
  await AsyncStorage.setItem(key, value);
};
