import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'

export default function ProductSearch({nom, prix, image, description}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity className="flex-row items-center justify-between border-b border-[#E8E8F0] p-1" onPress={() => navigation.navigate("DescriptionScreen", {nom, prix, image, description}) }>
        <View className="flex-row items-center">
            <Image source={image} className="w-20 h-20" />
            <View>
            <Text>{nom}</Text>
            <Text>10 Variants</Text>
            </View>
        </View>
        <Icon.ChevronRight color="black" />
    </TouchableOpacity>
  )
}