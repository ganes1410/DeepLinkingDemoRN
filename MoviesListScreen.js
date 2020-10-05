import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import SimpleCard from './SimpleCard';

function MoviesListScreen() {
  const [sWFilms, setSwFilms] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function init() {
      const result = await fetch('https://swapi.dev/api/films/').then((res) =>
        res.json(),
      );
      setSwFilms(result.results);
    }

    init();
  }, []);

  if (sWFilms.length === 0)
    return <ActivityIndicator size="small" style={{marginTop: 20}} />;

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        {sWFilms.map((film, index) => (
          <SimpleCard
            text={film.title}
            key={film.title}
            onPress={() => navigation.navigate('Movie', {movieId: index + 1})}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingHorizontal: 22,
    paddingTop: 20,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

export default MoviesListScreen;
