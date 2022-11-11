import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import MyTabs from './SettingScreen';


export default function HomeScreen({navigation}) {
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
  <Text style={{fontWeight:"bold",textAlign:"center",fontSize:15,padding:20,color:"red"}}>Press to Search for Location</Text>
{/* <SearchBar  /> */}
<View style={styles.ViewStyle}>
      

      <TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate("Places")}
      >
        <Text style={styles.buttonTitle}>Press to search for hospitals</Text>
      </TouchableOpacity>
    </View>
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
    
    bottom:0,
    backgroundColor:"white",
    padding:60,
    marginTop:90,
    borderTopLeftRadius:20,
    borderTopRightRadius:20

    
    

  },
  map:{
    width:"100%",
    height:"100%",
    position:"relative"

  },

  button: {
    backgroundColor: '#EC0921',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center'
  },

  buttonTitle: {
    color: "white"
  }




 }); 
