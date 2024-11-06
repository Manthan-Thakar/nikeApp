import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppButton from "../components/AppButton";
import GoogleButton from "../components/GoogleButton";
import { useNavigation } from "@react-navigation/native";

export default function SigninScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = async () => {
    
    try {
      const savedEmail = await AsyncStorage.getItem('email');
      const savedPassword = await AsyncStorage.getItem('password');

      if (savedEmail === email && savedPassword === password) {
        
        console.log('Login Successful');
        navigation.navigate('drawer')
        
      } else {
        console.log('Invalid email or password');
      }
    } catch (error) {
      console.error('Error reading from AsyncStorage', error);
    }
  };

  

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.title}>Hello Again!</Text>
        <Text style={styles.description}>
          Fill your details or continue with social media
        </Text>
      </View>

      <View style={styles.container2}>
        <View style={styles.combine}>
          <Text style={styles.label}>Email Address</Text>
          <AppTextInput
            placeholder={'xyz@gmail.com'}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.combine}>
          <Text style={styles.label}>Password</Text>
          <AppTextInput
            placeholder={'password'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity onPress={()=>navigation.navigate('forgotPassword')}>

          <Text style={styles.forgetPassword}>Recovery Password</Text>
          </TouchableOpacity>
        </View>
      </View>

      <AppButton text={'Sign In'} onPress={handleLogin} />
      <GoogleButton />
      <TouchableOpacity style={styles.bottamText} onPress={()=>navigation.navigate('registration')}>
        <Text>New User? Create Account</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  container1: {
    marginTop: 121,
    justifyContent: "center",
    alignItems: "center",
    width: 315,
    height: 94,
  },
  combine: {
    marginTop: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2B2B2B",
  },
  description: {
    marginTop: 25,
    fontSize: 16,
    color: "#707B81",
    textAlign: "center",
    width: 315,
    height: 48,
  },
  container2: {
    marginTop: 20,
    width: 335,
  },
  label: {
    fontSize: 16,
    color: '#2B2B2B',
  },
  forgetPassword: {
    position: 'absolute',
    right: 0,
    bottom: -20,
    color: '#707B81',
  },
  bottamText: {
    position: 'absolute',
    bottom: 50,
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  saveText: {
    color: '#fff',
    fontSize: 16,
  },
});
