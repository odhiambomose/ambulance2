import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import SearchBar from './SearchBar';
import MyTabs from './SettingScreen';


export default function HomeScreen() {
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

    <View>
    
    <View style={styles.container}>
    
<View style={styles.bar}>
<SearchBar/>
</View>



       <MapView
        style={styles.map}
          provider={PROVIDER_GOOGLE}
        showsUserLocation
         initialRegion={{
      //    latitude:location !== null && location.coords.latitude,
      //  longitude:location !== null && location.coords.longitude,
      latitude:-1.3104579,
      longitude:36.7932832,
       latitudeDelta: 0.0922,
         longitudeDelta: 0.0421}}
      />


    </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    // width:"100%",
    // height:"100%",
    // zIndex:2,

    
  },

  bar:{
    position:"absolute",
    width:"100%",
    zIndex:100,
    top:"3%"

  },
  map:{
    width:"100%",
    height:"100%",
    position:"relative"

  },




 }); 
