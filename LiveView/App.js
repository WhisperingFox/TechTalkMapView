import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MapView from 'react-native-maps';

export default function App() {
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
