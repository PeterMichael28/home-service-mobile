import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/screens/loginScreen/Login';
import SignUpScreen from './app/screens/loginScreen/SignUpScreen';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Constants from "expo-constants"
import * as SecureStore from "expo-secure-store";
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './app/Navigations/TabNavigation';

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};
 
const [fontsLoaded, fontError] = useFonts({
  'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
  'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
  'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
});


export default function App() {
  return (
    <ClerkProvider publishableKey="pk_test_bHVja3ktaGVybWl0LTU3LmNsZXJrLmFjY291bnRzLmRldiQ"
    tokenCache={tokenCache}
    >
    <View style={styles.container}>
      
      <SignedIn>
          <NavigationContainer>
            <TabNavigation />
      </NavigationContainer>
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
