import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import HomeHeader from '../../components/HomeScreenComponents/HomeHeader';
import HomeFilterBar from '../../components/HomeScreenComponents/HomeFilterBar';
import DailyTrend from '../../components/HomeScreenComponents/DailyTrend';
import HomeCard from '../../components/HomeScreenComponents/HomeCard';

const HomeScreen = () => {
  return (
    <View className="flex-1 pt-9 bg-gray-600">
      <HomeHeader className='' />
      <ScrollView className="flex-1 bg-gray-600 ">
        <View className="bg-gray-600 ">
          <HomeFilterBar />
          <DailyTrend />
          <HomeCard categoryTitle={`Netflix'te popüler `} />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
