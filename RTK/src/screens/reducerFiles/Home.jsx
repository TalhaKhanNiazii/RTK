import React, {useEffect} from 'react';
import MyStack from '../../navigation/StackNavigation';
import {useDispatch} from 'react-redux';
import {addProduct} from '../../RTK/reducer/ProductSlice';
import products from '../../constants/Products';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    products.map(item => dispatch(addProduct(item)));
  }, []);

  return <MyStack />;
};

export default Home;
