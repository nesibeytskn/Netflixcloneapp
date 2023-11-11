import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useContext, memo} from 'react';
import PIcon from '../CoreComponents/PIcon';
import {images} from '../../utils/constants';

import {DataContext} from '../../context/context';

const SearchCard = ({onPress, searchInfo}) => {
  const {searchedMovie, setSearchedMovie} = useContext(DataContext);
  //console.log(searchedMovie);
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row justify-between items-center mb-3 mt-1">
      <View className="flex-row items-center  gap-5">
        <Image
          source={{
            uri: searchInfo
              ? `https://image.tmdb.org/t/p/original${searchInfo?.poster_path}`
              : images.oppenheimer,
          }}
          className="w-20 h-20 rounded-lg"
        />
        <Text className="text-white text-lg font-semibold">
          {searchInfo ? searchInfo?.title : 'Oppenheimer'}
        </Text>
      </View>

      <PIcon name={'play-circle-outline'} color={'white'} size={30} />
    </TouchableOpacity>
  );
};

export default memo(SearchCard);

const styles = StyleSheet.create({});
