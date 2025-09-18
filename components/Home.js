import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeList from './HomeList';
import Detalhes from './Detalhes';

const Stack = createNativeStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#7d5cff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 22,
          color: '#7d5cff',
          textShadowColor: 'rgba(125, 92, 255, 0.5)',
          textShadowOffset: { width: 0, height: 1 },
          textShadowRadius: 3,
        },
        headerBackground: () => (
          <View style={{ flex: 1, backgroundColor: '#0a0a12' }} />
        ),
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: '#7d5cff'
        }
      }}
    >
      <Stack.Screen
        name="HomeList"
        component={HomeList}
        options={{ title: 'Hallownest' }}
      />
      <Stack.Screen
        name="Detalhes"
        component={Detalhes}
        options={({ route }) => ({ title: route.params.area })}
      />
    </Stack.Navigator>
  );
}