import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwsome from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import {getItem} from '../storage/SecureInfo';
import sInfo from 'react-native-sensitive-info';
import Colors from '../utils/Colors';

const Header = ({searchPress}) => {
  const [profileImage, setProfileImage] = useState(null);
  const [profileName, setProfileName] = useState('Guest');
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const getProfileImage = async () => {
    const result = await getItem('profileImage');
    setProfileImage(result);
    const name = await getItem('profileName');
    console.log('profile Name', profileName);
    setProfileName(name ? name : 'Guest');
  };

  useEffect(() => {
    getProfileImage();
    console.log('profileImage', profileImage);
  }, []);

  const handleSearch = value => {
    searchPress(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
          <AntIcon name={menuOpen ? 'menu-unfold' : 'menu-fold'} size={24} />
        </TouchableOpacity>
        {profileImage && (
          <Image
            source={{uri: profileImage}}
            style={{width: 32, height: 32, resizeMode: 'contain'}}
          />
        )}
      </View>
      <View style={styles.profileNameContainer}>
        <Text style={styles.profileName} numberOfLines={1} ellipsizeMode="tail">
          {profileName}
        </Text>
        <Text style={styles.subtitle}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchTextInput}
          placeholder="What are you looking for?"
          value={searchValue}
          onChangeText={value => setSearchValue(value)}
        />
        <TouchableOpacity
          onPress={() => {
            handleSearch(searchValue);
          }}
          style={{
            paddingHorizontal: 12,
            backgroundColor: Colors.blue,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopEndRadius: 8,
            borderBottomEndRadius: 8,
          }}>
          <FontAwsome name="search" size={24} color={Colors.white} />
        </TouchableOpacity>
      </View>
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
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 24,
  },
  searchTextInput: {
    flex: 1,
    marginRight: 0,
    backgroundColor: '#F5F1F1',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderTopLeftRadius: 8,
    borderEndStartRadius: 8,
    fontSize: 16,
    fontWeight: '600',
  },
  profileName: {
    fontFamily: 'Inter-Black',
    fontSize: 24,
    marginVertical: 6,
    color: Colors.blue,
  },
  subtitle: {fontFamily: 'Inter-Bold', fontSize: 16},
});
