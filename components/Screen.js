import { StyleSheet, Text, View ,Platform,StatusBar } from 'react-native'
import React, { Children } from 'react'

export default function Screen({children}) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop: StatusBar.currentHeight  
    }
})