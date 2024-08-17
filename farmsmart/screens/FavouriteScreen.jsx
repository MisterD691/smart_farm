import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import * as Icon from 'react-native-feather'
import CardProduct from '../components/CardProduct'
import { plantData } from '../data/plantData'

export default function FavouriteScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 px-4 space-y-4">
      <View className="flex-row items-center justify-between">
            <TouchableOpacity className="w-8 h-8 rounded-full border-2 border-[#ECECEE] items-center justify-center">
                <Icon.ArrowLeft color='black' onPress={() => navigation.goBack()} />
            </TouchableOpacity>
            <Text className="text-xl">Produits favoris</Text>
            <Text></Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} className="space-x-4" contentContainerStyle={{gap: 10}}>
            {
                plantData.map((plant, key) => (
                    <CardProduct key={plant.id} nom={plant.name} prix={plant.price} image={plant.image} description={plant.description} bigCart='bigCart' />
                ))
            }
        </ScrollView>
    </SafeAreaView>
  )
}