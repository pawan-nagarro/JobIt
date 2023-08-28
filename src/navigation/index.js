import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import Login from '../screens/Login';
import Register from '../screens/Register';
import sInfor from 'react-native-sensitive-info';
import {getItem} from '../storage/SecureInfo';

const stack = createNativeStackNavigator();
const UserStack = () => {
  return (
    <stack.Navigator screenOptions={{headerShown: false}}>
      <stack.Screen name="Home" component={HomeScreen} />
      <stack.Screen name="Details" component={DetailsScreen} />
    </stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <stack.Navigator screenOptions={{headerShown: false}}>
      <stack.Screen name="Login" component={Login} />
      <stack.Screen name="Register" component={Register} />
    </stack.Navigator>
  );
};

const AppNavigation = () => {
  const isLoggedIn = getItem('AccessToken');
  console.log('isLoggedIn', JSON.stringify(isLoggedIn));
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="auth" component={AuthStack} />
        <stack.Screen name="user" component={UserStack} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
