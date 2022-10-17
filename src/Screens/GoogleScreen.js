import React from 'react'
import { View,Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {  signInWithRedirect,signInWithPopup } from "firebase/auth";

// import { firebase } from "../../config";

import { auth, provider } from '../../firebase';


const GoogleScreen=()=> {

const google=()=>{

  signInWithRedirect(auth, provider)

}

  return (
    <View>
      <TouchableOpacity
      onPress={google}
      >
        <Text>Signin</Text>
      </TouchableOpacity>
    </View>
  )
}

export default GoogleScreen
