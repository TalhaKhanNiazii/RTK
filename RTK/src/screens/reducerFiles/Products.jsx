import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
// import products from '../../constants/Products';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {addProductToCart} from '../../RTK/reducer/CartSlice';

const Products = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);
  const cartProducts = useSelector(state => state.cart.cart);
  console.log(cartProducts);

  const getTotalPrice = () => {
    let total = 0;
    cartProducts.map(item => (total = total + item.quantity * item.price));
    // console.log('Total Price :', total);
    return total.toFixed(2);
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeading}>RTK Products Screen</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={({item}) => (
          <View style={styles.productContainer}>
            <Image
              style={styles.insideContainerView1}
              resizeMode="contain"
              source={{uri: item.imageURL}}
            />
            <View style={styles.insideContainerView2}>
              <Text style={styles.productName}>{item.title}</Text>
              <Text numberOfLines={1} style={styles.productDescription}>
                {item.description}
              </Text>
              <Text style={styles.productPrice}>
                $ {item.price}
                <Text style={styles.productRatings}>
                  {'       '} ⭐ {item.ratings}
                </Text>
              </Text>
              {/* {item.quantity > 0 ? (
                <View style={styles.quantityView}>
                  <TouchableOpacity style={styles.quantityButton}>
                    <Text style={styles.quantityButtonSymbols}>−</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{item.quantity}</Text>
                  <TouchableOpacity style={styles.quantityButton}>
                    <Text style={styles.quantityButtonSymbols}>+</Text>
                  </TouchableOpacity>
                </View>
              ) : ( */}
              <TouchableOpacity
                onPress={() => {
                  dispatch(addProductToCart(item));
                }}
                style={styles.addToCartButton}>
                <Text style={styles.addToCartButtonTitle}>Add to cart</Text>
              </TouchableOpacity>
              {/* )} */}
            </View>
          </View>
        )}
      />
      {cartProducts.length > 0 ? (
        <View style={styles.bottomContainer}>
          <View style={styles.bottomInsideContainer1}>
            <Text style={styles.bottomInsideContainer1Text}>{`Item's Added ${
              '(' + cartProducts.length + ')'
            }`}</Text>
            <Text
              style={
                styles.bottomInsideContainer1Text
              }>{`Total Price : ${getTotalPrice()}`}</Text>
          </View>
          <View style={styles.bottomInsideContainer2}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Cart')}
              style={styles.viewCartButton}>
              <Text style={styles.viewCartButtonTitle}>View Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Products;
