import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import styles from './styles';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const PS1 = () => {
  const [textInputValue, setTextInputValue] = useState('');

  // Example of Async-Storage for storing and reading/getting 'string' value ..

  //   Storing string value
  const storeData = async value => {
    if (textInputValue === '') {
      alert('Enter text input value first');
    } else {
      try {
        await AsyncStorage.setItem('Data', value);
        console.log('Data saved successfully');
      } catch (e) {
        // saving error
        console.log('An error occured while storing data :', e);
      }
    }
  };

  //   Reading string value
  const getData = async () => {
    try {
      const mySavedData = await AsyncStorage.getItem('Data');
      console.log('My saved data :', mySavedData);
    } catch (e) {
      // saving error
      console.log('An error occured while getting data :', e);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter text here"
        value={textInputValue}
        onChangeText={txt => setTextInputValue(txt)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => storeData(textInputValue)}>
        <Text style={styles.buttonText}>Save Data</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => getData()}>
        <Text style={styles.buttonText}>Get Data</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PS1;

//------ Now Array of Strings --------------------------------

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import React, {useState} from 'react';
// import styles from './styles';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';

// const listOfNames = [];
// const PS1 = () => {
//   const [name, setName] = useState('');
//   // Example of Async-Storage for storing and reading/getting  multile 'string' values in 'Array' ..

//   //   Storing multile string values in Array
//   const storeData = async () => {
//     listOfNames.push(name);
//     try {
//       await AsyncStorage.setItem('Names', JSON.stringify(listOfNames));
//       console.log('Data saved successfully');
//     } catch (e) {
//       // saving error
//       console.log('An error occured while saving data :', e);
//     }
//   };

//   //   Reading multile string values in Array
//   const getData = async () => {
//     try {
//       const mySavedData = await AsyncStorage.getItem('Names');
//       console.log('My saved data :', mySavedData);
//     } catch (e) {
//       // saving error
//       console.log('An error occured while getting data :', e);
//     }
//   };
//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter text here"
//         value={name}
//         onChangeText={txt => setName(txt)}
//       />
//       <TouchableOpacity style={styles.button} onPress={() => storeData()}>
//         <Text style={styles.buttonText}>Save Data</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={() => getData()}>
//         <Text style={styles.buttonText}>Get Data</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default PS1;
