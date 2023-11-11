import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PIcon from '../CoreComponents/PIcon';

const VideoHeader = ({videoName}) => {
  return (
    <View className='flex-row items-center justify-between pt-2 '>
      <Text className="text-white font-bold" style={{fontSize:20, letterSpacing:5, maxWidth:'60%'}}>{videoName}</Text>

      <View className='items-center justify-center'>
      <PIcon name={'notifications-outline'} color={'white'} size={25}/>
      <Text className='text-white' style={{fontWeight:200, fontSize:10}}>Bana Hatırlat</Text>
      </View>
      <View className='items-center justify-center'>
      <PIcon name={'information-circle-outline'} color={'white'} size={25}/>
      <Text className='text-white' style={{fontWeight:200, fontSize:10}}>Bilgi</Text>
      </View>
     
      
    </View>
  );
};

export default VideoHeader;

const styles = StyleSheet.create({});
