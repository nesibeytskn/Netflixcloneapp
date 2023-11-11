import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconText from '../CoreComponents/IconText';

const IconsBar = () => {
  return (
    <View className="flex-row items-center justify-between px-8">
      <IconText size={30} color={'white'} title={'Listem'} iconName={'add'} />
      <IconText
        size={30}
        color={'white'}
        title={'Puan Ver'}
        iconName={'thumb-up'}
      />
      <IconText size={30} color={'white'} title={'Paylaş'} iconName={'share'} />
      <IconText
        size={30}
        color={'white'}
        title={'İndir \n(1.sezon)'}
        iconName={'file-download'}
      />
    </View>
  );
};

export default IconsBar;

const styles = StyleSheet.create({});
