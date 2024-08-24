import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Alert, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, MaterialCommunityIcons, TouchableOpacity } from 'react-native'
import * as Icon from 'react-native-feather'
import url from '../config';
const logo = require("./../assets/plant.png");
import Navbar from '../components/Navbar';
import Dropdown from '../components/DropDownCategory';
// const facebook = require("../../assets/facebook.png")
// const linkedin = require("../../assets/linkedin.png")
// const tiktok = require("../../assets/tiktok.png")

// contact me :)
// instagram: must_ait6
// email : mustapha.aitigunaoun@gmail.com

export default function ProductFormScreen() {
    const [label, setLabel]=  useState("");
    const [description, setDescription]=  useState("");
    const [quantity, setQuantity]= useState("");
    const [price, setPrice]= useState("");
    const [picture, setPicture]= useState("");
    const [categoryId , setCategoryId] = useState(null)
    const navigation = useNavigation();

  return (
      <SafeAreaView className="flex-1 bg-[#D5D8DF] px-4 space-y-4 relative">
        <View className="flex-row justify-between items-center mb-4">
              <View>
                  <Text className="text-2xl font-bold mt-4">Enregistrer</Text>
                  <Text className="text-2xl font-bold mb-4">Un nouveau produit</Text>
              </View>
              <TouchableOpacity className="w-9 h-9 rounded-full items-center justify-center border-2 border-[#ECECEE]"
              onPress={() => navigation.navigate('SearchScreen')}
              >
                  <Icon.Search color='black' fontSize />
              </TouchableOpacity>
          </View>
          <View style={styles.inputView}>
          <Text className="mt-4 mb-3">Veuillez renseigner les informations du produit</Text>
              <TextInput style={styles.input} placeholder='Libellé' value={label} onChangeText={setLabel} autoCorrect={false}
          autoCapitalize='none' />
          <TextInput style={styles.input} placeholder='Description' value={description} onChangeText={setDescription} autoCorrect={false}
          autoCapitalize='none' />
              <TextInput style={styles.input} placeholder='Quantité' value={quantity} onChangeText={setQuantity} autoCorrect={false}
          autoCapitalize='none'/>
          <TextInput style={styles.input} placeholder='Prix' value={price} onChangeText={setPrice} autoCorrect={false}
          autoCapitalize='none'/>
          </View>
          <Dropdown onValueChange={setCategoryId}/>
          {/* {selectedValue && <Text> ce aue tu as selectionnee est : {selectedValue}</Text>} */}
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
              let article = {
                "label": label,
                "description": description,
                "quantity": quantity,
                "price": price,
                "picture": null,
                "categoryId": categoryId,
              };
              fetch(`${url}/article/add`, {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(article),
              })
              .then(response => response.json())
              .then(json => {
                console.log(json);
                if (json["datas"]) {
                  Alert.alert("Enregistrement effectué avec succès !");
                  setLabel(null);
                  setDescription(null);
                  setQuantity(null);
                  setPrice(null);
                  setPicture(null);
                  setCategoryId(null);
                }
              })
              .catch(error => {
                console.error(error);
              });
            }}>
                <Text style={styles.buttonText}>Créer un article</Text>
            </Pressable>
        </View>
        
        {/* <View style={styles.mediaIcons}>
                <Image source={facebook} style={styles.icons}   />
                <Image source={tiktok} style={styles.icons}  />
                <Image source={linkedin} style={styles.icons}  />
        </View> */}
        <Navbar />
      </SafeAreaView>
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
    paddingHorizontal : 10,
    marginBottom: 30
  },
  input : {
    height : 50,
    paddingHorizontal : 20,
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