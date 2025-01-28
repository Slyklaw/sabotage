import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const SQUARE_SIZE = Math.min(width / 15, 50);

const Square = ({ row, col }) => (
  <View style={[
    styles.square,
    { 
      backgroundColor: (row + col) % 2 === 0 
        ? 'rgba(0, 0, 0, 0.1)' 
        : 'rgba(0, 0, 0, 0.05)',
      width: SQUARE_SIZE,
      height: SQUARE_SIZE,
    }
  ]} />
);

const Board = () => (
  <View style={styles.board}>
    {Array.from({ length: 7 }).map((_, row) => (
      <View key={row} style={styles.row}>
        {Array.from({ length: 15 }).map((_, col) => (
          <Square key={col} row={row} col={col} />
        ))}
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  board: {
    flex: 0,
    borderWidth: 2,
    borderColor: '#333',
    backgroundColor: '#fff',
    alignSelf: 'center', // Centers the board horizontally
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.05)',
  },
});

export default Board;
