import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState} from 'react'
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function DescriptionScreen({ route }) {
    const navigation = useNavigation();
    const data = route.params
    const [favourite, setFavourite] = useState(false)
    
  return (
    <SafeAreaView className="flex-1 bg-[#FFFFFF] px-4 justify-between">
      <View className="flex-row items-center justify-between">
        <TouchableOpacity className="w-9 h-9 rounded-full border-2 border-[#ECECEE] items-center justify-center">
            <Icon.ArrowLeft color='black' onPress={() => navigation.goBack()} />
        </TouchableOpacity>
        <Text className="text-xl">Details</Text>
        <TouchableOpacity className="w-9 h-9 rounded-full border-2 border-[#ECECEE] items-center justify-center" onPress={() => setFavourite(!favourite)}>
            <Icon.Heart color={favourite ? 'red' : 'black'} fill={favourite ? 'red' : 'white'} />
        </TouchableOpacity>
      </View>
      <View className="h-2/4 relative">
        <Image source={data.image} className="w-4/5 h-4/5 self-center" />
        <View className="w-64 h-64 rounded-full border-2 border-[#E5E5E5] absolute -left-60"></View>
        <View className="w-64 h-64 rounded-full border-2 border-[#E5E5E5] absolute -right-60 bottom-20"></View>
      </View>
      <View className="space-y-3 mb-2">
        <View className="flex-row items-center justify-between">
            <Text className="text-xl font-bold">{data.nom}</Text>
            <View className="flex-row items-center space-x-2">
                <Icon.Star color='green' />
                <Text>4.8(268 Reviews)</Text>
            </View>
        </View>
        <Text className="text-justify">
            {data.description}
        </Text>
        <View className="flex-row items-center justify-between">
            <View>
                <Text className="text-gray-500">size</Text>
                <Text className="text-xl font-bold">Medium</Text>
            </View>
            <View>
                <Text className="text-gray-500">size</Text>
                <Text className="text-xl font-bold">Medium</Text>
            </View>
            <View>
                <Text className="text-gray-500">size</Text>
                <Text className="text-xl font-bold">Medium</Text>
            </View>
            <View>
                <Text className="text-gray-500">size</Text>
                <Text className="text-xl font-bold">Medium</Text>
            </View>
        </View>
        <View className="flex-row justify-between">
            <View>
                <Text className="text-gray-500">Price</Text>
                <View className="flex-row items-center">
                    <Text className="text-2xl font-bold">{data.prix} </Text>
                    <Text>F FCA</Text>
                </View>
            </View>
            <TouchableOpacity className="w-[70%] bg-[#50AD98] rounded-full p-3">
                <Text className="text-white text-center text-lg">Add to cart</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}