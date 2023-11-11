import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from '../AppScreens/SearchScreen';
import NewPopularsScreen from '../AppScreens/NewPopularsScreen';
import DetailScreen from '../AppScreens/DetailScreen';
import SearchStackScreen from './SearchStackScreen';

const NewPopularStackScreen = () => {
  const NPStack = createNativeStackNavigator();
  return (
    <NPStack.Navigator  screenOptions={{headerShown: false}} >
      <NPStack.Screen name="NewPopularsScreen" component={NewPopularsScreen} />
      <NPStack.Screen name="SearchStackScreen" component={SearchStackScreen} />
      <NPStack.Screen name='DetailScreen' component={DetailScreen}/>
      
    </NPStack.Navigator>
  );
};

export default NewPopularStackScreen;

const styles = StyleSheet.create({});
