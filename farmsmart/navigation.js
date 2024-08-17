import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { StatusBar } from 'expo-status-bar';
import ProductScreen from './screens/ProductScreen';
import DescriptionScreen from './screens/DescriptionScreen';
import CartScreen from './screens/CartScreen';
import SearchScreen from './screens/SearchScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const Navigation = () => {
    const stack = createStackNavigator();
    return (
        <NavigationContainer>
            <stack.Navigator screenOptions={{headerShown: false}}>
                <stack.Screen name="HomeScreen" component={HomeScreen} />
                <stack.Screen name="ProductScreen" component={ProductScreen} />
                <stack.Screen name="DescriptionScreen" component={DescriptionScreen} />
                <stack.Screen name="CartScreen" component={CartScreen} />
                <stack.Screen name="SearchScreen" component={SearchScreen} />
                <stack.Screen name="FavouriteScreen" component={FavouriteScreen} />
                <stack.Screen name="LoginScreen" component={LoginScreen} />
                <stack.Screen name="RegisterScreen" component={RegisterScreen} />
            </stack.Navigator>
            <StatusBar style='auto' />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default Navigation;
