import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import AppButton from '../components/AppButton';
import { useNavigation } from '@react-navigation/native';

export default function VerificationScreen() {
  
  const [otp, setOtp] = useState(['', '', '', '']);
  const navigation=useNavigation();
 
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

 
  const handleOtpChange = (text, index) => {
    
    const newOtp = [...otp];
    newOtp[index] = text;

   
    setOtp(newOtp);

   
    if (text && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.description}>
          Please check your email to see the verification code
        </Text>
        <Text style={{ fontSize: 20 }}>OTP Code</Text>
      </View>

      <View style={styles.container2}>
        <View style={{ flexDirection: 'row' }}>
        
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpBox}
              value={digit}
              onChangeText={(text) => handleOtpChange(text, index)}
              keyboardType="number-pad"
              maxLength={1} 
              ref={inputRefs[index]} 
            />
          ))}
        </View>
        <AppButton text={'Verify'} onPress={()=>navigation.navigate('signin')
        } />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  container1: {
    marginTop: 121,
    justifyContent: 'center',
    alignItems: 'center',
    width: 315,
    height: 94,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2B2B2B',
  },
  description: {
    marginTop: 25,
    fontSize: 16,
    color: '#707B81',
    textAlign: 'center',
    width: 315,
    height: 48,
  },
  container2: {
    marginTop: 50,
    width: 335,
  },
  otpBox: {
    marginRight: 20,
    height: 56,
    width: 70,
    backgroundColor: '#F7F7F9',
    borderRadius: 12,
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 24,
  },
});
