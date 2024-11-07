import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function AppButton({onPress,text,style}) {
  return (
    <TouchableOpacity style={[styles.buttonBox , {style}]} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttonBox:{
        marginTop:40,
        backgroundColor:'#0D6EFD',
        width:335,
        height:50,
        borderRadius:14,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#FFFFFF'
    }
})