import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/asyncApp/SplashScreen';
import LoginScreen from '../screens/asyncApp/Login';
import HomeScreen from '../screens/asyncApp/HomeScreen';
import Contacts from '../screens/asyncApp/Contacts';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const MyAsyncStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Contacts" component={Contacts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyAsyncStack;
