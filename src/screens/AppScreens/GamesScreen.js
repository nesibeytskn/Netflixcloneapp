import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GamingScreenHeader from '../../components/GamingScreenComponents/GamingScreenHeader';
import TrendGame from '../../components/GamingScreenComponents/TrendGame';
import GamesBar from '../../components/GamingScreenComponents/GamesBar';
import GameTrailer from '../../components/GamingScreenComponents/GameTrailer';

const GamesScreen = () => {
  return (
    <View className="bg-black flex-1 pt-12">
      <GamingScreenHeader />

      <ScrollView>
        <TrendGame />
        <GamesBar/>
        <GameTrailer/>
      </ScrollView>
    </View>
  );
};

export default GamesScreen;

const styles = StyleSheet.create({});
