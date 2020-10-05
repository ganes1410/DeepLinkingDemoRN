import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
  View,
} from 'react-native';

const App = () => {
  const [sWFilms, setSwFilms] = useState([]);

  useEffect(() => {
    async function init() {
      const result = await fetch('https://swapi.dev/api/films/').then((res) =>
        res.json(),
      );
      console.log({result});
      setSwFilms(result.results);
    }

    init();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView>
          {sWFilms.map((film) => (
            <View style={{height: 60}}>
              <Text>
                {film.title} ({film.episode_id})
              </Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingHorizontal: 22,
    paddingTop: 20,
  },
});

export default App;
