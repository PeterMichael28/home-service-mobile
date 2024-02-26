import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeSCreen from '../screens/homeScreen/HomeScreen';
import BookingScreen from '../screens/bookingScreen/BookingScreen';
import ProfileScreen from '../screens/profileScreen/ProfileScreen';
import { Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../utils/colors';
import HomeNavigation from './HomeNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
 return (
  <Tab.Navigator
   screenOptions={{
    headerShown: false,
    tabBarActiveTintColor:colors.pry
   }}
  >
   <Tab.Screen
    name="Home"
    component={HomeNavigation}
    options={{
     tabBarLabel: ({ color }) => (
      <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
       Home
      </Text>
     ),
     tabBarIcon: ({ color, size }) => (
      <FontAwesome
       name="home"
       size={size}
       color={color}
      />
     ),
    }}
   />
   <Tab.Screen
    name="booking"
    component={BookingScreen}
    options={{
     tabBarLabel: ({ color }) => (
      <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
       Booking
      </Text>
     ),
     tabBarIcon: ({ color, size }) => (
      <FontAwesome
       name="bookmark"
       size={size}
       color={color}
      />
     ),
    }}
   />
   <Tab.Screen
    name="profile"
    component={ProfileScreen}
    options={{
     tabBarLabel: ({ color }) => (
      <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
       Profile
      </Text>
     ),
     tabBarIcon: ({ color, size }) => (
      <FontAwesome
       name="user-circle"
       size={size}
       color={color}
      />
     ),
    }}
   />
  </Tab.Navigator>
 );
}
