import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TurnIndicator = ({ currentTurn }) => (
  <View style={styles.container}>
    <Text style={styles.label}>Current Turn:</Text>
    <Text style={styles.turnText}>{currentTurn}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 4, // Align with score components
  },
  label: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 2,
  },
  turnText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#e74c3c',
  },
});

export default TurnIndicator;
