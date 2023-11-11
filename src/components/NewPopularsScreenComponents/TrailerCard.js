import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import VideoPlayer from 'react-native-video-player';
import VideoHeader from './VideoHeader';
import {images} from '../../utils/constants';
import VideoInfo from './VideoInfo';

const TrailerCard = ({movieInfo, onPress}) => {
  //console.log(movieInfo.backdrop_path);
  return (
    <TouchableOpacity onPress={onPress} className="flex-row pl-3 pt-3">
      <View className="p-3" style={{maxWidthwidth: '15%', minWidth: '10%'}}>
        <Text className="text-white" style={{fontWeight: 400}}>
          AĞU
        </Text>
        <Text className="text-white" style={{fontWeight: 900, fontSize: 40}}>
          24
        </Text>
      </View>
      <View style={{width: '80%'}} className="p-3">
        <View className="rounded-xl" style={{width: '100%', height: 400}}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/original${movieInfo.poster_path}`,
            }}
            style={{height: 400, width: '100%', resizeMode: 'cover'}}
            className="rounded-xl"
          />
        </View>
        <View>
          <VideoHeader videoName={movieInfo.title} />
          <VideoInfo
            overview={movieInfo.overview}
            release_date={movieInfo.release_date}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TrailerCard;

const styles = StyleSheet.create({});
