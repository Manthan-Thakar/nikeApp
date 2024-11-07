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
  
  // Error state variables
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigation = useNavigation();

  const handleRegister = async () => {
    // Reset errors before validation
    setNameError('');
    setEmailError('');
    setPasswordError('');

    // Validation checks
    let isValid = true;

    if (!name) {
      setNameError("Name is required");
      isValid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password should be at least 6 characters");
      isValid = false;
    }

    // If validation fails, stop here
    if (!isValid) return;

    try {
      await AsyncStorage.setItem('userName', name);
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);
      console.log('User registered successfully!');
      navigation.navigate('signin');
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
          {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
        </View>

        <View style={styles.combine}>
          <Text style={styles.label}>Email Address</Text>
          <AppTextInput
            placeholder={"xyz@gmail.com"}
            value={email}
            onChangeText={setEmail}
          />
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        </View>

        <View style={styles.combine}>
          <Text style={styles.label}>Password</Text>
          <AppTextInput
            placeholder={"password"}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
        </View>
      </View>

      <AppButton text={"Register"} onPress={handleRegister} />
      <GoogleButton />

      <TouchableOpacity style={styles.bottamText} onPress={() => navigation.navigate('signin')}>
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
    marginTop: 100,
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
    marginTop: 30,
    bottom: 0,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});
