import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LogoImage from '../CoreComponents/LogoImage'
import SHeaderText from '../CoreComponents/SHeaderText'
import LightContentText from '../CoreComponents/LightContentText'

const GameCard = () => {
  return (
    <View style={{marginTop:10, marginRight:10}}>
      <LogoImage/>
      <View style={{marginTop:10}}>
      <SHeaderText  title={'The Lost Of Us'}/>
      <LightContentText content={'war game'}/>
      </View>
      
    </View>
  )
}

export default GameCard

const styles = StyleSheet.create({})