import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '../utils/Colors';
import Logo from '../components/Logo';
import UserInput from '../components/UserInput';
import ActionButton from '../components/ActionButton';
import RedirectButton from '../components/RedirectButton';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {authenticateUser} from '../redux/auth/AuthSlice';
import {saveItem} from '../storage/SecureInfo';
const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

const Login = () => {
  const navigation = useNavigation();
  const height = Dimensions.get('window').height;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const {data, isError, isLoading} = useSelector(state => state.authReducer);
  console.log('authState ', {data, isError, isLoading});

  useEffect(() => {
    if (data?.token) {
      saveItem('AccessToken', data?.token);
      saveItem('profileImage', data?.image);
      saveItem('profileName', data?.firstName + ' ' + data?.lastName);
      navigation.navigate('user');
    }
  }, [data]);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          marginTop: height / 5,
        }}>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={keyboardVerticalOffset}
          style={{flex: 1, width: '100%'}}>
          <Logo />

          <UserInput placeHolder={'e-mail'} value={email} setValue={setEmail} />
          <UserInput
            placeHolder={'password'}
            value={password}
            setValue={setPassword}
            isPassword={true}
          />
          <ActionButton
            actionText={'Login'}
            onPress={() => {
              dispatch(authenticateUser());
              // auth()
              //   .signInWithEmailAndPassword(email, password)
              //   .then(() => {
              //     console.log('User signed in!');
              //   })
              //   .catch(error => {
              //     if (error.code === 'auth/email-already-in-use') {
              //       console.log('That email address is already in use!');
              //     }
              //     if (error.code === 'auth/invalid-email') {
              //       console.log('That email address is invalid!');
              //     }
              //     console.error(error);
              //   });
            }}
          />
          <RedirectButton
            text={'New user ? Register'}
            action={() => navigation.replace('Register')}
          />
        </KeyboardAvoidingView>
      </View>
      {isLoading && (
        <ActivityIndicator
          size={'large'}
          color={Colors.white}
          style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}
        />
      )}
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.blue,
    paddingHorizontal: 32,
  },
});
