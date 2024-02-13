import {createStackNavigator} from '@react-navigation/stack';
import Products from '../screens/reducerFiles/Products';
import Cart from '../screens/reducerFiles/Cart';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
