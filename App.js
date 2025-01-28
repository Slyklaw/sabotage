import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Board from './components/Board';
import PlayerScore from './components/PlayerScore';
import TurnIndicator from './components/TurnIndicator';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.header}>
        <PlayerScore playerName="Player 1" score={0} alignLeft />
        <TurnIndicator currentTurn="Player 1" />
        <PlayerScore playerName="Player 2" score={0} />
      </View>

      <View style={styles.boardWrapper}>
        <Board />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start', // Align items to top
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  boardWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20, // Compensate for header height
  },
});
