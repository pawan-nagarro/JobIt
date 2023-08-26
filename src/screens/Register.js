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
const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

const Register = () => {
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
          <ActionButton actionText={'Login'} />
          <RedirectButton
            text={'Existing user ? Login'}
            action={() => navigation.replace('Login')}
          />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.blue,
    paddingHorizontal: 32,
  },
});
