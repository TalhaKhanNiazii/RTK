/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import PS1 from './src/screens/asyncStorage/PS1';
import MyAsyncStack from './src/navigation/AsyncStack';
import FavouriteAsyncStack from './src/navigation/FavouriteAsyncStack';
// in above FavouriteAsyncStack there are some bugs need to be fixed.
import MapScreen from './src/screens/googleMaps/MapScreen';
import WeatherScreen from './src/screens/weatherApp/WeatherScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => WeatherScreen);
