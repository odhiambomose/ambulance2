import 'react-native-gesture-handler';
import * as React from 'react';
import {  View,Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { NavigationContainer } from '@react-navigation/native';




// import HomeScreen from './src/Screens/HomeScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import SettingScreen from './src/Screens/SettingScreen';
import LoginScreen from './src/Screens/LoginScreen';
import BookingScreen from './src/Screens/BookingScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import RegisterationHistory from './src/Screens/RegisterationHistory';
import RegisteringAmbulanceScreen from './src/Screens/RegisteringAmbulanceScreen';
import HomeScreen from './src/Screens/HomeScreen';
import IntroScreen from './src/Screens/IntroScreen';
import TestScreen from './src/Screens/TestScreen';
import FirstAidScreen from './src/Screens/FirstAidScreen';
import GooglePlacesInput from './src/Screens/GooglePlacesInput';
import Context from './src/Screens/context';
import Bottom from './src/Screens/Bottom';
import Tomtom from './src/Screens/Tomtom';

const Drawer = createDrawerNavigator();

 function DrawerTab() {
  return (
    <Context>
        <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="bottom" component={Bottom} />
        <Drawer.Screen name="Tom" component={Tomtom} />
        <Drawer.Screen name="register" component={RegisterScreen} />
        <Drawer.Screen name="profile" component={ProfileScreen} />

        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="First Aid" component={FirstAidScreen} />
        <Drawer.Screen name="Places" component={GooglePlacesInput} />


        <Drawer.Screen name="Booking" component={BookingScreen} />
        <Drawer.Screen name="registerhistory" component={RegisterationHistory} />
        <Drawer.Screen name="registerambulance" component={RegisteringAmbulanceScreen} />

 </Drawer.Navigator>
 </Context>
 

  );
}
const Stack = createStackNavigator();

const App=()=>{

return(
  <Context>

<NavigationContainer >
<Stack.Navigator screenOptions={{headerShown:false}} >

<Stack.Screen name="test" component={TestScreen} />

{/* <Stack.Screen name="intro" component={IntroScreen} /> */}

      <Stack.Screen name="home" component={DrawerTab} />
      <Stack.Screen name="Notifications" component={BookingScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    
    </Stack.Navigator>
</NavigationContainer>
</Context>

)
}

export default App



















































