import { StyleSheet, View } from 'react-native';

import MapView from 'react-native-maps';
import React, { useRef } from 'react';

export default function App() {
  
  const mapViewRef = useRef(null);

  return (
    <View style={styles.container}>
      <MapView

        style={styles.map}

        // liteMode={false}
        // mapType={"satellite"}

        region={{
          latitude: 48.15506442863634,
          longitude: 11.555812969194868,
          latitudeDelta: 0.022,
          longitudeDelta: 0.022,
        }}

        onMapReady={() => {// wenn Map geladen ist
          console.log("Map geladen");
          alert("Map geladen");
        }}

        onUserLocationChange={() => {
          console.log("Standort geändert");
        }}

        ref={mapViewRef}

        onPress={() => {
          alert("Map gedrückt");

          mapViewRef.current?.animateToRegion({
            latitude: 48.15506442863634,
            longitude: 11.555812969194868,
            latitudeDelta: 0.022,
            longitudeDelta: 0.022,
          })
        }}

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
  map: {
    width: "80%",
    height: "80%",
  },
});
