import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Modal,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const height = Dimensions.get('window').height;
const HomeScreen = ({navigation}) => {
  const isFocused = useIsFocused();
  const [showModal, setShowModal] = useState(false);
  const [userInfo, setUserInfo] = useState('');
  const [contacts, setContacts] = useState(null);
  console.log(contacts);
  useEffect(() => {
    getContacts();
  }, [isFocused]);

  const getContacts = async () => {
    try {
      const value = await AsyncStorage.getItem('Contact');
      if (value !== null) {
        setContacts(JSON.parse(value));
      }
    } catch (error) {
      console.log('Error retrieving contacts', error);
    }
  };
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('@userInfo');
      await AsyncStorage.removeItem('Contact');
      setContacts(null);
      navigation.navigate('LoginScreen');
    } catch (e) {
      console.log('An error occured while logging out', e);
    }
  };
  const handleGoToContacts = async () => {
    navigation.navigate('Contacts');
  };
  const handleDeleteContact = async index => {
    try {
      let tempContacts = [];
      const previousContacts = await AsyncStorage.getItem('Contact');
      let x = JSON.parse(previousContacts);
      tempContacts = x;
      if (tempContacts != null) {
        tempContacts.map(item => contacts.push(item));
      }
      tempContacts.splice(index, 1);
      await AsyncStorage.setItem('Contact', JSON.stringify(tempContacts));
      getContacts();
    } catch (e) {
      console.log('Something went wrong while deleting contact', e);
    }
  };
  const handleShowUserInfo = async () => {
    setShowModal(true);
    let userInfo = await AsyncStorage.getItem('@userInfo');
    setUserInfo(JSON.parse(userInfo));
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeading}>Home Screen</Text>
      <TouchableOpacity
        onPress={() => handleShowUserInfo()}
        style={styles.userIcon}>
        <Icon name="person-pin" size={45} color="#900" />
      </TouchableOpacity>
      <FlatList
        data={contacts}
        renderItem={({item, index}) => (
          <View key={index} style={styles.listContainer}>
            <Text style={styles.listName}>{item.name}</Text>
            <Text style={styles.listPhone}>{item.phone}</Text>
            <TouchableOpacity
              onPress={() => handleDeleteContact(index)}
              style={styles.listCrossBtn}>
              <Text style={styles.listCrossSymbol}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.buttonView}>
        <TouchableOpacity onPress={() => handleLogout()} style={styles.button}>
          <Text style={styles.buttonTitle}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleGoToContacts()}
          style={{...styles.button, width: '45%'}}>
          <Text style={styles.buttonTitle}>Add new Contact</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={showModal} transparent={true}>
        <View style={styles.modal}>
          <Text style={styles.modalText1}>User Name </Text>
          <Text style={styles.modalText2}>{userInfo.username}</Text>
          <Text style={styles.modalText1}>Password </Text>
          <Text style={styles.modalText2}>{userInfo.password}</Text>
          <TouchableOpacity
            onPress={() => {
              setShowModal(!showModal);
            }}
            style={styles.modalDone}>
            <Text style={styles.modalDoneText}>Done</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: '#fffcf5'},
  mainHeading: {alignSelf: 'center', margin: 10, fontSize: 28, color: 'black'},
  buttonView: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
  },
  userIcon: {position: 'absolute', top: 10, left: 10},
  button: {
    width: '25%',
    height: 40,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonTitle: {fontSize: 20, color: 'white', fontWeight: '400'},
  listContainer: {
    width: '95%',
    backgroundColor: 'white',
    height: 60,
    elevation: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    borderBlockColor: 'black',
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'space-around',
  },
  listName: {
    width: '30%',
    marginLeft: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
  listPhone: {
    width: '55%',
    color: 'green',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listCrossBtn: {width: '10%'},
  listCrossSymbol: {
    fontSize: 18,
    color: 'red',
  },
  modal: {
    height: height / 3.3,
    marginTop: height / 4,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'white',
    elevation: 20,
    margin: 20,
    borderRadius: 20,
    padding: 20,
  },
  modalText1: {fontSize: 18},
  modalText2: {fontSize: 26, marginBottom: 20, fontWeight: '700'},
  modalDone: {
    width: '100%',
    backgroundColor: 'skyblue',
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 10,
    elevation: 5,
    borderWidth: 1,
  },
  modalDoneText: {fontSize: 28, fontWeight: '700', color: 'white'},
});
