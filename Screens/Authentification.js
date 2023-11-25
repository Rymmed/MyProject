import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View ,TextInput, TouchableOpacity} from 'react-native';
import Button from '../component/Button';
import { useState, useRef } from 'react';

export default function Authentification() {
  
  const [email, setmail]= useState("A");
  const [password, setPassword] = useState("0");
  const refInput2 = useRef();

  return (
    <ImageBackground source={require('../assets/image2.jpg')} style={styles.container}>
      <View style={{
        backgroundColor: '#0005',
        width: "85%",
        height: "auto",
        borderRadius: 5,
        }}
      >
      <Text style={styles.headerText}>Authentification</Text>
      <TextInput
            onChangeText={(text)=> {setmail(text)}}
            onSubmitEditing={()=>{refInput2.current.focus();}}
            blurOnSubmit={false}
            style={styles.inputBox}
            placeholder={'Login'}
            keyboardType={'default'}
          />
      <TextInput
        ref={refInput2}
        onChangeText={(text)=>{setPassword(text)}}
        style={styles.inputBox}
        placeholder={'password'}
        keyboardType={'default'}
        secureTextEntry={true}
      />
      <Button
        onPress={() => {
         if((email === "A") && (password === "0"))
         {
          alert("c'est bon");
         } else alert("error");
        
        }}>Sign in</Button>

      <TouchableOpacity style={{width:"100%", alignItems: "flex-end", marginBottom:17, paddingRight:10}}>
        <Text 
          onPress={()=> alert ("create")}
          style={{color: "white", fontWeight: 600}}>
          Create new user
        </Text>
      </TouchableOpacity>

      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    margin:17 ,
    height: 40,
    width: "90%",
    marginVertical: 24,
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#dddddd",
    borderWidth: 2,
    color: "white",
    textAlign: "center"
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    fontWeight: 600 
  },

});