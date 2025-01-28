import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Board from './components/Board';
import PlayerScore from './components/PlayerScore';
import TurnIndicator from './components/TurnIndicator';

export default function App() {
  const [currentTurn, setCurrentTurn] = useState('Player 1');
  
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <View style={styles.header}>
        <PlayerScore 
          playerName="Player 1" 
          score={0} 
          color="#6ac4ff" // Off-blue
          alignLeft 
        />
        <TurnIndicator 
          currentTurn={currentTurn} 
          color={currentTurn === 'Player 1' ? '#6ac4ff' : '#ff6b6b'} 
        />
        <PlayerScore 
          playerName="Player 2" 
          score={0}
          color="#ff6b6b" // Off-red
        />
      </View>

      <View style={styles.boardWrapper}>
        <Board />
      </View>
    </View>
  );
}

// ... rest of App.js styles remain the same
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
