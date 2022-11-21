import React, {useState, useEffect, useContext} from 'react';
import Context, { CoordinatesContext } from './context';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ImageBackground
} from 'react-native';
import axios from 'axios';
import contex from "./context"
import Bottom from './Bottom';
const GooglaPlaceInput =({navigation})=> {
  const API_KEY = 'pk.00229a6e525fb1b4b7b7be3176264338';

  // h27GYP4718hRp  // h27GYP4718hRptt7g0fX1a66QGwtppAb
// tt7g0fX1a66QGwtppAb

  const {coords} = useContext(CoordinatesContext)
  const [mapCoordinate,setMapCoordinate]=coords


  const [search, setSearch] = useState({
    searchKeyword:"",
    searchKeyword:[],
    isShowingResults:false
  })

  
  // `http://www.mapquestapi.com/search/v3/prediction?key=${API_KEY}&limit=15&collection=adminArea&countryCode=KE&q=${text}`  
  const searchLocation = async (text) => {
    setSearch(prev=>({...prev, searchKeyword: text}));
 
    fetch( `https://api.locationiq.com/v1/autocomplete?key=${API_KEY}&q=${text}`)
      .then((response) => response.json())
      .then(data=>setSearch(prev=>({...prev, searchResults: data, isShowingResults:true})))
        
      .catch((e) => {
        console.log(e);
      });
  };

  const onSearch=()=>{

    search.searchResults.filter(item=>{
      if(search.searchKeyword == item.display_name) {

setMapCoordinate({
  lat:item.lat,
  lon:item.lon
})

navigation.navigate("Home")
        
      }
    })
    
      console.log(search.searchKeyword)
    
  }

  
    return (

      <SafeAreaView style={styles.container}>
        
        <View style={styles.autocompleteContainer}>


          <TextInput
                      style={styles.searchBox}
                      placeholder="From"
                      placeholderTextColor="#000"

          />
          <TextInput
            placeholder="To"
            returnKeyType="search"
            style={styles.searchBox}
            placeholderTextColor="#000"
            onChangeText={(text) => searchLocation(text)}
            value={search.searchKeyword}

          />
          {search.isShowingResults && (
            <FlatList
              data={search.searchResults}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={styles.resultItem}
                    onPress={() =>
                      setSearch(prev=>({
                        ...prev,
                        searchKeyword:item.display_name,
                        isShowingResults:false
                      }))
                      
                    }>
                    <Text>{item.display_name}</Text>
                    {
                    
                    }
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item) => item.id}
              style={styles.searchResultsContainer}
            />
          )}

<TouchableOpacity
        style={styles.button}
        onPress={onSearch}
        
      >
        <Text style={styles.buttonTitle}>Search</Text>
      </TouchableOpacity>
        </View>
        <View style={styles.dummmy} >

        <Text>mmmmm</Text>
        </View>

        <View>
          {/* <Bottom/> */}
        </View>
      </SafeAreaView>
    );
  
}

const styles = StyleSheet.create({
  autocompleteContainer: {
    zIndex: 1,
    // marginTop:30,
  
   

  },
  searchResultsContainer: {
    width: 340,
    height: 200,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 50,
  },
  dummmy: {
    width: 600,
    height: 200,
    // backgroundColor: 'hotpink',
    marginTop: 20,
  },
  resultItem: {
    width: '100%',
    justifyContent: 'center',
    height: 40,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingLeft: 15,
  },
  searchBox: {
    width: 340,
    height: 50,
    fontSize: 18,
    borderRadius: 8,
    borderColor: '#aaa',
    color: '#000',
    backgroundColor: '#fff',
    borderWidth: 1.5,
    paddingLeft: 15,
    marginTop:7,
    
  },
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  },

  button: {
    backgroundColor: '#EC0921',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center',
    zIndex:-1
  },

  buttonTitle: {
    color: "white"
  }
});

export default GooglaPlaceInput