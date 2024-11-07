import { TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import SigninScreen from "../screens/SigninScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import VerificationScreen from "../screens/VerificationScreen";
import RegisterPageScreen from "../screens/RegisterPageScreen";
import DrawerNavigation from "./DrawerNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DetailsScreen from "../screens/DetailsScreen";
import { useNavigation } from "@react-navigation/native";
import WelcomeScreen1 from "../screens/WelcomeScreen1";
import WelcomeScreen2 from "../screens/WelcomeScreen2";
import WelcomeScreen3 from "../screens/WelcomeScreen3";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const savedEmail = await AsyncStorage.getItem("email");
        const savedPassword = await AsyncStorage.getItem("password");

        console.log("Checking login status...");
        console.log("Saved Email:", savedEmail);
        console.log("Saved Password:", savedPassword);

        if (savedEmail && savedPassword) {
          console.log("User is logged in", savedEmail);

          setTimeout(() => {
            setIsLoggedIn(true);
          }, 3000);
        } else {
          console.log("No user credentials found");

          setTimeout(() => {
            setIsLoggedIn(false);
          }, 3000);
        }
      } catch (e) {
        console.error("Error checking login status", e);

        setTimeout(() => setIsLoggedIn(false), 3000);
      }
    };

    checkLoginStatus();
  }, []);

  useEffect(() => {
    console.log("isLoggedIn changed to:", isLoggedIn);

    if (isLoggedIn !== null) {
      if (isLoggedIn) {
        navigation.navigate("drawer");
      } else {
        navigation.navigate("welcome1");
      }
    }
  }, [isLoggedIn]);

  if (isLoggedIn === null) {
    console.log("Rendering SplashScreen...");
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <>
          <Stack.Screen
            name="drawer"
            component={DrawerNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="details"
            component={DetailsScreen}
            options={{
              headerLeft: () => (
                <TouchableOpacity
                  style={{ left: 20 }}
                  onPress={() => navigation.goBack()}
                >
                  <Image source={require("../assets/nike/back.png")} />
                </TouchableOpacity>
              ),
              headerTitleAlign: "center",
              headerTitle: "Sneaker Shop",
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("cart")}>
                  <Image
                    source={require("../assets/nike/cart2.png")}
                    style={{ height: 30, width: 30, right: 15 }}
                  />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="signin"
            component={SigninScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="registration"
            component={RegisterPageScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="forgotPassword"
            component={ForgotPasswordScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="verification"
            component={VerificationScreen}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="welcome1"
            component={WelcomeScreen1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="welcome2"
            component={WelcomeScreen2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="welcome3"
            component={WelcomeScreen3}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="signin"
            component={SigninScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="registration"
            component={RegisterPageScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="forgotPassword"
            component={ForgotPasswordScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="verification"
            component={VerificationScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="drawer" 
          component={DrawerNavigation} 
          options={{headerShown:false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
