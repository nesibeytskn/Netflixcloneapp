import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import PIcon from '../CoreComponents/PIcon';

const FilterItem = ({filterLabel, filterIcon}) => {
  return (
    <TouchableOpacity className="flex-row  border border-white rounded-full px-3 py-2 mr-3 items-center justify-center">
      <Text className="text-white">{filterLabel}</Text>
      {filterIcon && (
        <PIcon claass="ml-2" color={'white'} name={filterIcon} size={25} />
      )}
    </TouchableOpacity>
  );
};

export default FilterItem;

const styles = StyleSheet.create({});
