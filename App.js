import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import WelcomeScreen1 from './screens/WelcomeScreen1';
import WelcomeScreen2 from './screens/WelcomeScreen2';
import WelcomeScreen3 from './screens/WelcomeScreen3';
import Navigation from './navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import AppTextInput from './components/AppTextInput';
import SigninScreen from './screens/SigninScreen';
import AppButton from './components/AppButton';
import RegisterPageScreen from './screens/RegisterPageScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import VerificationScreen from './screens/VerificationScreen';
import EditProfileScreen from './screens/ProfileScreen';
import ProfileScreen from './screens/EditProfileScreen';
import Card from './components/Card';

import { FavoritesProvider } from './context/FavoritesContext'; 

export default function App() {

  
  return (
  //  <SplashScreen/>
  // <WelcomeScreen1/>
  // <WelcomeComponents/>
  // <WelcomeScreen2/>
  // <WelcomeScreen3/>
  <FavoritesProvider>
  <NavigationContainer>

    <Navigation/>
  </NavigationContainer>
  </FavoritesProvider>
  // <AppTextInput/>
  // <SigninScreen/>
  // <AppButton/>
  // <RegisterPageScreen/>
  // <ForgotPasswordScreen/>
  // <VerificationScreen/>
  // <ProfileScreen/>
  // <ProfileScreen/>
//  <Card/>
  );
}

