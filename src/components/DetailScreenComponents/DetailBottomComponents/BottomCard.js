import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {images} from '../../../utils/constants';
import PIcon from '../../CoreComponents/PIcon';

const BottomCard = () => {
  return (
    <View className=" mt-2 " style={{gap: 10}}>
      <View className="justify-between flex-row">
        <View className=" flex-row " style={{gap: 15}}>
          <Image
            source={{uri: images.dailyTrend}}
            style={{width: 150, height: 75}}
            resizeMode="strech"
          />
          <View>
            <Text className="text-white">1.Yeni Çocuk</Text>
            <Text className="text-gray-400">40 dk.</Text>
          </View>
        </View>
        <View>
          <PIcon name={'download-outline'} color={'white'} size={24} />
        </View>
      </View>
      <View className="" style={{width: 350}}>
        <Text className="text-gray-400">
          The Walking Dead, Frank Darabont tarafından geliştirilen bir Amerikan
          televizyon dizisidir. Hikâyesi, Robert Kirkman, Tony Moore ve Charlie
          Adlard'ın aynı adlı çizgi romanına dayanmaktadır
        </Text>
      </View>
    </View>
  );
};

export default BottomCard;

const styles = StyleSheet.create({});
