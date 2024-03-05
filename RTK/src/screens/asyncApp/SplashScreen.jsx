import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

const SplashScreen = ({navigation}) => {
  const checkUserAuth = async () => {
    try {
      const value = await AsyncStorage.getItem('@userInfo');
      if (value !== null) {
        navigation.navigate('HomeScreen');
      } else {
        navigation.navigate('LoginScreen');
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // Simulate a delay for demonstration purposes (you can replace this with actual loading logic)
    const timer = setTimeout(() => {
      checkUserAuth();
    }, 2000); // 2000 milliseconds (2 seconds) delay
    return () => clearTimeout(timer); // Clean up the timer when component unmounts
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://hotpot.ai/designs/thumbnails/splash-screen/18.jpg',
        }}
        style={styles.imageBackground}>
        <Text style={styles.splashText}>Splash Screen</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover', // Cover the entire screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {fontSize: 30, fontStyle: 'italic'},
});

export default SplashScreen;
