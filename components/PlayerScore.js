import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlayerScore = ({ playerName, score, alignLeft }) => (
  <View style={[styles.container, alignLeft ? { alignItems: 'flex-start' } : { alignItems: 'flex-end' }]}>
    <Text style={styles.playerName}>{playerName}</Text>
    <Text style={styles.score}>{score}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    minWidth: 100,
    marginTop: 4,
  },
  playerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#e0e0e0', // Light text
  },
  score: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4cd964', // Vibrant green score
    marginTop: 2,
  },
});

export default PlayerScore;
