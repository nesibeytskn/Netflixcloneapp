import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import PIcon from '../CoreComponents/PIcon';
import Avatar from '../CoreComponents/Avatar';
import SearchBar from './SearchBar';
import {useNavigation} from '@react-navigation/native';
import SearchCard from './SearchCard';
import HomeStackScreen from '../../screens/StackScreens/HomeStackScreen';
import NewPopularsScreen from '../../screens/AppScreens/NewPopularsScreen';

const SearchScreenHeader = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View className="flex-row mt-11 justify-between p-2">
        <View>
          <PIcon
            onPress={() => navigation.goBack()}
            name={'arrow-back'}
            size={24}
            color={'white'}
          />
        </View>
        <View>
          <Avatar />
        </View>
      </View>

      <View>
        <SearchBar />
      </View>
    </View>
  );
};

export default memo(SearchScreenHeader);

const styles = StyleSheet.create({});
