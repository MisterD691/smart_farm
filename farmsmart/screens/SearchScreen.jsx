import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icon from 'react-native-feather'
import ProductSearch from '../components/ProductSearch'
import { useNavigation } from '@react-navigation/native'
import { plantData } from '../data/plantData'

export default function SearchScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = useState('')
  const handleSearch = (name) => {
     plantData.map((plant, key) => (
      plant.name == name && <ProductSearch />
     ))
  }
  return (
    <SafeAreaView className="flex-1 px-4 space-y-4">
      <View className="flex-row items-center justify-between">
          <TouchableOpacity className="w-8 h-8 rounded-full border-2 border-[#ECECEE] items-center justify-center">
              <Icon.ArrowLeft color='black' onPress={() => navigation.goBack()} />
          </TouchableOpacity>
          <Text className="text-xl">Recherche</Text>
          <Text></Text>
      </View>
      <View className="flex-row items-center justify-between">
        <TextInput placeholder='Search plant' className="w-[85%] p-2 rounded-full border" value={search} onChangeText={setSearch}  />
        <TouchableOpacity className="p-2 items-center justify-center rounded-full border" onPress={() => setSearch('')}>
          <Icon.X color='black' />
        </TouchableOpacity>
      </View>
      <Text>Resultat de la recherche</Text>
      <View>
        <ScrollView showsHorizontalScrollIndicator={false}>
          {
            plantData.map((plant, key) => {
              if(plant.name.toString().includes(search)){
                return <ProductSearch key={plant.id} nom={plant.name} image={plant.image} />
              }
            })
          }
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}