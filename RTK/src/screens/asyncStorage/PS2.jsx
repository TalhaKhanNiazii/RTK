import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import styles from './styles';
import {View, Text, TouchableOpacity} from 'react-native';

const PS2 = () => {
  // Example of Async-Storage for storing and reading/getting 'object' value ..

  const info = {
    name: 'Talha',
    age: 23,
    gender: 'male',
    address: 'Kohat',
  };
  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('Data', jsonValue);
      console.log('Data stored successfully');
    } catch (e) {
      // saving error
      console.log('An error occured while saving data :', e);
    }
  };
  // We have to do manually JSON.stringify while storing the data and JSON.parse while getting the data.
  const getData = async () => {
    try {
      let mySavedData = await AsyncStorage.getItem('Data');
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
      <TouchableOpacity style={styles.button} onPress={() => storeData(info)}>
        <Text style={styles.buttonText}>Save Data</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => getData()}>
        <Text style={styles.buttonText}>Get Data</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PS2;
