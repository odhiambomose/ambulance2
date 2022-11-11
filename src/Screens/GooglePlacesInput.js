import React, {Component} from 'react';
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

const API_KEY = 'pk.00229a6e525fb1b4b7b7be3176264338';
export default class GooglaPlaceInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: '',
      searchResults: [],
      isShowingResults: false,
    };
  }
  // =89277c01d90548d8abe6da673aace35f
  searchLocation = async (text) => {
    this.setState({searchKeyword: text});
    axios
      .request({
        method: 'get',
        url: `  https://api.locationiq.com/v1/autocomplete?key=${API_KEY}&q=${text}`,
      })
      .then((response) => {
        console.log(response.data);
        this.setState({
          searchResults: response.data,
          isShowingResults: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
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
            onChangeText={(text) => this.searchLocation(text)}
            value={this.state.searchKeyword}
          />
          {this.state.isShowingResults && (
            <FlatList
              data={this.state.searchResults}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={styles.resultItem}
                    onPress={() =>
                      this.setState({
                        searchKeyword: item.address.display_name,
                        isShowingResults: false,
                      })
                    }>
                    <Text>{item.display_name}</Text>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item) => item.id}
              style={styles.searchResultsContainer}
            />
          )}

<TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate("Places")}
      >
        <Text style={styles.buttonTitle}>Search</Text>
      </TouchableOpacity>
        </View>
        <View style={styles.dummmy} >

        <Text>mmmmm</Text>
        </View>
      </SafeAreaView>
    );
  }
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
    justifyContent: 'center'
  },

  buttonTitle: {
    color: "white"
  }
});
