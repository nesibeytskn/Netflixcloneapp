import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {images} from '../../utils/constants';
import HeaderText from '../CoreComponents/HeaderText';
import LightContentText from '../CoreComponents/LightContentText';
import LogoImage from '../CoreComponents/LogoImage';

const TrendGame = () => {
  return (
    <View className="relative bg-black-900">
      <View className="w-full h-96">
        <Image
          source={{uri: images.gameposter}}
          style={{width: '100%', height: '100%', resizeMode: 'strech'}}
        />
      </View>

      <View style={{zIndex: 15}}>
        <View style={{marginTop: -190}}>
          <LogoImage />
        </View>

        <View style={{marginTop: 5, alignItems: 'center'}}>
          <HeaderText title={'The Last Of Us '} />

          <View className="flex-row mt-2">
            <LightContentText className="text-white text-lg" content={'War'}/>
            
            <LightContentText className="text-white text-lg" content={'.'} />
            <LightContentText className="text-white text-lg" content={'Fantastic'}/>
          
          </View>
        </View>
      </View>

      <View
        className="absolute top-0 left-0 right-0 bottom-0"
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(3, 7, 18, 0.6)',
        }}></View>
    </View>
  );
};

export default TrendGame;

const styles = StyleSheet.create({});
