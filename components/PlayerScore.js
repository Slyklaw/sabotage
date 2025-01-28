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
    marginTop: 4, // Reduced vertical spacing
  },
  playerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  score: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 2, // Reduced spacing between name and score
  },
});

export default PlayerScore;
