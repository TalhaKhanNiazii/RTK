import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import styles from './styles';
import {View, Text, TouchableOpacity} from 'react-native';

const PS4 = () => {
  // Example of Async-Storage for combinig 2 or more 'array' value ..

  const storeData = async () => {
    let infoUser1 = ['Talha', 'Software Engineer'];
    let infoUser2 = ['Ali', 'Graphics Engineer'];
    try {
      await AsyncStorage.multiSet([infoUser1, infoUser2]);
      console.log('Data stored successfully');
    } catch (e) {
      // saving error
      console.log('An error occured while saving data :', e);
    }
  };
  // We have to do manually JSON.stringify while storing the data and JSON.parse while getting the data.
  const getData = async () => {
    try {
      let mySavedData = await AsyncStorage.multiGet(['Talha', 'Ali']);
      mySavedData != null ? JSON.stringify(mySavedData) : null;
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

export default PS4;
