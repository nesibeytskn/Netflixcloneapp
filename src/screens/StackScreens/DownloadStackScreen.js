import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchStackScreen from './SearchStackScreen';
import DownloadsScreen from '../AppScreens/DownloadsScreen';

const DownloadStackScreen = () => {
  const DownloadsStack = createNativeStackNavigator();
  return (
    <DownloadsStack.Navigator screenOptions={{headerShown:false}}>
      <DownloadsStack.Screen
        name="DownloadsScreen"
        component={DownloadsScreen}
      />
      <DownloadsStack.Screen
        name="SearchStackScreen"
        component={SearchStackScreen}
      />
    </DownloadsStack.Navigator>
  );
};

export default DownloadStackScreen;

const styles = StyleSheet.create({});
