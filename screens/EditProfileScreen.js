import { StyleSheet, Text, View , Image,TouchableOpacity} from 'react-native'
import React from 'react'

import AppTextInput from '../components/AppTextInput';

export default function EditProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/nike/user-dummy-pic.png")}
          style={styles.profilePicture}
        />
        <View>
          <Text style={styles.userName}>
          Emmanuel Oyiboke
          </Text>
          <TouchableOpacity>

          <Text style={styles.changeProfilePicture}>
          Change Profile Picture
          </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
         
        </TouchableOpacity>
        </View>
        <View style={styles.container2}> 
          <View style={styles.combine}>
            <Text style={styles.label}>First Name</Text>
            <AppTextInput placeholder={"Emmanuel"} />
          </View>
          <View style={styles.combine}>
            <Text style={styles.label}>Last Name</Text>
            <AppTextInput placeholder={"Oyiboke"} />
          </View>
          <View style={styles.combine}>
            <Text style={styles.label}>Location</Text>
            <AppTextInput placeholder={"password"}  />
            
          </View>
          <View style={styles.combine}>
            <Text style={styles.label}>Mobile Number</Text>
            <AppTextInput placeholder={"811-732-5298"}  />
            
          </View>
        </View> 
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  profileContainer: {
    marginTop: 30,
    alignItems:'center',
  },
  profilePicture: {
    height: 100,
    width: 100,
  },
  userName:{
    fontSize:20,
    color:'#2B2B2B'
  },
  changeProfilePicture:{
    marginTop:5,
    color:'#0D6EFD',
    fontSize:12,
    textAlign:'center'
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
