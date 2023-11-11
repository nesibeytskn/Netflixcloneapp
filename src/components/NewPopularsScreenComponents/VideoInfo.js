import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TagItem from './TagItem';
import {tags} from '../../utils/constants';

const VideoInfo = ({overview, release_date}) => {
  return (
    <View>
      <Text className="text-white font-bold text-lg my-2">
        3. sezonun yayın tarihi : {release_date}
      </Text>
      <Text className="text-white my-2 text-gray-400">
        {overview}
      </Text>
      <View className="flex-row items-center">
        {tags.map((tag, index) => (
          <TagItem label={tag} index={index} key={index} />
        ))}
      </View>
    </View>
  );
};

export default VideoInfo;

const styles = StyleSheet.create({});
