import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import SearchScreenHeader from '../../components/SearchScreenComponents/SearchScreenHeader';
import SearchCard from '../../components/SearchScreenComponents/SearchCard';
import {useNavigation} from '@react-navigation/native';
import {DataContext} from '../../context/context';

const SearchScreen = () => {
  const navigation = useNavigation();
  const {search, setSearch} = useContext(DataContext);
  const {searchedMovie, setSearchedMovie} = useContext(DataContext);
  const searchMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=f8be48069e22f86fd294360629d6a20d&query=${search}&include_adult=false&language=en-US`,
    );
    const data = await response.json();
    //console.log(data.results[0].title)
    setSearchedMovie(data.results);
  };

  useEffect(() => {
    searchMovie();
  }, [search]);
  //console.log(searchedMovie);
  return (
    <View className="flex-1 bg-black ">
      <SearchScreenHeader />
      <View className="p-2">
       
        <Text className="text-white font-bold my-2">En Çok Arananlar</Text>
        <FlatList style={{marginBottom:50}}
          data={searchedMovie}
          ListEmptyComponent={
            <SearchCard onPress={() => navigation.navigate('DetailScreen')} />
          }
          renderItem={({item}) => (
            <SearchCard onPress={() => navigation.navigate('DetailScreen',{movie:item})}searchInfo={item}/>
          )}
        />
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
