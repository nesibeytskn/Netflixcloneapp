import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PIcon from '../../CoreComponents/PIcon';
import Avatar from '../../CoreComponents/Avatar';
import {useNavigation} from '@react-navigation/native';

const DownloadScreenHeader = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-row justify-between items-center ">
      <Text className="text-white text-2xl font-bold">İndirilenler</Text>
      <View
        className="flex-row justify-between items-center "
        style={{gap: 15}}>
        <PIcon
          color={'white'}
          name={'search'}
          size={25}
          onPress={() => navigation.navigate('SearchStackScreen')}
        />
        <Avatar />
      </View>
    </View>
  );
};

export default DownloadScreenHeader;

const styles = StyleSheet.create({});
