import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import PIcon from '../CoreComponents/PIcon';
import Avatar from '../CoreComponents/Avatar';
import {images} from '../../utils/constants';
import NewPopularsScreenCategoryBar from './NewPopularsScreenCategoryBar';
import {useNavigation} from '@react-navigation/native';

const NewPopularsScreenHeader = () => {
  const navigation = useNavigation();
  return (
    //Header için ana taşıyıcı
    <View>
      {/*üst kısım için taşıyıcı */}
      <View className="width-full flex-row  justify-between pt-14 ">
        {/*Left side */}
        <View>
          <Text className="text-white font-bold text-xl ">Yeni ve Popular</Text>
        </View>

        <View className="flex-row p-2  " style={{gap: 20}}>
          <PIcon
            onPress={() => navigation.navigate('SearchStackScreen')}
            size={28}
            name={'search'}
            color={'white'}
          />
          <PIcon size={28} name={'notifications-outline'} color={'white'} />
          <Avatar image={images.avatarImages} />
        </View>
      </View>
      {/*Kategoriler için ana taşıyıcı */}
      <View>
        <NewPopularsScreenCategoryBar />
      </View>
    </View>
  );
};

export default memo(NewPopularsScreenHeader);

const styles = StyleSheet.create({});
