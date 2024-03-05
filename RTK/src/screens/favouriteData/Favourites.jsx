import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {useIsFocused} from '@react-navigation/native';

const FavouriteScreen = () => {
  const isFocused = useIsFocused();
  const [favouriteProducts, setFavouriteProducts] = useState([]);

  useEffect(() => {
    // Load favourite items from AsyncStorage
    loadFavouriteProducts();
  }, [isFocused]);

  const loadFavouriteProducts = async () => {
    try {
      const storedFavourites = await AsyncStorage.getItem('FavouriteProducts');
      if (storedFavourites !== null) {
        setFavouriteProducts(JSON.parse(storedFavourites));
      }
    } catch (error) {
      console.error('Error loading favourite products:', error);
    }
  };

  const handleFavourite = async item => {
    // Remove item from favouriteProducts array
    const updatedProducts = favouriteProducts.filter(
      product => product.id !== item.id,
    );

    setFavouriteProducts(updatedProducts);

    try {
      // Update AsyncStorage with the updated favorite products list
      await AsyncStorage.setItem(
        'FavouriteProducts',
        JSON.stringify(updatedProducts),
      );
    } catch (error) {
      console.error('Error saving favourite products:', error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 28,
          margin: 10,
          color: 'orange',
        }}>
        Favourite Products List
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={favouriteProducts}
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
              <Text style={styles.productPrice}>$ {item.price}</Text>
              <Text style={styles.productRatings}>⭐ {item.ratings}</Text>
              <TouchableOpacity
                onPress={() => handleFavourite(item)}
                style={styles.favouriteIconInActive}>
                <Icon
                  name={item.favourite ? 'cards-heart' : 'cards-heart-outline'}
                  size={34}
                  color={item.favourite ? 'red' : 'black'}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default FavouriteScreen;
