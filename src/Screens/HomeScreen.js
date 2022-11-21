import React, { useState, useEffect,useContext,useRef } from 'react';
import { Platform, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE,Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';

import {CoordinatesContext} from './context';
// import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
export default function HomeScreen({navigation}) {
  const {coords} = useContext(CoordinatesContext)
  const [mapCoordinate,setMapCoordinate]=coords
  const [latlng,setLatLng] = useState({})

const checkPermission =async()=>{
    const hasPermission = await Location.requestForegroundPermissionsAsync();
    if(hasPermission.status === 'granted') {
        const permission = await askPermission();
        return permission
    }
    return true
};


const askPermission = async()=>{
    const permission = await Location.requestForegroundPermissionsAsync()
    return permission.status === 'granted';
};


const getLocation = async()=>{
    try{
        const {granted} =await Location.requestForegroundPermissionsAsync();
        if(!granted)return;
        const {
            coords:{latitude,longitude},
        } = await Location.getCurrentPositionAsync();
        setLatLng({latitude:latitude,longitude:longitude})
        // console.log(location)

    }catch(err){

    }
}

const _map = useRef(1);


useEffect(()=>{
    checkPermission();
    getLocation()
  //  console.log(latlng)
,[]})

// console.log(mapCoordinate)


const origin = {latitude: latlng.latitude, longitude: latlng.longitude};
const destination = {latitude:mapCoordinate.latitude, longitude: mapCoordinate.longitude};
// const GOOGLE_MAPS_APIKEY = "nMgAZqbMED6hrHWGM2x6LR5stE3unx9U";

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
        ref={_map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation ={true}
          followsUserLocation = {true}
          zoomEnabled={true}

          initialRegion={{
            latitude: latlng !==null && latlng.latitude,
            longitude: latlng !==null && latlng.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}


      
      >

{/* <Polyline strokeWidth={2} strokeColor="red" coordinates={destination}></Polyline> */}

      </MapView>


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
