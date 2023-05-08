import { StyleSheet, Text, View } from 'react-native';

import MapView from 'react-native-maps';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default function App() {
  
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>GPS APP mit Map</Text>
      <MapView
        style={styles.map}
        // liteMode={true}
        region={{
          latitude: 48.15506442863634,
          longitude: 11.555812969194868,
          latitudeDelta: 0.022,
          longitudeDelta: 0.022,
        }}
        // mapType={"satellite"}
        showsUserLocation={true}
        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 20,
    fontWeight: 400,
  },
  map: {
    width: "90%",
    height: "90%",
  },
});
