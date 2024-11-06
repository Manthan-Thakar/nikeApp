// App.js

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import TabNavigation from './TabNavigation'; // Assuming this is your tab navigator
import { View ,Text} from 'react-native';
import OrdersScreen from '../screens/OrdersScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
 
      <Drawer.Navigator
      screenOptions={{headerShown:false}}
        initialRouteName="tab"
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        {/* <Drawer.Screen name="home" component={HomeScreen} /> */}
       
        <Drawer.Screen name="settings" component={SettingsScreen} />
        <Drawer.Screen name='orders' component={OrdersScreen}/>
        <Drawer.Screen name='tab' component={TabNavigation}/>
      </Drawer.Navigator>
   
  );
}
