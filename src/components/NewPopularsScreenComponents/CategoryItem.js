import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {DataContext} from '../../context/context';

const CategoryItem = ({source, catName, active, onPress}) => {
  const {catIndex} = useContext(DataContext);
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row items-center justify-center ${
        catIndex.name == catName && 'bg-gray-200'
      } m-2 px-2 py-1 rounded-full`}>
      <Image source={source} className="w-6 h-6 mr-1" />
      <Text
        className={`font-bold text-xs ${
          catIndex.name == catName ? 'text-black' : 'text-white'
        }  `}>
        {catName}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({});
