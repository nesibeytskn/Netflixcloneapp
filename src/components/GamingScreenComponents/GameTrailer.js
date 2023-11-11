import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderText from '../CoreComponents/HeaderText';
import Video from 'react-native-video-player';
import LogoImage from '../CoreComponents/LogoImage';
import SHeaderText from '../CoreComponents/SHeaderText';
import LightContentText from '../CoreComponents/LightContentText';

const GameTrailer = () => {
  return (
    <View className='mt-2'>
      <HeaderText title={'Mobil Oyun Fragmanları'} />
      <View style={{marginTop:5,position:'relative',width: '100%', backgroundColor: '', height: 250}}>
        <Video 
        autoPlay={'true'}
          video={require('../../assets/videos/video1.mp4')}
          videoWidth={1600}
          videoHeight={900}
          style={styles.backgroundVideo}
        />
      </View>
      <View className='flex-row mt-3' style={{gap:15}}>
        <LogoImage style={{width:75,height:75}}/>
        <View>
          <SHeaderText title={'Terra Nil'}/>
          <LightContentText content={'Simülasyon Oyunu'}/>
        </View>
      </View>
    </View>
  );
};

export default GameTrailer;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius:10
  },
});
