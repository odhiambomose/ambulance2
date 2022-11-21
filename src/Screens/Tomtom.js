import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapboxGL from '@rnmapbox/maps';

MapboxGL.setAccessToken('sk.eyJ1IjoibW9zZXNvZGhpYW1ibyIsImEiOiJjbGFtbG1xem8wOHJtM3JuMDA2eWhpNzE0In0.hSq70lOzXCu03u842Kr8Ag');

const Bottom = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map} />
      </View>
    </View>
  );
}

export default Bottom;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 300,
    width: 300,
  },
  map: {
    flex: 1
  }
});