import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MapView from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>GPS APP voll krass</Text>
      <MapView
        style={styles.map}
        region={{
          latitude: 48.15506442863634,
          longitude: 11.555812969194868,
          latitudeDelta: 0.022,
          longitudeDelta: 0.022,
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
    width: "90%",
    height: "90%",
  },
});
