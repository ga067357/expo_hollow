import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import Home from './components/Home';
import Personagens from './components/Personagens.js';
import Mapa from './components/Mapa.js';
import DetalhesMapa from './components/DetalhesMapa.js';
import DetalhesPersonagem from './components/DetalhesPersonagem.js';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#7d5cff',
        tabBarInactiveTintColor: '#555',
        tabBarStyle: {
          backgroundColor: '#0a0a12',
          paddingBottom: 4,
          borderTopWidth: 1,
          borderTopColor: '#7d5cff',
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Personagens') {
            iconName = 'person-outline';
          } else if (route.name === 'Mapa') {
            iconName = 'map-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Personagens" component={Personagens} />
      <Tab.Screen name="Mapa" component={Mapa} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0a0a12" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#0a0a12' },
            headerTintColor: '#fff',
            contentStyle: { backgroundColor: '#0a0a12' },
          }}>
          <Stack.Screen name="Principal" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name="DetalhesMapa" component={DetalhesMapa} options={{ title: 'Detalhes do mapa' }} />
          <Stack.Screen name="DetalhesPersonagem" component={DetalhesPersonagem} options={{ title: 'Detalhes do personagem' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
