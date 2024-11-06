import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import GoogleButton from "../components/GoogleButton";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";

export default function RegisterPageScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleRegister = async () => {
    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    
    try {
      await AsyncStorage.setItem('userName', name);
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);
      console.log('User registered successfully!');
      navigation.navigate('drawer')

    } catch (error) {
      console.error('Error saving data to AsyncStorage', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.title}>Register Account</Text>
        <Text style={styles.description}>
          Fill your details or continue with social media
        </Text>
      </View>

      <View style={styles.container2}>
        <View style={styles.combine}>
          <Text style={styles.label}>Your Name</Text>
          <AppTextInput
            placeholder={"Name"}
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.combine}>
          <Text style={styles.label}>Email Address</Text>
          <AppTextInput
            placeholder={"xyz@gmail.com"}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.combine}>
          <Text style={styles.label}>Password</Text>
          <AppTextInput
            placeholder={"password"}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
      </View>
      <AppButton text={"Register"} onPress={handleRegister} />
      <GoogleButton />
      <TouchableOpacity style={styles.bottamText} onPress={()=>navigation.navigate('signin')}>
        <Text>Already Have Account? Log In</Text>
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
    color: "#2B2B2B",
  },
  bottamText: {
    position: "absolute",
    bottom: 50,
  },
});
