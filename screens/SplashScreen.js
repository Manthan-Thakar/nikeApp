import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>

        <Image source={require('../assets/nike/logoGroup.png')} style={styles.image}/>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#0D6EFD',
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        height:100,
        width:100,
        backgroundColor:'#0D6EFD'
    },
   
    image:{
        height:130,
        width:157
    }
})