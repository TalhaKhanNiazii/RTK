import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import styles from './styles';
import {View, Text, TouchableOpacity} from 'react-native';

const PS3 = () => {
  // Example of Async-Storage for merging 2 'object' value ..

  const infoUser1 = {
    name: 'Talha',
    age: 23,
    gender: 'male',
    address: 'Kohat',
    traits: {
      eye: 'blue',
    },
  };
  const infoUser2 = {
    name: 'Umar',
    age: 22,
    gender: 'male',
    address: 'Mardan',
    traits: {
      eye: 'green',
      eyeLaches: 'black',
    },
  };
  const storeData = async () => {
    try {
      const jsonValueUser1 = JSON.stringify(infoUser1);
      await AsyncStorage.setItem('@user_info', jsonValueUser1);
      console.log('User 1 data stored successfully');
      await AsyncStorage.mergeItem('@user_info', JSON.stringify(infoUser2));
      console.log('User 2 data merged successfully');
    } catch (e) {
      // saving error
      console.log('An error occured while merging data :', e);
    }
  };
  // We have to do manually JSON.stringify while storing the data and JSON.parse while getting the data.
  const getData = async () => {
    try {
      let mySavedData = await AsyncStorage.getItem('@user_info');
      mySavedData != null ? JSON.parse(mySavedData) : null;
      console.log('My saved data :', mySavedData);
      return mySavedData;
    } catch (e) {
      // saving error
      console.log('An error occured while getting data :', e);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => storeData()}>
        <Text style={styles.buttonText}>Save Data</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => getData()}>
        <Text style={styles.buttonText}>Get Data</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PS3;
