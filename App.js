import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigation from './src/navigations/BottomTabNavigation';
import {DataProvider} from './src/context/context';

const App = () => {
  return (
    <DataProvider>
      <SafeAreaView className="flex-1">
        <NavigationContainer>
          <BottomTabNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </DataProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
