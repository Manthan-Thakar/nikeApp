import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native";

import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/nike/user-dummy-pic.png")}
          style={styles.profilePicture}
        />
        <TouchableOpacity>
          <MaterialIcons
            name="mode-edit"
            size={20}
            color="white"
            style={styles.editIcon}
          />
        </TouchableOpacity>
        </View>
        <View style={styles.container2}> 
          <View style={styles.combine}>
            <Text style={styles.label}>Your Name</Text>
            <AppTextInput placeholder={"Name"} />
          </View>
          <View style={styles.combine}>
            <Text style={styles.label}>Email Address</Text>
            <AppTextInput placeholder={"xyz@gmail.com"} />
          </View>
          <View style={styles.combine}>
            <Text style={styles.label}>Password</Text>
            <AppTextInput placeholder={"password"} secureTextEntry />
            <Text style={styles.forgetPassword}>Recovery Password</Text>
          </View>
        </View> 
        <AppButton text={'Save Now'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  profileContainer: {
    marginTop: 20,
    
  },
  profilePicture: {
    height: 100,
    width: 100,
  },
  editIcon: {
    position: "absolute",
    right: 10,
    bottom: 6,
    backgroundColor: "blue",
    borderRadius: 20,
    padding: 3,
  },
  combine: {
    marginTop: 30,
  },
  container2: {
    marginTop: 20,
    width: 335,
  },
  label: {
    fontSize: 16,
    color: "#2B2B2B",
    marginBottom:10
  },
  forgetPassword:{
    position:'absolute',
    right:0,
    bottom:-20,
    color:'#707B81'
  },
  
});
