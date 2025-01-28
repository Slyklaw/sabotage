import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Board from './components/Board';
import PlayerScore from './components/PlayerScore';
import TurnIndicator from './components/TurnIndicator';

const INITIAL_BOARD = Array(7).fill().map((_, row) => 
  Array(15).fill().map((_, col) => ({
    isPlayer1: col === 3 && row === 3,
    isPlayer2: col === 11 && row === 3,
    hasCrown: col === 7 && row === 3,
    isHome1: col === 3 && row === 3,
    isHome2: col === 11 && row === 3,
  }))
);

export default function App() {
  const [currentTurn, setCurrentTurn] = useState('Player 1');
  const [boardState, setBoardState] = useState(INITIAL_BOARD);

  // Calculate scores based on board state
  const player1Score = boardState.reduce((acc, row) => 
    acc + row.filter(cell => cell.isPlayer1).length, 0
  );
  
  const player2Score = boardState.reduce((acc, row) => 
    acc + row.filter(cell => cell.isPlayer2).length, 0
  );

  const handleSquarePress = (row, col) => {
    const cell = boardState[row][col];
    if (cell.hasCrown) return;

    if (currentTurn === 'Player 1' && cell.isPlayer1) {
      setCurrentTurn('Player 2');
    } else if (currentTurn === 'Player 2' && cell.isPlayer2) {
      setCurrentTurn('Player 1');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <View style={styles.header}>
        <PlayerScore 
          playerName="Player 1" 
          score={player1Score} 
          color="#6ac4ff" 
          alignLeft 
        />
        <TurnIndicator 
          currentTurn={currentTurn} 
          color={currentTurn === 'Player 1' ? '#6ac4ff' : '#ff6b6b'} 
        />
        <PlayerScore 
          playerName="Player 2" 
          score={player2Score}
          color="#ff6b6b" 
        />
      </View>

      <View style={styles.boardWrapper}>
        <Board boardState={boardState} onSquarePress={handleSquarePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a', // Dark background
  },
  header: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333', // Darker separator
  },
  boardWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
});
