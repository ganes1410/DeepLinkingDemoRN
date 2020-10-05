import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, Text, StyleSheet} from 'react-native';

function Movie() {
  const route = useRoute();
  const navigation = useNavigation();
  const {movieId} = route.params;
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function getMovieDetails() {
      const result = await fetch(
        `https://swapi.dev/api/films/${movieId}/`,
      ).then((r) => r.json());
      navigation.setOptions({headerTitle: result.title});
      setMovieDetails(result);
    }
    getMovieDetails();
  }, [movieId, navigation]);

  if (!movieDetails) {
    return <ActivityIndicator size="small" style={{marginTop: 20}} />;
  }

  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 30}}
      style={styles.scrollView}>
      <Text style={styles.titleText}>Planets</Text>
      {movieDetails.planets.map((planet, index) => (
        <Text key={planet} style={styles.linkText}>
          {' '}
          {planet}
        </Text>
      ))}
      <Text style={styles.titleText}>Characters</Text>
      {movieDetails.planets.map((character, index) => (
        <Text key={character} style={styles.linkText}>
          {character}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    paddingHorizontal: 22,
    paddingTop: 20,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginVertical: 2,
  },
  titleText: {fontWeight: 'bold', marginVertical: 6, fontSize: 18},
});

export default Movie;
