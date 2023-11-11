import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DownloadScreenHeader from './DownloadScreenHeader'
import SmartDownloads from './SmartDownloads'

const DownloadsScreenTop = () => {
  return (
    <View className='' style={{gap:10}}>
      <DownloadScreenHeader/>
      <SmartDownloads/>
    </View>
  )
}

export default DownloadsScreenTop

const styles = StyleSheet.create({})