import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/screens/loginScreen/Login';
import SignUpScreen from './app/screens/loginScreen/SignUpScreen';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Constants from "expo-constants"


export default function App() {
  return (
    <ClerkProvider publishableKey="pk_test_bHVja3ktaGVybWl0LTU3LmNsZXJrLmFjY291bnRzLmRldiQ">
    <View style={styles.container}>
      
      <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        <SignedOut>
        <Login />
        {/* <SignUpScreen /> */}
        </SignedOut>
      <StatusBar style="auto" />

    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 0
  },
});
