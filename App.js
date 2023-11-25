import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View ,TextInput, TouchableOpacity} from 'react-native';
import Button from "./component/Button";
import { useState, useRef } from 'react';
import Authentification from './Screens/Authentification';
import SignUp from './Screens/SignUp';
import Home from './Screens/Accueil';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "auth" component={Authentification}></Stack.Screen>
        <Stack.Screen name = "newuser" component={SignUp}></Stack.Screen>
        <Stack.Screen name = "home" component={Home}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );

}
   