import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../utils/Colors';
import Logo from '../components/Logo';
import UserInput from '../components/UserInput';
import ActionButton from '../components/ActionButton';
import RedirectButton from '../components/RedirectButton';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

const Login = () => {
  const navigation = useNavigation();
  const height = Dimensions.get('window').height;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
              auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                  console.log('User signed in!');
                })
                .catch(error => {
                  if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                  }

                  if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                  }

                  console.error(error);
                });
            }}
          />
          <RedirectButton
            text={'New user ? Register'}
            action={() => navigation.replace('Register')}
          />
        </KeyboardAvoidingView>
      </View>
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
