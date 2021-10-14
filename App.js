import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro'

export default function App() {
  return (
    <CoordinateProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer >
    </CoordinateProvider>
  );
}



