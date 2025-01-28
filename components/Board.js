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
                    ? 'rgba(255, 255, 255, 0.1)'  // Light pattern
                    : 'rgba(255, 255, 255, 0.05)', // Dark pattern
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
    borderColor: '#4a4a4a', // Brighter border
    backgroundColor: '#2d2d2d', // Dark board background
    alignSelf: 'center',
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)', // Light grid lines
  },
  square: {
    borderRightWidth: 1,
    borderRightColor: 'rgba(255, 255, 255, 0.1)', // Light grid lines
  },
});

export default Board;
