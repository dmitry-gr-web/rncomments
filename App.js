
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Stack } from 'expo-router';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import LoginScreen from './src/views/LoginScreen';
import { StatusBar } from 'react-native';
import CommentsScreen from './src/views/CommentsScreen';
import AddCommentScreen from './src/views/AddCommentScreen';
import { LightTheme, DarkTheme } from './src/utils/constants';
const StackNavigator = createNativeStackNavigator();

function App() {
  console.log(StatusBar.currentHeight)
  return (
    <>
      <StatusBar backgroundColor="white"/>
      <NavigationContainer theme={LightTheme}>
        <StackNavigator.Navigator initialRouteName="comments" screenOptions={{}}>
          <StackNavigator.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
          <StackNavigator.Screen name="comments" component={CommentsScreen} options={{ headerShown: false }} />
          <StackNavigator.Screen name="addComment" component={AddCommentScreen} options={{ headerShown: false }} />
        </StackNavigator.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;





