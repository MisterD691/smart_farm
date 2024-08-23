import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Alert, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, MaterialCommunityIcons } from 'react-native'
import url from '../config';
const logo = require("./../assets/plant.png");
// const facebook = require("../../assets/facebook.png")
// const linkedin = require("../../assets/linkedin.png")
// const tiktok = require("../../assets/tiktok.png")

// contact me :)
// instagram: must_ait6
// email : mustapha.aitigunaoun@gmail.com

void function initForm() {
  setFirstName(null);
  setLastName(null);
  setEmail(null);
  setPhone(null);
  setAddress(null);
  setPassword(null);
  setCPassword(null);
}

export default function RegisterScreen() {
    const [firstName, setFirstName]=  useState("");
    const [lastName, setLastName]=  useState("");
    const [email, setEmail]= useState("");
    const [phone, setPhone]= useState("");
    const [address, setAddress]= useState("");
    const [picture, setPicture]= useState("");
    const [password, setPassword]=  useState("");
    const [cPassword, setCPassword]=  useState("");
    const [isPwdSecure, setIsPwdSecure] = useState(true);
    const [isCPwdSecure, setIsCPwdSecure] = useState(true);
    const navigation = useNavigation();

  return (
    <ScrollView>

      <SafeAreaView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
          
        <Image source={logo} style={styles.image} resizeMode='contain' />
        <Text style={styles.title}>Création de compte</Text>
        <View style={styles.inputView}>
            <TextInput style={styles.input} placeholder='Nom' value={firstName} onChangeText={setFirstName} autoCorrect={false}
        autoCapitalize='none' />
        <TextInput style={styles.input} placeholder='Prénom' value={lastName} onChangeText={setLastName} autoCorrect={false}
        autoCapitalize='none' />
            <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={setEmail} autoCorrect={false}
        autoCapitalize='none'/>
        <TextInput style={styles.input} placeholder='Téléphone' value={phone} onChangeText={setPhone} autoCorrect={false}
        autoCapitalize='none'/>
        <TextInput style={styles.input} placeholder='Adresse' value={address} onChangeText={setAddress} autoCorrect={false}
        autoCapitalize='none'/>
        <TextInput style={styles.input} placeholder='Mot de passe' secureTextEntry={isPwdSecure} value={password} onChangeText={setPassword} autoCorrect={false}
        autoCapitalize='none'/>
            <TextInput style={styles.input} placeholder='Confirmation mot de passe' secureTextEntry={isCPwdSecure} value={cPassword} onChangeText={setCPassword} autoCorrect={false}
        autoCapitalize='none'/>
        </View>
        {/* <View style={styles.rememberView}>
            <View style={styles.switch}>
                <Switch  value={click} onValueChange={setClick} trackColor={{true : "green" , false : "gray"}} />
                <Text style={styles.rememberText}>Remember Me</Text>
            </View>
            <View>
                <Pressable onPress={() => Alert.alert("Forget Password!")}>
                    <Text style={styles.forgetText}>Forgot Password?</Text>
                </Pressable>
            </View>
        </View> */}

        <View style={styles.buttonView}>
            <Pressable style={styles.button} onPress={() => {
              let user = {
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "password": password,
                "role": "Client",
                "phone": phone,
                "address": address,
                "picture": null,
              };
              fetch(`${url}/user/signup`, {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
              })
              .then(response => response.json())
              .then(json => {
                console.log(json);
                if (json["datas"]) {
                  Alert.alert("Enregistrement effectué avec succès !")
                  navigation.navigate('LoginScreen');
                }
              })
              .catch(error => {
                console.error(error);
              });
            }}>
                <Text style={styles.buttonText}>Créer compte</Text>
            </Pressable>
        </View>
        
        {/* <View style={styles.mediaIcons}>
                <Image source={facebook} style={styles.icons}   />
                <Image source={tiktok} style={styles.icons}  />
                <Image source={linkedin} style={styles.icons}  />
        </View> */}

        <Text style={styles.footerText}>Vous avez un compte ? <Text style={styles.signup} onPress={() => navigation.navigate('LoginScreen')}>Connectez-vous</Text></Text>
        
      </SafeAreaView>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container : {
    alignItems : "center",
    paddingTop: 70,
    paddingBottom: 70
  },
  image : {
    height : 190,
    width : 190
  },
  title : {
    fontSize : 30,
    fontWeight : "bold",
    textTransform : "uppercase",
    textAlign: "center",
    paddingVertical : 40,
    color : "green"
  },
  inputView : {
    gap : 15,
    width : "100%",
    paddingHorizontal : 40,
    marginBottom: 30
  },
  input : {
    height : 50,
    paddingHorizontal : 20,
    borderColor : "green",
    borderWidth : 1,
    borderRadius: 7
  },
  rememberView : {
    width : "100%",
    paddingHorizontal : 50,
    justifyContent: "space-between",
    alignItems : "center",
    flexDirection : "row",
    marginBottom : 8
  },
  switch :{
    flexDirection : "row",
    gap : 1,
    justifyContent : "center",
    alignItems : "center"
    
  },
  rememberText : {
    fontSize: 13
  },
  forgetText : {
    fontSize : 11,
    color : "green"
  },
  button : {
    backgroundColor : "green",
    height : 45,
    borderColor : "gray",
    borderWidth  : 1,
    borderRadius : 5,
    alignItems : "center",
    justifyContent : "center"
  },
  buttonText : {
    color : "white"  ,
    fontSize: 18,
    fontWeight : "bold"
  }, 
  buttonView :{
    width :"100%",
    paddingHorizontal : 50,
    marginBottom: 20
  },
  optionsText : {
    textAlign : "center",
    paddingVertical : 10,
    color : "gray",
    fontSize : 13,
    marginBottom : 6
  },
  mediaIcons : {
    flexDirection : "row",
    gap : 15,
    alignItems: "center",
    justifyContent : "center",
    marginBottom : 23
  },
  icons : {
    width : 40,
    height: 40,
  },
  footerText : {
    textAlign: "center",
    color : "gray",
  },
  signup : {
    color : "green",
    fontSize : 13
  }
})