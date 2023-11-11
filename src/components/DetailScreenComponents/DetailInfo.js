import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';
import SpecialButton from '../CoreComponents/SpecialButton';

const DetailInfo = ({overview}) => {
  return (
    <View style={{gap: 10}}>
      <View className="flex-row  mb-4 items-center gap-2">
        <View className="p-1 rounded" style={{backgroundColor: 'red'}}>
          <Icons name={'thumb-up'} size={20} color={'white'} />
        </View>
        <Text className="text-white font-bold text-lg">Çok Beğenildi</Text>
      </View>
      <Text className="text-white font-semibold text-lg">
        3. Sezonun Yayın Tarihi
      </Text>
      <SpecialButton
        className="mr-2"
        type={'light'}
        title={'Oynat'}
        buttonIcon={'play'}
      />
      <SpecialButton
        className="mr-2"
        type={'dark'}
        title={'İndir: S1:B1'}
        buttonIcon={'arrow-down'}
      />
      <Text className='text-white'>
        {overview}
      </Text>
      <View className='flex-row gap-1'>
        <Text className='text-gray-500'>Başroldekiler</Text>
        <Text className='text-gray-400' style={{width:300}}>David Stakston, Herman Tommeraas, Theresa Frostad ...</Text>
      </View>
    </View>
  );
};

export default DetailInfo;

const styles = StyleSheet.create({});
