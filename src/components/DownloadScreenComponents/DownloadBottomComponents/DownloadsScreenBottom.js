import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import HeaderText from '../../CoreComponents/HeaderText';
import LightContentText from '../../CoreComponents/LightContentText';
import DownloadsPoster from './DownloadsPoster';
import SpecialButton from '../../CoreComponents/SpecialButton';
const DownloadsScreenBottom = () => {
  return (
    <View className='px-4' style={{gap:15}}>
      <HeaderText
        title={'Sizin için İndirilenler Özelliğini Etkinleştirin'}></HeaderText>
      <LightContentText
        content={
          'Her zaman izleyecek bir şeyleriniz olsun diye tamamen size özel dizileri ve filmleri indireceğiz'
        }></LightContentText>
        <View className='items-center mt-5'>
          <DownloadsPoster/>
          <TouchableOpacity className='bg-blue-500 w-full items-center rounded py-2 mt-5 mb-12'>
            <Text className='text-white'>Ayarla</Text>
          </TouchableOpacity>
          <SpecialButton type={'dark'} title={'İndirebileceğiniz Diğer İçerikler'} />
        </View>
    </View>
  );
};

export default DownloadsScreenBottom;

const styles = StyleSheet.create({});
