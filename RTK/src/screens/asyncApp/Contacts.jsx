import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Contacts = ({navigation}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  let contacts = [];
  const handleSaveContact = async () => {
    if (name && phone) {
      try {
        let tempContacts = [];
        const previousContacts = await AsyncStorage.getItem('Contact');
        let x = JSON.parse(previousContacts);
        tempContacts = x;
        if (tempContacts != null) {
          tempContacts.map(item => contacts.push(item));
        }
        let newContact = {
          name: name,
          phone: phone,
        };
        contacts.push(newContact);
        await AsyncStorage.setItem('Contact', JSON.stringify(contacts));
        navigation.navigate('HomeScreen');
      } catch (e) {
        console.log('Something went wrong while saving new contact', e);
      }
    } else {
      alert('Fill in missing name and phone no.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Contact</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        secureTextEntry={false}
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <TouchableOpacity style={styles.button} onPress={handleSaveContact}>
        <Text style={styles.buttonText}>Save Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 40,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Contacts;
