import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../AppScreens/HomeScreen'
import SearchScreen from '../AppScreens/SearchScreen'
import SearchStackScreen from './SearchStackScreen'

const HomeStackScreen = () => {
    const HomeStack=createNativeStackNavigator()
  return (
    <HomeStack.Navigator screenOptions={{headerShown:false}}>
        <HomeStack.Screen name='HomeScreen' component={HomeScreen}/>
        <HomeStack.Screen name='SearchStackScreen' component={SearchStackScreen}/>
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen

const styles = StyleSheet.create({})