// TabNavigation.js
import React from "react";
import { Image, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import FavoriteScreen from "../screens/FavoriteScreen";
import CartScreen from "../screens/CartScreen";
import NotiFicationScreen from "../screens/NotiFicationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import DrawerNavigation from "./DrawerNavigation";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        // headerShown:false,
        tabBarActiveTintColor: "#0D6EFD",
        tabBarInactiveTintColor: "black",
        tabBarLabel: () => null,
        tabBarBackground: () => (
          <Image
            source={require("../assets/nike/tabbarBackGround.png")}
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: 75,
            }}
          />
        ),
        tabBarStyle: { height: 75 },
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
          // headerLeft:()=><CustomDrawerButton/>,
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="favorite"
        component={FavoriteScreen}
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
          headerTitle: "Favorite",
          headerRight: () => (
            <Image
              source={require("../assets/nike/favB.png")}
              style={{ height: 30, width: 30, right: 20 }}
            />
          ),
          tabBarIcon: ({ color }) => (
            <AntDesign name="hearto" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="cart"
        component={CartScreen}
        options={{
          tabBarStyle:{
            display:'none'
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{ left: 20 }}
              onPress={() => navigation.goBack()}
            >
              <Image source={require("../assets/nike/back.png")} />
            </TouchableOpacity>
          ),
          headerTitleAlign: "center",
          headerTitle: "My Cart",

          tabBarIcon: ({ color }) => (
            <Ionicons name="bag-outline" size={30} color="white" />
          ),
          tabBarIconStyle: {
            bottom: 30,
            height: 10,
            backgroundColor: "#0D6EFD",
            width: 75,
            justifyContent: "center",
            borderRadius: 50,
            elevation: 5,
          },
        }}
      />
      <Tab.Screen
        name="notification"
        component={NotiFicationScreen}
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
          headerTitle: "Notifications",
          headerRight: () => (
            <TouchableOpacity>
              <Image
                source={require("../assets/nike/delete.png")}
                style={{ height: 50, width: 50, right: 15 }}
              />
            </TouchableOpacity>
          ),

          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications-outline" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="account"
        component={ProfileScreen}
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
          headerTitle: "Profile",

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-outline"
              size={30}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
