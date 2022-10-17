import React from "react";
import { View,Text,StyleSheet,TextInput } from "react-native";
import {Feather} from "@expo/vector-icons"



const SearchBar=()=>{
  return(
    <View style={styles.ViewStyle}>
      <Feather name="search" style={styles.iconStyle}/>
      <TextInput
      style={styles.TextInputStyle}
      placeholder="Search"
      placeholderColor="000"
      />
    </View>
  )
}

const styles=StyleSheet.create({
ViewStyle:{
  backgroundColor:"white",
  flexDirection:"row",
  marginTop:10,
  borderRadius:20,
  marginHorizontal:15,
  paddingTop:10,
  paddingBottom:10,

},
TextInputStyle:{
  flex:1,
  fontSize:20,
},
iconStyle:{
  fontSize:30,
  alignSelf:"center",
  marginHorizontal:15,
}
})




export default SearchBar
