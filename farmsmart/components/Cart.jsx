import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import * as Icon from 'react-native-feather'

export default function Cart({name, image, price, description}) {
  const [quantite, setQuantite] = useState(1)
  const quantitePlus = () => {
      setQuantite(quantite + 1)
  }
  const quantiteMoin = () => {
      if(quantite == 1){
        setQuantite(1)
      }else{
        setQuantite(quantite - 1)
      }
  }
  return (
    <View>
        <View className="flex-row space-x-3">
            <View className="w-44 h-56 bg-[#E7E7E7 rounded-xl shadow overflow-hidden">
              <Image source={image} className="w-full h-full" />
            </View>
            <View className="w-full justify-between">
              <View className="space-y-4 pt-3">
                <Text className="text-xl font-bold">{name}</Text>
                <Text>Taille: M</Text>
                <Text className="text-xl font-bold">${price}</Text>
              </View>
              <View className="flex-row items-center space-x-16">
                <View className="flex-row items-center space-x-4">
                    <TouchableOpacity className="w-8 h-8 rounded border-2 items-center justify-center" onPress={quantiteMoin}>
                        <Icon.Minus color='black' />
                    </TouchableOpacity>
                    <Text>{quantite}</Text>
                    <TouchableOpacity className="w-8 h-8 rounded border-2 items-center justify-center" onPress={quantitePlus}>
                        <Icon.Plus color='black' />
                    </TouchableOpacity>
                </View>
                <Icon.X color='black' />
              </View>
            </View>
        </View>
    </View>
  )
}