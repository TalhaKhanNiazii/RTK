import React, {useState} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import MapView, {
  Callout,
  Marker,
  Circle,
  Polyline,
  PROVIDER_GOOGLE,
  Polygon,
} from 'react-native-maps';

const MapScreen = () => {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 34.00506443709818,
    longitude: 71.5329134836793,
  });
  console.log('Live Location : ', currentLocation);
  const [markersList, setMarkersList] = useState([
    {
      id: '1',
      latitude: 34.00730843661653,
      longitude: 71.5091228571304,
      title: 'Grand Hotel',
      description: 'I will stay here',
    },
    {
      id: '2',
      latitude: 34.021274348594645,
      longitude: 71.48947109744395,
      title: 'Peshawar Zoo',
      description: 'My destination',
    },
  ]);

  const MyCustomMarkerView = () => {
    return (
      <Image
        resizeMode="center"
        style={styles.imageIcon}
        source={require('../../assets/images/carLogo-removebg-preview.png')}
      />
    );
  };
  const MyCustomCallout = () => {
    return (
      <View style={styles.calloutView}>
        <Text style={styles.calloutText}>My live location</Text>
      </View>
    );
  };
  const polygonCoordinates = [
    {latitude: 33.991631649807864, longitude: 71.51106353849173},
    {latitude: 33.98779121563475, longitude: 71.49523112922907},
    {latitude: 33.97726951076944, longitude: 71.50152694433928},
    {latitude: 33.9795763015473, longitude: 71.51597131043673},
    {latitude: 33.991631649807864, longitude: 71.51106353849173},
  ];
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE} //remove if not using google maps.
        initialRegion={{
          latitude: 34.00730843661653,
          longitude: 71.5091228571304,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}>
        <Marker
          draggable
          coordinate={currentLocation}
          onDragEnd={e => setCurrentLocation(e.nativeEvent.coordinate)}>
          <MyCustomMarkerView />
          <Callout>
            <MyCustomCallout />
          </Callout>
        </Marker>
        {markersList.map(item => (
          <Marker
            key={item.id}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            title={item.title}
            description={item.description}
          />
        ))}
        <Circle
          center={{
            latitude: 34.03568067002912,
            longitude: 71.52532450854778,
          }}
          radius={400}
          strokeWidth={1}
          strokeColor="red"
          fillColor="pink"
        />
        {/*can draw straight line by using Polyline .. */}
        <Polyline
          coordinates={[
            {latitude: 34.03133145182534, longitude: 71.53208090493153},
            {latitude: 34.01655617364443, longitude: 71.54060161119773},
          ]}
          strokeColor="blue"
          strokeWidth={3}
        />
        <Polygon
          coordinates={polygonCoordinates}
          fillColor="rgba(255, 0, 0, 0.2)"
          strokeColor="rgba(255, 0, 0, 0.8)"
          strokeWidth={2}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  imageIcon: {height: 60, width: 60},
  calloutView: {
    width: 80,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calloutText: {fontSize: 16, textAlign: 'center', alignSelf: 'center'},
});

export default MapScreen;
