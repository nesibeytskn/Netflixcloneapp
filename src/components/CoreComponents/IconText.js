import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PIcon from './PIcon'
import Icons from 'react-native-vector-icons/MaterialIcons'

const IconText = ({iconName,title, color, size}) => {
  return (
    <View className='items-center justify-center'>
      <Icons size={size} color={color} name={iconName}/>
      <Text className='text-gray-400 text-center' >{title}</Text>
    </View>
  )
}

export default IconText

const styles = StyleSheet.create({})