import 'react-native-gesture-handler';
import * as React from 'react';
import {  View,Text } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import HomeScreen from './src/Screens/HomeScreen';
import NotificationsScreen from './src/Screens/NotificationsScreen';
import SettingScreen from './src/Screens/SettingScreen';
import LoginScreen from './src/Screens/LoginScreen';
import BookingScreen from './src/Screens/BookingScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import RegisterationHistory from './src/Screens/RegisterationHistory';
import RegisteringAmbulanceScreen from './src/Screens/RegisteringAmbulanceScreen';



const Drawer = createDrawerNavigator();

 function App() {
  return (

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="notifications" component={NotificationsScreen} />
        <Drawer.Screen name="settings" component={SettingScreen} />
        <Drawer.Screen name="register" component={RegisterScreen} />

        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Booking" component={BookingScreen} />
        <Drawer.Screen name="registerhistory" component={RegisterationHistory} />
        <Drawer.Screen name="registerambulance" component={RegisteringAmbulanceScreen} />






      </Drawer.Navigator>

      
    </NavigationContainer>
  );
}

export default App



// https://instamobile.io/react-native-tutorials/react-native-location/

















































//  import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
// import DrawerScreen from "./src/Screens/DrawerScreen";


// import StartScreens from "./src/Screens/StartScreens";
// // import GetLocationScreen from "./src/Screens/GetLocationScreen";
// const navigator=createStackNavigator({
//   start:StartScreens,
//   drawer:DrawerScreen
// },{
// initialRouteName:"start",
// // defaultNavigationOptions:{
// //   title:"Bussiness Search"
// // }


// })
// export default createAppContainer(navigator);