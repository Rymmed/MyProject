import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View ,TextInput, TouchableOpacity} from 'react-native';
import Button from "./component/Button";
import { useState, useRef } from 'react';
import Authentification from './Screens/Authentification';

export default function App() {

  return (
    <Authentification/>
  );

}
   