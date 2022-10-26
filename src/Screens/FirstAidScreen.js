import React from "react";
import { View,Text ,StyleSheet,ScrollView} from "react-native";

const FirstAidScreen=()=>{
    return(
<View>
    <ScrollView>
    <View style={styles.box1}>
        <View>
        <Text style={styles.text1}>Bleeding</Text>
<Text>.Apply direct pressure on the cut or wound with a clean cloth, tissue, or piece of gauze until bleeding stops.</Text>
<Text>If blood soaks through the material, don’t remove it. Put more cloth or gauze on top of it and continue to apply pressure.</Text>
<Text>If the wound is on the arm or leg, raise limb above the heart, if possible, to help slow bleeding.</Text>
<Text>Wash your hands again after giving first aid and before cleaning and dressing the wound.</Text>
<Text>Do not apply a tourniquet unless the bleeding is severe and not stopped with direct pressure.</Text>
</View>
<View>
<Image
        style={styles.stretchaid}
        source={require('../../assets/bleeding.png')}
      />
</View>

</View>

<View style={styles.box1}>
        <Text style={styles.text1}>Broken Bones/Fracture</Text>
<Text>.Apply direct pressure on the cut or wound with a clean cloth, tissue, or piece of gauze until bleeding stops.</Text>
<Text>If blood soaks through the material, don’t remove it. Put more cloth or gauze on top of it and continue to apply pressure.</Text>
<Text>If the wound is on the arm or leg, raise limb above the heart, if possible, to help slow bleeding.</Text>
<Text>Wash your hands again after giving first aid and before cleaning and dressing the wound.</Text>
<Text>Do not apply a tourniquet unless the bleeding is severe and not stopped with direct pressure.</Text>
</View>

<View style={styles.box1}>
        <Text style={styles.text1}>Choking</Text>
<Text>.Apply direct pressure on the cut or wound with a clean cloth, tissue, or piece of gauze until bleeding stops.</Text>
<Text>If blood soaks through the material, don’t remove it. Put more cloth or gauze on top of it and continue to apply pressure.</Text>
<Text>If the wound is on the arm or leg, raise limb above the heart, if possible, to help slow bleeding.</Text>
<Text>Wash your hands again after giving first aid and before cleaning and dressing the wound.</Text>
<Text>Do not apply a tourniquet unless the bleeding is severe and not stopped with direct pressure.</Text>
</View>

<View style={styles.box1}>
        <Text style={styles.text1}>Heart Attack</Text>
<Text>.Apply direct pressure on the cut or wound with a clean cloth, tissue, or piece of gauze until bleeding stops.</Text>
<Text>If blood soaks through the material, don’t remove it. Put more cloth or gauze on top of it and continue to apply pressure.</Text>
<Text>If the wound is on the arm or leg, raise limb above the heart, if possible, to help slow bleeding.</Text>
<Text>Wash your hands again after giving first aid and before cleaning and dressing the wound.</Text>
<Text>Do not apply a tourniquet unless the bleeding is severe and not stopped with direct pressure.</Text>
</View>
</ScrollView>
</View>
    )
}

const styles=StyleSheet.create({
   box1:{
    height:300,
    width:"100%",
    backgroundColor:"white",
    borderRadius:15,
    padding:10,
    elevation:20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5, 
    textAlign:"center",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10,
    // paddingTop:50,
    // paddingBottom:50,
   },

   text1:{
textAlign:"center",
fontWeight:"bold",
fontSize:30,
color:"#EC0921"

   }

})


export default FirstAidScreen