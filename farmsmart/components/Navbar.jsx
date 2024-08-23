import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import * as Icon from 'react-native-feather'
export default function Navbar(){
    const navigation = useNavigation();
    return(
        <View className="w-full bg-white flex-row items-center justify-between py-2 px-5 rounded-full self-center absolute bottom-5">
            <TouchableOpacity onPress={() => navigation.navigate('ProductScreen')}>
                <Icon.Home color='black' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('FavouriteScreen')}>
                <Icon.Heart color='black' />
            </TouchableOpacity>
            <TouchableOpacity className="w-14 h-14 rounded-full bg-black items-center justify-center"
            onPress={() => navigation.navigate("ProductFormScreen")}>
                <Icon.Plus color='white' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
                <Icon.ShoppingBag color='black'  />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CategoryFormScreen')}>
                <Icon.Settings color='black' />
            </TouchableOpacity>
        </View>
    )
}