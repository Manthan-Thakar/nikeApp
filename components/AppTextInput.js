import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function AppTextInput({ placeholder, value, onChangeText, ...props }) {
  return (
    <View>
      <TextInput 
        style={styles.textinput} 
        placeholder={placeholder}  
        value={value} 
        onChangeText={onChangeText} 
        {...props} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textinput: {
    borderRadius: 14,
    width: 335,
    height: 48,
    backgroundColor: '#F7F7F9',
    paddingLeft: 14,
    paddingTop: 16,
    paddingRight: 57,
    paddingBottom: 16,
  },
});
