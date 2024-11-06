import { StyleSheet, Text, TouchableOpacity, View, Image, Alert ,Modal } from "react-native";
import React,{useState} from "react";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

import { useNavigation } from "@react-navigation/native";

export default function ForgotPasswordScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const handlePress = ()=>{
    setModalVisible(true);
  
  }
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.description}>
        Enter your Email account to reset
        your password
        </Text>
      </View>

      <View style={styles.container2}>
        <AppTextInput placeholder={'Enter Email Id'}/>
      <AppButton text={"Reset password"} onPress={handlePress} />
      <View style={styles.containerModal}>
      <Modal
      transparent={true}
      animationType="fade"
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={{backgroundColor:'#0D6EFD' , padding:10 ,borderRadius:30}}>
          <Image
            source={require('../assets/nike/email.png')}
            style={styles.icon}
            />

          </View>
          <Text style={styles.modalTextB}>Check your email</Text>
          <Text style={styles.modalTextS}>We have send password recovery code in your email</Text>
          <TouchableOpacity
            style={styles.okButton}
            onPress={()=>navigation.navigate('verification')}>
            <Text style={styles.okButtonText}>OK</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </Modal>
    </View>
     </View>
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
    marginTop: 50,
    width: 335,
  },
  containerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  button: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  icon: {
   
    width: 30,
    height: 30,
    // marginBottom: 20,
    borderRadius:15,
    
  },
  modalTextB: {
    fontSize: 16,
    fontWeight:'bold',
    marginBottom:10
  },
  modalTextS: {
    fontSize: 16,
    color:'#707B81',
    textAlign:'center'
  },
  okButton: {
    paddingVertical:10,
    paddingHorizontal:20,
    marginTop:20,
    backgroundColor: '#007bff',
    borderRadius: 5,

  },
  okButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

