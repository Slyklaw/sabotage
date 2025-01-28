import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlayerScore = ({ playerName, score, color, alignLeft }) => (
  <View style={[styles.container, alignLeft ? { alignItems: 'flex-start' } : { alignItems: 'flex-end' }]}>
    <Text style={[styles.playerName, { color }]}>{playerName}</Text>
    <Text style={[styles.score, { color }]}>{score}</Text>
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
  },
  score: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 2,
  },
});

export default PlayerScore;
