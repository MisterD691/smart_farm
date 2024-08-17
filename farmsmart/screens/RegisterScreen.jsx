import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, MaterialCommunityIcons } from 'react-native'
const logo = require("./../assets/plant.png");
// const facebook = require("../../assets/facebook.png")
// const linkedin = require("../../assets/linkedin.png")
// const tiktok = require("../../assets/tiktok.png")

// contact me :)
// instagram: must_ait6
// email : mustapha.aitigunaoun@gmail.com

export default function RegisterScreen() {
    const [click,setClick] = useState(false);
    const {username,setUsername}=  useState("");
    const {password, setPassword}=  useState("");
    const {cPassword, setCPassword}=  useState("");
    const [isPwdSecure, setIsPwdSecure] = useState(true);
    const [isCPwdSecure, setIsCPwdSecure] = useState(true);
    const navigation = useNavigation();

  return (
    <ScrollView>

      <SafeAreaView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
          
        <Image source={logo} style={styles.image} resizeMode='contain' />
        <Text style={styles.title}>Création de compte</Text>
        <View style={styles.inputView}>
            <TextInput style={styles.input} placeholder='Nom' value={username} onChangeText={setUsername} autoCorrect={false}
        autoCapitalize='none' />
        <TextInput style={styles.input} placeholder='Prénom' value={username} onChangeText={setUsername} autoCorrect={false}
        autoCapitalize='none' />
            <TextInput style={styles.input} placeholder='Email' value={password} onChangeText={setPassword} autoCorrect={false}
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
            <Pressable style={styles.button} onPress={() => navigation.navigate('ProductScreen')}>
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
    height : 160,
    width : 170
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