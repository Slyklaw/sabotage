import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Board from './components/Board';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Board />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
