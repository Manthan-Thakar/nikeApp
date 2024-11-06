import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function DetailsScreen({route}) {
  const {item}=route.params;
  console.log(item);
    return (
    <View style={styles.container}>
        <View>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
        </View>
     <Image source={item.image}/>

    </View>
  )
}

const styles = StyleSheet.create({})