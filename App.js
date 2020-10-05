import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MoviesListScreen from './MoviesListScreen';
import Movie from './Movie';

const Stack = createStackNavigator();

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MoviesList"
          screenOptions={{headerTitleAlign: 'center'}}>
          <Stack.Screen
            name="MoviesList"
            component={MoviesListScreen}
            options={{title: 'Movies'}}
          />
          <Stack.Screen name="Movie" component={Movie} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
