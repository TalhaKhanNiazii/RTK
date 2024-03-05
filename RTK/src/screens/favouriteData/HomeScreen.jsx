// import React, {useState, useEffect} from 'react';
// import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import styles from './styles';

// const HomeScreen = ({navigation}) => {
//   const [myProducts, setMyProducts] = useState([]);
//   const [favouriteProducts, setFavouriteProducts] = useState([]);
//   console.log(myProducts);
//   useEffect(() => {
//     // Initialize myProducts state with products data
//     productsData();
//     // Load favourite items from AsyncStorage
//     loadFavouriteProducts();
//   }, []);

//   const productsData = async () => {
//     let gettingProducts = await AsyncStorage.getItem('my-products');
//     setMyProducts(JSON.stringify(gettingProducts));
//   };

//   const loadFavouriteProducts = async () => {
//     try {
//       const storedFavourites = await AsyncStorage.getItem('FavouriteProducts');
//       if (storedFavourites !== null) {
//         setFavouriteProducts(JSON.parse(storedFavourites));
//       }
//     } catch (error) {
//       console.error('Error loading favourite products:', error);
//     }
//   };

//   const handleFavourite = async item => {
//     // Find the index of the item in myProducts
//     const index = myProducts.findIndex(product => product.id === item.id);
//     // Create a copy of myProducts array
//     const updatedProducts = [...myProducts];

//     if (item.favourite === false) {
//       updatedProducts[index].favourite = true;
//       // Add item to favouriteProducts array
//       setFavouriteProducts([...favouriteProducts, item]);
//     } else {
//       updatedProducts[index].favourite = false;
//       // Remove item from favouriteProducts array
//       setFavouriteProducts(
//         favouriteProducts.filter(product => product.id !== item.id),
//       );
//     }
//     console.log('favourite item', updatedProducts);
//     // Update myProducts state with the updatedProducts array
//     setMyProducts(updatedProducts);
//   };

//   return (
//     <View style={{flex: 1}}>
//       <View
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'space-around',
//         }}>
//         <Text style={{alignSelf: 'center', fontSize: 28, margin: 10}}>
//           Products List
//         </Text>
//         <TouchableOpacity
//           onPress={() => {
//             navigation.navigate('Favourites');
//           }}>
//           <Text style={{color: 'red', fontSize: 20, fontWeight: 'bold'}}>
//             Favourites {`->`}
//           </Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         showsVerticalScrollIndicator={false}
//         data={myProducts}
//         renderItem={({item}) => (
//           <View style={styles.productContainer}>
//             <Image
//               style={styles.insideContainerView1}
//               resizeMode="contain"
//               source={{uri: item.imageURL}}
//             />
//             <View style={styles.insideContainerView2}>
//               <Text style={styles.productName}>{item.title}</Text>
//               <Text numberOfLines={1} style={styles.productDescription}>
//                 {item.description}
//               </Text>
//               <Text style={styles.productPrice}>$ {item.price}</Text>
//               <Text style={styles.productRatings}>⭐ {item.ratings}</Text>
//               <TouchableOpacity
//                 onPress={() => handleFavourite(item)}
//                 style={styles.favouriteIconInActive}>
//                 <Icon
//                   name={item.favourite ? 'cards-heart' : 'cards-heart-outline'}
//                   size={34}
//                   color={item.favourite ? 'red' : 'black'}
//                 />
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default HomeScreen;

import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import products from '../../constants/Products';

const HomeScreen = ({navigation}) => {
  const [myProducts, setMyProducts] = useState([]);
  const [favouriteProducts, setFavouriteProducts] = useState([]);

  useEffect(() => {
    // Load products and favorite products when the component mounts
    loadProducts();
    loadFavouriteProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const storedProducts = await AsyncStorage.getItem('my-products');
      if (storedProducts === null) {
        // If no products are stored, set default products
        await AsyncStorage.setItem('my-products', JSON.stringify(products));
        setMyProducts(products);
      } else {
        // If products are stored, set them in state
        setMyProducts(JSON.parse(storedProducts));
      }
    } catch (error) {
      console.error('Error loading products:', error);
    }
  };

  const loadFavouriteProducts = async () => {
    try {
      const storedFavourites = await AsyncStorage.getItem('FavouriteProducts');
      if (storedFavourites !== null) {
        setFavouriteProducts(JSON.parse(storedFavourites));
      }
    } catch (error) {
      console.error('Error loading favorite products:', error);
    }
  };

  const handleFavourite = async item => {
    // Toggle the favorite status of the item
    item.favourite = !item.favourite;

    // Update the product in myProducts state
    setMyProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === item.id
          ? {...product, favourite: item.favourite}
          : product,
      ),
    );

    // Update the favoriteProducts array
    if (item.favourite) {
      setFavouriteProducts(prevFavourites => [...prevFavourites, item]);
    } else {
      setFavouriteProducts(prevFavourites =>
        prevFavourites.filter(product => product.id !== item.id),
      );
    }

    // Update AsyncStorage with the updated favoriteProducts array
    AsyncStorage.setItem(
      'FavouriteProducts',
      JSON.stringify(favouriteProducts),
    );
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Text style={{alignSelf: 'center', fontSize: 28, margin: 10}}>
          Products List
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Favourites');
          }}>
          <Text style={{color: 'red', fontSize: 20, fontWeight: 'bold'}}>
            Favourites {`->`}
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={myProducts}
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
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomeScreen;
