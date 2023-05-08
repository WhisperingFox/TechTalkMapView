import { StyleSheet, Text, View, Button } from 'react-native';

import MapView from 'react-native-maps';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default function App() {
  
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [darkMode, setDarkmode] = useState(true);

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
      <MapView
        style={styles.map}
        // liteMode={false}
        region={{
          latitude: 48.15506442863634,
          longitude: 11.555812969194868,
          latitudeDelta: 0.022,
          longitudeDelta: 0.022,
        }}
        // mapType={"satellite"}
        showsUserLocation={darkMode}

        onMapReady={() => {// wenn Map geladen ist
          console.log("Map geladen");
          alert("Map geladen");
        }} 

        onDoublePress={() => {// wenn Map doppelt gedrückt wird
          console.log("Map doppelt gedrückt");
          alert("Map doppelt gedrückt");
        }}

        onUserLocationChange={() => {// wenn sich der Standort ändert
          console.log("Standort geändert", darkMode);
          // alert("Standort geändert");
        }}
        
      />
      {/* <Button title={`Darkmode ${darkMode}`} onPress={() => [
        setDarkmode(!darkMode)
      ]} /> */}
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
  map: {
    width: "100%",
    height: "100%",
  },
});
