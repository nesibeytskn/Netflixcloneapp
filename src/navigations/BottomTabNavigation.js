import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/AppScreens/HomeScreen';
import GamesScreen from '../screens/AppScreens/GamesScreen';
import NewPopularStackScreen from '../screens/StackScreens/NewPopularStackScreen';
import DownloadsScreen from '../screens/AppScreens/DownloadsScreen';
import DetailScreen from '../screens/AppScreens/DetailScreen';
import HomeStackScreen from '../screens/StackScreens/HomeStackScreen';
import DownloadStackScreen from '../screens/StackScreens/DownloadStackScreen';

const BottomTabNavigation = () => {
  const TabStack = createBottomTabNavigator();
  return (
    <TabStack.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: 'black',
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeStackScreen') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'GamingScreen') {
            iconName = focused ? 'sports-esports' : 'sports-esports';
          } else if (route.name === 'NewPopularStackScreen') {
            iconName = focused ? 'playlist-play' : 'playlist-play';
          } else if (route.name === 'DownloadStackScreen') {
            iconName = focused ? 'downloading' : 'downloading';
          }

          // You can return any component that you like here!
          return <Icons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',

        tabBarItemStyle: {
          backgroundColor: 'black',
          borderTop: 'none',
        },
      })}>
      <TabStack.Screen
        options={{headerShown: false}}
        name="HomeStackScreen"
        component={HomeStackScreen}
      />
      <TabStack.Screen
        options={{headerShown: false}}
        name="GamingScreen"
        component={GamesScreen}
      />
      <TabStack.Screen
        options={{headerShown: false}}
        name="NewPopularStackScreen"
        component={NewPopularStackScreen}
      />
      <TabStack.Screen
        options={{headerShown: false}}
        name="DownloadStackScreen"
        component={DownloadStackScreen}
      />
    </TabStack.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
