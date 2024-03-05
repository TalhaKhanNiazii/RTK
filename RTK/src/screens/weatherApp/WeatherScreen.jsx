// import {View, Text, ScrollView, StatusBar, Image} from 'react-native';
// import React from 'react';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const WeatherScreen = () => {
//   const list = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];
//   return (
//     <>
//       <StatusBar backgroundColor={'#2f2059'} />
//       <View style={{flex: 1, backgroundColor: '#2f2059'}}>
//         <View
//           style={{
//             height: 50,
//             // backgroundColor: 'gray',
//             width: '100%',
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             paddingHorizontal: 10,
//           }}>
//           <Icon name={'arrow-back-ios'} size={32} color={'white'} />
//           <Text style={{color: 'white', fontWeight: '700', fontSize: 26}}>
//             Weather
//           </Text>
//           <Icon name={'search'} size={32} color={'white'} />
//         </View>
//         <Image
//           style={{
//             width: '100%',
//             height: 250,
//             resizeMode: 'contain',
//             marginTop: 20,
//           }}
//           source={require('../../assets/images/pngtree-weather-vector-png-image_9167000-removebg-preview.png')}
//         />
//         <Text style={{fontSize: 52, color: 'white', textAlign: 'center'}}>
//           30°c
//         </Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           {list.map((item, index) => {
//             return (
//               <View
//                 key={index}
//                 style={{
//                   height: 130,
//                   width: 130,
//                   alignItems: 'center',
//                   paddingHorizontal: 10,
//                   backgroundColor: 'rgba(0, 0, 0, 0.1)',
//                   margin: 10,
//                   marginTop: 10,
//                 }}>
//                 <View style={{alignItems: 'center', alignSelf: 'center'}}>
//                   <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>
//                     487
//                   </Text>
//                   <Image
//                     style={{height: 60, width: 60, marginTop: 5}}
//                     source={require('../../assets/images/png-transparent-strong-wind-removebg-preview.png')}
//                   />
//                   <Text style={{color: 'white', marginTop: 5}}>Humidity</Text>
//                 </View>
//               </View>
//             );
//           })}
//         </ScrollView>
//       </View>
//     </>
//   );
// };

// export default WeatherScreen;

import {View, Text, StatusBar, Image, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const WeatherScreen = () => {
  const list = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];
  return (
    <>
      <StatusBar backgroundColor={'#2f2059'} />
      <View style={{flex: 1, backgroundColor: '#2f2059'}}>
        <View
          style={{
            height: 40,
            alignItems: 'center',
            // backgroundColor: 'gray',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            marginTop: 10,
          }}>
          <Icon name={'arrow-back-ios'} size={28} color={'white'} />
          <Text style={{fontSize: 26, fontWeight: '700', color: 'white'}}>
            Weather
          </Text>
          <Icon name={'search'} size={28} color={'white'} />
        </View>
        <Image
          resizeMode="contain"
          style={{width: '100%', height: 250, marginTop: 20}}
          source={require('../../assets/images/pngtree-weather-vector-png-image_9167000-removebg-preview.png')}
        />
        <Text style={{textAlign: 'center', fontSize: 52, color: 'white'}}>
          32°c
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 5,
            fontSize: 20,
            color: 'white',
          }}>
          Peshawar
        </Text>
        <Text style={{textAlign: 'center', fontSize: 18, color: 'white'}}>
          Haze
        </Text>
        <ScrollView
          style={{height: 60, marginTop: 20}}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {list.map((item, index) => (
            <View
              key={index}
              style={{
                height: 120,
                width: 120,
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                margin: 5,
                marginTop: 20,
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 20}}>456</Text>
              <Image
                style={{height: 65, width: 65, marginTop: 5}}
                source={require('../../assets/images/png-transparent-strong-wind-removebg-preview.png')}
              />
              <Text style={{color: 'white'}}>Humidity</Text>
            </View>
          ))}
        </ScrollView>
        <ScrollView horizontal>
          {list.map((item, index) => (
            <View
              key={index}
              style={{
                height: 120,
                width: 120,
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                margin: 5,
                marginTop: 20,
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 20}}>456</Text>
              <Image
                style={{height: 65, width: 65, marginTop: 5}}
                source={require('../../assets/images/png-transparent-strong-wind-removebg-preview.png')}
              />
              <Text style={{color: 'white'}}>Humidity</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default WeatherScreen;
