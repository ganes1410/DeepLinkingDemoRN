import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

function SimpleCard({text = '', onPress = () => {}}) {
  return (
    <TouchableOpacity style={styles.cardView} onPress={onPress}>
      <Text style={styles.cardText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardView: {
    height: 60,
    backgroundColor: 'white',
    marginBottom: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 20,
  },
});

export default SimpleCard;
