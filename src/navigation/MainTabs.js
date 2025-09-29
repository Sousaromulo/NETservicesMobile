import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// 📌 Telas das Tabs
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ServicesScreen from '../screens/ServicesScreen';
import CompassScreen from '../screens/CompassScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          width: '95%',
          marginLeft: '2.5%',
          position: 'absolute',
          bottom: 20,
          backgroundColor: '#3366FF',
          borderRadius: 20,
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
          elevation: 5,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 4,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#d9d9d9',
        tabBarIcon: ({ focused, color }) => {
          let iconName = 'home-outline';
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Compass':
              iconName = focused ? 'compass' : 'compass-outline';
              break;
            case 'Search':
              iconName = focused ? 'search' : 'search-outline';
              break;
            case 'Services':
              iconName = focused ? 'document-text' : 'document-text-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
          }
          return <Ionicons name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Compass" component={CompassScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Services" component={ServicesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
