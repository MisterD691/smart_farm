import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather'
import CardProduct from '../components/CardProduct'
import Navbar from '../components/Navbar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { articles } from '../data/articles'

export default function ProductScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-[#D5D8DF] px-4 space-y-4 relative">
        <View className="flex-row justify-between items-center">
            <View>
                <Text className="text-2xl font-bold mt-4">Votre boutique</Text>
                <Text className="text-2xl font-bold">de produits agricoles</Text>
            </View>
            <TouchableOpacity className="w-9 h-9 rounded-full items-center justify-center border-2 border-[#ECECEE]"
            onPress={() => navigation.navigate('SearchScreen')}
            >
                <Icon.Search color='black' fontSize />
            </TouchableOpacity>
        </View>
        <View className="bg-[#D1EAC0] h-36 flex-row p-4 rounded-xl items-center justify-between">
            <View>
                <Text className="text-xl font-bold">30% OFF</Text>
                <Text>02 - 23 juillet</Text>
            </View>
            <View className="h-32 w-32">
                <Image source={require('../assets/plante2.png')} className="w-full h-full" />
            </View>
        </View>
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="space-x-4">
                <TouchableOpacity className="w-16 h-7 border border-[#EEEEF0] rounded-full items-center justify-center">
                    <Text>Tous</Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-16 h-7 border border-[#EEEEF0] rounded-full items-center justify-center">
                    <Text>Plantes</Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-16 h-7 border border-[#EEEEF0] rounded-full items-center justify-center">
                    <Text>Outils</Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-20 h-7 border border-[#EEEEF0] rounded-full items-center justify-center">
                    <Text>Produits</Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-20 h-7 border border-[#EEEEF0] rounded-full items-center justify-center">
                    <Text>Uniformes</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="space-x-4" contentContainerStyle={{gap: 10}}>
            { articles.length > 0 ?
                articles.map((article, key) => (
                    <CardProduct key={article.id} nom={article.name} prix={article.price} image={article.image} description={article.description} />
                )) : null
            }
            </ScrollView>
        </View>
        <Navbar />
    </SafeAreaView>
  )
}