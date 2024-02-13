import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  addProductToCart,
  removeProductFromCart,
  deleteProductFromCart,
} from '../../RTK/reducer/CartSlice';

const Cart = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.cart.cart);
  console.log(cartProducts);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeading}>RTK Cart Screen</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cartProducts}
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
                  {'   '} ⭐ {item.ratings}
                </Text>
              </Text>
              {item.quantity != 0 ? (
                <View style={styles.quantityView}>
                  <TouchableOpacity
                    onPress={() => {
                      if (item.quantity > 1) {
                        dispatch(removeProductFromCart(item));
                      } else {
                        dispatch(deleteProductFromCart(item.id));
                      }
                    }}
                    style={styles.quantityButton}>
                    <Text style={styles.quantityButtonSymbols}>−</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{item.quantity}</Text>
                  <TouchableOpacity
                    onPress={() => dispatch(addProductToCart(item))}
                    style={styles.quantityButton}>
                    <Text style={styles.quantityButtonSymbols}>+</Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
          </View>
        )}
      />
      {/* <View style={styles.bottomContainer}>
        <View style={styles.bottomInsideContainer1}>
          <Text style={styles.bottomInsideContainer1Text}>{`Item's Added ${
            '(' + products.length + ')'
          }`}</Text>
          <Text
            style={
              styles.bottomInsideContainer1Text
            }>{`Total Price : ${6000}`}</Text>
        </View>
        <View style={styles.bottomInsideContainer2}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Cart')}
            style={styles.viewCartButton}>
            <Text style={styles.viewCartButtonTitle}>View Cart</Text>
          </TouchableOpacity>
        </View>
      </View> */}
    </View>
  );
};

export default Cart;
