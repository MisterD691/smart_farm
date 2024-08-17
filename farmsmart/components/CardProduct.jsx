import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { TouchableOpacity, View, Text, Image } from "react-native"
import * as Icon from 'react-native-feather'

export default function CardProduct({nom, prix, image, description, bigCart}){
    const [favourite, setFavourite] = useState(false)
    const navigation = useNavigation()
    return(
        <TouchableOpacity className={`${bigCart == 'bigCart' ? 'w-full' : 'w-60'} h-80 bg-[#EAEAEA] shadow rounded-xl overflow-hidden relative`} onPress={() => navigation.navigate("DescriptionScreen", {nom, prix, image, description})}>
            <Image source={image} className="w-full h-3/4 bg-cover object-cover" />
            <View className="w-full flex-row justify-around absolute bottom-4">
                <TouchableOpacity className="bg-white py-3 px-8 rounded-full">
                    <Text className="text-center">Ajouter au panier</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-black p-3 rounded-full" onPress={() => setFavourite(!favourite)}>
                    <Icon.Heart fill={favourite ? 'red' : 'white'} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}