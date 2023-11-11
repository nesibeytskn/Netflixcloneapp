import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomChanger from './BottomChanger';
import SpecialButton from '../../CoreComponents/SpecialButton';
import BottomCard from './BottomCard';

const DetailBottom = () => {
  return (
    <View className="ml-3 mr-3">
      <BottomChanger />
      <View className='w-32'>
      <SpecialButton
        type={'dark'}
        title={'1.Sezon'}
        rightIcon={'caret-down-outline'}
        
      />
      </View>
      <BottomCard/>
    </View>
  );
};

export default DetailBottom;

const styles = StyleSheet.create({});
