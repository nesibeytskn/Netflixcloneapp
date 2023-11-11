import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {images} from '../../utils/constants';

const LogoImage = ({style}) => {
  return (
    <View className="items-center">
      <View
        className=""
        style={[{
          width: 150,
          height: 150,
          borderRadius: 10,
          position: 'relative',
        },style]}>
        <Image
          source={{uri: images.gameposter}}
          style={{
            width:'100%',
            height:'100%',
            borderRadius:10,
            resizeMode:'cover'
          }}
        />
        <Image
          source={require('../../assets/images/netflixlogo.png')}
          style={{
            width: 20,
            height: 20,
            position: 'absolute',

            marginLeft: 4,
          }}
        />
      </View>
    </View>
  );
};

export default LogoImage;

const styles = StyleSheet.create({});
