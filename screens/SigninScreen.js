import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppButton from "../components/AppButton";
import GoogleButton from "../components/GoogleButton";
import { useNavigation } from "@react-navigation/native";

export default function SigninScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Error state variables
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigation = useNavigation();

  const handleLogin = async () => {
    // Reset errors before validation
    setEmailError("");
    setPasswordError("");

    // Validation checks
    let isValid = true;

    // Validate email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    // Validate password
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password should be at least 6 characters");
      isValid = false;
    }

    if (!isValid) return;

    try {
      const savedEmail = await AsyncStorage.getItem("email");
      const savedPassword = await AsyncStorage.getItem("password");

      if (savedEmail === email && savedPassword === password) {
        console.log("Login Successful");
        navigation.navigate("drawer");
      } else {
        console.log("Invalid email or password");
      }
    } catch (error) {
      console.error("Error reading from AsyncStorage", error);
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
          <TouchableOpacity onPress={() => navigation.navigate("forgotPassword")}>
            <Text style={styles.forgetPassword}>Recovery Password</Text>
          </TouchableOpacity>
        </View>
      </View>

      <AppButton text={"Sign In"} onPress={handleLogin} />
      <GoogleButton />
      <TouchableOpacity
        style={styles.bottamText}
        onPress={() => navigation.navigate("registration")}
      >
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
    color: "#2B2B2B",
  },
  forgetPassword: {
    position: "absolute",
    right: 0,
    bottom: -20,
    color: "#707B81",
  },
  bottamText: {
    marginTop: 60,
    bottom: 0,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});
