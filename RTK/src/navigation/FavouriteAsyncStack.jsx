import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/favouriteData/HomeScreen';
import Favourites from '../screens/favouriteData/Favourites';
import {NavigationContainer} from '@react-navigation/native';
import products from '../constants/Products';
import {useEffect} from 'react';

const Stack = createStackNavigator();

const MyAsyncStack = () => {
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    const myProducts = await AsyncStorage.getItem('my-products');
    myProducts == null
      ? await AsyncStorage.setItem('my-products', JSON.stringify(products))
      : null;
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Favourites" component={Favourites} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyAsyncStack;
