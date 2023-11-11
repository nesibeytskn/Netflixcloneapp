import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeaderText = ({title}) => {
  return (
    <View>
      <Text className='text-white text-2xl fontbold' >{title}</Text>
    </View>
  )
}

export default HeaderText

const styles = StyleSheet.create({})