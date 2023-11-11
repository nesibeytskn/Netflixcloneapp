import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Vibration,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import DetailScreenHeader from '../../components/DetailScreenComponents/DetailScreenHeader';
import {images} from '../../utils/constants';
import DetailHeader from '../../components/DetailScreenComponents/DetailHeader';
import DetailInfo from '../../components/DetailScreenComponents/DetailInfo';
import IconsBar from '../../components/DetailScreenComponents/IconsBar';
import DetailBottom from '../../components/DetailScreenComponents/DetailBottomComponents/DetailBottom';
import {useRoute} from '@react-navigation/native';
import {DataContext} from '../../context/context';

const DetailScreen = () => {
  const route = useRoute();
  console.log(route.params.movie);
  const {title, id, poster_path, overview} = route.params.movie;
  return (
    <View className="flex-1 bg-black">
      <DetailScreenHeader />
      <View className=" flex-1">
        <ScrollView className="flex-1">
          <View className="">
            <View className="w-screen h-60">
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/original${poster_path}`,
                }}
                className="w-screen h-60"
                style={{width:'100%',height:'100%' ,resizeMode: 'cover'}}
              />
            </View>

            <View className="ml-3 mt-2 mb-6" style={{gap: 15}}>
              <DetailHeader header={title} />
              <DetailInfo overview={overview} />
              <IconsBar />
            </View>
          </View>
          <DetailBottom />
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
