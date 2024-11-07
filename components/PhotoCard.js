import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

export default function PhotoCard({item , onPress}) {
  console.log(item)
  return (
    <TouchableOpacity onPress={onPress}>
     <Image />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})