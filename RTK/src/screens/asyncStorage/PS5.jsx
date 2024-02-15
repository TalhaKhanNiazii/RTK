import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import styles from './styles';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const PS5 = () => {
  // Example of Async-Storage for deleting value ..

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('user', 'Talha');
      console.log('Data stored successfully');
    } catch (e) {
      // saving error
      console.log('An error occured while saving data :', e);
    }
  };
  // We have to do manually JSON.stringify while storing the data and JSON.parse while getting the data.
  const getData = async () => {
    try {
      let mySavedData = await AsyncStorage.getItem('user');
      mySavedData != null ? JSON.stringify(mySavedData) : null;
      console.log('My saved data :', mySavedData);
      return mySavedData;
    } catch (e) {
      // saving error
      console.log('An error occured while getting data :', e);
    }
  };
  const deleteData = async () => {
    try {
      await AsyncStorage.removeItem('user');
      console.log('Data Deleted:');
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
      <TouchableOpacity style={styles.button} onPress={() => deleteData()}>
        <Text style={styles.buttonText}>Delete Data</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PS5;
