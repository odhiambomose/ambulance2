import React from 'react'
import { View,Text ,StyleSheet,Image,TouchableOpacity} from 'react-native'

const IntroScreen = () => {
  return (
    <View style={{flex:1,alignItems:"center"}}>
      <View style={styles.border}>
      <Image
        style={styles.stretch}
        source={require('../../assets/ambulance.png')}
      />
      </View>

<View style={styles.btncontainer}>
<TouchableOpacity
     style={styles.button}>
                <Text style={styles.buttonTitle}>Next</Text>
            </TouchableOpacity>


            <TouchableOpacity
     style={styles.buttonred}>
                <Text style={styles.buttonTitle}>Skip</Text>
            </TouchableOpacity>

  </View>

    </View>
  )
}

const styles=StyleSheet.create({
    stretch: {
        width: 200,
        height: 150,
        color:"#EC0921",
        marginTop:100

      },
      button: {
        backgroundColor: '#EC0921',
    paddingTop:15,
    paddingBottom:15,
    paddingRight:140,
    paddingLeft:140,
    width:"100%"
    },

    buttonred: {
      backgroundColor: '#EC0921',
  paddingTop:15,
  paddingBottom:15,
  paddingRight:140,
  paddingLeft:140,
  width:"100%",
  marginTop:10,
  },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },

btncontainer:{
position:"absolute",
bottom:0,
marginBottom:20
 },

 border:{
 
  marginTop:50,


  
 }
})



export default IntroScreen
