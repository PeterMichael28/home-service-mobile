import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeSCreen from '../screens/homeScreen/HomeScreen';
import BusinessListsByCategoryNameScreen from '../screens/BusinessListsByCategoryNameScreen/BusinessListsByCategoryNameScreen';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeSCreen} />
      <Stack.Screen name="business-list" component={BusinessListsByCategoryNameScreen} />
      
    </Stack.Navigator>
  )
}