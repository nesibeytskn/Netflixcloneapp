import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SpecialButton from '../CoreComponents/SpecialButton';
import Top10 from '../CoreComponents/Top10';

const PosterBarComponent = () => {
  return (
    <View className="ml-4">
      <View className="flex-row items-center justify-center mb-8 ">
        <Top10 />
        <Text className=" text-white ml-1 text-xl font-bold">
          Dizilerde Bugün 1 Numara
        </Text>
      </View>
      <View className="flex-row justify-between ">
        <SpecialButton title={'Oynat'} type={'light'} />
        <SpecialButton title={'Listem'} buttonIcon={'checkmark-outline'} type={'dark'} />
      </View>
    </View>
  );
};

export default PosterBarComponent;

const styles = StyleSheet.create({});
