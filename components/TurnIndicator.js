import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TurnIndicator = ({ currentTurn, color }) => (
  <View style={styles.container}>
    <Text style={styles.label}>Current Turn:</Text>
    <Text style={[styles.turnText, { color }]}>{currentTurn}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 4,
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginBottom: 2,
  },
  turnText: {
    fontSize: 20,
    fontWeight: '700',
  },
});

export default TurnIndicator;
