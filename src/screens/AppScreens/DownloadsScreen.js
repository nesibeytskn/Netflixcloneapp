import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DownloadScreenHeader from '../../components/DownloadScreenComponents/DownloadScreenTopComponents/DownloadScreenHeader';

import SmartDownloads from '../../components/DownloadScreenComponents/DownloadScreenTopComponents/SmartDownloads';
import DownloadsScreenBottom from '../../components/DownloadScreenComponents/DownloadBottomComponents/DownloadsScreenBottom';
import DownloadsScreenTop from '../../components/DownloadScreenComponents/DownloadScreenTopComponents/DownloadsScreenTop';

const DownloadsScreen = () => {
  return (
    <View  className="flex-1 pt-16 px-2 bg-black">
      <DownloadsScreenTop/>
      <DownloadsScreenBottom />
    </View>
  );
};

export default DownloadsScreen;

const styles = StyleSheet.create({});
