import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

const Board = ({ boardState }) => {
  const { width } = Dimensions.get('window');
  const BOARD_MAX_WIDTH = width * 0.95;
  const SQUARE_SIZE = Math.min(BOARD_MAX_WIDTH / 15, 50);

  const getSquareColor = (cell) => {
    if (cell.hasCrown) return '#b8860b'; // Dark gold for crown
    if (cell.isHome1) return '#1a4a6a';  // Dark blue for Player 1 home
    if (cell.isHome2) return '#6a1a1a';  // Dark red for Player 2 home
    return (cell.row + cell.col) % 2 === 0 
      ? 'rgba(255, 255, 255, 0.1)' 
      : 'rgba(255, 255, 255, 0.05)';
  };

  return (
    <View style={[styles.board, { maxWidth: BOARD_MAX_WIDTH }]}>
      {boardState.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) => (
            <View
              key={colIndex}
              style={[
                styles.square,
                { 
                  backgroundColor: getSquareColor({ ...cell, row: rowIndex, col: colIndex }),
                  width: SQUARE_SIZE,
                  height: SQUARE_SIZE,
                }
              ]}
            >
              {/* Player Pieces */}
              {(cell.isPlayer1 || cell.isPlayer2) && (
                <View style={[
                  styles.piece,
                  { 
                    backgroundColor: cell.isPlayer1 ? '#6ac4ff' : '#ff6b6b',
                    borderColor: cell.isPlayer1 ? '#4fa3d1' : '#d14f4f',
                  }
                ]} />
              )}
              
              {/* Crown Icon */}
              {cell.hasCrown && (
                <Icon 
                  name="crown" 
                  size={SQUARE_SIZE * 0.6} 
                  color="#ffd700" 
                  style={styles.crown} 
                />
              )}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    borderWidth: 2,
    borderColor: '#4a4a4a',
    backgroundColor: '#2d2d2d',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  square: {
    borderRightWidth: 1,
    borderRightColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  piece: {
    width: '70%',
    height: '70%',
    borderRadius: 50,
    borderWidth: 2,
    position: 'absolute',
  },
  crown: {
    position: 'absolute',
  },
});

export default Board;
