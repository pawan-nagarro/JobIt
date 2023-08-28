import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import {getItem} from '../storage/SecureInfo';
import sInfo from 'react-native-sensitive-info';

const Header = () => {
  const [profileImage, setProfileImage] = useState(null);
  const getProfileImage = async () => {
    const result = await getItem('profileImage');
    setProfileImage(result);
  };

  useEffect(() => {
    getProfileImage();
    console.log('profileImage', profileImage);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <AntIcon name="menu-fold" size={24} />
        {profileImage && (
          <Image
            source={{uri: profileImage}}
            style={{width: 32, height: 32, resizeMode: 'contain'}}
          />
        )}
      </View>
      <Text>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  profileContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
    justifyContent: 'space-between',
  },
});
