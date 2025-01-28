import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const Board = () => {
  const { width } = Dimensions.get('window');
  const BOARD_MAX_WIDTH = width * 0.95;
  const SQUARE_SIZE = Math.min(BOARD_MAX_WIDTH / 15, 50);

  return (
    <View style={[styles.board, { maxWidth: BOARD_MAX_WIDTH }]}>
      {Array.from({ length: 7 }).map((_, row) => (
        <View key={row} style={styles.row}>
          {Array.from({ length: 15 }).map((_, col) => (
            <View
              key={col}
              style={[
                styles.square,
                { 
                  backgroundColor: (row + col) % 2 === 0 
                    ? 'rgba(0, 0, 0, 0.1)' 
                    : 'rgba(0, 0, 0, 0.05)',
                  width: SQUARE_SIZE,
                  height: SQUARE_SIZE,
                }
              ]}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    borderWidth: 2,
    borderColor: '#333',
    backgroundColor: '#fff',
    alignSelf: 'center',
    overflow: 'hidden', // Ensures inner squares don't overlap borders
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1, // Add subtle separation between rows
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  square: {
    borderRightWidth: 1, // Add subtle separation between columns
    borderRightColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export default Board;
