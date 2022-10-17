import React from 'react';
import { View,Image,StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';
const TestScreen=({navigation})=>{

    return(
<Onboarding
onSkip={()=>navigation.navigate("home")}
onDone={()=>navigation.navigate("home")}


  pages={[
    {
      backgroundColor: '#EC0921',
      image: <Image source={require('../../assets/ambulance.png')} style={styles.caro} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },

    {
        backgroundColor: '#EC0921',
        image: <Image source={require('../../assets/ambulance.png')} style={styles.caro} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#EC0921',
        image: <Image source={require('../../assets/ambulance.png')} style={styles.caro} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },

  ]}
/>
)

}


const styles=StyleSheet.create({
caro:{
    width: 200,
    height: 150,
}
})


export default TestScreen