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
import SearchBar from './src/Screens/SearchBar';
import IntroScreen from './src/Screens/IntroScreen';
import TestScreen from './src/Screens/TestScreen';


const Drawer = createDrawerNavigator();

 function DrawerTab() {
  return (
        <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        {/* <Drawer.Screen name="profile" component={ProfileScreen} /> */}
        <Drawer.Screen name="settings" component={SettingScreen} />
        <Drawer.Screen name="register" component={RegisterScreen} />
        <Drawer.Screen name="profile" component={ProfileScreen} />

        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="place" component={SearchBar} />

        <Drawer.Screen name="Booking" component={BookingScreen} />
        <Drawer.Screen name="registerhistory" component={RegisterationHistory} />
        <Drawer.Screen name="registerambulance" component={RegisteringAmbulanceScreen} />

 </Drawer.Navigator>
 

  );
}



 




const Stack = createStackNavigator();

const App=()=>{

return(
<NavigationContainer >
<Stack.Navigator screenOptions={{headerShown:false}} >

<Stack.Screen name="test" component={TestScreen} />

{/* <Stack.Screen name="intro" component={IntroScreen} /> */}

      <Stack.Screen name="home" component={DrawerTab} />
      <Stack.Screen name="Notifications" component={BookingScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    
    </Stack.Navigator>
</NavigationContainer>



)




}




export default App



















































