import {View, Text, Button} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../../RTK/extraReducer/ProductSlice';

const MainScreen = () => {
  const dispatch = useDispatch();
  const Products = useSelector(state => state);
  console.log(JSON.stringify(Products));

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 22, marginBottom: 30}}>Main Screen</Text>
      <Button
        onPress={() => {
          dispatch(fetchProducts());
        }}
        title="Call API"
      />
    </View>
  );
};

export default MainScreen;
