import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useContext, memo} from 'react';
import PIcon from '../CoreComponents/PIcon';
import {DataContext} from '../../context/context';

const SearchBar = () => {
  const {search, setSearch} = useContext(DataContext);
  //console.log(search)
  return (
    <View className="bg-gray-600 w-full flex-row justify-between p-2 rounded-md mt-2">
      <View className="flex-row " style={{gap: 10}}>
        <PIcon name={'search-outline'} color={'#9ca3af'} size={24} />
        <TextInput
          value={search}
          onChangeText={text => setSearch(text)}
          placeholderTextColor={'#9ca3af'}
          className="text-white"
          placeholder="İçerik, tür veya kişi adıyla arayın"
        />
      </View>

      <PIcon name={'mic-outline'} color={'#9ca3af'} size={24} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
