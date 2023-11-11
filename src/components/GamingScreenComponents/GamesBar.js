import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderText from '../CoreComponents/HeaderText';
import GameCard from './GameCard';

const GamesBar = () => {
  return (
    <View className="mt-16">
      <View>
        <HeaderText title={'Yeni Eklenen Oyunlar'} />
      </View>
      <View className="flex-row">
        <ScrollView horizontal={true}>
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
        </ScrollView>
      </View>
    </View>
  );
};

export default GamesBar;

const styles = StyleSheet.create({});
