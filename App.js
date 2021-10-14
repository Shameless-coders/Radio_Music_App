import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';


import Home from './components/screens/main/homescreen';
import Music from './components/screens/main/musicscreen';
import Favourite from './components/screens/main/favouritescreen';
import Radio from './components/screens/main/radioscreen';
import Profile from './components/screens/main/profilescreen';
import displayLyrics from './components/screens/main/lyrics';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator 
          initialRouteName="Home" 
          screenOptions={ ({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              const icon = {
                Home: "home",
                Music: "music",
                Favourites: "heart",
                Radio: "radio",
                Profile: "account",
                Lyrics: "book-music"
              };

              return (
                <MaterialCommunityIcons
                  name={icon[route.name]}
                  color={color}
                  size={size}
                />
              );
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#000000",
            tabBarStyle: { backgroundColor: '#A6A7E7' },
          })}
        >
          <Tab.Screen 
            name="Home" 
            component={ Home } 
          />
          <Tab.Screen 
            name="Music" 
            component={ Music }
          />
          <Tab.Screen 
            name="Favourites" 
            component={ Favourite }
          />
          <Tab.Screen 
            name="Radio" 
            component={ Radio }
          />
          <Tab.Screen 
            name="Profile" 
            component={ Profile } 
          />
          <Tab.Screen 
            name="Lyrics" 
            component={ displayLyrics } 
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
}