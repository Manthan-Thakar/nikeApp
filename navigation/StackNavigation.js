import { StyleSheet, Text, View , TouchableOpacity , Image } from "react-native";
import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SplashScreen from '../screens/SplashScreen'
import SigninScreen from "../screens/SigninScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import VerificationScreen from "../screens/VerificationScreen";
import RegisterPageScreen from "../screens/RegisterPageScreen";
import DrawerNavigation from "./DrawerNavigation";
// import CustomDrawer from "./CustomDrawer";
import AsyncStorage from '@react-native-async-storage/async-storage';
import TabNavigation from "./TabNavigation";
import DetailsScreen from "../screens/DetailsScreen";
import { useNavigation } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  const [isLoging, setIsLogin] = useState(false);
 const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      checkLoginStatus();
    }, 3000);
  }, []);
  const checkLoginStatus = async () => {
    try {
      const savedEmail = await AsyncStorage.getItem("email");
      const savedPassword = await AsyncStorage.getItem("password");
      console.log(savedEmail, savedPassword);
      setIsLogin(true);
    } catch (e) {
      console.log(e);
      setIsLogin(false);
    }
  };
  return (
    <Stack.Navigator  initialRouteName="splash">
        <Stack.Screen name="drawer" component={DrawerNavigation} options={{headerShown:false}} />
        <Stack.Screen name="details" component={DetailsScreen} options={{headerLeft: () => (
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
            <TouchableOpacity>
              <Image
                source={require("../assets/nike/cart2.png")}
                style={{ height: 30, width: 30, right: 15 }}
              />
            </TouchableOpacity>
          ),
}}/>
      {isLoging ? (
        <Stack.Screen name="splash" component={SplashScreen}/> 
      ) : (
        <>
        <Stack.Screen name="signin" component={SigninScreen} />
        <Stack.Screen name="registration" component={RegisterPageScreen}/>
        <Stack.Screen name="forgotPassword" component={ForgotPasswordScreen}/>
       <Stack.Screen name="verification" component={VerificationScreen}/>
        </>
      )}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
