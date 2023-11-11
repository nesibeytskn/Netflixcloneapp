import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FilterItem from './FilterItem';

const HomeFilterBar = () => {
  return (
    <View className="flex-row p-3">
      <FilterItem filterLabel={'Diziler'} />
      <FilterItem filterLabel={'Filmler'} />
      <FilterItem filterLabel={'Kategoriler'} filterIcon={'chevron-down-outline'} />
    </View>
  );
};

export default HomeFilterBar;

const styles = StyleSheet.create({});
