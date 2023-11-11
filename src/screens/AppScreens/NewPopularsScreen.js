import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState, useContext, memo} from 'react';
import NewPopularsScreenHeader from '../../components/NewPopularsScreenComponents/NewPopularsScreenHeader';
import TrailerCard from '../../components/NewPopularsScreenComponents/TrailerCard';
import {DataContext} from '../../context/context';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SpecialButton from '../../components/CoreComponents/SpecialButton';

const NewPopularsScreen = () => {
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const {catIndex} = useContext(DataContext);

  console.log('ben render oluyorum');
  const navigation = useNavigation();

  const CACHE_KEY = 'movie_cache';

  const cacheMovies = async moviesData => {
    try {
      const jsonData = JSON.stringify(moviesData);
      await AsyncStorage.setItem(catIndex.url, jsonData);
    } catch (error) {
      console.log('cacheMovies', error);
    }
  };

  const getCachedMovies = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(catIndex.url);
      return jsonData ? JSON.parse(jsonData) : null;
    } catch (error) {
      console.log('getCachedMovies', error);
    }
  };
  const removeCache = async() => {
    try {
      await AsyncStorage.clear();
    } catch (error) {}
  };

  const getMovies = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGJlNDgwNjllMjJmODZmZDI5NDM2MDYyOWQ2YTIwZCIsInN1YiI6IjY1Mjk5ZWE5MGNiMzM1MTZmNzQ2YzQ1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QeYprGtUwEp0FFRquFouiwnRwwLulgDchB7LKvXq33U',
      },
    };

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${catIndex.url}`,
        options,
      );
      if (!response.ok) {
        throw new Error('Bağlantı Hatası');
      }
      const data = await response.json();
      setMovies(data.results);
      cacheMovies(data.results);
    } catch (error) {
      console.log('', error);
    } finally {
      setIsLoading(false);
    }
  };

  const [prevCatIndexUrl, setPrevCatIndexUrl] = useState(null);

  useEffect(() => {
    if (prevCatIndexUrl !== catIndex.url) {
      //removeCache(CACHE_KEY);
      setPrevCatIndexUrl(catIndex.url);
    }

    getCachedMovies().then(cachedMovies => {
      console.log('useeffect', cachedMovies);
      if (cachedMovies) {
        setMovies(cachedMovies);
        setIsLoading(false);
      } else {
        getMovies();
      }
    });
  }, [catIndex.url, prevCatIndexUrl]);
  //console.log(movies);

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View className="flex-1 bg-black">
      <NewPopularsScreenHeader />
      <SpecialButton
        title={'Delete'}
        type={'light'}
        onPress={() => removeCache()}
      />
      <FlatList
        data={movies}
        renderItem={({item}) => {
          return (
            <TrailerCard
              onPress={() => navigation.navigate('DetailScreen', {movie: item})}
              movieInfo={item}
            />
          );
        }}
      />
    </View>
  );
};

export default NewPopularsScreen;

const styles = StyleSheet.create({});
