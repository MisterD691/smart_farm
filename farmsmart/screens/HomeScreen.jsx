import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, onPress } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className="flex-1 bg-gray-100 justify-between py-5 items-center">
            <View className="mt-7">
                {/* <Text className="text-2xl text-center">Plant Shop</Text> */}
                <Text className="text-4xl text-center">Smart FARM</Text>
            </View>
            <View>
                <Image source={require('./../assets/plant.png')} className="w-64 h-72" />
                <Text className="text-center text-md font-bold text-sm mt-5">Le monde numerique des plantes.</Text>
                <Text className="text-center text-md font-bold text-sm">Cliquer juste sur le bouton pour commencer</Text>
            </View>
            <View>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                    <Text className="text-white font-bold text-xl text-center">Go</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default HomeScreen;
