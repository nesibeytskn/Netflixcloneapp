import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PosterImage from './PosterImage';
import {images, miniposter} from '../../../utils/constants';

const DownloadsPoster = () => {
  return (
    <View
      className="rounded-full items-center justify-center"
      style={{height: 250, width: 250}}>
      <View className="flex-row" style={{gap: 25, marginTop: 40}}>
        <PosterImage
          source={images.vandetta}
          style={{transform: [{rotate: '-25deg'}]}}
        />
        <PosterImage
          source={ images.sharlock}
          style={{transform: [{rotate: '25deg'}]}}
        />
      </View>
      <View>
        <PosterImage
          source={ images.oppenheimer}
          style={{height: 200, marginTop: -210, width:150}}
        />
      </View>
    </View>
  );
};

export default DownloadsPoster;

const styles = StyleSheet.create({});
