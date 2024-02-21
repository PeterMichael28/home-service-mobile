import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/screens/loginScreen/login';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Subscribe to my michael app</Text>
      <StatusBar style="auto" />

      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
