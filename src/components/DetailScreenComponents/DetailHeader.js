import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PIcon from '../CoreComponents/PIcon';

const DetailHeader = ({header}) => {
  return (
    <View>
      <View className="flex-row items-center mb-2 mt-2">
        <Image
          className="w-8 h-8"
          source={require('../../assets/images/netflixlogo.png')}
        />
        <Text className="text-gray-400 " style={{letterSpacing: 4}}>
          Dizi
        </Text>
      </View>
      <Text className="text-white text-3xl font-extrabold ">
        {header}
      </Text>
      <View className="flex-row gap-3 ">
        <Text className="text-gray-400 ">2021</Text>

        <Text className="text-gray-400 bg-gray-700 px-1 rounded-2xl">18+</Text>

        <Text className="text-gray-400 ">2.Sezon</Text>
        <View className="border border-gray-400 ">
          <Text className="text-gray-400  " style={{fontSize:10, padding:2}}>HD</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailHeader;

const styles = StyleSheet.create({});
