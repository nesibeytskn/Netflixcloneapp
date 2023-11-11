import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PIcon from '../CoreComponents/PIcon';
import Avatar from '../CoreComponents/Avatar';
import {useNavigation} from '@react-navigation/native';

const DetailScreenHeader = () => {
  const navigation = useNavigation();
  return (
    <View className="mt-11 p-1 pb-5 flex-row justify-between items-center">
      <PIcon
        name={'arrow-back'}
        color={'white'}
        size={24}
        onPress={() => navigation.goBack()}
      />
      <Avatar />
    </View>
  );
};

export default DetailScreenHeader;

const styles = StyleSheet.create({});
